# Plan: Sichtbarkeit, organisches Wachstum & Affiliate-Einnahmen für busche.cloud

**Erstellt:** 2026-04-03
**Status:** Implementiert ✓
**Anforderung:** Blog-Strategie für organisches Wachstum und Community-Aufbau optimieren; Affiliate-Marketing evaluieren und umsetzen

---

## Überblick

### Was dieser Plan erreicht

Dieser Plan transformiert busche.cloud von einer statischen Portfolio-Seite mit einem einzelnen Blog-Artikel in eine wachsende Content-Plattform mit SEO-optimierter Infrastruktur, Newsletter-Funktion für Community-Aufbau und einer Affiliate-Strategie, die über Tool-Empfehlungen Nebeneinkünfte generiert — alles DSGVO-konform.

### Warum das wichtig ist

Marlons strategisches Ziel ist Sichtbarkeit und perspektivisch Selbstständigkeit im AI-Segment. Organischer Traffic über Blog-Content ist der nachhaltigste Kanal: Jeder Artikel arbeitet dauerhaft als Lead-Magnet. Eine eigene E-Mail-Liste ist dabei der einzige Kanal, den man tatsächlich besitzt (kein Algorithmus-Risiko wie bei LinkedIn/Social). Affiliate-Einnahmen sind ein natürlicher Nebeneffekt, wenn man ohnehin Tools empfiehlt, die man kennt und nutzt.

---

## Aktueller Zustand

### Relevante bestehende Struktur

| Datei/Bereich | Status |
|---|---|
| `website/src/content/blog/` | 1 Artikel live (`ki-automatisierung-mittelstand.md`) |
| `website/src/pages/blog/index.astro` | NYT-Editorial-Design mit Tag-Filter |
| `website/src/pages/blog/[...slug].astro` | Dynamische Artikel-Seiten |
| `website/src/layouts/BlogLayout.astro` | Artikel-Layout mit Autor-Karte und CTA |
| `website/src/layouts/Layout.astro` | Meta-Tags, OG, Canonical, GoatCounter Analytics |
| `website/src/content/config.ts` | Schema: title, description, date, tags, image (optional), draft |
| `website/astro.config.mjs` | Sitemap-Plugin aktiv, `site` korrekt gesetzt |
| GoatCounter | Analytics bereits eingebunden (cookieless, DSGVO-konform) |

### Lücken oder Probleme, die adressiert werden

1. **Kein RSS-Feed** — Leser können nicht abonnieren, Aggregatoren finden den Blog nicht
2. **Keine strukturierten Daten (JSON-LD)** — Google zeigt keine Rich Snippets (Autor, Datum, etc.)
3. **Kein robots.txt** — Best Practice für Crawling fehlt
4. **Keine Lesezeit-Anzeige** — Nutzer-Erwartung bei Blog-Artikeln
5. **Keine "Verwandte Artikel"-Sektion** — kein internes Linking, höhere Bounce-Rate
6. **Kein Newsletter-Signup** — kein Weg, Leser langfristig zu binden
7. **Keine Affiliate-Infrastruktur** — keine Tool-Empfehlungsseite, keine Disclosure
8. **Nur 1 Artikel** — zu wenig für SEO-Relevanz und thematische Autorität
9. **Kein `og:image` pro Artikel** — Social Shares haben kein spezifisches Vorschaubild
10. **Blog-Layout hat keinen "Nächster/Vorheriger Artikel"-Nav** — Leser verlassen die Seite nach einem Artikel

---

## Vorgeschlagene Änderungen

### Zusammenfassung der Änderungen

**Phase 1 — Technische SEO-Infrastruktur:**
- RSS-Feed hinzufügen
- JSON-LD strukturierte Daten für Blog-Artikel
- robots.txt erstellen
- Lesezeit berechnen und anzeigen
- Verwandte Artikel und Prev/Next-Navigation
- OG-Image-Generierung pro Artikel

**Phase 2 — Community & Newsletter:**
- Newsletter-Signup-Formular (Buttondown — kostenlos, DSGVO-konform, kein Tracking)
- CTA-Boxen in Blog-Artikeln und auf Blog-Index
- Datenschutzerklärung um Newsletter-Abschnitt erweitern

