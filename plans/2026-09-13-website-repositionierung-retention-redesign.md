# Plan: Website-Repositionierung & Retention-Redesign (busche.cloud)

**Erstellt:** 2026-09-13
**Status:** Implementiert
**Anforderung:** busche.cloud komplett neu strukturieren, professioneller gestalten, neue Positionierung ("AI-Consultant mit Angebot") einführen und die Seite so umbauen, dass Besucher mit hoher Wahrscheinlichkeit bleiben (Newsletter als Haupt-CTA, Discovery-Call sekundär)

---

## Überblick

### Was dieser Plan erreicht

Die Startseite und die wichtigsten Unterseiten werden neu strukturiert, textlich neu positioniert und im Design geschärft, sodass Besucher (a) sofort verstehen, dass Marlon ein KI-Consultant mit konkretem, buchbarem Angebot ist, und (b) auf der Seite bleiben, statt nach dem ersten Scroll abzuspringen — mit Newsletter-Abo als primärem, Discovery-Call als sekundärem Conversion-Ziel. Die Positionierung wird von der generischen "IT-Allrounder"-Sprache auf einen klar zugeschnittenen KI-Consulting-Fokus umgestellt, passend zu Marlons neuer Rolle als Global AI Manager und dem Wunsch nach einer klaren Nische.

### Warum das wichtig ist

Laut `context/strategy.md` und `context/personal-info.md` (Stand 2026-09-13) ist Marlons Ziel nicht mehr "neuer Job", sondern eine klare Experten-Positionierung im KI-Segment und eingehende Consulting-Anfragen. Die aktuelle Website transportiert das nur teilweise: Hero und About sprechen noch von "10+ Jahre IT & Digital" und "Enterprise Architecture", die Consulting-Pakete aus `outputs/consulting-angebot.md` sind komplett unsichtbar (Preise, Pakete, Discovery-Call-Buchung fehlen), Case Studies bestehen nur als Draft-Platzhalter, und Testimonials sind leer. Die Seite generiert aktuell keine Retention-Mechanik (kein klarer nächster Schritt außer einem Kontaktformular ohne Kalenderbuchung) und keine Vertrauenssignale (keine echten Ergebnisse, keine Preise). Das schwächt sowohl Glaubwürdigkeit als auch Conversion.

---

## Aktueller Zustand

### Relevante bestehende Struktur

- `website/src/pages/index.astro` — Single-Page mit Sektionen: Hero, Über mich, Leistungen (3 generische Karten + Discovery-CTA ohne echten Kalender-Link), Tools, Projekte (4 alte IT-Projekte, kein KI-Consulting-Case), Testimonials (leer, rendert nichts), Eigene Produkte (Cookloop/DartsIQ), Blog-Preview, Kontakt (Formspree-Formular)
- `website/src/components/Header.astro` / `Footer.astro` — Navigation zu `#leistungen`, `/case-studies`, `/blog`, `/tools`, `#kontakt`; CTA "Erstgespräch buchen" verlinkt auf `#kontakt` (Formular), nicht auf einen echten Kalender
- `website/src/layouts/BlogLayout.astro` — bereits gutes Editorial-Design (NYT-Stil), hat Newsletter-Signup + Discovery-CTA + Prev/Next; dient als Qualitäts-Referenz für Typografie/Spacing
- `website/src/pages/case-studies/index.astro` + `CaseStudyLayout.astro` + `content/case-studies/beispiel-ki-pilot.md` — Case-Study-Infrastruktur existiert, aber der einzige Eintrag ist `draft: true` mit Platzhaltertext ("Dies ist ein Template-Eintrag...") — die Seite ist praktisch leer
- `website/src/components/Testimonials.astro` — Komponente vorhanden, Array komplett leer (nur auskommentiertes Beispiel), rendert nichts
- `website/src/components/NewsletterSignup.astro` — funktionsfähige Buttondown-Integration, wird aktuell nur im Blog verwendet, nicht auf der Startseite
- `website/src/config/site.ts` — zentrale Config für Verfügbarkeitsstatus, Links; **kein Cal.com-Link vorhanden**
- `outputs/consulting-angebot.md` — vollständig ausgearbeitete Pakete (KI-Readiness-Check €299, KI-Pilot ab €1.500, Begleitung ab €800/Monat) — **nicht auf der Website integriert**
- `outputs/monetarisierung-strategie.md` — Funnel-Definition: LinkedIn → busche.cloud → Discovery Call (Cal.com) → Angebot → Projekt — Cal.com fehlt als Baustein
- `context/personal-info.md`, `context/business-info.md`, `context/strategy.md` — frisch aktualisiert (2026-09-13): Rolle jetzt "Global AI Manager", Positionierung verschlankt auf "Ich helfe Unternehmen, mit KI erfolgreicher zu werden", Fokus auf Nischen-Findung statt Jobsuche
- 12 Blog-Artikel live, gutes Editorial-System — bleibt inhaltlich unverändert, wird aber stärker in die neue Startseiten-Struktur eingebunden

