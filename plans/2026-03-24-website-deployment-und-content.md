# Plan: GitHub Pages Deployment + Content-Erweiterung

**Erstellt:** 2026-03-24
**Status:** Entwurf
**Anforderung:** Website auf GitHub Pages deployen, Ionos-Domain verknüpfen, neue Sektionen (Projekte, Kundenreferenzen, Tools) mit echten Texten einbauen.

---

## Überblick

### Was dieser Plan erreicht

Die Astro-Website wird vollständig auf GitHub Pages deployed und über die Domain busche.cloud erreichbar gemacht. Gleichzeitig werden drei neue Inhaltsbereiche ergänzt: eine detaillierte Projektkarte, eine Kundenreferenzen-Sektion und eine Tools-Sektion. Alle Texte werden mit echtem Inhalt befüllt.

### Warum das wichtig ist

Die Website ist das zentrale Instrument für Marlons persönliche Marke und Neukundengewinnung. Ohne Deployment und echte Inhalte hat sie keinen Wert. GitHub Pages ist kostenlos, professionell und einfach über Git-Workflow zu aktualisieren.

---

## Aktueller Zustand

### Relevante bestehende Struktur

```
website/
├── astro.config.mjs         — site: 'https://busche.cloud' bereits gesetzt
├── src/pages/
│   ├── index.astro          — Hero, About, Leistungen, Projekte (Platzhalter), Blog, Kontakt
│   ├── blog/index.astro
│   ├── blog/[...slug].astro
│   ├── impressum.astro      — Platzhalter-Adresse
│   └── datenschutz.astro
├── src/content/blog/
│   └── ki-automatisierung-2025.md  — Beispielartikel
└── public/
    ├── logo.png
    └── icon_transparent_bg.png
```

### Lücken oder Probleme

- Kein GitHub Actions Workflow → kein automatisches Deployment
- Kein CNAME-File → keine Custom Domain auf GitHub Pages
- Projekte, Referenzen, Tools sind Platzhalter oder nicht vorhanden
- Kontaktformular nutzt Netlify-Attribut (muss für GitHub Pages angepasst werden)

---

## Vorgeschlagene Änderungen

### Zusammenfassung

- GitHub Actions Workflow für automatisches Deployment
- CNAME-File für busche.cloud
- Astro-Config für GitHub Pages anpassen
- Neue Sektion: Projekte (erweitert, mit Content Collection)
- Neue Sektion: Kundenreferenzen/Testimonials
- Neue Sektion: Tools & Tech-Stack
- Kontaktformular auf Formspree umstellen (funktioniert überall)
- Echte Texte in index.astro

### Neue Dateien erstellen

| Dateipfad | Zweck |
|-----------|-------|
| `website/.github/workflows/deploy.yml` | GitHub Actions: bei Push auf main → Astro bauen → gh-pages Branch deployen |
| `website/public/CNAME` | Custom Domain für GitHub Pages (Inhalt: `busche.cloud`) |
| `website/src/content/projekte/` | Content Collection für Projektdetails (Markdown) |
| `website/src/content/projekte/ki-kundenservice.md` | Projekt 1 |
| `website/src/content/projekte/sap-prozessanalyse.md` | Projekt 2 |
| `website/src/content/projekte/digitale-transformation-mittelstand.md` | Projekt 3 |

### Zu ändernde Dateien

| Dateipfad | Änderungen |
|-----------|------------|
| `website/astro.config.mjs` | `base`-Property für GitHub Pages, `@astrojs/sitemap` ergänzen |
| `website/src/content/config.ts` | Schema für `projekte`-Collection ergänzen |
| `website/src/pages/index.astro` | Projekte aus Collection laden, Referenzen-Sektion, Tools-Sektion einbauen, echte Texte |
| `website/src/pages/impressum.astro` | Echte Kontaktdaten — Marlon gibt ein |
| `website/package.json` | `@astrojs/sitemap` als Dependency |

### Zu löschende Dateien

