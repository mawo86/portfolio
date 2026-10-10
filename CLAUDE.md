# CLAUDE.md

Diese Datei gibt Claude Code (claude.ai/code) Anweisungen für die Arbeit in diesem Repository. Sie wird automatisch am Anfang jeder Session geladen und ist die Single Source of Truth für den Workspace. Halte sie aktuell.

---

## Was das hier ist

Workspace von Marlon Busche (Global AI Manager, angestellt) für die Arbeit mit Claude Code über mehrere Sessions hinweg. Der User startet Sessions mit `/prime`, steuert über Commands und Ziele, Claude liest Kontext, produziert Outputs und pflegt die Konsistenz.

**Stand (2026-10-10):** Consulting wird vorerst nicht mehr angeboten. Ziel ist ein kleines AI-Produkt als Nebenverdienst (wenige hundert Euro im Monat, wenig Zeitaufwand, Startbudget bis ca. 150 € für Tests). Nach acht Recherche-Runden mit rund 100 Ideen ist die **Hochzeitswebsite** (Fragebogen, KI-Texte, statische Astro-Seite, einmal zahlen, kein Abo) der erste Test. Ergebnisse und Begründung: `outputs/produktideen-ranking.md`, `outputs/validierung-top1.md`, `outputs/zusammenfassung-entscheidung.md`. `busche.cloud` ist jetzt Blog und Newsletter, die Beratungsseiten liegen im lokalen Archiv.

---

## Workspace-Struktur

```
.
├── CLAUDE.md              # Diese Datei
├── shell-aliases.md       # Shell-Aliase für den Workspace
├── .github/workflows/     # deploy.yml (Push auf main), pr-check.yml (jeder PR)
├── .claude/               # (git-ignoriert) commands/, skills/, launch.json
├── context/               # personal-info, strategy, business-info (gelesen von /prime)
├── plans/                 # Pläne aus /create-plan (3 technische Pläne aus 2026-03/04)
├── outputs/               # (git-ignoriert) produktideen-ranking, validierung-top1, zusammenfassung-entscheidung
├── archiv-beratung/       # (git-ignoriert) Backup des gesamten Beratungsangebots, spiegelt die Originalpfade
└── website/               # Astro-Site busche.cloud (Blog, Newsletter, Tools)
```

**Archiv:** `archiv-beratung/` enthält Lösungsseiten (26), Case Studies (2), `/leistungen`, Use-Case-Finder, `outputs/` mit Lösungswegen, Produktkarten, Kundenvorlagen und Readiness-Check, `reference/` (YouTube-Transkripte, Higgsfield-Briefing, alte Logos), die Skripte `build_dsgvo_vorlagen.py` und `youtube_transcripts.py`, zwei ältere Pläne und die alten Kontext-Dateien. Es ist **nur lokal** (`.gitignore`), das Repo ist öffentlich. Git sichert es nicht: eigenes Backup nötig. Die Git-Historie enthält die älteren Fassungen weiterhin öffentlich (30 Commits berührten `outputs/`), bis sie gezielt bereinigt wird oder das Repo privat ist.

**Produkt-Projekt Hochzeitswebsite:** eigenes Repo außerhalb dieses Repos (`/Users/mabu/Documents/hochzeitswebsite/`, lokal, noch ohne Remote). Phase 0 ist gebaut (Astro-Site mit Konfigurator und Live-Vorschau, gemeinsamer Renderer `packages/render`, Anleitung fürs Zusage-Formular, fünf Muster, Vorbestellung). Phase 1 (Cloudflare-Backend, Workflows für Zahlung, Bau, Mails, Ablauf, Schließung, alle mit Log) und Phase 2 (echte Zahlung) stehen im Plan `~/.claude/plans/snoopy-kindling-seal.md` und starten erst nach dem Nachfrage-Test. Arbeitsname/Domain `jawort-seite.de` (laut DENIC frei, nicht gekauft). Stand und offene Punkte: `docs/phase0-offen.md` im Produkt-Repo. Es soll keine Kundendaten im öffentlichen Portfolio-Repo geben.

---

## Commands

- **/prime**: Session starten, CLAUDE.md und Kontext lesen, Stand zusammenfassen.
- **/create-plan [anforderung]**: Plan in `plans/` erstellen, bevor strukturelle Änderungen passieren.
- **/implement [plan-pfad]**: Plan umsetzen, validieren, Status aktualisieren.
- **/shutdown**: Session sauber beenden.

---

## Kritische Anweisung: Diese Datei pflegen

Bei jeder Änderung am Workspace prüfen: Neue Funktionalität, geänderte Struktur, neuer Command, neue Kontext-Datei? Wenn ja, die betroffenen Abschnitte aktualisieren. Diese Datei muss immer den aktuellen Zustand widerspiegeln.

---

## Website (`website/`)

Alle npm-Befehle dort ausführen, nicht im Repo-Root.

