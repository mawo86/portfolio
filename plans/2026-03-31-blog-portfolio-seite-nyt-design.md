# Plan: Blog-Portfolio-Seite im NYT-Stil

**Erstellt:** 2026-03-31
**Status:** Implementiert
**Anforderung:** Redesign der Blog-Index-Seite (`/blog`) zu einer professionellen, NYT-inspirierten Portfolio-Seite mit Editorial-Einstiegsblock und klarer, übersichtlicher Artikelstruktur

---

## Überblick

### Was dieser Plan erreicht

Die bestehende Blog-Index-Seite (`/website/src/pages/blog/index.astro`) wird vollständig neu gestaltet: Sie erhält einen starken Editorial-Einstiegsblock (Hero), eine NYT-inspirierte Artikellayout-Struktur mit Featured-Artikel + Grid, und eine saubere typographische Hierarchie. Das Ergebnis ist eine professionelle, sofort einnehmende Blog-Startseite, die Expertise und Persönlichkeit vermittelt.

### Warum das wichtig ist

Thought Leadership ist eine Kernstrategie für Marlon — regelmäßige Blogartikel sollen Sichtbarkeit aufbauen und AI-Consulting-Anfragen generieren. Die Seite, auf der Besucher alle Artikel finden, muss diesen Anspruch sofort visuell kommunizieren: professionell, klar, lesbar — wie eine Editorial-Publication, nicht wie ein generischer Portfolio-Blog.

---

## Aktueller Zustand

### Relevante bestehende Struktur

| Datei | Beschreibung |
|---|---|
| `website/src/pages/blog/index.astro` | Aktuelle Blog-Index-Seite (77 Zeilen, einfaches Grid) |
| `website/src/pages/blog/[...slug].astro` | Dynamisches Routing für einzelne Artikel |
| `website/src/layouts/BlogLayout.astro` | Layout für einzelne Blog-Posts |
| `website/src/layouts/Layout.astro` | Basis-HTML-Layout mit SEO, Fonts |
| `website/src/content/blog/ki-automatisierung-mittelstand.md` | Einziger bestehender Artikel |
| `website/src/content/config.ts` | Zod-Schema für Blog-Collection |
| `website/src/pages/index.astro` | Hauptseite mit Blog-Sektion (Link zu `/blog`) |

### Lücken oder Probleme, die adressiert werden

- **Kein Einstiegsblock:** Die Seite startet direkt mit dem Artikel-Grid ohne Persönlichkeit oder editoriales Statement
- **Kein Featured-Artikel:** Alle Artikel gleichwertig im Grid — kein visuelles Gewicht für neuesten/wichtigsten Beitrag
- **Tag-Filter nur Dekoration:** Tags werden angezeigt, sind aber nicht klickbar/filternd
- **Wenig Typographie-Hierarchie:** Layout wirkt wie ein Standard-Blog, nicht wie eine Editorial-Seite
- **Kein "Brand-Statement":** Fehlendes kurzes Editorial-Statement, das Marlons Stimme und Fokus etabliert

---

## Vorgeschlagene Änderungen

### Zusammenfassung der Änderungen

- Komplettes Redesign der `blog/index.astro` mit NYT-inspirierten Sektionen
- Editorial-Hero-Block mit persönlichem Statement
- Featured-Artikel (neuester Post) groß und prominent
- Restliche Artikel in übersichtlichem, typographisch starkem Raster
- Interaktive Tag-Filter (JavaScript, client-side)
- Keine neuen Abhängigkeiten — nur Tailwind + vanilla JS

### Neue Dateien erstellen

Keine neuen Dateien notwendig — nur `blog/index.astro` wird ersetzt.

### Zu ändernde Dateien

| Dateipfad | Änderungen |
|---|---|
| `website/src/pages/blog/index.astro` | Vollständiges Redesign: Hero-Block, Featured-Artikel, Artikel-Grid mit Tag-Filter |

### Zu löschende Dateien

Keine.

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **NYT-Stil auf dunklem Hintergrund:** Die restliche Website hat ein dunkles Theme (`bg-[#080B14]`). Anstatt die Seite weiß zu machen (wie NYT), wird das NYT-Layout-Prinzip (Typographie, Hierarchie, Editorial-Struktur) auf das bestehende Dark-Theme übertragen. Das erhält die visuelle Konsistenz.

2. **Hero-Block als persönliches Editorial-Statement:** Kein generisches "Willkommen auf meinem Blog". Stattdessen: ein prägnantes Statement in Marlons Stimme, das klar macht, worüber er schreibt und warum. Mit einer dekorativen horizontalen Trennlinie im NYT-Stil (oben und unten).

