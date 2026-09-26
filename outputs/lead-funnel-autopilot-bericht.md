# Lead-Funnel-Autopilot: Ergebnisbericht

**Ausgeführt:** 2026-09-26, Claude Fable 5.1, auf Basis von `outputs/prompt-lead-funnel-autopilot.md`
**Branch / PR:** `claude/determined-lamport-0z8aqs`, [mawo86/portfolio#1](https://github.com/mawo86/portfolio/pull/1)
**Build-Status:** `npm run check` (Build + Link-Check + Budget) grün, 50 Seiten, 2244 interne Verweise, 0 kaputte Links

## 1. Analyse: Was die Website erreichen will und wo der Funnel brach

1. Ziel: Anfragen für KI-Beratung von Mittelständlern (10 bis 500 MA), Einstieg über den Readiness-Check für €299, Schwerpunkt SAP-nahe Prozesse in Vertrieb, Kundenservice, Backoffice.
2. Zielperson: Geschäftsführung oder Bereichsleitung mit konkretem Zeitfresser, kein Technik-Publikum.
3. Funnel vorher: Blog (12 Artikel) → Newsletter als Haupt-CTA → Kontaktformular. Der Schritt "Was heißt das für mein Unternehmen?" fehlte komplett.
4. Bruch 1: Blog-Artikel endeten generisch (Newsletter, Erstgespräch), ohne Bezug zum Problem des Lesers.
5. Bruch 2: Keine Stelle, an der der Besucher sein Problem eingibt und eine konkrete Lösung mit Paket sieht. `/leistungen` beschreibt Pakete, nicht Probleme.
6. Bruch 3: Kein Lead-Magnet. Die E-Mail-Adresse wurde nur gegen "Newsletter" verlangt, ohne Gegenwert.
7. Bruch 4: Die Danke-Seite schickte zum Blog zurück statt zum nächsten Schritt.
8. Bruch 5: Alle Erstgespräch-Links waren an rund zehn Stellen hart auf `/#kontakt` kodiert, Cal.com-Wechsel wäre Fleißarbeit gewesen.
9. Bruch 6: GoatCounter zählte Seitenaufrufe, aber kein einziges Funnel-Ereignis.
10. Bruch 7: Social Proof fehlt (Testimonials leer, Case Studies sind Beispiele). Vertrauen muss über nachvollziehbare, konkrete Lösungswege entstehen.
11. Technik: kein Build-Check auf Pull Requests, OG-Bilder hingen an einem externen Font-Download, sechs Blog-Artikel verlinkten ins Leere.
12. Hebel: Eine problem-zentrierte Use-Case-Bibliothek mit Finder als Brücke zwischen Blog und Paket, mit dem Readiness-Check als logischem Abschluss.

## 2. Prioritätenliste und Status

| # | Maßnahme | Wirkung | Aufwand | Status |
|---|---|---|---|---|
| 1 | Use-Case-Bibliothek `/loesungen` mit 26 Lösungen über 10 Bereiche | hoch | hoch | erledigt |
| 2 | Use-Case-Finder (Branche, Bereich, Zeitproblem → 3 Lösungen) | hoch | mittel | erledigt |
| 3 | Blog-Ausleitung in passende Lösungen (`LoesungTeaser`) | mittel | niedrig | erledigt |
| 4 | Funnel-Events in GoatCounter (5 Ereignisse, `bcTrack`, `data-track`) | mittel | niedrig | erledigt |
| 5 | Danke-Seite mit drei konkreten nächsten Schritten | mittel | niedrig | erledigt |
| 6 | Termin-Link zentral (`terminUrl()`), Kontaktformular vorbelegt aus Funnel-Kontext | mittel | niedrig | erledigt |
| 7 | Lead-Magnet: ausführliche Fassung per E-Mail über Buttondown (Tag + Metadaten) | mittel | niedrig | Website erledigt, **Buttondown-Automation braucht dich** |
| 8 | PR-Build-Check, Link-Check, Größen-Budget als Workflows | mittel | niedrig | erledigt |
| 9 | OG-Fonts lokal, Build offline-fähig | niedrig | niedrig | erledigt |
| 10 | 26 interne Schritt-für-Schritt-Anleitungen plus Betriebsstandard | hoch (für die Umsetzung) | hoch | erledigt |

Nicht in der Liste, aber gemacht: acht kaputte interne Links behoben, die der neue Link-Check gefunden hat.

## 3. Neue und geänderte Seiten

| Pfad | Änderung |
|---|---|
| `/loesungen` | neu: Finder + filterbare Bibliothek + Readiness-Check-Abschluss |
| `/loesungen/<slug>` (26 Seiten) | neu: `LoesungLayout` mit Problem-Kasten, Fakten, Paket-Karte, verwandte Lösungen, OG-Bild |
| `/` | Hero-Button 2 → `/loesungen`; neue Sektion "Lösungen" (Top 4); Kontaktformular liest `thema`, `titel`, `paket`, `bereich`, `zeitproblem`; Formular-Event |
| `/blog/<slug>` (alle) | `LoesungTeaser` vor dem Newsletter; CTA mit Artikel-Kontext |
| `/danke` | drei Vorbereitungsschritte, CTAs zu Lösungen und Readiness-Check |
| Header, Footer | "Lösungen" als erster Menüpunkt; alle Erstgespräch-Links über `terminUrl()` |
| `/leistungen`, `/tools`, `/case-studies`, Case-Study-Layout | Erstgespräch-Links über `terminUrl()` |
| `/impressum`, `/datenschutz` | `id="main"` für den Skip-Link ergänzt |
| 6 Blog-Artikel | Link `/blog/mein-ki-toolkit` (Draft) → `/tools` |
| `/og/loesungen.png`, `/og/loesungen/<slug>.png` | neu, mit lokalen Schriften |

## 4. Use-Cases mit Website-Slug und Anleitung

Vollständige Tabelle mit Paket und Status: `outputs/loesungswege/INDEX.md`. Kurzfassung nach Bereich:

- **Vertrieb:** angebotsentwurf-aus-anfrage, lead-qualifizierung-eingang, crm-pflege-und-nachfassen
- **Kundenservice:** ticket-klassifikation-kundenservice, antwortentwuerfe-mit-wissensbasis, wissensdatenbank-mit-quellenbeleg
- **Backoffice & Buchhaltung:** rechnungseingang-vorerfassung, mahnwesen-vorschlaege, reporting-kommentierung
- **HR:** stellenanzeigen-und-hr-texte, bewerber-vorsortierung-mit-augenmass
- **Einkauf & Logistik:** lieferantenanfragen-vergleichen, auftragsbestaetigung-abgleich
- **Produktion & Technik:** wartungsdokumentation-per-sprache, schichtuebergabe-zusammenfassung
- **Geschäftsführung:** meeting-zusammenfassung-und-aufgaben, entscheidungsvorlagen-kurzfassung
- **SAP-Prozesse:** sap-sd-auftragspruefung, sap-fico-buchungsvorschlaege, sap-stammdatenqualitaet
- **Recht & Organisation:** dsgvo-check-fuer-ki-einsatz, eu-ai-act-einstufung, ki-einfuehrung-team-und-betriebsrat
- **Technik & Betrieb:** vom-prototyp-zum-betrieb, hosting-entscheidung-cloud-eu-onprem, kosten-und-qualitaetsmonitoring

Jede Anleitung: `outputs/loesungswege/<slug>.md`, jede Website-Seite: `/loesungen/<slug>`.

## 5. Das musst du selbst tun

| # | Aufgabe | Zeit | Warum |
|---|---|---|---|
| 1 | **PR mergen.** [mawo86/portfolio#1](https://github.com/mawo86/portfolio/pull/1) reviewen, mergen. Erst danach ist alles live und `pr-check.yml` aktiv. | 20 Min | Deploy läuft nur von `main` |
| 2 | **Buttondown-Automation anlegen.** In Buttondown unter Automations: Trigger "Subscriber gets tag `use-case-finder`", Aktion "Send email". Inhalt: kurze Begrüßung, Link zu `/loesungen`, die ausführliche Fassung als Text oder PDF-Anhang (Vorschlag: die drei Abschnitte "Was ihr dafür braucht", "Warum dieses Paket" plus Kontakt). Der Tag wird vom Finder automatisch gesetzt, die Metadaten `finder_bereich`, `finder_zeitproblem`, `finder_branche`, `finder_loesungen` stehen im Abonnenten-Profil. | 45 Min | Sonst bekommen Finder-Abonnenten nur die Bestätigungsmail |
| 3 | **GoatCounter prüfen.** Nach den ersten echten Klicks unter Pfade nach `ev/` filtern. Die fünf Events sollten erscheinen. Optional als gespeicherte Ansicht. | 10 Min | Bestätigt, dass Tracking live funktioniert (lokal nicht testbar) |
| 4 | ~~`mein-ki-toolkit` entscheiden~~ Erledigt 2026-09-26: Artikel wieder live, Links zurückgedreht. | erledigt | |
| 5 | **Zahlen gegenlesen.** Alle Aufwands- und Effektangaben in den 26 Lösungen sind als Spannen mit "Erfahrungswert aus vergleichbaren Prozessen" formuliert. Prüfe, ob du sie so vertreten kannst, besonders bei den SAP-Fällen (deine Domäne). Anpassen in `website/src/content/loesungen/<slug>.md`, Felder `aufwand` und `einsparung`. | 60 Min | Es sind deine Zahlen, nicht meine |
| 6 | **Preise in den Anleitungen abgleichen.** Abschnitt 8 jeder Anleitung nennt Preisspannen innerhalb deiner Pakete (z. B. Pilot €3.500 bis €5.500 bei ERP-Anbindung). Stimmen die mit deiner Kalkulation? | 30 Min | Interne Anleitungen sind deine Verhandlungsgrundlage |
| 7 | **Cal.com einrichten** (bereits in "Noch ausstehend"). Danach in `website/src/config/site.ts` nur `links.termin` auf den Buchungslink setzen. Die Parameter `thema` und `paket` werden dann als Query an Cal.com übergeben und können dort als Hidden Fields ausgelesen werden. | 60 Min | Ein Klick zum Termin statt Formular erhöht Conversion |
| 8 | **Beim ersten Kundeneinsatz** einer Lösung: Status in `outputs/loesungswege/INDEX.md` auf "beim Kunden erprobt", Gelerntes in Abschnitt 7 der Anleitung. | 15 Min pro Fall | Die Anleitungen werden erst durch Praxis wertvoll |

## 6. Drei Maßnahmen, die ich bewusst nicht umgesetzt habe

1. **E-Mail-Gate vor dem Finder-Ergebnis.** Der Prompt ließ beides offen. Ich habe das Ergebnis frei sichtbar gemacht und die E-Mail nur für die ausführliche Fassung verlangt. Grund: Ein Gate vor dem Ergebnis kostet bei einem noch unbekannten Absender mehr Vertrauen, als es Adressen bringt. Wer das Ergebnis gut findet, gibt die Adresse für mehr. Wenn die Lead-Zahl nach vier Wochen zu niedrig ist, lässt sich das Gate in `UseCaseFinder.astro` mit wenigen Zeilen nachrüsten (Ergebnisliste erst nach Submit einblenden).

2. **Lighthouse-CI als eigener Workflow-Schritt.** Der Prompt nannte "Lighthouse- oder Größen-Budget". Ich habe das Größen-Budget gebaut (eigenes Skript, kein externer Dienst, läuft in zwei Sekunden) und Lighthouse weggelassen. Grund: Lighthouse in CI braucht einen laufenden Server, Chrome und drei bis fünf Minuten pro Lauf, ist bei einer statischen Seite ohne Framework-Overhead selten aussagekräftiger als die Dateigrößen, und schwankt zwischen Läufen. Wenn Performance-Werte gewünscht sind: einmal manuell in Chrome DevTools messen, nicht bei jedem PR.

3. **`mein-ki-toolkit` wieder live stellen.** Sechs Artikel verlinkten auf den Draft. Die naheliegende Lösung wäre gewesen, `draft: false` zu setzen. Ich habe stattdessen die Links auf `/tools` gedreht. Grund: Der Artikel wurde in einem Commit bewusst zurück auf Draft gesetzt, und Inhalte zu veröffentlichen, die du zurückgezogen hast, ist deine Entscheidung, nicht meine. Der Fall steht in Abschnitt 5.

## 7. Was ich beim Prüfen gesehen habe (Nebenbefunde)

- `context/current-data.md` und CLAUDE.md nannten unterschiedliche Zahlen für Blog-Drafts (19 vs. 21). Ich habe das nicht bereinigt, weil ich die Draft-Pipeline nicht angefasst habe. Kurz prüfen mit `grep -l "draft: true" website/src/content/blog/*.md | wc -l`.
- Die Kontaktformular-Betreff-Auswahl hat den Wert `laufende-begleitung`, die Pakete heißen intern `begleitung`. Ich habe eine Zuordnungstabelle in der Vorbelegung eingebaut, statt den Formular-Wert zu ändern, damit bestehende Formspree-Auswertungen weiter passen.
- `Testimonials.astro` rendert weiterhin nichts. Sobald das erste Zitat da ist, gehört es auch auf die Lösungsseiten (Paket-Karte), das ist eine kleine Erweiterung von `LoesungLayout.astro`.