### Lücken oder Probleme, die adressiert werden

1. **Positionierung veraltet:** Hero/About sprechen von breiter IT-Erfahrung ("Enterprise Architecture", "10+ Jahre IT & Digital") statt klarer KI-Consultant-Nische — passt nicht zu den aktualisierten `context/`-Zielen
2. **Kein sichtbares Angebot:** Die drei ausgearbeiteten Consulting-Pakete (mit Preisen) existieren nur in `outputs/`, nicht auf der Website — Besucher können nicht einschätzen, was sie buchen oder was es kostet
3. **Kein Kalender-Buchungslink:** Jeder "Erstgespräch"-CTA führt zum Kontaktformular, nicht zu einer echten Terminbuchung — erhöht Reibung, senkt Conversion
4. **Case Studies wirken leer/unfertig:** Einziger Eintrag ist offensichtlich ein Platzhalter mit "Dies ist ein Template-Eintrag" — das schadet der Glaubwürdigkeit mehr, als es nutzt, wenn Besucher draufklicken
5. **Keine Retention-Mechanik:** Newsletter-Signup fehlt komplett auf der Startseite; kein "was als Nächstes lesen"-Pfad zwischen Blog-Artikeln und Startseite; Projekte-Sektion zeigt alte IT-Projekte statt KI-Cases, was die Nische verwässert
6. **Testimonials leer:** Rendert nichts, keine Sozial-Proof-Signale vorhanden
7. **Informationsarchitektur zu flach:** Alles auf einer langen Startseiten-Scrollseite — für "AI-Consultant mit Angebot" braucht es mehr Tiefe (eigene Leistungsseite mit Paketen), aber ohne die Retention-Stärke der Single-Page (viele interne Sprungpunkte) zu verlieren

---

## Vorgeschlagene Änderungen

### Zusammenfassung der Änderungen

1. Neue Positionierungstexte für Hero, About, Meta-Description, Footer-Claim — konsistent "AI-Consultant mit Angebot", angepasst an Global-AI-Manager-Hintergrund
2. Neue eigenständige Seite `/leistungen` mit den drei Consulting-Paketen (Preise, Inhalte, Ideal-für), abgelöst von der knappen 3-Karten-Sektion auf der Startseite (die als Teaser mit Link auf `/leistungen` bleibt)
3. Cal.com einrichten und als primären Buchungslink in Header, Hero, Leistungsseite, BlogLayout-CTA und Footer einbinden (Discovery-Call = sekundärer CTA)
4. Newsletter-Signup prominent auf der Startseite platzieren (nach Hero oder nach About) als **Haupt-CTA** — Formulierung, Design und Platzierung so, dass er vor dem Discovery-Call-CTA kommt
5. Case-Studies-Bereich bereinigen: Platzhalter-Case entweder als klar erkennbares "So könnte ein Projekt aussehen"-Beispiel kennzeichnen (kein "Draft"-Leck) oder aus der Navigation entfernen, bis echte Cases vorliegen — Empfehlung im Plan unten
6. Projekte-Sektion auf der Startseite ersetzen/umbenennen: KI-Consulting-Projekt nach vorne, alte reine IT-Projekte (ERP-Auswahl, Prozessanalyse) redurieren oder als "Hintergrund/Erfahrung"-Kontext einordnen statt als gleichwertige Cases
7. Interne Verlinkung stärken: verwandte Artikel am Ende jedes Blog-Posts (nicht nur Prev/Next chronologisch, sondern nach Kategorie), "weiterlesen"-Empfehlungen auf der Startseite
8. Design-System-Politur: konsistentere Abstände zwischen Sektionen, ggf. neue Sektionsreihenfolge (Hero → Angebot/Leistungen-Teaser → Newsletter → About → Case Studies/Proof → Blog → Produkte → Kontakt), Copy-Ton einheitlich schärfen
9. Footer-Claim und Meta-Description (`Layout.astro`) an neue Positionierung anpassen
10. `CLAUDE.md` und `context/current-data.md` nach Umsetzung aktualisieren

### Neue Dateien erstellen