Keine.

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **GitHub Pages statt Netlify**: Kostenlos, kein Vendor-Lock-in, direkte Git-Integration. Kontaktformular via Formspree (kostenlos, 50 Submissions/Monat).
2. **Projekte als Content Collection**: Ermöglicht spätere Detailseiten pro Projekt ohne Index-Umbau.
3. **Referenzen als statische Komponente**: Testimonials ändern sich selten → direkt in index.astro, keine Collection nötig.
4. **Tools als Icon-Grid**: Visuell ansprechend, schnell zu erfassen, zeigt technische Breite.
5. **Formspree für Kontaktformular**: Kostenlos, einfach, funktioniert auf jedem statischen Hosting.

### Betrachtete Alternativen

- Netlify: Einfacher für Formulare, aber GitHub Pages passt besser zum git-basierten Workflow
- Vercel: Auch gut, aber GitHub Pages ist kostenlos und ausreichend für statische Site

### Offene Fragen

- **GitHub-Username?** → Wird für den Actions-Workflow benötigt (Deploy-Target)
- **Formspree-Account?** → E-Mail-Adresse für Formular-Submissions
- **Echte Kundennamen für Referenzen?** → Oder anonymisiert / mit Initialen?
- **Profilfoto?** → Pfad zur Bilddatei für About-Sektion

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: GitHub Pages Deployment konfigurieren

Astro für statisches Output auf GitHub Pages vorbereiten. Da die Domain direkt auf den Apex (`busche.cloud`) zeigt (kein Unterverzeichnis), bleibt `base` leer — nur `site` und der Workflow werden angepasst.

**Aktionen:**
- `@astrojs/sitemap` zu package.json hinzufügen
- `astro.config.mjs`: sitemap-Integration ergänzen
- `.github/workflows/deploy.yml` erstellen mit Node 20, `npm ci`, `npm run build`, Deploy auf `gh-pages` Branch via `peaceiris/actions-gh-pages`
- `public/CNAME` mit Inhalt `busche.cloud` erstellen

**Betroffene Dateien:**
- `website/package.json`
- `website/astro.config.mjs`
- `website/.github/workflows/deploy.yml`
- `website/public/CNAME`

---

### Schritt 2: Kontaktformular auf Formspree umstellen

Das bestehende Formular nutzt `data-netlify="true"` — das funktioniert nur auf Netlify. Formspree ist die einfachste Alternative für statische Sites.

**Aktionen:**
- Formular-Action in `index.astro` auf `https://formspree.io/f/FORM_ID` ändern (Platzhalter — Marlon erstellt Account und trägt ID ein)
- `data-netlify` und Hidden-Input entfernen
- Kurze Anleitung als Kommentar im Code hinterlassen

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 3: Projekte Content Collection anlegen

Projekte als strukturierte Markdown-Dateien, sodass sie später auch als Einzelseiten ausbaubar sind.

**Aktionen:**
- Schema in `config.ts` ergänzen: `title`, `description`, `tags`, `status`, `highlight` (bool für Featured), `result` (Kurzfazit)
- 3 Projektdateien anlegen mit echtem Inhalt basierend auf Marlons Hintergrund

**Betroffene Dateien:**
- `website/src/content/config.ts`
- `website/src/content/projekte/ki-kundenservice.md`
- `website/src/content/projekte/sap-prozessanalyse.md`
- `website/src/content/projekte/digitale-transformation-mittelstand.md`

---

### Schritt 4: Referenzen-Sektion einbauen

Testimonials/Kundenreferenzen als visuell starke Sektion zwischen Projekte und Blog. Zitate mit Rolle, ggf. anonymisiert.

**Aktionen:**
- Referenzen-Array direkt in `index.astro` definieren (kein CMS nötig)
- Design: Karten mit Zitat, Name/Rolle, Branche — konsistent zum bestehenden Card-Stil
- Sektion nach `#projekte`, vor Blog einfügen

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 5: Tools & Tech-Stack Sektion einbauen

Zeigt Expertise durch bekannte Tool-Logos/Namen. Positionierung: zwischen Leistungen und Projekte.

