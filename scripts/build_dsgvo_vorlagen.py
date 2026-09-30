#!/usr/bin/env python3
"""Baut aus den Markdown-Vorlagen in outputs/vorlagen/dsgvo-check/ ausfüllbare Word-Dateien.

Quelle bleibt das Markdown. Nach jeder Änderung dort neu bauen:

    python3 scripts/build_dsgvo_vorlagen.py

Ergebnis: outputs/docx/dsgvo-check/01-umfrage.docx bis 07-dsfa-bedarfspruefung.docx
Voraussetzung: pandoc (brew install pandoc). Keine weiteren Pakete.

Was das Skript tut:
- [PLATZHALTER] werden blau hinterlegt, Zeilen mit ↳ gelb (Ausfüllhinweise, vor Weitergabe löschen)
- Der interne Anhang der Werkzeug-Freigabeliste (ab der zweiten H1) kommt nicht in die Word-Datei
- Tabellen bekommen Rahmen und Spaltenbreiten nach Inhalt, breite Dokumente Querformat
- Schrift Arial, damit es bei jedem Kunden gleich aussieht
"""
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "outputs" / "vorlagen" / "dsgvo-check"
OUT = ROOT / "outputs" / "docx" / "dsgvo-check"

# Datei -> Querformat?
DOCS = {
    "01-umfrage.md": False,
    "02-datenklassen-matrix.md": True,
    "03-werkzeug-freigabeliste.md": True,
    "04-vertragscheckliste.md": False,
    "05-einseiter-team.md": False,
    "06-verarbeitungsverzeichnis-eintrag.md": False,
    "07-dsfa-bedarfspruefung.md": True,
}

# Eckige Klammern, die wörtlich so stehen bleiben sollen (Beispiele für das Team)
LITERAL = {"Kundin", "Firma A", "Auftrag", "Betrag"}

AMPEL = {"Grün": "C4EED0", "Gelb": "FEEFC3", "Rot": "FAD2CF"}

HINWEIS_KOPF = (
    "Ausfüllhinweis: Blau markierte [Felder] ersetzen, leere Tabellenzellen ausfüllen. "
    "Gelbe Zeilen mit ↳ sind Hinweise und werden vor der Weitergabe gelöscht."
)


# ---------- Markdown vorbereiten ----------

def mark_placeholders(line: str) -> str:
    parts = line.split("`")
    for i in range(0, len(parts), 2):  # nur außerhalb von Code-Spans
        def repl(m):
            inner = m.group(1)
            if not inner.strip() or inner in LITERAL:
                return m.group(0)
            return '[\\[' + inner + '\\]]{custom-style="Platzhalter"}'
        parts[i] = re.sub(r"(?<!\\)\[([^\]\n]+)\](?!\()", repl, parts[i])
    return "`".join(parts)


def split_row(line: str):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def size_tables(lines):
    """Trennzeile jeder Tabelle so schreiben, dass pandoc die Spaltenbreiten nach Inhalt verteilt."""
    out, i = [], 0
    while i < len(lines):
        if lines[i].lstrip().startswith("|") and i + 1 < len(lines) and re.match(r"^\s*\|[\s:|-]+\|\s*$", lines[i + 1]):
            j = i
            while j < len(lines) and lines[j].lstrip().startswith("|"):
                j += 1
            rows = [split_row(l) for k, l in enumerate(lines[i:j]) if k != 1]
            ncol = len(rows[0])
            weights = []
            for c in range(ncol):
                cells = [r[c] if c < len(r) else "" for r in rows]
                body = [len(x) for x in cells[1:]]
                longest = max([len(cells[0])] + body)
                if body and max(body) == 0:  # Spalte zum Ausfüllen
                    longest = max(len(cells[0]), 16)
                # kein Wort der Kopfzeile soll umbrechen
                wort = max(len(w) for w in re.split(r"[\s/]+", cells[0]) or [""])
                weights.append(min(max(longest, wort + 5, 10), 48))
            out.append(lines[i])
            out.append("|" + "|".join("-" * w for w in weights) + "|")
            out.extend(lines[i + 2:j])
            i = j
        else:
            out.append(lines[i])
            i += 1
    return out


def prepare(md: str) -> str:
    lines = md.split("\n")
    # internen Anhang abschneiden (zweite H1)
    h1 = [k for k, l in enumerate(lines) if l.startswith("# ")]
    if len(h1) > 1:
        lines = lines[: h1[1]]
    # Hinweis direkt unter dem Titel
    lines.insert(h1[0] + 1, "")
    lines.insert(h1[0] + 2, "↳ " + HINWEIS_KOPF)
    lines = size_tables(lines)
    res = []
    for l in lines:
        for emoji, wort in (("🟢", "Grün"), ("🟡", "Gelb"), ("🔴", "Rot")):
            l = l.replace(emoji, wort)
        l = l.replace("( )", "☐")
        note = l.startswith("↳ ")
        l = mark_placeholders(l)
        if note:
            res += ["", '::: {custom-style="Hinweis"}', l, ":::", ""]
        else:
            res.append(l)
    return "\n".join(res)