| Dateipfad | Zweck |
| --- | --- |
| `website/src/pages/leistungen.astro` | Eigenständige Leistungsseite mit den drei Consulting-Paketen (Preise, Inhalte, CTA je Paket), abgeleitet aus `outputs/consulting-angebot.md` |
| `website/src/components/RelatedPosts.astro` | Zeigt 2–3 thematisch verwandte Artikel (gleiche `category`) am Ende eines Blog-Posts — stärkt Lesetiefe/Retention |

### Zu ändernde Dateien

| Dateipfad | Änderungen |
| --- | --- |
| `website/src/pages/index.astro` | Hero-Headline/Subline neu (KI-Consultant-Positionierung statt "IT-Erfahrung"); Leistungs-Sektion zu kompaktem Teaser mit Link zu `/leistungen` umbauen; Newsletter-Signup-Sektion neu einfügen (Haupt-CTA, früh platziert); Projekte-Sektion auf KI-Consulting-Cases fokussieren, alte IT-Projekte abwerten/entfernen; alle "Erstgespräch"-Links von `#kontakt` auf Cal.com-Link umstellen (mit Formular als Fallback/Alternative); Reihenfolge der Sektionen anpassen |
| `website/src/components/Header.astro` | CTA-Button "Erstgespräch buchen" auf Cal.com-Link umstellen; `/leistungen` als eigenen Nav-Punkt ergänzen |
| `website/src/components/Footer.astro` | Claim-Satz ("KI-Automatisierung & Digitale Transformation für moderne Unternehmen") an neue Positionierung anpassen; `/leistungen` in Navigation-Spalte ergänzen |
| `website/src/config/site.ts` | Neuen Eintrag `links.calcom` ergänzen, sobald Cal.com eingerichtet ist |
| `website/src/layouts/Layout.astro` | Default-Meta-Description an neue Positionierung anpassen |
| `website/src/layouts/BlogLayout.astro` | Discovery-Call-CTA-Link auf Cal.com umstellen; `RelatedPosts`-Komponente nach dem Prev/Next-Block einbinden; Autor-Karten-Text leicht an neue Positionierung anpassen |
| `website/src/components/Testimonials.astro` | Kommentar/Hinweis ergänzen, dass dies vor Go-Live noch mit min. 1 echten Zitat befüllt werden sollte (oder Komponente vorerst nicht einbinden — siehe Design-Entscheidungen) |
| `website/src/pages/case-studies/index.astro` | Anpassen: entweder Hinweistext "Erste Projekte werden hier bald dokumentiert" statt leer wirkender Liste, oder Platzhalter-Case sauber als Beispiel kennzeichnen |
| `website/src/content/case-studies/beispiel-ki-pilot.md` | Frontmatter/Text so anpassen, dass klar als Beispiel/Muster erkennbar ist (z.B. Titel-Präfix "Beispielprojekt:"), nicht wie ein echter, aber unfertiger Case wirkt |
| `CLAUDE.md` | Abschnitt "Aktives Projekt: busche.cloud Website" aktualisieren: neue Positionierung, neue Seite `/leistungen`, Cal.com-Status, neue offene Punkte |
| `context/current-data.md` | Sektionsliste, offene Punkte und Positionierungs-Referenz aktualisieren |
| `context/business-info.md` | Ggf. weitere Präzisierung der Positionierung nach Copywriting-Runde (siehe Schritt 2) |

### Zu löschende Dateien

