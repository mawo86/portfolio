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
├── .github/workflows/deploy.yml  # Build + Deploy auf GitHub Pages bei Push auf main
├── .claude/               # (git-ignoriert)
│   ├── commands/          # Slash-Commands, die Claude ausführen kann
│   │   ├── prime.md       # /prime — Session-Initialisierung
│   │   ├── create-plan.md # /create-plan — Implementierungspläne erstellen
│   │   ├── implement.md   # /implement — Pläne umsetzen
│   │   └── shutdown.md    # /shutdown — Session sauber beenden
│   ├── launch.json        # Dev-Server-Config für die Browser-Preview (website-dev, Port 4321)
│   └── skills/            # Installierte Skills
├── context/               # Hintergrund-Kontext über den User und das Projekt
│   ├── personal-info.md   # Wer Marlon ist, Rolle, Ziele
│   ├── business-info.md   # Busche Cloud — Marke und Angebot
│   ├── strategy.md        # Aktuelle Prioritäten und Erfolgsmetriken
│   └── current-data.md    # Metriken und Projektstatus
├── plans/                 # Implementierungspläne erstellt von /create-plan
├── outputs/               # Arbeitsergebnisse und Deliverables
├── reference/             # Referenzmaterialien (git-ignoriert)
│   ├── higgsfield-briefing.md  # Prompts, Formate und Dateinamen für alle Visual-Slots
│   ├── logo.png / logo.jpg / icon_*.png  # Alte Wolken-Marke, nur noch Archiv
│   └── youtube-transcripts/    # Output von scripts/youtube_transcripts.py
├── scripts/               # youtube_transcripts.py
└── website/               # Astro-Portfolio-Website (busche.cloud)
    ├── astro.config.mjs     # Integrationen (tailwind, mdx, sitemap) + Rehype-Plugin für Lazy-Images
    ├── tailwind.config.mjs  # Design-Tokens (ink, bone, brand, font-display)
    ├── src/
    │   ├── config/site.ts # Externe Links, Verfügbarkeits-Status, Site-Metadaten
    │   ├── content/config.ts  # Zod-Schemas der Collections blog + case-studies
    │   ├── pages/         # index, leistungen, blog/, case-studies/, tools, 404, danke, og/
    │   ├── content/       # blog/ und case-studies/ (Markdown)
    │   ├── layouts/       # Layout, BlogLayout, CaseStudyLayout
    │   ├── components/    # Logo, Header, Footer, MediaImage, NewsletterSignup, ...
    │   └── lib/media.ts   # hasMedia(): Build-Zeit-Check für public/media/
    └── public/
        ├── fonts/         # Bricolage Grotesque, Inter, JetBrains Mono (self-hosted)
        ├── media/         # Higgsfield-Assets (hero.mp4, about.jpg, paket-*.jpg, kontakt.jpg)
        └── favicon.svg, icon-*.png, apple-touch-icon.png, CNAME, robots.txt
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

Die Astro-Portfolio-Website befindet sich in `website/`. Alle npm-Befehle dort ausführen (nicht im Repo-Root).

```bash
cd website
npm ci              # Abhängigkeiten (Node 20, wie in CI)
npm run dev         # Dev-Server auf http://localhost:4321 (ohne Suche, siehe Pagefind)
npm run build       # Produktions-Build: astro build + pagefind --site dist
npm run build:fast  # Nur astro build, ohne Such-Index (schneller, zum Prüfen von Layout/Inhalt)
npm run preview     # Gebauten dist/-Ordner lokal ausliefern
```

Es gibt keine Tests, kein Lint und kein Format-Tooling. `npm run build` ist der einzige Check: Er schlägt fehl bei Frontmatter, das nicht zum Schema in `src/content/config.ts` passt, und bei TypeScript-Fehlern in `.astro`-Dateien (tsconfig `strict`). Vor jedem Push, der `website/` berührt, einmal bauen.

**Live unter:** https://busche.cloud

**Deployment:** `.github/workflows/deploy.yml` baut bei jedem Push auf `main` (Node 20, `npm ci`, `npm run build`) und deployt `website/dist` auf GitHub Pages. `main` ist also Produktion, es gibt kein Staging. Die Domain kommt aus `public/CNAME`.

### Architektur der Website (was man aus mehreren Dateien zusammenlesen müsste)