# ---------- Word-Vorlage (reference.docx) erzeugen ----------

ARIAL = '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:eastAsia="Arial" w:cs="Arial" />'

TABLE_STYLE = """<w:style w:type="table" w:default="1" w:styleId="Table">
    <w:name w:val="Table" />
    <w:basedOn w:val="TableNormal" />
    <w:qFormat />
    <w:tblPr>
      <w:tblInd w:w="0" w:type="dxa" />
      <w:tblBorders>
        <w:top w:val="single" w:sz="4" w:space="0" w:color="C4C7C5" />
        <w:left w:val="single" w:sz="4" w:space="0" w:color="C4C7C5" />
        <w:bottom w:val="single" w:sz="4" w:space="0" w:color="C4C7C5" />
        <w:right w:val="single" w:sz="4" w:space="0" w:color="C4C7C5" />
        <w:insideH w:val="single" w:sz="4" w:space="0" w:color="C4C7C5" />
        <w:insideV w:val="single" w:sz="4" w:space="0" w:color="C4C7C5" />
      </w:tblBorders>
      <w:tblCellMar>
        <w:top w:w="70" w:type="dxa" />
        <w:left w:w="100" w:type="dxa" />
        <w:bottom w:w="70" w:type="dxa" />
        <w:right w:w="100" w:type="dxa" />
      </w:tblCellMar>
    </w:tblPr>
    <w:tblStylePr w:type="firstRow">
      <w:rPr><w:b /></w:rPr>
      <w:tcPr>
        <w:shd w:val="clear" w:color="auto" w:fill="F0F4F9" />
        <w:vAlign w:val="bottom" />
      </w:tcPr>
    </w:tblStylePr>
  </w:style>"""

EXTRA_STYLES = """<w:style w:type="paragraph" w:customStyle="1" w:styleId="Hinweis">
    <w:name w:val="Hinweis" />
    <w:basedOn w:val="Normal" />
    <w:qFormat />
    <w:pPr>
      <w:pBdr>
        <w:top w:val="single" w:sz="4" w:space="4" w:color="FEEFC3" />
        <w:left w:val="single" w:sz="4" w:space="6" w:color="FEEFC3" />
        <w:bottom w:val="single" w:sz="4" w:space="4" w:color="FEEFC3" />
        <w:right w:val="single" w:sz="4" w:space="6" w:color="FEEFC3" />
      </w:pBdr>
      <w:shd w:val="clear" w:color="auto" w:fill="FEEFC3" />
      <w:spacing w:before="80" w:after="80" />
      <w:ind w:left="140" w:right="140" />
    </w:pPr>
    <w:rPr>
      <w:i />
      <w:color w:val="5F3E00" />
      <w:sz w:val="18" />
      <w:szCs w:val="18" />
    </w:rPr>
  </w:style>
  <w:style w:type="character" w:customStyle="1" w:styleId="Platzhalter">
    <w:name w:val="Platzhalter" />
    <w:qFormat />
    <w:rPr>
      <w:color w:val="041E49" />
      <w:shd w:val="clear" w:color="auto" w:fill="D3E3FD" />
    </w:rPr>
  </w:style>
</w:styles>"""


def style_block(styles: str, style_id: str) -> str:
    return re.search(r'<w:style [^>]*w:styleId="%s".*?</w:style>' % style_id, styles, re.S).group(0)