Keine. Bestehende Case-Study-Infrastruktur und Testimonials-Komponente bleiben erhalten (werden nur inhaltlich/copy-seitig angepasst), da sie für die Zukunft (echte Cases, echte Zitate) gebraucht werden.

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **Newsletter vor Discovery-Call in der visuellen Hierarchie:** Newsletter-Signup wird früh auf der Startseite platziert (nach Hero/kurzem Leistungs-Teaser), der Discovery-Call-CTA bleibt bestehen, aber als zweiter, nicht konkurrierender CTA. Begründung: User hat "Newsletter/Following aufbauen" explizit als Haupt-CTA gewählt — niedrigere Hemmschwelle, baut Vertrauen vor dem Verkaufsgespräch auf.
2. **Eigene `/leistungen`-Seite statt nur Startseiten-Sektion:** Die drei Consulting-Pakete mit Preisen brauchen mehr Raum als eine 3-Karten-Sektion erlaubt. Eine eigene Seite erlaubt tieferes Storytelling pro Paket und ist ein zusätzlicher "Verweil-Ort" (Retention), auf den von Startseite, Header und Blog-CTAs verlinkt wird.
3. **Case-Study-Platzhalter nicht einfach lassen wie er ist:** Ein sichtbar unfertiger "Draft"-Eintrag mit dem Satz "Dies ist ein Template-Eintrag" wirkt unprofessionell, wenn ein Besucher draufklickt. Zwei Optionen werden im Schritt-Detail unten offengelassen (Kennzeichnung als Beispiel vs. aus Nav entfernen) — Empfehlung: als "Beispielprojekt" kennzeichnen, weil es zeigt, wie ein Case aussehen *wird*, ohne falsche Tatsachen zu behaupten.
4. **Alte IT-Projekte (ERP-Auswahl etc.) werden nicht gelöscht, aber zurückgestuft:** Sie belegen echte Erfahrung (Enterprise-Hintergrund ist laut `context/personal-info.md` weiterhin Teil des gelebten Profils, auch wenn nicht mehr Kern-Titel), sollen aber nicht mehr gleichwertig neben KI-Consulting-Arbeit stehen, da das die Nischen-Schärfe verwässert.
5. **Fable/Opus-Einsatz gezielt für Copywriting, nicht für Code:** Die eigentlichen Positionierungstexte (Hero-Headline, Subline, Leistungspaket-Beschreibungen) sollen von einem Fable- oder Opus-Subagent als Textentwürfe erarbeitet werden (mehrere Varianten zur Auswahl), da Copywriting-Qualität hier der Hebel mit dem größten Impact ist. Die technische Umsetzung (Astro/Tailwind) bleibt Sonnet-Arbeit im Hauptthread.
6. **Kein Sprachwechsel, keine neue Design-Sprache von Grund auf:** Das bestehende dunkle, glasmorphe SaaS-Design mit Brand-Blau ist bereits hochwertig und konsistent mit dem Blog-Editorial-Design. Der Plan ist eine **Struktur- und Copy-Überarbeitung mit gezielter visueller Politur**, kein visueller Neuanfang — das minimiert Risiko und Aufwand, während es die eigentlichen Probleme (Positionierung, fehlendes Angebot, fehlende Retention-Mechanik) löst.

### Betrachtete Alternativen

- **Komplett neues Design-System (andere Farbpalette, Layout-Grundlage):** Verworfen — das bestehende Design ist bereits professionell und markenkonsistent (Blog-Redesign vom 2026-03-31 wurde als Qualitätsstandard gesetzt). Ein Neuanfang würde Risiko und Aufwand erhöhen, ohne die eigentlichen Kernprobleme (fehlendes Angebot, fehlende Retention-Mechanik) zu lösen.
- **Alles auf einer Single-Page belassen:** Verworfen für die Leistungen — Preise und Pakete brauchen mehr Raum, und eine eigene Seite mit klarem URL-Ziel ist auch für LinkedIn-Verlinkung ("schau dir meine Angebote an: busche.cloud/leistungen") wertvoller als ein Anker-Link.
- **Case-Study-Sektion komplett aus der Navigation entfernen, bis echte Cases vorliegen:** Erwogen, aber verworfen zugunsten der "Beispielprojekt"-Kennzeichnung — die Infrastruktur zu verstecken bedeutet, dass sie beim ersten echten Case erneut aufgebaut werden muss, und ein gut gekennzeichnetes Beispiel schadet nicht.

### Offene Fragen

1. **Cal.com-Einrichtung:** Dieser Plan geht davon aus, dass Cal.com vor oder während der Implementierung eingerichtet wird (offener Punkt aus `context/current-data.md`). Falls das nicht rechtzeitig passiert, fallen die CTAs vorübergehend auf das bestehende Kontaktformular zurück — sollte vor `/implement` entschieden werden. Antwort: Wird noch nicht eingerichtet, erst später.
2. **Testimonials:** Es gibt aktuell keine echten Zitate. Soll die Sektion vorerst ausgeblendet bleiben (aktueller Zustand: rendert nichts, kein Problem) oder soll aktiv nach 1–2 LinkedIn-Empfehlungen/Kunden-O-Tönen gefragt werden, bevor die Seite live geht? Empfehlung: nicht blockierend für diesen Plan, aber als Folgeaufgabe vormerken. Antwort: Bitte als Folgeaufgabe, für's Erste ausblenen, da noch keine Testemonials vorhanden sind.
3. **Alte Projekte-Sektion:** Ganz entfernen oder nur zurückstufen (z.B. unter "Hintergrund" im About-Bereich verschieben statt eigene Sektion)? Empfehlung im Plan: zurückstufen in den About-Bereich als Kontext-Satz, KI-Consulting-Projekt bekommt eigene Case-Card-Behandlung. Letzte Entscheidung sollte beim `/implement`-Start kurz bestätigt werden. Antwort: Bitte wie empholen umsetzen.

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: Positionierungs-Copy erarbeiten (Fable/Opus-Subagent)

