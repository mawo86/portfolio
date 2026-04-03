# Aktuelle Daten

## Website-Projekt

| Aspekt | Status |
|--------|--------|
| Domain | busche.cloud (DNS auf GitHub Pages konfiguriert — 2026-04-01) |
| Neue Website | Live auf https://busche.cloud (+ https://mawo86.github.io/portfolio) |
| Hosting | GitHub Pages (Repo: github.com/mawo86/portfolio) |
| Tech-Stack | Astro 4 + Tailwind CSS + MDX |
| Logo | Inline-SVG in Header/Footer (kein Bilddatei-Request) |
| Kontaktformular | Formspree (xgopevdy) → marlonbusche86@gmail.com |
| Newsletter | Buttondown (Embed-Formular, noch Account nötig) |
| RSS-Feed | /rss.xml (automatisch generiert via @astrojs/rss) |
| Analytics | GoatCounter (cookieless, DSGVO-konform) |

## Sektionen auf der Website

- Hero (Badge, Headline, CTAs, Stats)
- Über mich (Text + Info-Karte mit SVG-Icons)
- Leistungen (KI-Automatisierung, KI-Beratung/Audit, Digitale Transformation)
- Tools & Tech (KI/LLMs, Automatisierung, Enterprise, Analyse)
- Projekte (ERP-Auswahl, Prozessanalyse, IT-Strategie, KI-Consulting)
- Eigene Produkte (Cookloop + DartsIQ — beide live, mit App-Link)
- Blog (6 Artikel live)
- Kontakt (Formspree-Formular)
- **Empfohlene Tools** (`/tools`) — Tool-Empfehlungen mit Affiliate-Links

## Blog-Artikel (6 live)

| Artikel | Slug | Datum | Tags |
|---------|------|-------|------|
| KI-Automatisierung im Mittelstand | ki-automatisierung-mittelstand | 2026-03-31 | KI, Automatisierung, Mittelstand |
| ChatGPT vs Claude für Unternehmen | chatgpt-vs-claude-unternehmen | 2026-04-03 | KI, Tools, Vergleich |
| 5 Zeichen für KI-geeignete Prozesse | ki-prozesse-identifizieren | 2026-04-07 | KI, Prozesse, Automatisierung |
| Mein KI-Toolkit | mein-ki-toolkit | 2026-04-14 | KI, Tools, Produktivität |
| KI-Strategie: Erste Schritte | ki-strategie-erste-schritte | 2026-04-21 | KI, Strategie, Unternehmen |
| KI trifft SAP | sap-ki-integration | 2026-04-28 | SAP, KI, Enterprise |

## Blog-Index-Seite (`/blog`)

- NYT-inspiriertes Editorial-Design (2026-03-31 redesigned)
- Editorial-Hero-Block mit persönlichem Statement und Trennlinien
- Featured-Artikel: neuester Post groß und prominent herausgestellt
- Weitere Artikel: 2-Spalten-Grid mit Trennlinien (keine Boxen)
- Interaktiver Tag-Filter (vanilla JS, client-side)
- Newsletter-CTA (Buttondown) im Footer-Bereich

## Blog-Artikel-Features

- Lesezeit-Anzeige (berechnet aus Wortanzahl)
- JSON-LD strukturierte Daten (Article-Schema)
- Prev/Next-Navigation zwischen Artikeln
- Newsletter-Signup nach Autor-Karte
- CTA "Gespräch vereinbaren"

## SEO & Infrastruktur

- robots.txt: Suchmaschinen + Social-Crawler erlaubt, KI-Scraper blockiert
- Sitemap: automatisch via @astrojs/sitemap
- RSS-Feed: /rss.xml
- JSON-LD: auf allen Blog-Artikeln
- Canonical URLs + OG-Tags auf allen Seiten

## Affiliate-Programme (Tools-Seite)

| Tool | Affiliate? | Status |
|------|-----------|--------|
| n8n | Ja (20% recurring) | Link einsetzen nach Approval |
| Zapier | Ja (bis $500/Conv.) | Link einsetzen nach Approval |
| IONOS | Ja (€50-75/Sale) | Link einsetzen nach Approval |
| Hostinger | Ja (60% recurring) | Link einsetzen nach Approval |
| Notion | Ja ($10/Signup) | Link einsetzen nach Approval |
| Canva | Ja (bis $36/Sale) | Link einsetzen nach Approval |
| Claude, ChatGPT, WhisperFlow, Obsidian, VS Code | Nein | Reguläre Links |

## Eigene Produkte

| Produkt | URL | Farbe | Status |
|---------|-----|-------|--------|
| Cookloop | cookloop.vercel.app | Grün/Emerald | Live |
| DartsIQ | dartsiq.vercel.app | Rot | Live MVP |

## Content-Strategie

- Veröffentlichungsrhythmus: 2 Artikel pro Monat
- Themen-Cluster: KI-Einstieg, Tool-Vergleiche, SAP+KI, Prozessoptimierung
- Details: `outputs/content-strategie.md`

## Offene Punkte

- [x] Ionos DNS konfiguriert → busche.cloud zeigt auf GitHub Pages (2026-04-01)
- [x] `base: '/portfolio'` aus `website/astro.config.mjs` entfernt
- [x] SEO-Infrastruktur (RSS, robots.txt, JSON-LD, Sitemap) — 2026-04-03
- [x] Newsletter-Formular eingebaut (Buttondown) — 2026-04-03
- [x] /tools-Seite mit Affiliate-Infrastruktur — 2026-04-03
- [x] 10 Blog-Drafts geschrieben (meine-stimme Stil) — 2026-04-03
- [x] Google Search Console eingerichtet + Sitemap eingereicht — 2026-04-03
- [ ] Buttondown-Account erstellen, Username in NewsletterSignup.astro eintragen
- [ ] Affiliate-Programme beantragen (n8n, Zapier, IONOS, Hostinger, Notion, Canva)
- [ ] 10 Blog-Drafts reviewen und freigeben (draft: false setzen)
- [ ] OG-Images pro Blog-Artikel erstellen
- [ ] LinkedIn aktualisieren (Texte in `outputs/linkedin-optimierung.md`)
