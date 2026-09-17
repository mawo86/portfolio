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

**Browser-Preview:** `.claude/launch.json` (Projekt-Root) startet den Dev-Server mit `npm run dev --prefix website` auf Port 4321. In Claude Code via `preview_start` mit Name `website-dev`.

**Design-System (Rebranding "Cinematic Dark", 2026-09-17):**
- Grund: warmes Anthrazit (`ink-900` #121110, `ink-950` #0B0A09, Flächen `ink-800`), kein Navy mehr
- Text: warmes Off-White (`bone-50` #F5F1EA, `bone-200`, `bone-400`, `bone-600`)
- Akzent: Amber/Kupfer (`brand-*`, Kern #E08A1E). Eine Signalfarbe, sparsam. Kein Blau.
- Tailwind `gray` ist auf eine warme Skala überschrieben, damit ältere gray-Klassen (Impressum, Datenschutz) automatisch passen
- Display-Font: Bricolage Grotesque (variable, self-hosted in `public/fonts/`, Klasse `font-display`), Body: Inter, Mono: JetBrains Mono
- Filmkorn-Overlay per `body::before` in `Layout.astro`, Buttons als Pills (`rounded-full`, primär `bg-bone-50 text-ink-950`, Hover Amber)
- Keine Glas-Karten, keine Blur-Blobs, keine Gradient-Headlines mehr. Sektionen mit Linien und großer Typo, Karten nur wo nötig (`bg-ink-800`)
- Tokens in `website/tailwind.config.mjs`

**Higgsfield-Visuals:** Die Seite sucht zur Build-Zeit nach Dateien in `website/public/media/` (`src/lib/media.ts` → `hasMedia()`). Fehlt eine Datei, rendert `MediaImage.astro` bzw. der Hero einen ruhigen Verlauf. Slots: `hero.mp4`/`hero.webm`/`hero-poster.jpg` (Startseite), `about.jpg` (Über mich, am besten echtes Porträt), `paket-check.jpg`/`paket-pilot.jpg`/`paket-begleitung.jpg`/`paket-tagessatz.jpg` (`/leistungen`), `kontakt.jpg` (Kontakt-Hintergrund). Alle Prompts, Formate und der Style-Block stehen in `reference/higgsfield-briefing.md`. Aktuell liegt noch kein Asset im Ordner.

**Sektionen (Startseite):** Hero (Video-Slot, Proof-Leiste) · Über mich (Bild-Slot + Text) · Leistungen (nummerierte Stufen 01–03 + Tagessatz-Hinweis) · So läuft ein Projekt (Link zu `/case-studies`) · Newsletter · Werkzeuge · Eigene Produkte · Blog (Listenansicht, 4 Artikel) · Kontakt (Split: Text + Formular, Bild-Slot)

**Eigene Unterseiten:** `/leistungen` (Pakete & Preise, alternierend Bild/Text) · `/case-studies` (im Menü "Projekte") · `/tools` · `/blog` · `/kontakt` (Redirect)

**Eigene Produkte:** Cookloop (cookloop.vercel.app) und DartsIQ (dartsiq.vercel.app) — beide mit App-Link, Live-Status und Tech-Stack

**Logo:** Neue Wortmarke in `src/components/Logo.astro` (Inline-SVG): geometrisches Monolinien-B auf Amber-Kachel + "Busche Cloud" in Bricolage Grotesque. Header und Footer nutzen die Komponente. Favicon und App-Icons sind aus derselben Marke gerastert: `public/favicon.svg` (Quelle), `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` (Marke auf Anthrazit mit Safe-Zone). Die alte Wolke liegt nur noch archiviert in `reference/`.

**Erledigte Pläne:**
- `plans/2026-03-24-website-deployment-und-content.md` — Deployment + Inhalte ✓
- `plans/2026-03-25-linkedin-optimierung-website-erweiterung.md` — LinkedIn + Tools/Referenzen ✓
- `plans/2026-03-31-blog-portfolio-seite-nyt-design.md` — Blog-Index NYT-Redesign ✓
- `plans/2026-04-03-sichtbarkeit-organisches-wachstum-affiliates.md` — SEO, Newsletter, Affiliates, Content-Pipeline ✓
- `plans/2026-09-13-website-repositionierung-retention-redesign.md` — Repositionierung "AI-Consultant mit Angebot" + Retention-Redesign ✓
- Rebranding "Cinematic Dark" (2026-09-17, ohne Plan-Datei, direkt umgesetzt): neue Palette, Display-Font, Wortmarke, alle Seiten-Texte überarbeitet, Higgsfield-Slots ✓

**Positionierung (seit 2026-09-13):** "AI-Consultant mit Angebot" — KI-Beratung für den Mittelstand (KMU, 10–500 MA), statt breiter IT-Allrounder-Sprache. Hero: "KI, die bei euch wirklich läuft." Marlons Rolle: Global AI Manager (angestellt), baut Busche Cloud nebenberuflich auf. Alte IT-Projekte (ERP-Auswahl etc.) sind in den About-Text zurückgestuft, KI-Consulting steht im Vordergrund.

**Neue Seite `/leistungen`:** Zeigt vier Consulting-Pakete aus `outputs/consulting-angebot.md` mit Preisen (KI-Readiness-Check €299, KI-Pilot-Projekt ab €2.500, Laufende KI-Begleitung ab €1.200/Monat, Tagessatz €1.200–1.800/Tag — angehoben 2026-09-14), inkl. Discovery-Call-Erklärung. Verlinkt von Header, Footer, Hero und Leistungs-Teaser auf der Startseite.

**Newsletter als Haupt-CTA:** Eigene Newsletter-Sektion auf der Startseite (nach dem Leistungs-Teaser), `NewsletterSignup`-Komponente (Buttondown). Discovery-Call/Kontaktformular bleibt sekundärer CTA — Cal.com ist noch nicht eingerichtet, alle "Erstgespräch"-Links zeigen weiterhin auf `/#kontakt`.

**Case Studies:** `beispiel-ki-pilot.md` ist jetzt sichtbar (`draft: false`), Titel trägt Präfix "Beispielprojekt:" zur klaren Kennzeichnung, da es noch keine echte, freigegebene Case Study gibt.

**Retention:** Neue Komponente `RelatedPosts.astro` zeigt am Ende jedes Blog-Artikels 2–3 thematisch verwandte Artikel (gleiche Kategorie, Fallback auf neueste). Eingebunden in `BlogLayout.astro` nach der Prev/Next-Navigation.

**Blog:** 12 Artikel live, 19 Drafts in der Pipeline (KW16–25). Blog-Index-Seite (`/blog`) hat NYT-inspiriertes Editorial-Design mit Kategorie-Navigation und Pagination. Artikel-Layout (`BlogLayout.astro`) mit Lesezeit, JSON-LD, Prev/Next-Navigation, RelatedPosts, Newsletter-CTA und Autor-Karte. `@tailwindcss/typography` ist installiert und aktiviert.

**Blog-Styling:** Artikel nutzen `blog-artikel` + `meine-stimme` Skills für konsistente Formatierung: Blockquotes als Callout-Boxen, Unsplash-Bilder via `<figure>/<figcaption>`, keine em-dashes im Fließtext, keine `---` Trenner.

**Blog-Kategorien:** Jeder Artikel hat ein `category`-Feld im Frontmatter. Kategorien: Strategie, Automatisierung, Grundlagen, Branchen, Tools & Setup, SAP & Enterprise, Datenschutz, Erfahrungsbericht. Blog-Index zeigt Kategorie-Tabs + Pagination (8 Artikel/Seite).

**Blog-Artikel (live, 12 Stück):**
- `ki-automatisierung-mittelstand` — KI-Automatisierung im Mittelstand
- `app-bauen-ohne-programmierer` — App gebaut ohne Entwickler-Background (inkl. Garrit Wilson / KI PIONIER Credit)
- `idee-validieren-mit-ki` — Idee in 2h mit KI prüfen
- `chatgpt-vs-claude-unternehmen` — ChatGPT vs Claude Vergleich
- `ki-prozesse-identifizieren` — 5 Zeichen für KI-geeignete Prozesse (überarbeitet: keine persönlichen Beispiele, allgemein bekannte Referenzen)
- `nordvpn-sicher-arbeiten` — Warum ein VPN heute zum Arbeitsalltag gehört (inkl. NordVPN Affiliate-Link)
- `mein-ki-toolkit` — Persönliches Tool-Setup
- `ki-strategie-erste-schritte` — KI-Strategie Einsteigerguide
- `sap-ki-integration` — SAP + KI Praxis
- `mein-ki-os` — KI-Betriebssystem (inkl. Garrit Wilson / KIPA Credit)
- `prompts-die-funktionieren` — 5 Prompts aus dem echten Alltag
- `n8n-erster-workflow` — n8n Einstieg Schritt-für-Schritt
- `ein-jahr-ki` — Ein Jahr KI im Alltag: Erfahrungsbericht (fundamental überarbeitet 2026-04-21)

**Blog-Drafts (draft: true, KW16–25, 21 Artikel):**
sprachmodell-erklaert, ki-roi-berechnen, ki-fehler-einfuehrung, ki-glossar-entscheider, zapier-vs-n8n, ki-im-kundenservice, eu-ai-act-mittelstand, email-automatisierung-ki, erster-ki-pilot, ki-angst-im-team, ki-projekte-scheitern, ki-team-aufbauen, ki-und-dsgvo, ki-daten-eingeben, ki-im-vertrieb, ki-in-der-buchhaltung, ki-im-hr, ki-sap-fico, microsoft-copilot-bewertung, ki-jobs-zukunft, ki-jobs-mittelstand-zahlen

Neu 2026-09-14, abgeleitet aus Transkript-Analyse (`context/strategy.md`): `eu-ai-act-mittelstand` (EU AI Act, dm-Chef-Interview als Aufhänger, Kategorie Datenschutz) und `ki-jobs-mittelstand-zahlen` (belegte 16%-Entry-Level-Zahl vs. Mittelstand-Realität, Kategorie Strategie).

**Neue Seiten & Features:**
- `/tools` — Tools mit Affiliate-Links; Kategorien: KI & LLMs, Automatisierung, Hosting & Infrastruktur, Produktivität & Design, Sicherheit & Datenschutz, Entwicklung. Section-IDs für Anchor-Links gesetzt. Netlify, Miro hinzugefügt. NordVPN mit aktivem Affiliate-Link (go.nordvpn.net). Notion + Canva ohne Affiliate-Badge.
- `/rss.xml` — RSS-Feed für Blog-Abonnenten
- Newsletter-Signup via Buttondown (Username: `buschecloud`) — aktiv in allen Artikeln und Blog-Index
- JSON-LD strukturierte Daten auf allen Blog-Artikeln
- `robots.txt` — Suchmaschinen + Social erlaubt, KI-Scraper blockiert

**Skills (global in ~/.claude/skills/):**
- `meine-stimme` — Textstil: kein em-dash im Fließtext, kein `---` als Trenner
- `blog-artikel` — Formatierung: Blockquotes, Bilder, Headings, Absatzstruktur

**Content-Strategie:** `outputs/content-strategie.md` — Themen-Cluster, Keywords, Veröffentlichungsrhythmus (2x/Monat)

**LinkedIn-Optimierung:** `outputs/linkedin-optimierung.md` — fertige Texte zum Copy-Paste

**Monetarisierungsstrategie:** `outputs/monetarisierung-strategie.md` — Alle Kanäle, Einnahmen-Tracking, monatliches Review

**Consulting-Angebot:** `outputs/consulting-angebot.md` — Pakete (KI-Readiness-Check €299, KI-Pilot ab €2.500, Begleitung ab €1.200/Monat, neu: Tagessatz €1.200–1.800), Discovery-Call-Konzept. Nischen-Schwerpunkt: SAP-nahe Prozesse in Vertrieb/Kundenservice/Backoffice (seit 2026-09-14, abgeleitet aus Transkript-Analyse in `context/strategy.md`).

**Digitale Produkte:** `outputs/digitale-produkte.md` — Produkt-Optionen, Empfehlung: PDF-Guide "KI-Strategie in 30 Tagen" (€9–19)

**Discovery-Call-Leitfaden:** `outputs/discovery-call-leitfaden.md` (neu, 2026-09-14) — Gesprächsstruktur fürs kostenlose Erstgespräch, inkl. "Effizienz vor Kreativität"-Erwartungssteuerung und BAFA-Förderhinweis.

**Testimonial-Vorlage:** `outputs/testimonial-vorlage.md` (neu, 2026-09-14) — Interview-Leitfaden und Veröffentlichungs-Struktur für Kundenstimmen (Kunde erzählt in eigenen Worten statt Anbieter-Case-Study). Einsatzbereit, sobald erstes echtes Projekt abgeschlossen ist.

**Skript `scripts/youtube_transcripts.py`:** Lädt via yt-dlp Untertitel (letzte 6 Monate) für eine konfigurierte Kanalliste, wandelt sie in Klartext um und schreibt Ergebnisse nach `reference/youtube-transcripts/` (pro Kanal + `alle-transkripte.md` gesammelt; `_raw/` enthält Original-VTTs). Voraussetzung: `brew install yt-dlp`. Zuletzt gelaufen 2026-09-14 für Silicon Valley Girl, Alex Hormozi, Dan Martell, Chris Donnelly, Everlast AI (133 Transkripte, siehe `context/strategy.md`).

**Noch ausstehend:**
- Higgsfield-Assets generieren und in `website/public/media/` ablegen (Briefing: `reference/higgsfield-briefing.md`). Wichtigste zuerst: `hero.mp4` + `hero-poster.jpg`, dann `about.jpg` (echtes Porträt)
- Cal.com einrichten + Discovery-Call-Link in Website einbauen (aktuell zeigen alle CTAs auf das Formspree-Kontaktformular)
- Affiliate-Programme beantragen: n8n, Zapier, IONOS, Netlify; Status prüfen: Hostinger, Miro
- Digitales Produkt erstellen (KW18, Empfehlung: PDF-Guide)
- LinkedIn-Texte (`outputs/linkedin-optimierung.md`) auf Konsistenz mit neuer Positionierung prüfen und Profil aktualisieren
- OG-Images pro Blog-Artikel erstellen
- 21 Draft-Artikel reviewen und schrittweise live stellen (KW16–25)
- Testimonials-Sektion mit echten Kundenstimmen befüllen, sobald verfügbar (aktuell ausgeblendet, da leer) — Vorlage bereit: `outputs/testimonial-vorlage.md`
- Echte Case Study nach erstem abgeschlossenen Consulting-Projekt einpflegen (ersetzt/ergänzt das Beispielprojekt) — Interview-Leitfaden bereit: `outputs/testimonial-vorlage.md`
- Discovery-Call-Leitfaden (`outputs/discovery-call-leitfaden.md`) beim nächsten Erstgespräch anwenden und bei Bedarf nachschärfen

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