Bevor Code geändert wird, werden die zentralen Positionierungstexte erarbeitet — das ist der Hebel mit dem größten Effekt auf Professionalität und Conversion.

**Aktionen:**

- Fable- oder Opus-Subagent beauftragen, 3 Varianten für Hero-Headline + Subline zu entwerfen, basierend auf: Positionierung "Ich helfe Unternehmen, mit KI erfolgreicher zu werden" (`context/business-info.md`), Zielgruppe KMU/Mittelstand (`outputs/consulting-angebot.md`), Hintergrund Global AI Manager (`context/personal-info.md`)
- Gleicher Subagent: Kurzbeschreibung für die drei Leistungspakete (Readiness-Check, Pilot, Begleitung) für die neue `/leistungen`-Seite formulieren — orientiert an `outputs/consulting-angebot.md`, aber knapper/verkaufsstärker für Web-Kontext
- Ergebnis dem User zur Auswahl vorlegen (kurze Zusammenfassung, keine vollständige Ausformulierung nötig — Auswahl der Richtung reicht)
- Ausgewählte Variante final ausformulieren, inkl. Footer-Claim und Meta-Description

**Betroffene Dateien:** keine (reine Text-Vorarbeit, Ergebnis fließt in Schritt 3 ein)

---

### Schritt 2: Cal.com einrichten (falls noch nicht geschehen)

**Aktionen:**

- Prüfen, ob Cal.com-Account bereits existiert (User-Rückfrage, falls nicht aus Kontext ersichtlich)
- 30-Minuten-Event-Typ "Kostenloses Erstgespräch" einrichten (falls nötig)
- Link in `website/src/config/site.ts` unter `links.calcom` eintragen

**Betroffene Dateien:**

- `website/src/config/site.ts`

---

### Schritt 3: `/leistungen`-Seite erstellen

**Aktionen:**

- Neue Datei `website/src/pages/leistungen.astro` anlegen, Layout/Header/Footer wie andere Seiten (`tools.astro` als Struktur-Vorbild)
- Drei Pakete aus `outputs/consulting-angebot.md` als Karten/Sektionen darstellen: Titel, Preis, Dauer, "Was du bekommst"-Liste, "Ideal für"-Satz, individueller CTA-Button (Cal.com-Link)
- Kurzer Intro-Bereich oben mit Positionierungstext aus Schritt 1
- Discovery-Call-Erklärung (aus `outputs/consulting-angebot.md`, Abschnitt "Discovery Call") als eigener Block vor den Paketen
- SEO: Title/Description über `Layout`-Props setzen, OG-Route ergänzen (`ogRoute="leistungen"`, sofern `/og/[...route].ts` das unterstützt — prüfen und ggf. Route ergänzen)

**Betroffene Dateien:**

- `website/src/pages/leistungen.astro` (neu)
- `website/src/pages/og/[...route].ts` (prüfen, ob `leistungen` als OG-Route ergänzt werden muss)

---

### Schritt 4: Startseite umstrukturieren

**Aktionen:**

- Hero-Headline/Subline durch Ergebnis aus Schritt 1 ersetzen
- Stats-Zeile im Hero anpassen (aktuell "10+ Jahre IT & Digital" — ggf. auf KI-spezifischere Kennzahl umstellen, z.B. Jahre KI-Fokus statt allgemeine IT-Jahre)
- Leistungs-Sektion (`#leistungen`) verkürzen zu Teaser (3 Karten bleiben, aber kompakter) mit klarem "Alle Leistungen & Preise ansehen" Link zu `/leistungen`
- Neue Newsletter-Sektion einfügen (Position: direkt nach Leistungs-Teaser oder nach About — vor dem finalen Kontakt-Block), `NewsletterSignup`-Komponente wiederverwenden (ggf. nicht-compact Variante prüfen/anlegen)
- Projekte-Sektion (`#projekte`) überarbeiten: KI-Consulting-Projekt-Karte optisch hervorheben (z.B. als erste/größere Karte), alte IT-Projekte (ERP-Auswahl, Prozessanalyse, IT-Strategie) entweder in den About-Text integrieren ("10 Jahre Erfahrung, u.a. in ERP-Projekten und IT-Strategie...") oder als kleinere, weniger prominente Referenz-Liste darstellen
- Alle Buttons/Links "Erstgespräch buchen" bzw. "Gespräch vereinbaren" von `/#kontakt` auf `links.calcom` umstellen (Kontaktformular bleibt als Alternative bestehen, ggf. mit Hinweistext "oder schreib mir direkt")
- About-Abschnitt: Tags-Liste (`['KI & Automatisierung', 'Enterprise Architecture', 'SAP', ...]`) und Fließtext an neue Rolle (Global AI Manager) anpassen, konsistent mit `context/personal-info.md`