def make_reference(tmp: Path, landscape: bool) -> Path:
    name = "ref-quer" if landscape else "ref-hoch"
    raw = tmp / (name + "-roh.docx")
    with open(raw, "wb") as f:
        subprocess.run(["pandoc", "--print-default-data-file", "reference.docx"], stdout=f, check=True)
    files = {}
    with zipfile.ZipFile(raw) as z:
        for n in z.namelist():
            files[n] = z.read(n)

    s = files["word/styles.xml"].decode("utf-8")
    s = re.sub(r"<w:rFonts[^>]*Theme[^>]*/>", ARIAL, s)
    s = re.sub(r'<w:color w:val="0F4761"[^>]*/>', '<w:color w:val="0B57D0" />', s)
    s = s.replace('<w:lang w:val="en-US" w:eastAsia="zh-CN" w:bidi="ar-SA" />', '<w:lang w:val="de-DE" w:eastAsia="de-DE" w:bidi="ar-SA" />')
    # Grundschrift 10,5 pt
    dd = re.search(r"<w:docDefaults>.*?</w:docDefaults>", s, re.S).group(0)
    dd2 = dd.replace('<w:sz w:val="24" />', '<w:sz w:val="21" />').replace('<w:szCs w:val="24" />', '<w:szCs w:val="21" />').replace('w:after="200"', 'w:after="120"')
    s = s.replace(dd, dd2)
    # Überschriften: fett, kleiner
    for sid, size, before in (("Heading1", 34, 0), ("Heading2", 25, 320), ("Heading3", 22, 240)):
        blk = style_block(s, sid)
        new = re.sub(r'<w:sz w:val="\d+" />', '<w:sz w:val="%d" />' % size, blk)
        new = re.sub(r'<w:szCs w:val="\d+" />', '<w:szCs w:val="%d" />' % size, new)
        new = re.sub(r'w:before="\d+"', 'w:before="%d"' % before, new, count=1)
        new = new.replace("<w:rPr>", "<w:rPr><w:b />", 1)
        s = s.replace(blk, new)
    # Fließtext enger, Tabellentext kleiner
    blk = style_block(s, "BodyText")
    s = s.replace(blk, blk.replace('w:before="180" w:after="180"', 'w:before="80" w:after="100"'))
    blk = style_block(s, "Compact")
    s = s.replace(blk, blk.replace("</w:pPr>", '</w:pPr><w:rPr><w:sz w:val="19" /><w:szCs w:val="19" /></w:rPr>'))
    # Zitat (E-Mail-Vorlage) als blaue Tonfläche
    blk = style_block(s, "BlockText")
    s = s.replace(blk, blk.replace('<w:ind w:firstLine="0" w:left="480" w:right="480" />',
                                   '<w:shd w:val="clear" w:color="auto" w:fill="EEF3FD" /><w:ind w:firstLine="0" w:left="240" w:right="240" />'))
    s = s.replace(style_block(s, "Table"), TABLE_STYLE)
    s = s.replace("</w:styles>", EXTRA_STYLES)
    files["word/styles.xml"] = s.encode("utf-8")

    d = files["word/document.xml"].decode("utf-8")
    size = '<w:pgSz w:w="16838" w:h="11906" w:orient="landscape" />' if landscape else '<w:pgSz w:w="11906" w:h="16838" />'
    sect = "<w:sectPr>" + size + '<w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="567" w:footer="567" w:gutter="0" /></w:sectPr>'
    d = re.sub(r"<w:sectPr>.*?</w:sectPr>", sect, d, flags=re.S)
    files["word/document.xml"] = d.encode("utf-8")

    ref = tmp / (name + ".docx")
    with zipfile.ZipFile(ref, "w", zipfile.ZIP_DEFLATED) as z:
        for n, data in files.items():
            z.writestr(n, data)
    return ref


# ---------- Nachbearbeitung ----------

def colour_ampel(docx: Path):
    """Zellen, die nur Grün/Gelb/Rot enthalten, farbig hinterlegen (Einseiter)."""
    with zipfile.ZipFile(docx) as z:
        files = {n: z.read(n) for n in z.namelist()}
    d = files["word/document.xml"].decode("utf-8")

    def repl(m):
        cell = m.group(0)
        text = "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", cell)).strip()
        if text not in AMPEL:
            return cell
        shd = '<w:shd w:val="clear" w:color="auto" w:fill="%s" />' % AMPEL[text]
        if "</w:tcPr>" in cell:
            return cell.replace("</w:tcPr>", shd + "</w:tcPr>", 1)
        return cell.replace("<w:tc>", "<w:tc><w:tcPr>" + shd + "</w:tcPr>", 1)

    d2 = re.sub(r"<w:tc>.*?</w:tc>", repl, d, flags=re.S)
    if d2 != d:
        files["word/document.xml"] = d2.encode("utf-8")
        with zipfile.ZipFile(docx, "w", zipfile.ZIP_DEFLATED) as z:
            for n, data in files.items():
                z.writestr(n, data)


def main():
    if not shutil.which("pandoc"):
        sys.exit("pandoc fehlt: brew install pandoc")
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as t:
        tmp = Path(t)
        refs = {False: make_reference(tmp, False), True: make_reference(tmp, True)}
        for name, quer in DOCS.items():
            md = prepare((SRC / name).read_text(encoding="utf-8"))
            src = tmp / name
            src.write_text(md, encoding="utf-8")
            target = OUT / name.replace(".md", ".docx")
            subprocess.run(
                ["pandoc", str(src), "-f", "markdown", "-t", "docx", "--columns=20",
                 "--reference-doc", str(refs[quer]), "-M", "lang=de-DE", "-o", str(target)],
                check=True,
            )
            colour_ampel(target)
            print("ok", target.relative_to(ROOT))


if __name__ == "__main__":
    main()