**Phase 3 — Affiliate-Strategie:**
- "Empfohlene Tools"-Seite erstellen
- Affiliate-Disclosure-Hinweis (Transparenz + rechtlich)
- Kontextuelle Affiliate-Links in Blog-Artikeln
- Datenschutzerklärung um Affiliate-Abschnitt erweitern

**Phase 4 — Content-Pipeline:**
- 5 SEO-optimierte Artikel-Entwürfe als Content-Grundstock
- Content-Strategie-Dokument mit Themen-Cluster und Keyword-Fokus
- Veröffentlichungsrhythmus definieren

### Neue Dateien erstellen

| Dateipfad | Zweck |
|---|---|
| `website/src/pages/rss.xml.ts` | RSS-Feed für Blog-Abonnenten und Aggregatoren |
| `website/public/robots.txt` | Crawling-Anweisungen für Suchmaschinen |
| `website/src/components/JsonLd.astro` | Wiederverwendbare JSON-LD-Komponente für strukturierte Daten |
| `website/src/components/ReadingTime.astro` | Lesezeit-Berechnung und -Anzeige |
| `website/src/components/RelatedPosts.astro` | Verwandte Artikel am Ende jedes Posts |
| `website/src/components/NewsletterSignup.astro` | Newsletter-Anmeldeformular (Buttondown) |
| `website/src/components/AffiliateDisclosure.astro` | Transparenz-Hinweis für Affiliate-Links |
| `website/src/pages/tools.astro` | "Empfohlene Tools"-Seite mit Affiliate-Links |
| `website/src/content/blog/chatgpt-vs-claude-unternehmen.md` | Artikel 2: Tool-Vergleich (Affiliate-relevant) |
| `website/src/content/blog/ki-prozesse-identifizieren.md` | Artikel 3: How-to-Guide |
| `website/src/content/blog/mein-ki-toolkit.md` | Artikel 4: Persönliches Setup — alle Tools die Marlon täglich nutzt |
| `website/src/content/blog/ki-strategie-erste-schritte.md` | Artikel 5: Einsteigerguide |
| `website/src/content/blog/sap-ki-integration.md` | Artikel 6: Nischen-Expertise |
| `outputs/content-strategie.md` | Content-Strategie mit Themen-Cluster, Keywords, Rhythmus |

### Zu ändernde Dateien

| Dateipfad | Änderungen |
|---|---|
| `website/src/layouts/BlogLayout.astro` | JSON-LD einbinden, Lesezeit anzeigen, verwandte Artikel + Prev/Next-Nav hinzufügen, Newsletter-CTA ergänzen |
| `website/src/layouts/Layout.astro` | OG-Image-Handling verbessern (pro Artikel) |
| `website/src/pages/blog/[...slug].astro` | Post-Body an BlogLayout für Lesezeit-Berechnung übergeben, Prev/Next-Posts mitgeben |
| `website/src/pages/blog/index.astro` | Newsletter-CTA in Footer-Bereich ergänzen |
| `website/src/content/config.ts` | `readingTime`-Feld (computed, nicht im Schema nötig — wird zur Buildzeit berechnet) |
| `website/src/pages/index.astro` | Kleinen Newsletter-CTA im Blog-Teaser-Bereich ergänzen |
| `website/astro.config.mjs` | RSS-Integration hinzufügen (falls Package nötig) |
| `website/package.json` | `@astrojs/rss` Dependency hinzufügen |
| `CLAUDE.md` | Neue Seiten und Komponenten dokumentieren |
| `context/current-data.md` | Offene Punkte und neue Sektionen aktualisieren |

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **Buttondown als Newsletter-Provider**: Kostenlos bis 100 Subscriber, kein Tracking, DSGVO-konform (EU-Server-Option), einfache API. Kein Mailchimp (US-Server, Cookie-Banner-Probleme, überdimensioniert).

2. **Affiliate-Tools auf eigener Seite statt nur in Artikeln**: Eine dedizierte `/tools`-Seite rankt eigenständig für "beste KI-Tools" und ähnliche Keywords, dient als Hub für alle Empfehlungen und ist leichter zu pflegen als Links in dutzenden Artikeln.

3. **Tool-Vergleichsartikel als Affiliate-Vehikel**: Artikel wie "ChatGPT vs Claude für Unternehmen" oder "Make vs Zapier" haben hohes Suchvolumen und natürliche Affiliate-Einbindung — der Leser sucht aktiv nach Kaufentscheidungshilfe.