**Betroffene Dateien:**

- `website/src/pages/index.astro`

---

### Schritt 5: Header/Footer/Layout aktualisieren

**Aktionen:**

- `Header.astro`: `/leistungen` in `navLinks` ergänzen; CTA-Button-Href auf `links.calcom` umstellen (Import aus `config/site.ts`)
- `Footer.astro`: Claim-Satz anpassen; `/leistungen` in Navigation-Spalte ergänzen
- `Layout.astro`: Default-`description`-Prop-Text anpassen (aktuell "Marlon Busche — KI-Automatisierung & Digitale Transformation...")

**Betroffene Dateien:**

- `website/src/components/Header.astro`
- `website/src/components/Footer.astro`
- `website/src/layouts/Layout.astro`

---

### Schritt 6: Case Studies bereinigen

**Aktionen:**

- `content/case-studies/beispiel-ki-pilot.md`: Titel-Präfix "Beispielprojekt: " voranstellen, `draft: true` entweder beibehalten (Seite bleibt dann unsichtbar in Prod — prüfen, wie `case-studies/index.astro` mit Drafts umgeht) oder auf `false` setzen, wenn die Kennzeichnung im Text ausreicht, um Missverständnisse zu vermeiden — Entscheidung: **Draft-Status beibehalten, bis echte Cases vorliegen**, damit die Seite nicht mit einem einzelnen Beispiel wirkt, als gäbe es nur ein Projekt
- `case-studies/index.astro`: Falls aktuell 0 sichtbare (non-draft) Einträge zu einer leeren Seite führen, Hinweistext ergänzen ("Ich dokumentiere hier laufend echte Projekte — der erste Case folgt in Kürze.") statt einer leeren Liste
- Link zu `/case-studies` in Header/Footer/Hero nur behalten, wenn die Seite mit Hinweistext sinnvoll aussieht — sonst temporär aus der Hauptnavigation entfernen und nur intern verlinkt lassen, bis erste echte Cases da sind (Entscheidung beim Implementieren final treffen)

**Betroffene Dateien:**

- `website/src/content/case-studies/beispiel-ki-pilot.md`
- `website/src/pages/case-studies/index.astro`

---

### Schritt 7: Blog-Layout — Retention stärken

**Aktionen:**

- `RelatedPosts.astro` neu erstellen: Nimmt aktuelle `category` + `slug` entgegen, zeigt 2–3 andere Posts derselben Kategorie (Fallback: neueste Posts, falls zu wenige in Kategorie)
- In `BlogLayout.astro` nach dem Prev/Next-Block einbinden
- Discovery-Call-CTA-Link in `BlogLayout.astro` auf `links.calcom` umstellen
- Autor-Karten-Text leicht anpassen, konsistent mit neuer Positionierung aus Schritt 1

**Betroffene Dateien:**

- `website/src/components/RelatedPosts.astro` (neu)
- `website/src/layouts/BlogLayout.astro`

---

### Schritt 8: Validierung & lokaler Test

**Aktionen:**

- `cd website && npm run dev` starten, alle geänderten Seiten visuell prüfen (Startseite, `/leistungen`, `/blog/[ein-artikel]`, `/case-studies`)
- Alle CTA-Links klicken/prüfen: Cal.com-Link funktioniert, Newsletter-Formular funktioniert, Kontaktformular funktioniert weiterhin
- `npm run build` ausführen, um sicherzustellen, dass der Produktions-Build ohne Fehler durchläuft (insbesondere neue Seite + neue Komponente)
- Mobile-Ansicht (schmale Breite) für Startseite und neue Leistungsseite prüfen

**Betroffene Dateien:** keine (Validierung)

---

### Schritt 9: Dokumentation aktualisieren

**Aktionen:**