3. **Featured-Artikel prominent & groß:** Der neueste (oder als featured markierte) Artikel bekommt die oberste Position mit großer Überschrift, vollem Beschreibungstext und Kategorie-Label — ähnlich der NYT-Aufmacherstory.

4. **Artikel-Raster mit 2-Spalten-Layout:** Darunter die weiteren Artikel in einem klaren 2-Spalten-Grid (nicht 3, da dies journalistischer wirkt). Klare typographische Hierarchie: Kategorie-Label (klein, Brand-Farbe) → Titel (groß, fett) → Kurzbeschreibung → Datum.

5. **Interaktive Tag-Filter:** Tags werden zu echten Filterbuttons. Klick auf einen Tag zeigt nur Artikel mit diesem Tag. Implementiert mit einfachem Vanilla JS (kein Framework-Overhead), da Astro statisch ist.

6. **Horizontale Trennlinien als Design-Element:** NYT nutzt Linien intensiv als Strukturelement. Dies wird mit `border-t border-white/10` oder `border-white/20` umgesetzt — dezent im Dark-Mode.

7. **Datum im deutschen Format, aber stilisiert:** `31. März 2026` statt numerisch — editorialer.

8. **CTA am Ende der Seite:** "Neue Artikel direkt ins Postfach?" (Kontakt-Link) — hält Besucher im Funnel.

### Betrachtete Alternativen

- **Weißes/helles Design für den Blog:** Verworfen — würde visuellen Bruch zur restlichen Seite erzeugen.
- **Karten mit Bild-Thumbnails:** Verworfen — es gibt keine Blog-Bilder, und NYT-Stil lebt von Typographie, nicht von Thumbnails.
- **3-Spalten-Grid für alle Artikel:** Verworfen — 2-Spalten wirkt editorischer und ist bei dunklem Hintergrund besser lesbar.
- **Externe Filter-Library (Alpine.js etc.):** Verworfen — unnötige Abhängigkeit für 10 Zeilen JS.

### Offene Fragen

- **`featured`-Frontmatter-Feld:** Soll ein Artikel explizit als "Featured" markiert werden können (via `featured: true` im Frontmatter)? Oder immer automatisch der neueste Artikel? → **Empfehlung:** Automatisch der neueste (kein zusätzliches Schema-Feld nötig, kann später ergänzt werden).
- **Anzahl der sichtbaren Artikel im Grid:** Sollen alle Artikel angezeigt werden, oder nur die neuesten 6 mit "Mehr laden"? → **Empfehlung:** Alle anzeigen (aktuell wenige Artikel, Pagination später ergänzbar).

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: Bestehende `blog/index.astro` sichern und lesen

Den aktuellen Inhalt verstehen und die neue Version vorbereiten.

**Aktionen:**
- `website/src/pages/blog/index.astro` vollständig lesen
- `website/src/layouts/Layout.astro` lesen (für korrekte Props-Übergabe)
- `website/src/content/config.ts` lesen (für Schema-Bestätigung)

**Betroffene Dateien:**
- `website/src/pages/blog/index.astro`

---

### Schritt 2: Hero-Block implementieren

Der oberste Abschnitt der Seite — das editoriale Statement. NYT-Stil: Dekorative Doppellinie oben, Kategorie-Label, großer Titel, Untertitel, Doppellinie unten.

**Aktionen:**
- Hero-Sektion mit folgender Struktur implementieren:

```
┌─────────────────────────────────────────────────────┐
│  ══════════════════════════════════════════════════  │  ← dünne Linie (border-t)
│                                                      │
│  BLOG                                               │  ← Brand-Farbe, uppercase, tracking-widest
│                                                      │
│  Gedanken & Einblicke                               │  ← Große Überschrift (text-5xl md:text-6xl)
│                                                      │
│  Ich schreibe über KI-Automatisierung,              │  ← Persönliches Statement (text-lg, muted)
│  Digitalisierung und was davon wirklich             │
│  in der Praxis funktioniert — ohne Hype.            │
│                                                      │
│  [KI]  [Automatisierung]  [Mittelstand]  ...        │  ← Tag-Filter-Pills
│                                                      │
│  ══════════════════════════════════════════════════  │  ← dünne Linie (border-b)
└─────────────────────────────────────────────────────┘
```

**Spezifischer Text für das Statement:**
> "Ich schreibe über KI-Automatisierung, digitale Transformation und was davon wirklich im Unternehmensalltag funktioniert — direkt aus der Praxis, ohne Buzzword-Bingo."

**Betroffene Dateien:**
- `website/src/pages/blog/index.astro`

---

### Schritt 3: Featured-Artikel-Block implementieren

Der neueste Artikel (Index 0 nach Sortierung) bekommt eine eigene, prominente Sektion.