4. **Deutsche Inhalte statt Englisch**: Der deutschsprachige KI-Markt ist unterversorgt. Weniger Konkurrenz, direkter Zugang zur Zielgruppe (deutscher Mittelstand). Englische Artikel als Option für später.

5. **Content-Cluster statt Einzelartikel**: Artikel werden thematisch gruppiert (KI-Einstieg, Tool-Vergleiche, SAP+KI, Prozessoptimierung). Das baut topische Autorität bei Google auf und ermöglicht starkes internes Linking.

6. **Kein Kommentar-System**: Zu früh. Bei 1-5 Artikeln und wenig Traffic erzeugen leere Kommentarsektionen einen negativen Eindruck. Stattdessen "Feedback per Mail"-CTA. Kommentare (z.B. Giscus) können später kommen.

7. **OG-Images als statische Dateien, nicht dynamisch generiert**: Für den aktuellen Umfang (5-10 Artikel) ist ein dynamischer OG-Image-Generator Overkill. Stattdessen: einfache Canva/Figma-Templates oder ein Script, das pro Artikel ein Bild generiert, das als `public/blog/`-Asset abgelegt wird.

### Betrachtete Alternativen

| Alternative | Verworfen weil |
|---|---|
| ConvertKit/Mailchimp für Newsletter | Überdimensioniert, US-Server, Cookie-Banner nötig |
| Substack statt eigenem Blog | Kein Kontrolle über Design/SEO, kein Affiliate möglich |
| Amazon Affiliate | Niedrige Provisionen (1-3%), passt nicht zur Zielgruppe (B2B SaaS) |
| Englischer Content | Höhere Konkurrenz, andere Zielgruppe als deutscher Mittelstand |
| Automatische OG-Image-Generierung (satori/puppeteer) | Build-Komplexität zu hoch für den Nutzen bei wenigen Artikeln |

### Offene Fragen

1. **Buttondown-Account**: Marlon muss einen Buttondown-Account erstellen und den Username/API-Key bereitstellen. Kostenlos unter buttondown.com.
2. **Affiliate-Programme**: Welche Tools nutzt Marlon tatsächlich und kann authentisch empfehlen? Der Plan schlägt vor, aber Marlon sollte die finale Liste bestätigen.
3. **Veröffentlichungsrhythmus**: 2x pro Monat ist realistisch bei Vollzeitjob. Marlon sollte bestätigen, ob das machbar ist.
4. **OG-Images**: Sollen einfache Text-auf-Gradient-Bilder reichen, oder hat Marlon Zugang zu Canva/Figma für hochwertigere Vorschaubilder?

---

## Affiliate-Bewertung: Was ist realistisch?

### Empfohlene Affiliate-Programme

| Programm | Provision | Cookie | Passt weil |
|---|---|---|---|
| **Make.com** (ehem. Integromat) | 100 % des ersten Monats, dann 20 % recurring | 120 Tage | Kernthema Automatisierung, hoher ARPU |
| **Zapier** | Bis zu $500 pro Conversion | 90 Tage | Automatisierungs-Vergleiche sind Kern-Content |
| **n8n Cloud** | 20 % recurring | 90 Tage | Open-Source-Alternative, tech-affine Leser |
| **Notion** | Bis zu $10/Signup | 90 Tage | Weit verbreitet, niedriger Einstieg |
| **DigitalOcean** | $200 pro zahlenden Kunden | 30 Tage | Hosting-Empfehlungen in technischen Artikeln |
| **NordVPN / Surfshark** | €10-40 pro Sale | 30 Tage | Datenschutz-Kontext (DSGVO-Artikel) |

### Nicht empfohlen

| Programm | Warum nicht |
|---|---|
| Amazon Associates | 1-3 % Provision, passt nicht zu B2B-Zielgruppe |
| OpenAI/Anthropic | Keine Affiliate-Programme (Stand April 2026) |
| Google Cloud/AWS | Extrem komplizierte Programme, lange Approval |

### Erwartete Einnahmen (realistisch)

Bei 500-1.000 monatlichen Blog-Besuchern (erreichbar in 6-12 Monaten):
- **Konversionsrate**: 0,5-1 % für Tool-Empfehlungen
- **Erwartung**: €50-200/Monat bei Make.com/Zapier-Fokus
- **Langfristig** (2.000+ Besucher): €200-500/Monat möglich

