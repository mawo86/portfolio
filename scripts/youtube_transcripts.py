#!/usr/bin/env python3
"""
Lädt YouTube-Untertitel (keine Videos) der letzten N Monate für eine Liste von
Kanälen via yt-dlp herunter, wandelt sie in sauberen Klartext um und fasst sie
in einer Sammel-Datei pro Kanal sowie einer Gesamt-Datei zusammen.

Voraussetzung:
    brew install yt-dlp
    (oder: pip install -U yt-dlp)

Verwendung:
    python3 scripts/youtube_transcripts.py

Konfiguration siehe CHANNELS und MONTHS_BACK unten.
"""

import json
import re
import shutil
import subprocess
import sys
from datetime import datetime, timedelta
from pathlib import Path

# --- Konfiguration -----------------------------------------------------

CHANNELS = {
    "Silicon Valley Girl": "https://www.youtube.com/@siliconvalleygirl/videos",
    "Alex Hormozi": "https://www.youtube.com/@AlexHormozi/videos",
    "Dan Martell": "https://www.youtube.com/@DanMartell/videos",
    "Chris Donnelly": "https://www.youtube.com/@chrisdonnellyPodcast/videos",
    "Everlast AI": "https://www.youtube.com/@EverlastAI/videos",
}

MONTHS_BACK = 6
LANG = "en"  # Sprache der Untertitel, z.B. "en" oder "de"

OUTPUT_DIR = Path(__file__).resolve().parent.parent / "reference" / "youtube-transcripts"
RAW_DIR = OUTPUT_DIR / "_raw"

# --- Hilfsfunktionen -----------------------------------------------------


def check_yt_dlp() -> None:
    if not shutil.which("yt-dlp"):
        sys.exit(
            "yt-dlp wurde nicht gefunden. Bitte zuerst installieren:\n"
            "  brew install yt-dlp\n"
            "oder:\n"
            "  pip install -U yt-dlp"
        )


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", name.strip().lower()).strip("-")
    return slug


def date_after() -> str:
    cutoff = datetime.now() - timedelta(days=MONTHS_BACK * 30)
    return cutoff.strftime("%Y%m%d")


def vtt_to_text(vtt_path: Path) -> str:
    """Wandelt eine .vtt-Untertiteldatei in reinen Fließtext um (keine
    Zeitstempel, keine Duplikate durch überlappende Auto-Caption-Zeilen)."""
    lines = vtt_path.read_text(encoding="utf-8", errors="ignore").splitlines()
    seen = set()
    out = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if line.startswith("WEBVTT") or line.startswith("Kind:") or line.startswith("Language:"):
            continue
        if "-->" in line:
            continue
        if re.match(r"^\d+$", line):
            continue
        # Inline-Tags wie <00:00:01.000><c> entfernen
        clean = re.sub(r"<[^>]+>", "", line)
        clean = clean.strip()
        if not clean or clean in seen:
            continue
        seen.add(clean)
        out.append(clean)
    return " ".join(out)


def fetch_video_ids(channel_url: str) -> list[dict]:
    """Holt schnell nur ID + Titel aller Videos eines Kanals (neueste zuerst),
    ohne Upload-Datum — --flat-playlist liefert dafür kein Datum."""
    cmd = ["yt-dlp", "--flat-playlist", "--dump-json", channel_url]
    result = subprocess.run(cmd, capture_output=True, text=True)
    videos = []
    for line in result.stdout.splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            videos.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return videos


def fetch_channel_metadata(channel_url: str, after: str) -> list[dict]:
    """Holt Video-IDs eines Kanals und filtert sie anhand des tatsächlichen
    Upload-Datums (einzeln abgefragt, da --flat-playlist kein Datum liefert
    und --dateafter dort deshalb nicht greift). Kanäle sind chronologisch
    neueste-zuerst sortiert, daher wird nach den ersten N aufeinanderfolgenden
    zu alten Videos abgebrochen."""
    candidates = fetch_video_ids(channel_url)
    cutoff = datetime.strptime(after, "%Y%m%d")

    matched = []
    consecutive_too_old = 0
    stop_after_n_old = 5

    for video in candidates:
        video_id = video.get("id")
        if not video_id:
            continue
        video_url = f"https://www.youtube.com/watch?v={video_id}"
        probe = subprocess.run(
            ["yt-dlp", "--simulate", "--print", "%(upload_date)s", video_url],
            capture_output=True,
            text=True,
        )
        upload_date_str = probe.stdout.strip()
        if not re.match(r"^\d{8}$", upload_date_str):
            continue  # z.B. Livestream/Premiere ohne festes Datum -> überspringen

        upload_date = datetime.strptime(upload_date_str, "%Y%m%d")
        if upload_date >= cutoff:
            video["upload_date"] = upload_date_str
            matched.append(video)
            consecutive_too_old = 0
        else:
            consecutive_too_old += 1
            if consecutive_too_old >= stop_after_n_old:
                break

    return matched


