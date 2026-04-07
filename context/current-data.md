# Aktuelle Daten

## Website-Projekt

| Aspekt | Status |
|--------|--------|
| Domain | busche.cloud (DNS auf GitHub Pages konfiguriert — 2026-04-01) |
| Neue Website | Live auf https://busche.cloud |
| Hosting | GitHub Pages (Repo: github.com/mawo86/portfolio) |
| Tech-Stack | Astro 4 + Tailwind CSS + MDX |
| Logo | Inline-SVG in Header/Footer (kein Bilddatei-Request) |
| Kontaktformular | Formspree (xgopevdy) → marlonbusche86@gmail.com |
| Newsletter | Buttondown (Username: buschecloud, Embed-Formular aktiv) |
| RSS-Feed | /rss.xml (automatisch generiert via @astrojs/rss) |
| Analytics | GoatCounter (cookieless, DSGVO-konform) |

## Sektionen auf der Website

- Hero (Badge, Headline, CTAs, Stats)
- Über mich (Text + Info-Karte mit SVG-Icons)
- Leistungen (KI-Automatisierung, KI-Beratung/Audit, Digitale Transformation)
- Tools & Tech (KI/LLMs, Automatisierung, Enterprise, Analyse)
- Projekte (ERP-Auswahl, Prozessanalyse, IT-Strategie, KI-Consulting)
- Eigene Produkte (Cookloop + DartsIQ — beide live, mit App-Link)
- Blog (11 Artikel live)
- Kontakt (Formspree-Formular)
- **Empfohlene Tools** (`/tools`) — Tool-Empfehlungen mit Affiliate-Links

## Blog-Artikel (11 live, 20 Drafts)

### Live-Artikel

| Artikel | Slug | Datum | Kategorie |
|---------|------|-------|-----------|
| KI-Automatisierung im Mittelstand | ki-automatisierung-mittelstand | 2026-03-31 | Automatisierung |
| App gebaut ohne Entwickler-Background | app-bauen-ohne-programmierer | 2026-04-05 | Erfahrungsbericht |
| Idee validieren mit KI | idee-validieren-mit-ki | 2026-04-06 | Strategie |
| ChatGPT vs Claude für Unternehmen | chatgpt-vs-claude-unternehmen | 2026-04-03 | Grundlagen |
| 5 Zeichen für KI-geeignete Prozesse | ki-prozesse-identifizieren | 2026-04-07 | Strategie |
| Mein KI-Toolkit | mein-ki-toolkit | 2026-04-14 | Tools & Setup |
| KI-Strategie: Erste Schritte | ki-strategie-erste-schritte | 2026-04-21 | Strategie |
| KI trifft SAP | sap-ki-integration | 2026-04-28 | SAP & Enterprise |
| Mein KI OS | mein-ki-os | 2026-04-06 | Tools & Setup |
| 5 Prompts aus dem Alltag | prompts-die-funktionieren | 2026-04-06 | Tools & Setup |
| n8n erster Workflow | n8n-erster-workflow | 2026-04-06 | Automatisierung |

### Draft-Artikel (Redaktionsplan KW16–25)

| Slug | Kategorie | Zieldatum |
|------|-----------|-----------|
| sprachmodell-erklaert | Grundlagen | 2026-04-14 |
| ki-roi-berechnen | Strategie | 2026-04-17 |
| ki-fehler-einfuehrung | Strategie | 2026-04-21 |
| ki-glossar-entscheider | Grundlagen | 2026-04-24 |
| zapier-vs-n8n | Automatisierung | 2026-04-28 |
| ki-im-kundenservice | Branchen | 2026-05-01 |
| ki-und-dsgvo | Datenschutz | 2026-05-05 |
| ki-daten-eingeben | Datenschutz | 2026-05-08 |
| ki-im-vertrieb | Branchen | 2026-05-12 |
| ki-in-der-buchhaltung | Branchen | 2026-05-15 |
| erster-ki-pilot | Strategie | 2026-05-19 |
| ki-projekte-scheitern | Strategie | 2026-05-22 |
| ki-glossar-entscheider | Grundlagen | 2026-05-26 |
| email-automatisierung-ki | Automatisierung | 2026-05-29 |
| ki-im-hr | Branchen | 2026-06-02 |
| microsoft-copilot-bewertung | SAP & Enterprise | 2026-06-05 |
| ki-sap-fico | SAP & Enterprise | 2026-06-09 |
| ki-team-aufbauen | Strategie | 2026-06-12 |
| ein-jahr-ki | Erfahrungsbericht | 2026-06-09 |
| ki-angst-im-team | Strategie | 2026-06-12 |
| ki-jobs-zukunft | Erfahrungsbericht | 2026-06-19 |

## Blog-Index-Seite (`/blog`)