Affiliate ist ein Marathon, kein Sprint. Der eigentliche Wert liegt in Glaubwürdigkeit und Content-Tiefe, nicht in der Provision.

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: RSS-Feed hinzufügen

RSS ist die Grundlage dafür, dass Blog-Inhalte von Aggregatoren, Podcast-Apps und Newsletter-Tools automatisch gefunden werden. Viele SEO-Tools und Verzeichnisse crawlen RSS-Feeds.

**Aktionen:**

- `@astrojs/rss` als Dependency in `website/package.json` hinzufügen und installieren
- `website/src/pages/rss.xml.ts` erstellen:
  ```typescript
  import rss from '@astrojs/rss';
  import { getCollection } from 'astro:content';

  export async function GET(context) {
    const posts = (await getCollection('blog', ({ data }) => !data.draft))
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
      title: 'Busche Cloud — Blog',
      description: 'KI-Automatisierung, digitale Transformation und was davon wirklich funktioniert.',
      site: context.site,
      items: posts.map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
      customData: '<language>de-de</language>',
    });
  }
  ```
- RSS-Link im `<head>` von `Layout.astro` ergänzen: `<link rel="alternate" type="application/rss+xml" title="Busche Cloud Blog" href="/rss.xml" />`
- RSS-Icon-Link im Footer ergänzen (kleines SVG-Icon neben bestehenden Links)

**Betroffene Dateien:**

- `website/package.json` (neue Dependency)
- `website/src/pages/rss.xml.ts` (neue Datei)
- `website/src/layouts/Layout.astro` (RSS `<link>` im Head)
- `website/src/components/Footer.astro` (RSS-Link)

---

### Schritt 2: robots.txt erstellen

**Aktionen:**

- `website/public/robots.txt` erstellen — Suchmaschinen + Social-Crawler erlauben, KI-Scraper blockieren:
  ```
  # Suchmaschinen erlauben
  User-agent: Googlebot
  Allow: /

  User-agent: Bingbot
  Allow: /

  User-agent: DuckDuckBot
  Allow: /

  User-agent: Yandex
  Allow: /

  # Social-Media-Crawler erlauben (Link-Vorschau)
  User-agent: facebookexternalhit
  Allow: /

  User-agent: Twitterbot
  Allow: /

  User-agent: LinkedInBot
  Allow: /

  User-agent: WhatsApp
  Allow: /

  User-agent: TelegramBot
  Allow: /

  # KI-Scraper blockieren
  User-agent: GPTBot
  Disallow: /

  User-agent: CCBot
  Disallow: /

  User-agent: Google-Extended
  Disallow: /

  User-agent: Bytespider
  Disallow: /

  User-agent: anthropic-ai
  Disallow: /

  User-agent: ClaudeBot
  Disallow: /

  User-agent: cohere-ai
  Disallow: /

  User-agent: PerplexityBot
  Disallow: /

  # Alle anderen blockieren
  User-agent: *
  Disallow: /

  Sitemap: https://busche.cloud/sitemap-index.xml
  ```

**Betroffene Dateien:**

- `website/public/robots.txt` (neue Datei)

---

### Schritt 3: JSON-LD strukturierte Daten für Blog-Artikel

Strukturierte Daten helfen Google, Artikel als solche zu erkennen und Rich Snippets anzuzeigen (Autor, Datum, Beschreibung in den Suchergebnissen).

**Aktionen:**

- `website/src/components/JsonLd.astro` erstellen — Komponente die ein `<script type="application/ld+json">` rendert
- Schema: `Article` mit `author` (Person: Marlon Busche), `datePublished`, `headline`, `description`, `publisher` (Organization: Busche Cloud)
- In `BlogLayout.astro` im `<head>` einbinden (über Layout.astro Props oder direkt)
- Auch `WebSite`-Schema auf der Startseite ergänzen (optional, niedrige Priorität)

