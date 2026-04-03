# CLAUDE.md

Diese Datei gibt Claude Code (claude.ai/code) Anweisungen für die Arbeit in diesem Repository.

---

## Was das hier ist

Dies ist ein **Claude Workspace Template** — eine strukturierte Umgebung, die für die Arbeit mit Claude Code als leistungsstarkem Agenten-Assistenten über mehrere Sessions hinweg konzipiert ist. Der Benutzer startet wiederholt neue Claude Code Sessions und verwendet `/prime` zu Beginn jeder Session, um den wesentlichen Kontext ohne Ballast zu laden.

**Diese Datei (CLAUDE.md) ist das Fundament.** Sie wird automatisch am Anfang jeder Session geladen. Halte sie aktuell — sie ist die Single Source of Truth dafür, wie Claude diesen Workspace verstehen und darin arbeiten soll.

---

## Die Claude-User-Beziehung

Claude arbeitet als **Agenten-Assistent** mit Zugriff auf die Workspace-Ordner, Kontext-Dateien, Commands und Outputs. Die Beziehung ist:

- **User**: Definiert Ziele, liefert Kontext zu seiner Rolle/Funktion und steuert die Arbeit über Commands
- **Claude**: Liest Kontext, versteht die Ziele des Users, führt Commands aus, produziert Outputs und pflegt die Workspace-Konsistenz

Claude sollte sich immer über `/prime` am Session-Start orientieren, dann mit vollem Bewusstsein dafür handeln, wer der User ist, was er erreichen möchte und wie dieser Workspace das unterstützt.

---

## Workspace-Struktur

```
.
├── CLAUDE.md              # Diese Datei — Kern-Kontext, immer geladen
├── shell-aliases.md       # Shell-Aliase für den Workspace
├── .claude/
│   ├── commands/          # Slash-Commands, die Claude ausführen kann
│   │   ├── prime.md       # /prime — Session-Initialisierung
│   │   ├── create-plan.md # /create-plan — Implementierungspläne erstellen
│   │   ├── implement.md   # /implement — Pläne umsetzen
│   │   └── shutdown.md    # /shutdown — Session sauber beenden
│   └── skills/            # Installierte Skills
├── context/               # Hintergrund-Kontext über den User und das Projekt
│   ├── personal-info.md   # Wer Marlon ist, Rolle, Ziele
│   ├── business-info.md   # Busche Cloud — Marke und Angebot
│   ├── strategy.md        # Aktuelle Prioritäten und Erfolgsmetriken
│   └── current-data.md    # Metriken und Projektstatus
├── plans/                 # Implementierungspläne erstellt von /create-plan
├── outputs/               # Arbeitsergebnisse und Deliverables
├── reference/             # Logo, Icons und Referenzmaterialien
│   ├── logo.png           # Busche Cloud Logo (weißer Hintergrund)
│   ├── logo.jpg           # Busche Cloud Logo (dunkler Hintergrund, Original)
│   ├── icon_transparent_bg.png
│   └── icon_white_bg.jpg
├── scripts/               # Automatisierungsskripte (falls zutreffend)
└── website/               # Astro-Portfolio-Website (busche.cloud)
    ├── src/
    │   ├── pages/         # index.astro, blog/, impressum, datenschutz
    │   ├── content/       # blog/ (Markdown-Artikel)
    │   ├── layouts/       # Layout.astro, BlogLayout.astro
    │   └── components/    # Header.astro, Footer.astro
    └── public/            # Logo, Icons, CNAME (nach Deployment)
```

**Verzeichnisse:**

| Verzeichnis  | Zweck                                                                                   |
| ------------ | --------------------------------------------------------------------------------------- |
| `context/`   | Wer der User ist, seine Rolle, aktuelle Prioritäten, Strategien. Gelesen von `/prime`. |
| `plans/`     | Detaillierte Implementierungspläne. Erstellt mit `/create-plan`, umgesetzt mit `/implement`. |
| `outputs/`   | Deliverables, Analysen, Reports und Arbeitsergebnisse.                                 |
| `reference/` | Hilfreiche Dokumentation, Vorlagen und Patterns für verschiedene Workflows.            |
| `scripts/`   | Automatisierungs- und Tooling-Skripte.                                                 |

---

## Commands

### /prime

**Zweck:** Neue Session mit vollem Kontext-Bewusstsein initialisieren.

Am Anfang jeder Session ausführen. Claude wird:

1. CLAUDE.md und Kontext-Dateien lesen
2. Verständnis von User, Workspace und Zielen zusammenfassen
3. Bereitschaft zur Unterstützung bestätigen

### /create-plan [anforderung]

**Zweck:** Detaillierten Implementierungsplan erstellen, bevor Änderungen gemacht werden.

Verwenden beim Hinzufügen neuer Funktionalität, Commands, Skripte oder bei strukturellen Änderungen. Erzeugt ein gründliches Plan-Dokument in `plans/`, das Kontext, Begründung und schrittweise Aufgaben erfasst.

Beispiel: `/create-plan Wettbewerbs-Analyse-Command hinzufügen`

### /implement [plan-pfad]

**Zweck:** Einen mit /create-plan erstellten Plan umsetzen.

Liest den Plan, führt jeden Schritt der Reihe nach aus, validiert die Arbeit und aktualisiert den Plan-Status.

Beispiel: `/implement plans/2026-01-28-wettbewerbs-analyse-command.md`

---

## Kritische Anweisung: Diese Datei pflegen

**Wann immer Claude Änderungen am Workspace macht, MUSS Claude prüfen, ob CLAUDE.md aktualisiert werden muss.**

Nach jeder Änderung — ob Commands, Skripte, Workflows oder Strukturänderungen — frage:

1. Fügt diese Änderung neue Funktionalität hinzu, die Benutzer kennen müssen?
2. Ändert sie die oben dokumentierte Workspace-Struktur?
3. Sollte ein neuer Command aufgelistet werden?
4. Braucht context/ neue Dateien dafür?

Falls ja, aktualisiere die entsprechenden Abschnitte. Diese Datei muss immer den aktuellen Zustand des Workspace widerspiegeln, damit zukünftige Sessions genauen Kontext haben.

**Beispiele für Änderungen, die CLAUDE.md-Updates erfordern:**

- Neuen Slash-Command hinzufügen → im Commands-Abschnitt ergänzen
- Neuen Output-Typ erstellen → in Workspace-Struktur dokumentieren oder Abschnitt erstellen
- Skript hinzufügen → Zweck und Verwendung dokumentieren
- Workflow-Patterns ändern → entsprechende Dokumentation aktualisieren

---

## Aktives Projekt: busche.cloud Website

Die Astro-Portfolio-Website befindet sich in `website/`. Lokale Entwicklung:

```bash
cd website
npm run dev   # Dev-Server auf http://localhost:4321
npm run build # Produktions-Build
```

**Live unter:** https://busche.cloud

**Sektionen:** Hero · Über mich · Leistungen · Tools · Projekte · Eigene Produkte · Blog · Kontakt

**Eigene Produkte:** Cookloop (cookloop.vercel.app) und DartsIQ (dartsiq.vercel.app) — beide mit App-Link, Live-Status und Tech-Stack

**Logo:** Inline-SVG in Header und Footer (kein Bilddatei-Request) — Icon mit blauem Gradient-Hintergrund + "BUSCHE Cloud" Text

**Erledigte Pläne:**
- `plans/2026-03-24-website-deployment-und-content.md` — Deployment + Inhalte ✓
- `plans/2026-03-25-linkedin-optimierung-website-erweiterung.md` — LinkedIn + Tools/Referenzen ✓
- `plans/2026-03-31-blog-portfolio-seite-nyt-design.md` — Blog-Index NYT-Redesign ✓
- `plans/2026-04-03-sichtbarkeit-organisches-wachstum-affiliates.md` — SEO, Newsletter, Affiliates, Content-Pipeline ✓

**Blog:** 1 Artikel live, 10 Drafts zum Review. Blog-Index-Seite (`/blog`) hat NYT-inspiriertes Editorial-Design: Hero-Block, Featured-Artikel, 2-Spalten-Grid, interaktiver Tag-Filter. Artikel-Layout (`BlogLayout.astro`) mit Lesezeit, JSON-LD, Prev/Next-Navigation, Newsletter-CTA und Autor-Karte.

**Blog-Artikel (live):**
- `ki-automatisierung-mittelstand` — KI-Automatisierung im Mittelstand

**Blog-Drafts (draft: true, ausstehend Review):**
- `chatgpt-vs-claude-unternehmen` — ChatGPT vs Claude Vergleich
- `ki-prozesse-identifizieren` — 5 Zeichen für KI-geeignete Prozesse
- `mein-ki-toolkit` — Persönliches Tool-Setup
- `ki-strategie-erste-schritte` — KI-Strategie Einsteigerguide
- `sap-ki-integration` — SAP + KI Praxis
- `idee-validieren-mit-ki` — Idee in 2h mit KI prüfen
- `mein-ki-os` — Persönliches KI-Betriebssystem mit Claude Code
- `prompts-die-funktionieren` — 5 Prompts aus dem echten Alltag
- `n8n-erster-workflow` — n8n Einstieg Schritt-für-Schritt
- `app-bauen-ohne-programmierer` — App gebaut ohne Entwickler-Background