- `CLAUDE.md`, Abschnitt "Aktives Projekt: busche.cloud Website": neue Seite `/leistungen` ergänzen, Positionierung aktualisieren, Cal.com-Status eintragen, offene Punkte anpassen (Cal.com-Punkt ggf. auf erledigt setzen)
- `context/current-data.md`: Sektionsliste, Seiten-Übersicht und offene Punkte aktualisieren
- Diesen Plan als Status "Umgesetzt" markieren nach Abschluss (durch `/implement`)

**Betroffene Dateien:**

- `CLAUDE.md`
- `context/current-data.md`

---

## Verbindungen & Abhängigkeiten

### Dateien, die diesen Bereich referenzieren

- `outputs/consulting-angebot.md` — Quelle für Leistungspaket-Texte, wird nach Umsetzung um Hinweis "Live auf /leistungen" ergänzt
- `outputs/monetarisierung-strategie.md` — Funnel-Beschreibung wird nach Cal.com-Einrichtung stimmiger (Cal.com-Schritt ist dann real, nicht nur geplant)
- `outputs/linkedin-optimierung.md` — sollte nach Abschluss geprüft werden, ob die dortigen Texte noch zur neuen Website-Positionierung passen (nicht Teil dieses Plans, aber Folgeaufgabe)

### Nötige Updates für Konsistenz

- `CLAUDE.md` und `context/current-data.md` (siehe Schritt 9)
- Ggf. `context/business-info.md`, falls die in Schritt 1 erarbeitete finale Positionierung von der aktuellen Kurzfassung abweicht

### Auswirkungen auf bestehende Workflows

- Bestehende Blog-Artikel bleiben inhaltlich unverändert; nur `BlogLayout.astro` (CTA-Link, RelatedPosts) wird angepasst — betrifft alle 12 Artikel automatisch, kein Einzel-Edit nötig
- SEO-Infrastruktur (Sitemap, RSS, JSON-LD, OG-Images) bleibt erhalten; neue Seite `/leistungen` muss in Sitemap automatisch auftauchen (Astro-Sitemap-Integration generiert automatisch aus `src/pages`) — keine manuelle Pflege nötig
- Bestehende URLs bleiben erhalten (keine Slugs geändert), daher keine Redirects nötig

---

## Validierungs-Checkliste

- [ ] `/leistungen` ist erreichbar, zeigt alle drei Pakete mit Preisen, CTA-Buttons funktionieren
- [ ] Hero-Headline und Subline transportieren klar "KI-Consultant mit Angebot", nicht mehr generische IT-Erfahrung
- [ ] Newsletter-Signup ist auf der Startseite sichtbar und funktioniert (Test-Anmeldung)
- [ ] Alle "Erstgespräch"-CTAs verlinken auf Cal.com (nicht mehr nur `#kontakt`)
- [ ] Case-Studies-Seite wirkt nicht mehr wie ein kaputter Platzhalter
- [ ] `RelatedPosts` erscheint korrekt unter mindestens 3 verschiedenen Blog-Artikeln unterschiedlicher Kategorien
- [ ] `npm run build` läuft ohne Fehler durch
- [ ] Mobile-Ansicht (< 400px) für Startseite und `/leistungen` sieht sauber aus
- [ ] `CLAUDE.md` und `context/current-data.md` spiegeln den neuen Zustand wider

---

## Erfolgskriterien

1. Ein Besucher versteht innerhalb von 5 Sekunden auf der Startseite, dass hier ein KI-Consultant mit konkretem, buchbarem Angebot ist (nicht "irgendein IT-Allrounder")
2. Preise und Pakete sind öffentlich einsehbar unter `/leistungen`
3. Newsletter-Anmeldung ist der prominenteste, niedrigschwelligste CTA auf der Startseite; Discovery-Call/Cal.com ist der zweite, klar erkennbare CTA
4. Kein Seitenbereich wirkt unfertig oder wie ein sichtbarer Platzhalter
5. Zwischen Blog-Artikeln und Startseite/Leistungsseite gibt es mehrere sinnvolle interne Verlinkungen, die zum Weiterlesen/-klicken einladen

---

## Notizen

- Dieser Plan berührt bewusst **nicht** die Blog-Artikel-Inhalte selbst, die Tools-Seite-Struktur oder das Grundfarbschema — der Fokus liegt auf Positionierung, Angebots-Sichtbarkeit und Retention-Mechanik auf Startseite/Leistungsseite/Blog-Layout.
- Folgeaufgaben außerhalb dieses Plans, die sich daraus ergeben: LinkedIn-Texte (`outputs/linkedin-optimierung.md`) auf Konsistenz mit neuer Positionierung prüfen; echte Case Study nach erstem abgeschlossenen Consulting-Projekt einpflegen; Testimonials nach ersten Kundenstimmen befüllen.
- Fable/Opus-Einsatz ist an Schritt 1 gebunden — falls der User das lieber selbst im Hauptthread entscheidet (z.B. weil er Textvarianten direkt sehen und diskutieren will), kann Schritt 1 auch ohne Subagent-Delegation im Hauptgespräch erfolgen.