**JSON-LD-Struktur für Artikel:**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{title}}",
  "description": "{{description}}",
  "datePublished": "{{date ISO}}",
  "author": {
    "@type": "Person",
    "name": "Marlon Busche",
    "url": "https://busche.cloud"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Busche Cloud",
    "url": "https://busche.cloud"
  }
}
```

**Betroffene Dateien:**

- `website/src/components/JsonLd.astro` (neue Datei)
- `website/src/layouts/BlogLayout.astro` (JSON-LD einbinden)

---

### Schritt 4: Lesezeit und Prev/Next-Navigation

**Aktionen:**

- Lesezeit-Berechnung: `Math.ceil(wordCount / 200)` Minuten (200 Wörter/Min für Deutsch)
- In `[...slug].astro`: Post-Body (`post.body`) an BlogLayout übergeben + vorherigen/nächsten Post ermitteln
- In `BlogLayout.astro`:
  - Lesezeit neben Datum anzeigen (z.B. "5 Min. Lesezeit")
  - Prev/Next-Navigation unter dem CTA-Block (einfache Links mit Titel)
- Verwandte Artikel (`RelatedPosts.astro`): Posts mit überlappenden Tags finden, maximal 2 anzeigen. Erst einbinden, wenn es ≥3 Artikel gibt (vorher sinnlos). Als Komponente vorbereiten, aber initial auskommentiert.

**Betroffene Dateien:**

- `website/src/pages/blog/[...slug].astro` (Body und Prev/Next-Daten übergeben)
- `website/src/layouts/BlogLayout.astro` (Lesezeit, Prev/Next-Nav anzeigen)
- `website/src/components/RelatedPosts.astro` (neue Datei, vorbereitet)

---

### Schritt 5: Newsletter-Signup mit Buttondown

Buttondown ist ein minimalistischer Newsletter-Service. Kostenlos bis 100 Subscriber, DSGVO-konform, kein Tracking. Die Integration ist ein einfaches HTML-Formular.

**Aktionen:**

- `website/src/components/NewsletterSignup.astro` erstellen:
  - E-Mail-Input + Submit-Button
  - Action: `https://buttondown.com/api/emails/embed-subscribe/{username}` (Marlon muss Username einsetzen)
  - DSGVO-Checkbox: "Ich bin einverstanden, E-Mails zu erhalten. Abmeldung jederzeit möglich."
  - Design: Passt zum bestehenden Dark-Theme (border-white/10, bg-white/2, etc.)
- Newsletter-CTA einbauen an 3 Stellen:
  1. `blog/index.astro`: Im Footer-CTA-Bereich (bestehenden "Kontakt aufnehmen"-CTA ergänzen/ersetzen)
  2. `BlogLayout.astro`: Nach dem Autor-Card, vor dem "Interesse geweckt?"-CTA
  3. `index.astro`: Im Blog-Teaser-Bereich auf der Startseite (subtil, nicht aufdringlich)
- Datenschutzerklärung ergänzen: Abschnitt "Newsletter" mit Hinweis auf Buttondown, Zweck, Abmeldemöglichkeit

**Betroffene Dateien:**

- `website/src/components/NewsletterSignup.astro` (neue Datei)
- `website/src/pages/blog/index.astro` (Newsletter-CTA im Footer)
- `website/src/layouts/BlogLayout.astro` (Newsletter-CTA nach Autor-Karte)
- `website/src/pages/index.astro` (Newsletter-CTA im Blog-Teaser)
- `website/src/pages/datenschutz.astro` (Newsletter-Abschnitt ergänzen)

---

### Schritt 6: Affiliate-Infrastruktur aufbauen

**Aktionen:**

- `website/src/components/AffiliateDisclosure.astro` erstellen:
  - Kleiner Hinweistext: "Einige Links auf dieser Seite sind Affiliate-Links. Wenn du darüber ein Tool kaufst oder abonnierst, erhalte ich eine kleine Provision — für dich ändert sich am Preis nichts. Ich empfehle nur Tools, die ich selbst nutze oder getestet habe."
  - Visuell dezent: Icon (z.B. Info-SVG) + Text in grauer Box
- `website/src/pages/tools.astro` erstellen — "Empfohlene Tools"-Seite:
  - Header: "Tools, die ich empfehle" + kurzer Intro-Text
  - Kategorien: KI & LLMs, Automatisierung, Hosting & Infrastruktur, Produktivität
  - Pro Tool: Name, kurze Beschreibung (2-3 Sätze warum Marlon es empfiehlt), Link (Affiliate wo vorhanden), visuelles Tag "Affiliate" bei Affiliate-Links
  - AffiliateDisclosure-Komponente oben auf der Seite
  - Design: Grid-Layout im bestehenden Dark-Theme-Stil