**Inhalte sind Astro Content Collections.** `src/content/config.ts` definiert zwei Collections mit Zod-Schema: `blog` (title, description, date, tags, category, image?, draft) und `case-studies` (zusätzlich client, industry, timeframe, role, services, results[]). Ein neuer Artikel ist eine Markdown-Datei in `src/content/blog/`, der Dateiname ist der Slug. Neue Pflichtfelder im Frontmatter müssen im Schema landen, sonst bricht der Build.

**Drafts werden an vier Stellen gefiltert**, immer mit `getCollection('blog', ({ data }) => !data.draft)`: `pages/index.astro` (Blog-Teaser), `pages/blog/index.astro`, `pages/blog/[...slug].astro` und `pages/rss.xml.ts`. Dazu `pages/og/[...route].ts` für OG-Bilder. Wer die Draft-Logik ändert, muss alle fünf anfassen.

**Blog-Kategorien sind hart kodiert.** `pages/blog/index.astro` hat `CATEGORY_ORDER`; eine Kategorie im Frontmatter, die dort fehlt, bekommt keinen Tab (der Artikel erscheint trotzdem in der Liste). Neue Kategorie = Frontmatter + `CATEGORY_ORDER` + Liste in dieser Datei ("Blog-Kategorien" unten).

**OG-Images werden zur Build-Zeit gerendert** (astro-og-canvas, `pages/og/[...route].ts`). Die Route baut ein `pages`-Objekt aus allen nicht-draft Blog-Artikeln und Case Studies plus festen Einträgen für `index`, `blog`, `tools`, `case-studies`, `leistungen`. `layouts/Layout.astro` wählt das Bild in dieser Reihenfolge: explizites `image`-Prop, `ogRoute`-Prop (setzen `BlogLayout`/`CaseStudyLayout`), Pfad-Auto-Erkennung für die statischen Seiten (Liste in `resolveOgRoute()`), sonst `/icon-512.png`. Eine neue statische Seite mit eigenem OG-Bild braucht Einträge an **beiden** Stellen (og-Route und `resolveOgRoute`).

Der OG-Schritt lädt beim Build Schriften von `api.fontsource.org` nach (astro-og-canvas). Ohne Netz oder in Sandboxes, die den Host blocken, bricht `astro build` mit `Cannot read properties of null (reading 'countFamilies')` ab. Das ist kein Repo-Fehler; in GitHub Actions läuft der Build durch.

**Suche läuft über Pagefind, nur nach Full-Build.** `BlogLayout.astro` markiert Artikel mit `data-pagefind-body`; die Blog-Index-Seite lädt `/pagefind/pagefind.js` zur Laufzeit. Im Dev-Server und bei `build:fast` existiert der Index nicht, die Suche loggt dann nur eine Warnung. Das ist kein Bug.

**Zentrale Konfiguration:** `src/config/site.ts` hält externe URLs (LinkedIn, Formspree-Formular, Buttondown-Endpoint), Site-Metadaten und den Verfügbarkeits-Status (`available` / `limited` / `booked`) für den Header-Indikator. Dort ändern, nicht in einzelnen Komponenten. `src/lib/media.ts` (`hasMedia()`) prüft zur Build-Zeit, ob ein Higgsfield-Asset in `public/media/` liegt; Komponenten rendern sonst einen Fallback-Verlauf (Details unten).

**Layouts:** `Layout.astro` ist die Hülle (Head, Meta, Canonical, OG, Filmkorn-Overlay, Fonts). `BlogLayout` und `CaseStudyLayout` wrappen es; Header und Footer werden pro Seite eingebunden, nicht im Layout. Interne Links nutzen `import.meta.env.BASE_URL` als Präfix. Path-Alias `@/*` → `src/*` ist in `tsconfig.json` definiert.

**Markdown-Pipeline:** `astro.config.mjs` registriert ein eigenes Rehype-Plugin, das allen `<img>` im Content `loading="lazy"` und `decoding="async"` gibt. MDX ist aktiviert, Sitemap wird automatisch erzeugt, `site` ist `https://busche.cloud`.