```bash
cd website
npm ci              # Abhängigkeiten (Node 20, wie in CI)
npm run dev         # Dev-Server auf http://localhost:4321 (ohne Suche, siehe Pagefind)
npm run build       # Produktions-Build: astro build + pagefind --site dist
npm run build:fast  # Nur astro build, ohne Such-Index
npm run preview     # Gebauten dist/-Ordner lokal ausliefern
npm run check       # Typen, Stil, Build, Links, Budget (vor jedem Push)
```

**Live unter:** https://busche.cloud (GitHub Pages, Domain aus `public/CNAME`). `main` ist Produktion, kein Staging. Änderungen über Branch und Pull Request.

### CI und Prüfungen
- `deploy.yml` (Push auf main): Node 20, `npm ci`, `npm run build`, `npm run check:links`, Deploy von `website/dist`. Timeout 15 Minuten.
- `pr-check.yml` (PR gegen main, Pfad `website/**`): `astro check` (Pflicht), Stil-Check (Warnung), Build, Link-Check (Pflicht), Größen-Budget (Warnung), `dist` als Artefakt.
- `check:types` (`astro check`): TypeScript in `.astro`-Dateien, strenger als der Build.
- `check:style` (`scripts/check-style.mjs`): Regeln aus dem Skill `meine-stimme` für `src/content/blog` (kein Gedankenstrich, kein `---` im Body, ohne Drafts). Ohne `--strict` nur Warnung.
- `check:links` (`scripts/check-links.mjs`): prüft alle internen `href`/`src`/`srcset` und URL-artigen `content`-Werte im gebauten `dist/` inklusive Anker, ohne Netz. Exit 1 bei Fehlern. Ein Link auf eine entfernte Seite macht den Deploy rot.
- `check:budget` (`scripts/check-budget.mjs`): HTML 120 KB, JS/CSS 200 KB, Bilder 400 KB, JS+CSS 600 KB. Immer Exit 0.

### Architektur
- **Inhalte:** Eine Content Collection `blog` (`src/content/config.ts`, Zod-Schema: title, description, date, tags, category, image?, draft). Ein Artikel ist eine Markdown-Datei in `src/content/blog/`, der Dateiname ist der Slug. Neue Pflichtfelder im Frontmatter müssen ins Schema.
- **Drafts:** Immer `getCollection('blog', ({ data }) => !data.draft)`. Gefiltert in `pages/index.astro`, `pages/blog/index.astro`, `pages/blog/[...slug].astro`, `pages/rss.xml.ts`, `pages/og/[...route].ts` und `components/RelatedPosts.astro`. Wer die Draft-Logik ändert, muss alle sechs anfassen.
- **Seiten:** `index` (Blog-Hub: Hero, letzte Artikel, Newsletter, Über mich, Tools), `blog/`, `tools`, `impressum`, `datenschutz` (`datenschutzerklaerung` leitet weiter), `404`, `rss.xml`, `og/`.
- **Layouts:** `Layout.astro` (Head, Meta, Canonical, OG, CSP, Fonts, GoatCounter) und `BlogLayout.astro` (Lesezeit, JSON-LD, Prev/Next, RelatedPosts, Newsletter-CTA, Autor-Karte). Header und Footer werden pro Seite eingebunden. Interne Links nutzen `import.meta.env.BASE_URL`. Alias `@/*` → `src/*`.
- **OG-Images** (astro-og-canvas, `pages/og/[...route].ts`): Route aus allen nicht-draft Blog-Artikeln plus festen Einträgen `index`, `blog`, `tools`. `Layout.astro` wählt das Bild: Prop `image`, Prop `ogRoute`, Pfad-Erkennung für statische Seiten (`resolveOgRoute()`, aktuell `blog`, `tools`), sonst `/icon-512.png`. Eine neue Seite mit eigenem OG-Bild braucht Einträge an beiden Stellen. Die Schriften liegen lokal in `src/assets/og-fonts/` (Build ohne Netz).
- **Suche:** Pagefind, nur nach Full-Build. Im Dev-Server und bei `build:fast` existiert der Index nicht, die Suche loggt dann nur eine Warnung.
- **Konfiguration:** `src/config/site.ts` hält `links` (LinkedIn, Buttondown-Endpoint) und `site`. `src/lib/media.ts` (`hasMedia()`) prüft zur Build-Zeit, ob eine Datei in `public/media/` liegt. `src/lib/tonal.ts` hält die Tonfarben für Chips (`kategorieTonal`, `chipKategorie`, `chipFor`, `tonalClass`).
- **Newsletter:** Buttondown (Username `buschecloud`), `NewsletterSignup`-Komponente in Blog-Artikeln und auf der Startseite (`id="newsletter"`, Footer und Header verlinken den Anker). Datenschutz-Anker `/datenschutz#newsletter`.
- **Analytics:** GoatCounter (cookielos). `window.bcTrack(name)` zählt Events unter `ev/<name>`, Elemente mit `data-track="<name>"` melden Klicks automatisch.
- **Sitemap:** `@astrojs/sitemap`, die Weiterleitungsseite `/datenschutzerklaerung` ist ausgefiltert. `robots.txt` erlaubt Suchmaschinen und Social, blockiert KI-Scraper.
- **Markdown-Pipeline:** eigenes Rehype-Plugin (lazy Images), MDX aktiv, `site` ist `https://busche.cloud`.