- Header-Navigation: Link zu `/tools` ergänzen
- Datenschutzerklärung: Abschnitt "Affiliate-Links" ergänzen
- Impressum: Hinweis auf Affiliate-Einnahmen (werblicher Inhalt)

**Platzhalter-Tools für die Seite** (Marlon bestätigt/ergänzt):

| Kategorie | Tool | Affiliate? |
|---|---|---|
| Automatisierung | Zapier | Ja (bis $500/Conversion) |
| Automatisierung | n8n | Ja (20% recurring) |
| KI & LLMs | Claude (Anthropic) | Nein |
| KI & LLMs | ChatGPT (OpenAI) | Nein |
| Hosting | IONOS | Ja (variabel, €50-75/Sale) |
| Hosting | Hostinger | Ja (60% recurring) |
| Entwicklung | VS Code | Nein |
| Produktivität | Notion | Ja ($10/Signup) |
| Produktivität | Obsidian | Nein |
| Produktivität | Canva | Ja (bis $36/Sale) |
| Produktivität | WhisperFlow | Nein |

**Betroffene Dateien:**

- `website/src/components/AffiliateDisclosure.astro` (neue Datei)
- `website/src/pages/tools.astro` (neue Datei)
- `website/src/components/Header.astro` (Nav-Link "Tools" hinzufügen)
- `website/src/pages/datenschutz.astro` (Affiliate-Abschnitt)
- `website/src/pages/impressum.astro` (Werbliche Inhalte Hinweis)

---

### Schritt 7: Content-Strategie-Dokument erstellen

Bevor Artikel geschrieben werden, braucht es eine klare Strategie: Welche Themen-Cluster, welche Keywords, welcher Rhythmus.

**Aktionen:**

- `outputs/content-strategie.md` erstellen mit:
  - **Themen-Cluster** (jeweils mit Pillar-Artikel + Supporting-Artikeln):
    1. **KI-Einstieg für Unternehmen**: Wie anfangen, was beachten, Kosten, ROI
    2. **Tool-Vergleiche**: ChatGPT vs Claude, Make vs Zapier, AI-Coding-Tools
    3. **SAP + KI**: Nischen-Expertise, wenig Konkurrenz
    4. **Prozessoptimierung mit KI**: Konkretes How-to, Praxisbeispiele
    5. **KI-Strategie & Change**: Für Entscheider, strategisch
  - **Keyword-Fokus pro Artikel** (Long-Tail, deutsch):
    - "KI Automatisierung Mittelstand" ✓ (existiert)
    - "ChatGPT vs Claude Unternehmen"
    - "KI Prozesse identifizieren Unternehmen"
    - "Make vs Zapier Vergleich deutsch"
    - "KI Strategie Unternehmen erste Schritte"
    - "SAP KI Integration Praxis"
  - **Veröffentlichungsrhythmus**: 2 Artikel pro Monat (Woche 1 und Woche 3)
  - **Content-Formate**:
    - How-to-Guides (50% — evergreen, SEO-stark)
    - Tool-Vergleiche (25% — Affiliate-relevant, hohe Suchintention)
    - Meinungsstücke/Insights (25% — Thought Leadership, LinkedIn-shareable)
  - **Promotion-Checkliste pro Artikel**:
    - LinkedIn-Post mit Zusammenfassung
    - An Newsletter-Liste senden
    - In thematisch passenden Communities teilen (Reddit r/de_EDV, LinkedIn-Gruppen)
    - Internes Linking zu/von bestehenden Artikeln aktualisieren

**Betroffene Dateien:**

- `outputs/content-strategie.md` (neue Datei)

---

### Schritt 8: 5 Blog-Artikel als Content-Grundstock schreiben

Ein Blog mit nur einem Artikel wirkt nicht wie eine aktive Content-Plattform. 5-6 Artikel (inkl. des bestehenden) schaffen eine kritische Masse für SEO-Relevanz und zeigen thematische Tiefe.

**Aktionen:**

Folgende Artikel erstellen (in `website/src/content/blog/`), jeweils 800-1.200 Wörter, Marlons Schreibstil (direkt, praxisnah, keine Buzzwords):