**Aktionen:**
- Icon-Grid mit Tool-Namen und Kategorien (KI/LLM, Automatisierung, Enterprise, Cloud)
- SVG-Icons oder Text-Badges — konsistent mit bestehendem Design
- Tools: GPT-4/Claude, Python, LangChain, SAP, Azure, n8n, Power Automate, Zapier, etc.

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 6: Texte verfeinern und echte Inhalte eintragen

Alle Platzhalter-Texte durch echte, überzeugende Inhalte ersetzen.

**Aktionen:**
- Hero: Headline und Subline schärfen
- About: Persönlichen Text ausbauen
- Stats: Realistische Zahlen (Jahre Erfahrung, Projekte, etc.)
- Projekte: Echte Beschreibungen aus Content Collection laden

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 7: Ionos Domain-Verknüpfung (Anleitung)

Keine Code-Änderung — Konfiguration in Ionos und GitHub.

**Schritte für Marlon:**
1. GitHub Repo erstellen: `<username>.github.io` oder beliebiger Name
2. Code pushen, GitHub Pages aktivieren (Source: `gh-pages` Branch)
3. In GitHub Pages Settings: Custom Domain `busche.cloud` eintragen
4. Bei Ionos: DNS-Einträge setzen:
   - A-Record `@` → `185.199.108.153`
   - A-Record `@` → `185.199.109.153`
   - A-Record `@` → `185.199.110.153`
   - A-Record `@` → `185.199.111.153`
   - CNAME `www` → `<username>.github.io`
5. ~30 Minuten warten, HTTPS wird automatisch via Let's Encrypt aktiviert

---

## Verbindungen & Abhängigkeiten

### Dateien, die angepasst werden

- `index.astro` ist die Hauptdatei — alle neuen Sektionen landen dort
- `config.ts` braucht das neue Projekte-Schema bevor die Collection geladen wird

### Nötige Updates für Konsistenz

- `CLAUDE.md` nach Deployment updaten: GitHub Actions Workflow dokumentieren
- Memory-Datei `project_website.md` mit Hosting-Details aktualisieren

### Auswirkungen auf bestehende Workflows

- Blog-Artikel hinzufügen: Markdown-Datei in `src/content/blog/` → git push → automatisch live
- Projekte aktualisieren: Markdown in `src/content/projekte/` → git push → live

---

## Validierungs-Checkliste

- [ ] `npm run build` läuft ohne Fehler
- [ ] CNAME-File liegt in `public/CNAME` mit Inhalt `busche.cloud`
- [ ] GitHub Actions Workflow korrekt formatiert (YAML)
- [ ] Alle 3 Projekt-Content-Files vorhanden und Schema-konform
- [ ] Referenzen-Sektion sichtbar im Browser
- [ ] Tools-Sektion sichtbar im Browser
- [ ] Kontaktformular-Action auf Formspree-Platzhalter geändert
- [ ] Sitemap wird generiert (`/sitemap-index.xml`)

---

## Erfolgskriterien

1. `npm run build` produziert fehlerfreies `dist/`
2. GitHub Actions Workflow deployt automatisch bei Push auf `main`
3. Website mit allen neuen Sektionen im Dev-Server sichtbar
4. Ionos-Anleitung vollständig und umsetzbar

---

## Notizen

- **Formspree:** Marlon muss unter formspree.io einen kostenlosen Account erstellen, ein Formular anlegen und die Form-ID (`f/XXXXXXXX`) in den Code eintragen. Der Platzhalter `FORM_ID` wird markiert.
- **Profilfoto:** Sobald vorhanden, in `public/foto.jpg` legen und in `index.astro` einbinden — dafür ist ein separater Schritt vorbereitet.
- **Referenzen:** Wenn keine echten Kundenzitate vorhanden, mit glaubwürdigen anonymisierten Referenzen starten (z.B. "Head of IT, Mittelstand OWL") — besser als keine.
- **GitHub Repository Name:** Wenn der Repo-Name `busche.cloud` oder ein anderer Name (nicht `<username>.github.io`) gewählt wird, muss `base` in `astro.config.mjs` ggf. angepasst werden — aber da Custom Domain, ist das nicht nötig.