### Design-System "Material Light" (Google-inspiriert, seit 2026-09-26)
- Grund Weiß (`ink-900`), Tonfläche `ink-800` #F0F4F9, Text Anthrazit (`bone-50` #1F1F1F), Primärfarbe Google-Blau (`brand-600` #0B57D0). Nur heller Modus.
- Tonflächen als Bedeutungsträger (`tonal.blue/green/yellow/red/purple/teal` plus `-900`-Textfarben in `tailwind.config.mjs`).
- Fonts selbst gehostet: Manrope (Display), Roboto (Body), JetBrains Mono. Formen: Pill-Buttons, Karten mit feiner Kontur statt Schatten, Hero als Tonfläche `rounded-[28px] bg-ink-800`.
- Neue Komponenten in Rollen denken (ink = Fläche, bone = Text, brand = Signal). Das Logo ist die Wortmarke in `src/components/Logo.astro`.

### Blog
- 36 Artikel live, keine Drafts. Artikel nutzen die Skills `blog-artikel` und `meine-stimme`: Blockquotes als Callouts, Unsplash-Bilder via `<figure>/<figcaption>`, keine Gedankenstriche im Fließtext, keine `---`-Trenner.
- **Kategorien** sind hart kodiert: Strategie, Automatisierung, Grundlagen, Branchen, Tools & Setup, SAP & Enterprise, Datenschutz, Erfahrungsbericht. Neue Kategorie = Frontmatter + `CATEGORY_ORDER` in `pages/blog/index.astro` + `kategorieTonal` in `lib/tonal.ts` + diese Liste.
- Regel für künftige Artikel: keine Kundenanekdoten, solange es kein echtes Kundenprojekt gibt. Zahlen mit Quelle oder als Erfahrungswert kennzeichnen.
- `/tools` (Affiliate-Links, `AffiliateDisclosure`) bleibt, weil rund 30 Blog-Zeilen darauf verlinken.

### Gitignored, aber referenziert
`.claude/` (Commands, Skills, `launch.json`), `outputs/` und `archiv-beratung/` liegen nur lokal auf Marlons Rechner. In einer frischen Clone-Umgebung (z. B. Claude Code Web) existieren sie nicht. `launch.json` startet den Dev-Server als `website-dev` auf Port 4321.

---

## Skills (global in ~/.claude/skills/)
- `meine-stimme`: Textstil, kein Gedankenstrich im Fließtext, kein `---` als Trenner.
- `blog-artikel`: Formatierung der Blog-Artikel.

## Entscheidungen und offene Punkte (Stand 2026-10-10)
- Produkt: Hochzeitswebsite als Test ohne Bezahlung (Produktseite mit Konfigurator und Vorbestellung, Muster-Seiten, Google Ads ca. 100 €, 14 Tage). Seiten der Paare später selbst konfiguriert (nicht mehr halbautomatisch), Backend bei Cloudflare, Stripe zuerst im Testmodus. Schwellen: Abbruch bei mindestens 300 Besuchern und unter 3 % Vorbestellungen oder unter 5 Vorbestellungen nach 14 Tagen, weiter ab 10. Alles Annahmen.
- Offen: Name und Domain des Produkts (Kauf durch Marlon), Dienst für die Vorbestellungen (Buttondown-Tag oder Formspree), Google-Ads-Konto, Nebentätigkeit beim Arbeitgeber, Gewerbe/Steuer/Merchant of Record vor dem ersten Verkauf. Hinweis auf das Produkt auf busche.cloud erst, wenn die Domain existiert.
- Backup für `archiv-beratung/` einrichten. Entscheiden, ob die alte Git-Historie bereinigt oder das Repo privat gestellt wird.
- Affiliate-Programme (n8n, Zapier, IONOS, Netlify), `about.jpg`-Slot und Higgsfield-Visuals sind mit dem Umbau entfallen. Keine Beratung, keine Pakete, keine Lead-Funnel-Events mehr.
- Das KI-Regelwerk-Kit (`/Users/mabu/Documents/ki-regelwerk-kit`, eigenes privates Repo) wurde als Produkt abgelehnt und ist nicht Teil dieses Workspaces.

## Notizen
- Kontext minimal, aber ausreichend halten. Pläne mit datierten Dateinamen in `plans/`.
- Recherche-Ergebnisse und Entscheidungen in `outputs/` ablegen.