1. **`chatgpt-vs-claude-unternehmen.md`** — "ChatGPT vs Claude: Welches KI-Modell passt zu deinem Unternehmen?"
   - Tags: KI, Tools, Vergleich, Unternehmen
   - Fokus: Praxisvergleich beider Modelle für Business-Anwendungen (nicht technisch, sondern Use-Case-basiert)
   - Affiliate: Kein direktes Affiliate, aber Link zur /tools-Seite
   - Keywords: "ChatGPT vs Claude Unternehmen", "KI Modell Vergleich Business"

2. **`ki-prozesse-identifizieren.md`** — "5 Zeichen, dass ein Prozess in deinem Unternehmen nach KI schreit"
   - Tags: KI, Prozesse, Automatisierung, Anleitung
   - Fokus: Konkretes Framework um KI-geeignete Prozesse zu erkennen
   - Internes Linking: Verweist auf Artikel 1 (ki-automatisierung-mittelstand)
   - Keywords: "KI Prozesse identifizieren", "KI geeignete Prozesse"

3. **`mein-ki-toolkit.md`** — "Mein KI-Toolkit: Diese Tools nutze ich wirklich jeden Tag"
   - Tags: KI, Tools, Produktivität, Setup
   - Fokus: Persönlicher Einblick in Marlons tägliches Setup (Claude, ChatGPT, n8n, Zapier, WhisperFlow, Notion, Obsidian, Canva, VS Code). Warum welches Tool, wofür, was hat sich bewährt.
   - Affiliate: Natürliche Links zur /tools-Seite
   - Keywords: "KI Tools Alltag", "KI Toolkit Produktivität", "beste KI Tools"

4. **`ki-strategie-erste-schritte.md`** — "KI-Strategie für dein Unternehmen: Wo du wirklich anfangen solltest"
   - Tags: KI, Strategie, Unternehmen, Einstieg
   - Fokus: 4-Schritte-Framework für Unternehmen die mit KI starten wollen
   - Internes Linking: Verweist auf alle anderen Artikel als Vertiefung
   - Keywords: "KI Strategie Unternehmen", "KI Einstieg Unternehmen"

5. **`sap-ki-integration.md`** — "KI trifft SAP: Was heute schon funktioniert und wo die Reise hingeht"
   - Tags: SAP, KI, Enterprise, Integration
   - Fokus: Marlons Nischen-Expertise. Konkretes Beispiel: Wie KI SAP-Daten auswerten kann
   - Keywords: "SAP KI Integration", "KI SAP Automatisierung"
   - Nischen-Vorteil: Sehr wenig deutschsprachiger Content zu diesem Thema

**Schreibstil** (abgeleitet vom bestehenden Artikel):
- Du-Anrede, kurze Absätze, konkrete Beispiele
- Keine Floskeln, kein "In der heutigen Zeit..."
- Jeder Artikel endet mit einem konkreten Handlungsschritt
- Überschriften als Fragen oder Statements, die neugierig machen

**Betroffene Dateien:**

- `website/src/content/blog/chatgpt-vs-claude-unternehmen.md` (neue Datei)
- `website/src/content/blog/ki-prozesse-identifizieren.md` (neue Datei)
- `website/src/content/blog/mein-ki-toolkit.md` (neue Datei)
- `website/src/content/blog/ki-strategie-erste-schritte.md` (neue Datei)
- `website/src/content/blog/sap-ki-integration.md` (neue Datei)

---

### Schritt 9: CLAUDE.md und Kontext-Dateien aktualisieren

**Aktionen:**

- `CLAUDE.md` aktualisieren:
  - Neue Sektionen/Seiten dokumentieren (/tools, RSS, Newsletter)
  - Blog-Artikel-Anzahl aktualisieren
  - Diesen Plan als "erledigt" markieren
- `context/current-data.md` aktualisieren:
  - Neue Sektionen (Tools-Seite, Newsletter)
  - Blog-Artikel-Anzahl
  - Affiliate-Programme
  - Offene Punkte aktualisieren

**Betroffene Dateien:**

- `CLAUDE.md`
- `context/current-data.md`

---

## Verbindungen & Abhängigkeiten

### Dateien, die diesen Bereich referenzieren

- `website/src/pages/index.astro` — zeigt Blog-Teaser (letzte 3 Artikel), muss Newsletter-CTA bekommen
- `website/src/components/Header.astro` — Navigation braucht /tools Link
- `website/src/components/Footer.astro` — RSS-Link
- `website/src/pages/datenschutz.astro` — Newsletter + Affiliate-Abschnitte
- `website/src/pages/impressum.astro` — Affiliate-Disclosure