**Aktionen:**
- Ersten Post aus sortiertem Array als `featuredPost` extrahieren
- Restliche Posts als `remainingPosts` speichern
- Featured-Sektion mit folgender Struktur:

```
┌─────────────────────────────────────────────────────┐
│  NEUESTER BEITRAG                                   │  ← Label (klein, brand)
│                                                      │
│  KI-Automatisierung im Mittelstand:                 │  ← Titel (text-3xl md:text-4xl, fett)
│  Was wirklich funktioniert                          │
│                                                      │
│  Viele Mittelständler starten mit KI und            │  ← Description (voll, 2-3 Zeilen)
│  landen bei teuren Pilotprojekten ohne...           │
│                                                      │
│  [KI] [Automatisierung] [Mittelstand]    31. März → │  ← Tags links, Datum + Pfeil rechts
└─────────────────────────────────────────────────────┘
```

- Der gesamte Block ist klickbar (Link zum Artikel)
- Hover: leichte Aufhellung (group/hover-Effekt auf Titel)
- Trennlinie darunter

**Betroffene Dateien:**
- `website/src/pages/blog/index.astro`

---

### Schritt 4: Artikel-Grid für restliche Posts implementieren

Die weiteren Artikel (Index 1+) in einem klaren 2-Spalten-Raster.

**Aktionen:**
- `remainingPosts` in `grid grid-cols-1 md:grid-cols-2` rendern
- Jede Karte:

```
┌─────────────────┐  ┌─────────────────┐
│ KI              │  │ DIGITALISIERUNG │  ← Tag (klein, brand)
│                 │  │                 │
│ Titel des       │  │ Titel des       │  ← text-xl, fett
│ Artikels hier   │  │ Artikels hier   │
│                 │  │                 │
│ Kurze           │  │ Kurze           │  ← text-sm, muted, line-clamp-2
│ Beschreibung... │  │ Beschreibung... │
│                 │  │                 │
│ 28. März 2026 → │  │ 15. März 2026 → │  ← Datum + Pfeil
└─────────────────┘  └─────────────────┘
```

- Horizontale Trennlinien zwischen Artikeln (nicht Karten-Borders, sondern `border-b border-white/10` unter jedem Item)
- Kein Karten-Rahmen — NYT-Stil nutzt Whitespace und Linien, keine Boxen
- Hover: Titel-Farbe wechselt zu Brand-Farbe

**Betroffene Dateien:**
- `website/src/pages/blog/index.astro`

---

### Schritt 5: Interaktive Tag-Filter implementieren

Vanilla-JS-Filterung — nur Artikel mit gewähltem Tag anzeigen.

**Aktionen:**
- Alle Tags aus allen Posts extrahieren und deduplizieren
- "Alle" als ersten Filter-Button (standardmäßig aktiv)
- Jeden Post mit `data-tags` HTML-Attribut markieren (JSON-String)
- `<script>` am Ende der Seite:

```javascript
const filterButtons = document.querySelectorAll('[data-filter]');
const articles = document.querySelectorAll('[data-article]');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    
    // Active state
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter articles
    articles.forEach(article => {
      const tags = JSON.parse(article.dataset.tags);
      const show = filter === 'all' || tags.includes(filter);
      article.style.display = show ? '' : 'none';
    });
  });
});
```

- Aktiver Filter: Brand-Farbe als Hintergrund, weißer Text
- Inaktiv: transparenter Hintergrund, gedimmter Text

**Betroffene Dateien:**
- `website/src/pages/blog/index.astro`

---

### Schritt 6: Footer-CTA-Bereich implementieren

Am Ende der Artikel ein redaktioneller Abschluss.

**Aktionen:**
- Trennlinie + kleiner CTA-Block:

```
══════════════════════════════════════════════════════
Neue Artikel zu KI und Digitalisierung? Ich schreibe
regelmäßig. Schreib mir gerne — oder folg mir auf
LinkedIn für Updates.

[Kontakt aufnehmen →]
══════════════════════════════════════════════════════
```

- Link zu `/#kontakt` auf der Hauptseite

**Betroffene Dateien:**
- `website/src/pages/blog/index.astro`

---

### Schritt 7: Lokale Validierung

Dev-Server starten und die neue Blog-Seite testen.

**Aktionen:**
- `cd website && npm run dev` starten
- Browser öffnen: `http://localhost:4321/portfolio/blog`
- Prüfen: Hero-Block, Featured-Artikel, Grid, Tag-Filter
- Responsive prüfen: Mobile (320px), Tablet (768px), Desktop (1280px)
- Tag-Filter testen: Klick auf einzelne Tags, zurück auf "Alle"
- Link-Test: Featured-Artikel + Grid-Artikel führen zu korrekten Routen

**Betroffene Dateien:**
- Keine Dateiänderungen in diesem Schritt

