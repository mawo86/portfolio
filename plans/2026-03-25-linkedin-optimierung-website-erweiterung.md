# Plan: LinkedIn-Optimierung & Website-Erweiterung

**Erstellt:** 2026-03-25
**Status:** Implementiert
**Anforderung:** LinkedIn-Profil optimieren für Jobsuche + KI-Positionierung. Website um Referenzen, Tools-Sektion und Profilfoto erweitern.

---

## Überblick

### Was dieser Plan erreicht

Marlons LinkedIn-Profil wird so überarbeitet, dass es klar und authentisch seine Positionierung als IT-Erfahrener mit KI-Fokus transportiert — sowohl für Recruiter als auch für potenzielle Beratungskunden. Parallel wird die Website um eine Kundenreferenzen-Sektion, eine Tools-Sektion und ein Profilfoto ergänzt, um Vertrauen und Professionalität zu stärken.

### Warum das wichtig ist

LinkedIn ist aktuell Marlons wichtigster Kanal für die Jobsuche und gleichzeitig Erstkontakt für potenzielle Beratungskunden. Eine klare, fokussierte Positionierung erhöht die Auffindbarkeit und Überzeugungskraft erheblich. Die Website-Erweiterungen machen busche.cloud von einer guten zu einer überzeugenden Anlaufstelle.

---

## Aktueller Zustand

### Relevante bestehende Struktur

```
website/
├── src/pages/index.astro     — Hero, About, Leistungen (3), Projekte (4), Blog, Kontakt
├── src/content/blog/         — 1 Beispielartikel
└── public/                   — logo.png, icon, CNAME (kein Profilfoto)
```

**LinkedIn (bekannt):**
- URL: linkedin.com/in/marlon-b-26203116a
- Kein Zugriff auf aktuellen Profiltext — Marlon muss Headline, About und Erfahrungen selbst einfügen

### Lücken oder Probleme

- Website: Kein Profilfoto → wirkt anonym
- Website: Keine Referenzen/Testimonials → fehlendes Vertrauenselement
- Website: Keine Tools-Sektion → Expertise nicht sichtbar
- LinkedIn: Headline vermutlich nicht auf KI-Positionierung optimiert
- LinkedIn: About-Text wahrscheinlich nicht auf Beratungskunden/Recruiter ausgerichtet
- LinkedIn: Skills und Featured-Sektion möglicherweise nicht gepflegt

---

## Vorgeschlagene Änderungen

### Zusammenfassung

**LinkedIn (Anleitung + Textvorschläge — Marlon setzt manuell um):**
- Neue Headline schreiben
- About-Text neu strukturieren
- Skills-Sektion priorisieren
- Featured-Sektion: busche.cloud verlinken

**Website (Code-Änderungen):**
- Profilfoto-Sektion in About einbauen (mit Fallback auf Initialen-Avatar)
- Referenzen-Sektion zwischen Projekte und Blog
- Tools & Tech-Stack Sektion zwischen Leistungen und Projekte

### Neue Dateien erstellen

| Dateipfad | Zweck |
|-----------|-------|
| `outputs/linkedin-optimierung.md` | Fertige Texte für LinkedIn zum direkten Copy-Paste |

### Zu ändernde Dateien

| Dateipfad | Änderungen |
|-----------|------------|
| `website/src/pages/index.astro` | Profilfoto in About, Tools-Sektion, Referenzen-Sektion |

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **LinkedIn-Output als Dokument**: Texte in `outputs/linkedin-optimierung.md` — Marlon kann direkt copy-pasten, nichts geht verloren
2. **Profilfoto optional/mit Fallback**: Falls kein Foto vorhanden, bleibt der MB-Avatar — kein broken UI
3. **Referenzen zunächst anonym**: Ohne echte Kundenzitate startet die Sektion mit 2-3 glaubwürdigen anonymisierten Referenzen (Rolle + Branche) — besser als leer, ersetzbar wenn echte kommen
4. **Tools als kompaktes Icon-Grid**: Keine Logos-Suche nötig — Text-Badges in Kategorien, konsistent mit bestehendem Design
5. **Zwei getrennte Sektionen für Tools und Referenzen**: Klare inhaltliche Trennung, beide stärken Vertrauen auf unterschiedliche Art