**Gitignored, aber referenziert:** `.claude/` (Commands `/prime`, `/create-plan`, `/implement`, `/shutdown`, Skills, `launch.json`) und `reference/` liegen nur lokal auf Marlons Rechner. In einer frischen Clone-Umgebung (z. B. Claude Code Web) existieren sie nicht; Verweise in dieser Datei auf `reference/*.html` oder die Slash-Commands sind dann nicht auflösbar.

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

**Sektionen (Startseite):** Hero (Video-Slot, Proof-Leiste) · Über mich (Bild-Slot + Text) · Leistungen (nummerierte Stufen 01–03 + Tagessatz-Hinweis) · So läuft ein Projekt (Link zu `/case-studies`) · Newsletter · Werkzeuge · Blog (Listenansicht, 4 Artikel) · Kontakt (Split: Text + Formular, Bild-Slot)

**Eigene Unterseiten:** `/leistungen` (Pakete & Preise, alternierend Bild/Text) · `/case-studies` (im Menü "Projekte") · `/tools` · `/blog` · `/kontakt` (Redirect)

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

**Case Studies:** `beispiel-ki-pilot.md` ist sichtbar (`draft: false`), Titel trägt Präfix "Beispielprojekt:" zur klaren Kennzeichnung, da es noch keine echte, freigegebene Case Study gibt. Zweite Case Study `rag-demo-quellenbelegter-chatbot.md` (2026-09-19): eigenes technisches Showcase-Projekt (RAG-Pipeline aus `/Users/mabu/Documents/demo-rag`), Titel-Präfix "Showcase:", im Text als "Showcase, kein Kundenprojekt" gekennzeichnet.

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

**Lead-Funnel-Autopilot-Prompt:** `outputs/prompt-lead-funnel-autopilot.md` (neu, 2026-09-26) — fertiger Prompt für eine Fable-5.1-Session, die Website-Ziel erkennt, Lead-Funnel (Use-Case-Finder, Use-Case-Bibliothek, Lead-Magnet, Tracking) und PR-Build-Check selbstständig umsetzt und pro Use-Case eine interne Schritt-für-Schritt-Anleitung unter `outputs/loesungswege/` anlegt.

**Testimonial-Vorlage:** `outputs/testimonial-vorlage.md` (neu, 2026-09-14) — Interview-Leitfaden und Veröffentlichungs-Struktur für Kundenstimmen (Kunde erzählt in eigenen Worten statt Anbieter-Case-Study). Einsatzbereit, sobald erstes echtes Projekt abgeschlossen ist.

**Skript `scripts/youtube_transcripts.py`:** Lädt via yt-dlp Untertitel (letzte 6 Monate) für eine konfigurierte Kanalliste, wandelt sie in Klartext um und schreibt Ergebnisse nach `reference/youtube-transcripts/` (pro Kanal + `alle-transkripte.md` gesammelt; `_raw/` enthält Original-VTTs). Voraussetzung: `brew install yt-dlp`. Zuletzt gelaufen 2026-09-14 für Silicon Valley Girl, Alex Hormozi, Dan Martell, Chris Donnelly, Everlast AI (133 Transkripte, siehe `context/strategy.md`).

**Higgsfield-Assets (2026-09-19):** 4 von 8 Slots erzeugt und live: `about.jpg` (Umgebungsbild, Übergangslösung bis echtes Porträt), `paket-check.jpg`, `paket-pilot.jpg`, `paket-begleitung.jpg`. Erzeugt via `image_auto`-Modell (Free-Plan-Account erlaubt kein `gpt_image_2_5`/`recraft_v4_1`), Format 3:4 statt Briefing-Ziel 4:5 (kein 4:5 im Free-Plan verfügbar), auf 1120×1500 skaliert, unter 400 KB. Account-Guthaben danach bei 0 Credits (Free-Plan: 10 Credits, 1 Bild ≈ 1–1,25 Credits, Video ≈ 56 Credits — Video mit Free-Plan nicht finanzierbar).

**Eigene-Produkte-Sektion entfernt (2026-09-19):** Cookloop und DartsIQ werden auf der Website nicht mehr präsentiert. Entfernt: Startseiten-Sektion "Eigene Produkte" (`index.astro`), Footer-Spalte "Eigene Apps", `links.cookloop`/`links.dartsiq` in `src/config/site.ts`. Der Blog-Artikel `app-bauen-ohne-programmierer.md` erwähnt Cookloop weiterhin als Erfahrungsbericht-Content, unverändert.