---

### Schritt 8: `current-data.md` aktualisieren

Blog-Sektion in den Workspace-Kontext eintragen.

**Aktionen:**
- In `context/current-data.md` den Blog-Status aktualisieren:
  - Blog-Index-Seite als "NYT-Stil redesigned" markieren
  - Hinweis auf Tag-Filter-Funktionalität

**Betroffene Dateien:**
- `context/current-data.md`

---

## Verbindungen & Abhängigkeiten

### Dateien, die diesen Bereich referenzieren

| Datei | Bezug |
|---|---|
| `website/src/pages/index.astro` | Link "Alle Artikel" zeigt auf `/blog` — keine Änderung nötig |
| `website/src/pages/blog/[...slug].astro` | Verwendet BlogLayout, nicht berührt |
| `website/src/layouts/BlogLayout.astro` | "← Zurück zum Blog" Link zeigt auf `/blog` — keine Änderung nötig |

### Nötige Updates für Konsistenz

- `context/current-data.md` — Blog-Status aktualisieren
- `CLAUDE.md` — Falls neue Patterns oder Struktur entstehen (wahrscheinlich nicht nötig, da keine neue Seite)

### Auswirkungen auf bestehende Workflows

- Keine Auswirkungen auf bestehende Commands oder Workflows
- Neue Artikel können weiterhin als `.md`-Dateien in `content/blog/` abgelegt werden — sie erscheinen automatisch auf der neuen Seite

---

## Validierungs-Checkliste

- [ ] Hero-Block mit Editorial-Statement sichtbar
- [ ] Featured-Artikel (neuester Post) prominent und vollständig dargestellt
- [ ] Restliche Artikel im 2-Spalten-Grid
- [ ] Tag-Filter klickbar und funktionierend
- [ ] Alle Artikel-Links funktionieren korrekt
- [ ] Design konsistent mit restlicher Website (dunkles Theme, gleiche Fonts)
- [ ] Responsive: Mobile einspaltiger Stack, Desktop zweispaltig
- [ ] Keine 404-Fehler oder kaputten Imports
- [ ] `npm run build` läuft fehlerfrei durch

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. Die Seite `/blog` einen professionellen, editorialen Eindruck macht, der klar von einem Standard-Blog-Template zu unterscheiden ist
2. Der Hero-Block sofort kommuniziert, wer Marlon ist und worüber er schreibt
3. Der neueste Artikel prominent featured ist und alle weiteren Artikel im übersichtlichen Grid sichtbar sind
4. Tag-Filter korrekt funktionieren (Klick filtert sichtbare Artikel)
5. Die Seite auf allen Breakpoints (mobile, tablet, desktop) sauber dargestellt wird
6. `npm run build` ohne Fehler abschließt

---

## Notizen

- **Zukünftige Erweiterung:** Wenn mehr als ~10 Artikel vorhanden sind, könnte Pagination sinnvoll sein. Aktuell alle Artikel anzeigen.
- **Zukünftige Erweiterung:** `featured: true` Frontmatter-Feld als explizite Steuerung des Featured-Artikels — aktuell automatisch neuester.
- **Zukünftige Erweiterung:** Lesezeit-Schätzung ("5 Min. Lesezeit") — NYT zeigt dies prominent. Implementierbar mit Wort-Count / 200 WPM.
- **Kein `image`-Feld in Posts:** NYT lebt von Fotos. Da keine Blog-Bilder geplant sind, ersetzt Typographie die visuelle Wirkung. Wenn Bilder später kommen, könnte das Featured-Layout ein großes Hero-Bild erhalten.
- **Dunkles Theme als Alleinstellungsmerkmal:** Viele Business-Blogs sind hell. Das dunkle NYT-Layout wird Marlon optisch differenzieren.

---

## Implementierungsnotizen

**Implementiert:** 2026-03-31

### Zusammenfassung

`website/src/pages/blog/index.astro` vollständig neu geschrieben. Editorial-Hero-Block mit Trennlinien, Featured-Artikel (neuester Post) groß und prominent, 2-Spalten-Grid für weitere Artikel mit vertikaler Trennlinie zwischen den Spalten, interaktiver Tag-Filter mit vanilla JS, Footer-CTA. `npm run build` läuft fehlerfrei durch.

### Abweichungen vom Plan

- Tag-Filter-Pills: "Alle"-Button verwendet initial Inline-Klassen statt CSS-Klasse `active` — JS toggled via `add/remove` auf Tailwind-Klassen direkt (kein separates CSS-Sheet nötig)
- 2-Spalten-Grid nutzt CSS-Klassen für Border-Right auf linker Spalte und Padding-Anpassungen (sauberer als Border am Container)

### Aufgetretene Probleme

Keine.