**Neue Seiten & Features:**
- `/tools` — Empfohlene Tools mit Affiliate-Links (n8n, Zapier, IONOS, Hostinger, Notion, Canva)
- `/rss.xml` — RSS-Feed für Blog-Abonnenten
- Newsletter-Signup via Buttondown (Blog-Index, Artikel, ggf. Startseite)
- JSON-LD strukturierte Daten auf allen Blog-Artikeln
- `robots.txt` — Suchmaschinen + Social erlaubt, KI-Scraper blockiert

**Content-Strategie:** `outputs/content-strategie.md` — Themen-Cluster, Keywords, Veröffentlichungsrhythmus (2x/Monat)

**LinkedIn-Optimierung:** `outputs/linkedin-optimierung.md` — fertige Texte zum Copy-Paste

**Noch ausstehend:**
- LinkedIn-Profil mit Texten aus `outputs/linkedin-optimierung.md` aktualisieren
- Buttondown-Account erstellen und Username in `website/src/components/NewsletterSignup.astro` eintragen
- Affiliate-Programme beantragen (n8n, Zapier, IONOS, Hostinger, Notion, Canva) und Links in `website/src/pages/tools.astro` ersetzen
- ~~Google Search Console einrichten und Sitemap einreichen~~ ✓ (erledigt 2026-04-03)
- 10 Blog-Drafts reviewen und einzeln mit `draft: false` freigeben
- OG-Images pro Blog-Artikel erstellen

---

## Für Benutzer, die dieses Template herunterladen

Um diesen Workspace an deine eigenen Bedürfnisse anzupassen, fülle deine Kontext-Dokumente in `context/` aus und passe sie nach Bedarf an. Verwende dann `/create-plan` zum Planen und `/implement` zum Umsetzen struktureller Änderungen. So bleibt alles synchron — besonders CLAUDE.md, die immer den aktuellen Zustand des Workspace widerspiegeln muss.

---

## Session-Workflow

1. **Start**: `/prime` ausführen, um Kontext zu laden
2. **Arbeiten**: Commands verwenden oder Claude direkt mit Aufgaben beauftragen
3. **Änderungen planen**: `/create-plan` vor größeren Ergänzungen verwenden
4. **Umsetzen**: `/implement` zum Ausführen von Plänen verwenden
5. **Pflegen**: Claude aktualisiert CLAUDE.md und context/ während sich der Workspace weiterentwickelt

---

## Notizen

- Kontext minimal aber ausreichend halten — kein Bloat
- Pläne in `plans/` mit datierten Dateinamen für die Historie
- Outputs nach Typ/Zweck in `outputs/` organisiert
- Referenzmaterialien in `reference/` zur Wiederverwendung

---

## KI OS Integration

Dieser Workspace ist mit dem **KI OS v2** verbunden (Neon PostgreSQL, Schema: `ki_os`).
Der MCP Server `ki-os` ist global in `~/.claude/settings.json` konfiguriert und in jeder Session verfügbar.

**Projekt-ID:** `portfolio`

### Verfügbare Tools

| Tool | Wann nutzen |
|---|---|
| `ki_os_create_task` | Neue strategische Aufgabe anlegen (level="strategic") oder technische Detail-Task (level="tactical") |
| `ki_os_complete_task` | Task nach Erledigung schließen |
| `ki_os_list_tasks` | Offene Tasks für dieses Projekt anzeigen |
| `ki_os_capture` | Ideen, Erkenntnisse, Blocker festhalten |
| `ki_os_status` | Gesamtstatus aller Projekte |

### Regeln

- Nach größeren Erledigungen: `/solve` aufrufen oder `ki_os_complete_task` direkt
- Strategische Tasks (Wochenprioritäten): `level="strategic"` → erscheinen im ki-os Dashboard
- Technische Micro-Tasks: `level="tactical"` → bleiben im Projekt-Kontext, kein Dashboard-Noise
- Neue Erkenntnisse oder Blocker: `ki_os_capture(text)` — landen in der Inbox
- Projekt-Parameter immer mitgeben: `project="portfolio"`