**KI-Readiness-Check — Methodik, Framework, Lernmaterial (2026-09-19/20):** Vollständiger Aufbau des €299-Pakets:
- `outputs/ki-readiness-check-methodik.md` — Durchführungs-Methodik (Intake, 2h-Call-Ablauf, Bewertungsraster, Tool-Logik, Deliverable-Struktur, Zeitbudget)
- `outputs/ki-readiness-check-gespraechsframework.md` — Memorierbares Framework ("Erzählen. Zerlegen. Werten. Ordnen.") + 4 Notizbögen (Kickoff/Prozessblatt/Prioritäts/Abschluss), gehärtet durch 5 simulierte Testläufe (Rollenspiel via Subagenten), inkl. Fallbeispiel Abschnitt 8
- `reference/ki-readiness-check-pdf-vorlage.html` (gitignored) — 8-seitige CI-PDF-Vorlage, zeigt das Kunden-Deliverable
- Trainingsdeck (Claude Artifact, Slides): [KI-Readiness-Check auswendig können](https://claude.ai/artifact/8BEdQ1ikwVVfTSNTrDZ2Ay), 14 Folien (inkl. "Technisches Setup")
- `reference/ki-readiness-check-merkkarte.html` (gitignored) → `outputs/pdf/ki-readiness-check-merkkarte.pdf` — 1-Seiten-Merkkarte zum Auswendiglernen (dunkel, dicht, alle Kernregeln)
- `reference/ki-readiness-check-arbeitsboegen.html` (gitignored) → `outputs/pdf/ki-readiness-check-arbeitsboegen.pdf` — 6-seitiges ausfüllbares Bögen-Set zum Ausdrucken (Deckblatt + 4 Bögen + Fallbeispiel)
- `reference/ki-readiness-check-fallbeispiel.html` (gitignored) → `outputs/pdf/ki-readiness-check-fallbeispiel.pdf` — dasselbe Fallbeispiel als eigenständiges 1-Seiten-Handout (identischer Inhalt wie Arbeitsbögen S.6, separat weitergebbar)
- `outputs/xlsx/ki-readiness-check-bewertungsraster.xlsx` (2026-09-21, aktualisiert) — digitales Bewertungsraster: 3 Blätter (Anleitung/Prozesse/Bewertung), rechnet Std./Woche-Umrechnung, Score und Phase (Sofort/3 Monate/Beobachten) automatisch aus, plus automatisch generiertes Blasendiagramm (Zeitaufwand × Umsetzbarkeit, Größe = Score, erste 5 Zeilen — Achsen bewusst identisch mit der Word-Vorlage S.4, direkt als Screenshot nutzbar). Prozesse-Blatt hat zusätzlich eine Bereich-Spalte (K, Dropdown, max. 3) für die Word-Übertragung. Formeln und Chart gegen Testdaten aus dem Verdichtungs-Training verifiziert (LibreOffice headless, Rendering-Kontrolle).
- `outputs/docx/ki-readiness-check-report-vorlage.docx` (neu, 2026-09-21) — Word-Vorlage für das Kunden-Deliverable (€299-Report), Struktur/Inhalt 1:1 aus `reference/ki-readiness-check-pdf-vorlage.html` übernommen (8 Seiten), im selben CI-Look (Amber/Anthrazit/Bone). Ausfüllhinweise (↳, orange kursiv) markieren, welcher Excel-Wert wohin gehört. Eigene Warnseite vorne (ohne Footer/Seitenzahl) erinnert ans Löschen der Hinweise vor dem Versand; echte Report-Seiten haben festen Fußzeilentext "X / 8" (Word-Feldcodes PAGE/NUMPAGES/SECTIONPAGES verhalten sich zwischen Word und LibreOffice unterschiedlich, daher bewusst kein Feldcode). Übersetzungstabelle Bogen→Excel→Word in Gesprächsframework Abschnitt 6.
- `outputs/docx/ki-readiness-check-report-beispiel-frank.docx` (neu, 2026-09-21) — dieselbe Vorlage, komplett ausgefüllt mit den Frank-Ostmann-Trainingsdaten (Malerbetrieb, 5 Prozesse, Score/Phase aus dem Excel-Bewertungsraster), inkl. eingebettetem Matrix-Chart-Screenshot. Dient als konkretes Anschauungsbeispiel für ein fertiges Kunden-Deliverable, keine Vorlage zum Weiterausfüllen (keine ↳-Hinweise, keine Warnseite). Roadmap-Maßnahmen und Tool-Empfehlungen sind frei formuliert, nicht aus dem Trainingsdialog übernommen (dort nie besprochen).
- **Intake-Formular als Copy-Paste-E-Mail-Vorlage** (Methodik Abschnitt 1.1, neu 2026-09-21) — die 9 Intake-Fragen fertig formatiert für den direkten Versand, inkl. Fristsetzung (2 Werktage vor dem Call).
- **Trainings-Erkenntnisse aus 5 Rollenspiel-Durchläufen** (Gesprächsframework Abschnitt 7a, neu 2026-09-21) — 4 typische Anfängerfehler beim Verdichten der Freitextfelder (Prosa-Zahlen nicht umgerechnet, mehrteilige Zeitangaben nicht addiert, Anekdoten nicht gefiltert, ähnliche Formulierungen zwischen Prozessen verwechselt), als Trainingsgrundlage für Dritte.

**Praktische Umsetzung — Trockenlauf (2026-09-20):** Der Petra-Fall wurde Minute für Minute durchgerechnet (was der Kunde vorab ausfüllt, was wann auf welchem Bildschirm erfasst wird, was direkt nach dem Call rausgeht, wie viel Nacharbeit bis zum PDF bleibt). Ergebnisse eingearbeitet in Methodik (Abschnitt 6: Sofort-Handover + Trockenlauf-Beleg in Abschnitt 7) und Gesprächsframework (neuer Abschnitt 1a: Technisches Setup — zwei Bildschirme/Sichtbarkeiten, Aufnahme nur als Sicherheitsnetz mit Einwilligung), sowie in Arbeitsbögen, Merkkarte und Trainingsdeck (neue Folie 09):
- **Zwei Fenster:** geteilt = Checkboxen/Zahlen/Matrix (Vertrauens-Mechanismus), privat = die 4 echten Freitext-Felder pro Prozess (Kurzbeschreibung, Werkzeug, Fehlerquote, "was würde mit der Zeit passieren")
- **Kein Transkriptions-Tool nötig:** von ~20 Feldern/Prozess sind nur 4 Freitext, der Rest kostet einen Klick. Eingebauter Call-Rekorder reicht als Sicherheitsnetz zum punktuellen Nachschlagen — nie zur vollständigen Nachbearbeitung (würde die 6,5-Std.-Wirtschaftlichkeitsschwelle sofort reißen), Aufnahme nur mit Einwilligung (Kickoff-Bogen-Checkbox, hängt mit Intake-Frage 7/Betriebsrat zusammen)
- **Sofort-Handover:** Foto/Scan der Bögen + 2–3 Sätze Zusammenfassung innerhalb 15 Min nach Call-Ende — ersetzt zugleich eine formale Verifikation, da der Kunde die Bewertung bereits live im Screenshare gesehen hat
- **PDF-Timing unverändert:** 3–5 Werktage, Nachfass-Call nach 1 Woche (dort auch der Ort für inhaltliche Korrekturen, keine vorgeschaltete Freigabeschleife). `outputs/consulting-angebot.md` macht kein Timing-Versprechen und wurde deshalb nicht geändert
- Baseline-Zeitbudget bestätigt bei ~6,2 Std., knapp unter der 6,5-Std.-Schwelle — kein Puffer für zusätzliche Nacharbeit

Invarianten (nie ändern ohne bewussten Grund): Score = Zeitaufwand × Automatisierbarkeit × Umsetzbarkeit (Produkt, 1–125, Schwellen 60/20), Std./Woche als Erfassungseinheit, max. 3 Bereiche, 7 Leitfragen.

**Noch ausstehend:**
- `paket-tagessatz.jpg` und `kontakt.jpg` generieren, sobald wieder Credits verfügbar sind (Prompts bereits in `reference/higgsfield-briefing.md`)
- `hero.mp4` + `hero-poster.jpg`: Video braucht Higgsfield-Plan-Upgrade (Free-Plan reicht nicht, ~56 Credits/Video) oder Credit-Top-up
- `about.jpg` durch ein echtes Porträt ersetzen (aktuell nur Umgebungsbild als Übergangslösung)
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