---

## Implementierungsnotizen

**Implementiert:** 2026-09-13

### Zusammenfassung

Positionierungstexte wurden per Fable-Subagent entworfen (3 Hero-Varianten, Paket-Texte, Footer-Claim, Meta-Description); der User wählte Hero-Variante A ("KI, die bei euch wirklich läuft."). Startseite wurde umstrukturiert: neue Hero-Copy, About-Sektion auf "Global AI Manager" umgestellt (Enterprise-Architecture-Sprache entfernt), Leistungs-Sektion zu Teaser mit Link auf neue `/leistungen`-Seite verkürzt, neue Newsletter-Sektion als Haupt-CTA eingefügt, Projekte-Sektion von 4 gemischten IT-Projekten auf einen kompakten Case-Study-Teaser reduziert (alte IT-Projekte sind jetzt im About-Fließtext erwähnt statt eigener Karten). Neue Seite `/leistungen` mit allen drei Consulting-Paketen (Preise, Inhalte, CTAs) erstellt. Case-Study-Platzhalter wurde als "Beispielprojekt:" gekennzeichnet und sichtbar geschaltet (`draft: false`), da eine leere Case-Studies-Seite mit totem Startseiten-Link schlechter gewesen wäre als ein klar gekennzeichnetes Beispiel. Neue `RelatedPosts`-Komponente zeigt 2–3 verwandte Artikel am Ende jedes Blog-Posts. Header, Footer und Layout-Meta-Description wurden konsistent angepasst. `npm run build` läuft fehlerfrei durch, alle Seiten wurden per curl gegen den Dev-Server verifiziert.

### Abweichungen vom Plan

- **Cal.com wird nicht eingerichtet:** User-Entscheidung bei Implementierungsstart — alle "Erstgespräch"-CTAs bleiben auf dem bestehenden Formspree-Kontaktformular (`/#kontakt`), keine Cal.com-Integration in `config/site.ts`. Schritt 2 des Plans entfällt damit.
- **Case-Study-Sichtbarkeit abweichend vom Plan gelöst:** Der Plan sah vor, `draft: true` beizubehalten. Da das aber dazu geführt hätte, dass der neue Startseiten-Link "Beispielprojekt ansehen" auf eine leere Seite zeigt, wurde der User dazu befragt (AskUserQuestion) und entschied sich für `draft: false` mit weiterhin klarer "Beispielprojekt:"-Kennzeichnung im Titel.
- **Projekte-Sektion stärker reduziert als ursprünglich beschrieben:** Statt eine Karte hervorzuheben und die anderen drei kleiner darzustellen, wurde die Sektion zu einem einzigen kompakten Text-Teaser mit Link zu `/case-studies` umgebaut — bei nur noch einem verbleibenden KI-Projekt (nachdem die drei alten IT-Projekte in den About-Text verschoben wurden) hätte ein Karten-Grid mit einer einzelnen Karte visuell unstimmig gewirkt.
- **Testimonials-Komponente unverändert gelassen:** Wie vom User entschieden ("für's Erste ausblenden") wurde kein Hinweiskommentar ergänzt, da die Komponente bereits automatisch nichts rendert, wenn das Array leer ist — keine Code-Änderung nötig.

### Aufgetretene Probleme

- Beim ersten Build-Versuch kollidierte der neu eingeführte `slug`-Prop in `BlogLayout.astro` mit einer bereits vorhandenen, aus der URL abgeleiteten lokalen Variable gleichen Namens. Gelöst, indem der Prop entfernt und stattdessen die vorhandene lokale Variable wiederverwendet wurde; der `slug`-Prop wurde entsprechend auch aus `pages/blog/[...slug].astro` entfernt.
- Die Chrome-Browser-Extension war nicht verbunden, daher konnte die visuelle Prüfung nicht wie im Plan vorgesehen per Screenshot erfolgen. Stattdessen wurde der Dev-Server per curl/grep gegen alle geänderten Seiten (Startseite, `/leistungen`, `/case-studies`, mehrere Blog-Artikel) geprüft — Preise, Hero-Text, RelatedPosts und Navigationslinks wurden im gerenderten HTML bestätigt.