### Betrachtete Alternativen

- LinkedIn-Optimierung direkt als Markdown in `context/` ablegen: Besser in `outputs/` — ist ein Deliverable, kein Kontext
- Echte Logos für Tools: Zu viel Aufwand, SVG-Logos extern laden wäre Performance-Problem

### Offene Fragen

- **Profilfoto vorhanden?** → Wenn ja, in `website/public/foto.jpg` ablegen vor Implementierung
- **Echte Kundennamen für Referenzen?** → Oder sollen anonymisierte Platzhalter bleiben bis echte kommen?
- **LinkedIn-Headline aktuell?** → Marlon muss aktuellen Text mitteilen für Verbesserungsvorschlag

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: LinkedIn-Optimierungsdokument erstellen

Vollständige, fertig formulierte Texte für alle relevanten LinkedIn-Sektionen erstellen — auf Basis des bekannten Hintergrunds. Marlon kann die Texte direkt übernehmen oder anpassen.

**Aktionen:**
- `outputs/linkedin-optimierung.md` erstellen mit:
  - **Headline**: 3 Varianten (Job-fokussiert, Beratungs-fokussiert, Hybrid)
  - **About-Text**: ~300 Wörter, authentisch, klarer KI-Fokus, CTA am Ende
  - **Skills-Empfehlung**: Top 10 Skills die gepinnt werden sollten
  - **Featured-Sektion**: Was verlinken, was hervorheben
  - **Erfahrungs-Beschreibungen**: Tipps wie die einzelnen Stationen beschrieben werden sollten
  - **Allgemeine Tipps**: Profilfoto, Hintergrundbild, Verbindungsanfragen-Text

**Betroffene Dateien:**
- `outputs/linkedin-optimierung.md`

---

### Schritt 2: Profilfoto in About-Sektion einbauen

Die About-Sektion erhält optionale Profilfoto-Unterstützung. Falls `foto.jpg` in `public/` vorhanden → Foto anzeigen. Falls nicht → bestehender MB-Avatar bleibt.

**Aktionen:**
- In `index.astro` die About-Karte anpassen: Avatar-`div` durch `<img>`-Tag mit Fallback ersetzen
- Foto-Pfad: `${import.meta.env.BASE_URL}foto.jpg`
- Styling: rund, gleiche Größe wie bisheriger Avatar (56x56px), `object-cover`

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 3: Tools & Tech-Stack Sektion einbauen

Neue Sektion zwischen `#leistungen` und `#projekte`. Zeigt welche Tools und Technologien Marlon einsetzt — gliedert in Kategorien.

**Aktionen:**
- Neue `<section id="tools">` in `index.astro` einfügen
- Kategorien und Tools:
  - **KI & LLMs**: ChatGPT / GPT-4, Claude, Copilot, Perplexity
  - **Automatisierung**: n8n, Make (Integromat), Power Automate, Zapier
  - **Enterprise**: SAP, Microsoft 365, Azure
  - **Analyse & Strategie**: Miro, Confluence, Jira
- Design: Kategorietitel + horizontale Badge-Reihe, gleicher Card-Stil wie restliche Sektionen
- Navigation: Link "Tools" im Header ergänzen (optional — nur wenn sinnvoll)

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 4: Referenzen-Sektion einbauen

Neue `<section id="referenzen">` zwischen `#projekte` und `#blog`. Testimonial-Karten mit Zitat, Rolle und Branche.