- NYT-inspiriertes Editorial-Design
- Kategorie-Navigation (Tabs): Strategie, Automatisierung, Grundlagen, Branchen, Tools & Setup, SAP & Enterprise, Datenschutz, Erfahrungsbericht
- Pagination für "Alle"-Ansicht: 8 Artikel pro Seite (client-side JS)
- Kategorie-Filter zeigt alle passenden Artikel ohne Seitenlimit
- Featured-Artikel: neuester Post groß und prominent herausgestellt
- Newsletter-CTA (Buttondown) im Footer-Bereich

## Blog-Artikel-Features

- Lesezeit-Anzeige (berechnet aus Wortanzahl)
- JSON-LD strukturierte Daten (Article-Schema)
- Prev/Next-Navigation zwischen Artikeln
- Newsletter-Signup nach Autor-Karte
- CTA "Gespräch vereinbaren"
- `category`-Feld in allen Artikeln (für Blog-Navigation)

## SEO & Infrastruktur

- robots.txt: Suchmaschinen + Social-Crawler erlaubt, KI-Scraper blockiert
- Sitemap: automatisch via @astrojs/sitemap (eingereicht in GSC 2026-04-03)
- RSS-Feed: /rss.xml
- JSON-LD: auf allen Blog-Artikeln
- Canonical URLs + OG-Tags auf allen Seiten
- OG-Image: absoluter URL via `new URL(image, Astro.site)` in Layout.astro

## Affiliate-Programme (Tools-Seite)

| Tool | Affiliate? | Status |
|------|-----------|--------|
| n8n | Ja (20% recurring) | Bewerbung ausstehend |
| Zapier | Ja (bis $500/Conv.) | Bewerbung ausstehend |
| IONOS | Ja (€50-75/Sale) | Bewerbung ausstehend |
| Hostinger | Ja (60% recurring) | Bewerbung läuft (2026-04-05) |
| Netlify | Ja | Bewerbung ausstehend |
| Miro | Ja | Bewerbung läuft (2026-04-05) |
| NordVPN | Ja | Affiliate-Link aktiv (2026-04-07) |
| Notion | Nein (Affiliate entfernt) | Regulärer Link |
| Canva | Nein (Affiliate entfernt) | Regulärer Link |
| Claude, ChatGPT, WhisperFlow, Obsidian, VS Code | Nein | Reguläre Links |

## Eigene Produkte

| Produkt | URL | Farbe | Status |
|---------|-----|-------|--------|
| Cookloop | cookloop.vercel.app | Grün/Emerald | Live |
| DartsIQ | dartsiq.vercel.app | Rot | Live MVP |

## Content-Strategie

- Veröffentlichungsrhythmus: 2 Artikel pro Woche (KW16–25), danach 2x/Monat
- 20 Drafts fertig, müssen schrittweise reviewed + live gestellt werden
- Themen-Cluster: Strategie, Automatisierung, Grundlagen, Branchen, Tools, SAP/Enterprise, Datenschutz, Erfahrungsberichte
- Details: `outputs/content-strategie.md`

## Offene Punkte

- [x] Ionos DNS konfiguriert → busche.cloud zeigt auf GitHub Pages (2026-04-01)
- [x] SEO-Infrastruktur (RSS, robots.txt, JSON-LD, Sitemap) — 2026-04-03
- [x] Newsletter-Formular eingebaut (Buttondown, Username: buschecloud) — 2026-04-03
- [x] /tools-Seite mit Affiliate-Infrastruktur — 2026-04-03
- [x] Google Search Console eingerichtet + Sitemap eingereicht — 2026-04-03
- [x] @tailwindcss/typography installiert + aktiviert — 2026-04-05
- [x] blog-artikel Skill + meine-stimme Skill mit Formatierungsregeln — 2026-04-05
- [x] 11 Blog-Artikel live (8 überarbeitete Drafts + 3 neue) — 2026-04-06
- [x] 20 Draft-Artikel nach Redaktionsplan KW16–25 erstellt — 2026-04-06
- [x] OG-Image Relative-URL-Bug gefixt (Layout.astro) — 2026-04-06
- [x] Blog-Kategorien + Pagination implementiert — 2026-04-06
- [x] app-bauen + mein-ki-os: Garrit Wilson / KI PIONIER Credit ergänzt — 2026-04-06
- [x] NordVPN Affiliate-Link aktiv + in tools.astro eingebunden — 2026-04-07
- [ ] Affiliate-Programme beantragen: n8n, Zapier, IONOS, Netlify
- [ ] OG-Images pro Blog-Artikel erstellen
- [ ] LinkedIn aktualisieren (Texte in `outputs/linkedin-optimierung.md`)
- [ ] 20 Draft-Artikel schrittweise reviewen + live stellen (KW16–25)