def download_subs(video_url: str, dest_dir: Path) -> Path | None:
    """Lädt Untertitel (zuerst manuelle, sonst Auto-Untertitel) für ein
    Video herunter. Gibt den Pfad zur .vtt-Datei zurück, falls vorhanden."""
    dest_dir.mkdir(parents=True, exist_ok=True)
    cmd = [
        "yt-dlp",
        "--skip-download",
        "--write-sub",
        "--write-auto-sub",
        "--sub-lang",
        LANG,
        "--sub-format",
        "vtt",
        "-o",
        "%(id)s.%(ext)s",
        video_url,
    ]
    subprocess.run(cmd, cwd=dest_dir, capture_output=True, text=True)
    matches = list(dest_dir.glob("*.vtt"))
    return matches[0] if matches else None


# --- Hauptlauf -----------------------------------------------------


def main() -> None:
    check_yt_dlp()
    after = date_after()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    RAW_DIR.mkdir(parents=True, exist_ok=True)

    all_channels_summary = []

    for channel_name, channel_url in CHANNELS.items():
        print(f"\n=== {channel_name} ===")
        videos = fetch_channel_metadata(channel_url, after)
        print(f"{len(videos)} Video(s) seit {after} gefunden.")

        channel_slug = slugify(channel_name)
        channel_raw_dir = RAW_DIR / channel_slug
        channel_out_path = OUTPUT_DIR / f"{channel_slug}.md"

        channel_lines = [f"# {channel_name} — Transkripte (letzte {MONTHS_BACK} Monate)\n"]

        for video in videos:
            video_id = video.get("id")
            title = video.get("title", "Unbekannter Titel")
            upload_date = video.get("upload_date", "")
            video_url = f"https://www.youtube.com/watch?v={video_id}"

            print(f"  - {title} ({video_id})")
            vtt_dir = channel_raw_dir / video_id
            vtt_path = download_subs(video_url, vtt_dir)

            channel_lines.append(f"## {title}")
            channel_lines.append(f"- URL: {video_url}")
            if upload_date:
                channel_lines.append(f"- Datum: {upload_date}")
            channel_lines.append("")

            if vtt_path and vtt_path.exists():
                text = vtt_to_text(vtt_path)
                channel_lines.append(text if text else "_(Untertitel leer)_")
            else:
                channel_lines.append("_(Kein Transkript verfügbar für dieses Video)_")
            channel_lines.append("\n---\n")

        channel_out_path.write_text("\n".join(channel_lines), encoding="utf-8")
        print(f"→ gespeichert: {channel_out_path}")
        all_channels_summary.append((channel_name, channel_out_path, len(videos)))

    # Gesamt-Datei zusammenbauen
    combined_path = OUTPUT_DIR / "alle-transkripte.md"
    combined_lines = [
        "# Gesammelte YouTube-Transkripte\n",
        f"Zeitraum: letzte {MONTHS_BACK} Monate (Stand: {datetime.now().strftime('%Y-%m-%d')})\n",
    ]
    for channel_name, path, count in all_channels_summary:
        combined_lines.append(f"- **{channel_name}**: {count} Video(s) — siehe `{path.name}`")
    combined_lines.append("\n---\n")
    for _, path, _ in all_channels_summary:
        combined_lines.append(path.read_text(encoding="utf-8"))
        combined_lines.append("\n")

    combined_path.write_text("\n".join(combined_lines), encoding="utf-8")
    print(f"\nFertig. Gesamt-Datei: {combined_path}")


if __name__ == "__main__":
    main()