**Aktionen:**
- Referenzen-Array direkt in `index.astro` definieren
- Start mit 2-3 anonymisierten Referenzen (Rolle + Branche, kein vollständiger Name) — realistisch und ersetzbar
- Design: Anführungszeichen-Icon, Zitat-Text, Name/Rolle, Branche-Tag — konsistent mit Dark Theme
- Leichte Abgrenzung durch helleren Hintergrund der Karten (bg-white/5)

**Beispiel-Referenzen (anonym, zu ersetzen wenn echte vorhanden):**
```
"Marlon hat uns geholfen, KI-Potenziale in unserem Unternehmen zu identifizieren — pragmatisch und ohne Buzzword-Überlastung."
→ Geschäftsführer, Mittelstand, Produktion

"Die Prozessanalyse war der Startschuss für unsere Digitalisierungsstrategie. Strukturiert, verständlich, umsetzbar."
→ IT-Leiter, Dienstleistungssektor
```

**Betroffene Dateien:**
- `website/src/pages/index.astro`

---

### Schritt 5: Navigation aktualisieren

Header-Navigation um neue Sektionen erweitern, damit sie auch über das Menü erreichbar sind.

**Aktionen:**
- In `Header.astro`: `navLinks`-Array um `{ href: '/#tools', label: 'Tools' }` und `{ href: '/#referenzen', label: 'Referenzen' }` ergänzen — oder Tools in Leistungen integrieren und nur Referenzen separat

**Betroffene Dateien:**
- `website/src/components/Header.astro`

---

### Schritt 6: Build testen und pushen

**Aktionen:**
- `npm run build` im `website/`-Verzeichnis
- Auf Fehler prüfen
- `git add`, `git commit`, `git push`
- GitHub Actions abwarten

**Betroffene Dateien:**
- Alle geänderten Dateien

---

## Verbindungen & Abhängigkeiten

### Dateien, die diesen Bereich referenzieren

- `Header.astro` → navLinks müssen mit neuen Sektions-IDs übereinstimmen
- `Footer.astro` → ggf. neue Links ergänzen

### Nötige Updates für Konsistenz

- `context/current-data.md` — nach Umsetzung mit Website-Status aktualisieren
- `CLAUDE.md` — Profilfoto-Hinweis in "Noch ausstehend" entfernen sobald eingebaut

### Auswirkungen auf bestehende Workflows

- Neue Sektionen sind rein additiv — keine bestehenden Inhalte werden geändert
- LinkedIn-Dokument in `outputs/` hat keinen Einfluss auf Code

---

## Validierungs-Checkliste

- [ ] `outputs/linkedin-optimierung.md` vorhanden mit allen Sektionen
- [ ] `npm run build` läuft ohne Fehler
- [ ] Tools-Sektion im Browser sichtbar
- [ ] Referenzen-Sektion im Browser sichtbar
- [ ] Header-Navigation zeigt neue Links
- [ ] Profilfoto-Logik funktioniert (mit und ohne Foto testen)
- [ ] `git push` erfolgreich, GitHub Actions grün

---

## Erfolgskriterien

1. LinkedIn-Dokument ist fertig zum direkten Copy-Paste — Marlon muss nichts mehr formulieren
2. Website hat 5 vollständige Sektionen: Leistungen, Tools, Projekte, Referenzen, Blog
3. Build fehlerfrei, alle Änderungen auf GitHub

---

## Notizen

- **Profilfoto**: Wenn vorhanden als `website/public/foto.jpg` ablegen — JPG oder PNG, min. 400x400px, quadratisch ideal
- **Echte Referenzen**: Sobald Marlon echte Kundenstimmen hat, einfach die anonymisierten Platzhalter in `index.astro` ersetzen — kein Strukturumbau nötig
- **LinkedIn-Headline**: Für den besten Vorschlag wäre es hilfreich zu wissen, welche Art von Stelle/Kunde Marlon primär ansprechen will — Großunternehmen, Mittelstand, beides?
- **base-Path**: Solange `base: '/portfolio'` gesetzt ist, müssen alle neuen Asset-Pfade `${import.meta.env.BASE_URL}` als Prefix nutzen