### Nötige Updates für Konsistenz

- `CLAUDE.md` — Workspace-Struktur aktualisieren
- `context/current-data.md` — Sektionen-Liste, offene Punkte

### Auswirkungen auf bestehende Workflows

- Neue Artikel können mit dem bestehenden Workflow geschrieben werden (Markdown in `src/content/blog/`)
- Newsletter erfordert manuellen Export/Versand bis die Liste größer ist
- Affiliate-Links müssen bei Programmänderungen manuell aktualisiert werden

---

## Implementierungs-Reihenfolge

Die Schritte sind nach Abhängigkeit und Impact geordnet:

1. **Schritte 1-4** (technische Infrastruktur) können parallel implementiert werden
2. **Schritt 5** (Newsletter) benötigt Buttondown-Username von Marlon — kann mit Platzhalter vorbereitet werden
3. **Schritt 6** (Affiliate) benötigt Tool-Bestätigung von Marlon — kann mit Platzhalter-Liste starten
4. **Schritt 7** (Content-Strategie) sollte vor Schritt 8 fertig sein
5. **Schritt 8** (Artikel schreiben) ist der zeitaufwändigste Schritt
6. **Schritt 9** (Dokumentation) kommt zum Schluss

---

## Validierungs-Checkliste

- [ ] RSS-Feed unter busche.cloud/rss.xml erreichbar und valide
- [ ] robots.txt unter busche.cloud/robots.txt erreichbar
- [ ] JSON-LD in Blog-Artikeln mit Google Rich Results Test validiert
- [ ] Lesezeit wird auf jedem Artikel angezeigt
- [ ] Newsletter-Formular funktioniert (Buttondown-Submission)
- [ ] /tools-Seite erreichbar mit Affiliate-Disclosure
- [ ] Header-Navigation enthält "Tools"-Link
- [ ] Datenschutzerklärung enthält Newsletter- und Affiliate-Abschnitte
- [ ] Alle 5 neuen Artikel rendern korrekt und sind im Blog-Index sichtbar
- [ ] Internes Linking zwischen Artikeln funktioniert
- [ ] `npm run build` läuft fehlerfrei durch
- [ ] Sitemap enthält alle neuen Seiten
- [ ] CLAUDE.md spiegelt den aktuellen Zustand wider

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. **6 Blog-Artikel** live sind (1 bestehender + 5 neue), mit funktionierender SEO-Infrastruktur (RSS, JSON-LD, Lesezeit, robots.txt)
2. **Newsletter-Signup** auf Blog-Index, Artikel-Seiten und Startseite eingebaut ist und Submissions bei Buttondown ankommen
3. **/tools-Seite** mit mindestens 6 Tool-Empfehlungen live ist, davon mindestens 3 mit Affiliate-Links
4. **Content-Strategie-Dokument** in `outputs/` vorhanden ist mit Themen-Cluster und Veröffentlichungsplan für die nächsten 3 Monate
5. **Alle rechtlichen Hinweise** (Affiliate-Disclosure, Datenschutz-Ergänzungen) sind eingebaut

---

## Notizen

- **Buttondown-Account**: Marlon muss sich vor Implementierung von Schritt 5 unter buttondown.com registrieren. Kostenloser Plan reicht. Der Username wird im Formular-Action-URL verwendet.
- **Affiliate-Anmeldung**: Für Make.com, Zapier und n8n muss Marlon sich separat bei deren Affiliate-Programmen anmelden. Die Approval dauert typischerweise 1-5 Werktage. Links können initial als reguläre Links gesetzt und nach Approval durch Affiliate-Links ersetzt werden.
- **GoatCounter**: Bereits eingebunden — kann genutzt werden, um Artikel-Performance zu tracken und die Content-Strategie anzupassen.
- **Datum-Taktik für neue Artikel**: Die 5 neuen Artikel nicht alle mit demselben Datum veröffentlichen. Stattdessen über 2-3 Wochen verteilen (z.B. 2 sofort, dann wöchentlich 1), damit der Blog organisch gewachsen wirkt.
- **Nächste Schritte nach diesem Plan**: Google Search Console einrichten (Sitemap einreichen, Indexierung überwachen), LinkedIn-Promotion-Workflow etablieren.
