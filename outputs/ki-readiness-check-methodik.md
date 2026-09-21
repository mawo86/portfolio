# KI-Readiness-Check — Durchführungs-Methodik

**Internes Arbeitsdokument.** Nicht für Kunden, nicht für die Website. Ziel: Der Check läuft reproduzierbar ab, egal welcher Kunde, egal welcher Tag. Kein Bauchgefühl, sondern ein Ablauf, den ich abarbeiten kann.

**Preis:** €299 · **Dauer:** 2 Stunden Call (remote) · **Deliverable:** PDF-Report

---

## 1. Vorbereitung

### 1.1 Intake-Formular (vor Terminbuchung, z.B. via Formspree oder Typeform)

Der Kunde füllt das aus, bevor der Termin überhaupt bestätigt wird. Ohne ausgefülltes Formular kein Termin — sonst sitze ich im Call und sammle Basisinfos, die ich vorher hätte haben können.

**Fragen:**

1. Firma, Branche, Anzahl Mitarbeiter
2. Welches ERP-/Kernsystem nutzt ihr? Und hat das eine offene Schnittstelle/API, einen Datenexport (z. B. CSV, ggf. mit Zeitversatz), oder läuft der Datenaustausch komplett manuell? (SAP-Version falls SAP, sonst welches System — die Integrationsfähigkeit ist ab 2026-09-20 Teil der Frage, nicht mehr nur Vorab-Recherche des Beraters, siehe Hinweis unten)
3. Wer nimmt am Call teil? (Name, Rolle — wichtig: Person muss die operativen Prozesse selbst kennen, nicht nur der Chef)
4. Nennt 3–5 Aufgaben/Prozesse, die im Team als "nervig", "zeitaufwändig" oder "macht keiner gerne" gelten
5. Für jeden genannten Prozess: Wie oft passiert das? (täglich/wöchentlich/monatlich) Wie viele Personen sind beteiligt? Grobe Schätzung Zeitaufwand pro Durchlauf
6. Nutzt ihr aktuell schon KI-Tools? Welche, wofür, seit wann?
7. Gibt es Datenschutz-/Compliance-Vorgaben, die wir kennen müssen (Betriebsrat, Branchenauflagen, Kundendaten-Restriktionen)?
8. Was ist der Auslöser, dass ihr euch jetzt mit KI beschäftigt? (Wettbewerbsdruck, Kostendruck, Neugier, konkretes Problem)
9. Budget-Hausnummer für ein mögliches Folgeprojekt vorhanden? (nicht verpflichtend, aber hilft bei der Roadmap-Kalibrierung)

Das Formular ist absichtlich kurz (9 Fragen, 10 Minuten Ausfüllzeit). Ziel ist Rohmaterial, keine fertige Analyse.

**Warum Frage 2 die Integrationsfähigkeit jetzt mit abfragt:** Ein Testlauf zeigte, dass ein Automatisierungsvorschlag technisch scheitern kann, wenn das genannte System keine offene Schnittstelle hat, sondern nur einen zeitversetzten Export (z. B. nächtlicher CSV-Export statt Live-API). Bei bekannten Systemen (SAP, gängige CRMs) lässt sich das vorab recherchieren (Abschnitt 1.2) — bei einer Branchensoftware, die der Kunde nutzt und der Berater nicht kennt, geht das nicht zuverlässig vorab. Die Frage steht deshalb im Intake, nicht als zusätzliche Leitfrage im Call (das würde den Deep-Dive-Slot pro Prozess unnötig verlängern, obwohl die Antwort für den ganzen Call gilt, nicht pro Prozess).

**Wichtig: Systemintegration ist Kontext, kein globaler Abzug.** Dass ein System nur Batch-Export statt Live-API hat, begrenzt nur die Prozesse, die tatsächlich Live-Daten bräuchten (z. B. Lagerbestands-Überwachung). Ein Prozess ohne Systemanbindung (z. B. reine Dokumentation vor Ort) ist davon unberührt. Keine pauschale Regel wie "Batch-only senkt Umsetzbarkeit bei allen Prozessen" — die Einschränkung wird pro Prozess im Deep-Dive geprüft, wenn eine Automatisierungsidee tatsächlich eine Systemanbindung braucht.

**Copy-Paste-Vorlage (2026-09-21)** — bis Typeform/Formspree eingerichtet ist, per E-Mail direkt nach Terminanfrage verschicken:

> Betreff: Kurzer Fragebogen vor unserem KI-Readiness-Check-Termin
>
> Hallo [Name],
>
> vorab noch ein kurzer Fragebogen (ca. 10 Minuten) — das hilft mir, den
> gemeinsamen Termin optimal zu nutzen, statt Grundlagen erst im Call zu
> klären. Bitte schickt mir die Antworten spätestens 2 Werktage vor dem
> Termin zurück, sonst müssen wir den Termin leider verschieben.
>
> 1. Firma, Branche, Anzahl Mitarbeiter:
> 2. Welches ERP-/Kernsystem nutzt ihr? Hat es eine offene
>    Schnittstelle/API, einen Datenexport (z. B. CSV, ggf. zeitversetzt),
>    oder läuft der Datenaustausch komplett manuell?
> 3. Wer nimmt am Call teil (Name, Rolle)? Wichtig: Die Person sollte die
>    operativen Abläufe selbst kennen, nicht nur die Geschäftsführung.
> 4. Nennt 3–5 Aufgaben/Prozesse, die im Team als "nervig",
>    "zeitaufwändig" oder "macht keiner gerne" gelten:
> 5. Für jeden genannten Prozess: Wie oft passiert das (täglich/
>    wöchentlich/monatlich)? Wie viele Personen sind beteiligt? Grobe
>    Schätzung des Zeitaufwands pro Durchlauf?
> 6. Nutzt ihr aktuell schon KI-Tools? Welche, wofür, seit wann?
> 7. Gibt es Datenschutz-/Compliance-Vorgaben, die wir kennen müssen
>    (Betriebsrat, Branchenauflagen, Kundendaten-Restriktionen)?
> 8. Was ist der Auslöser, dass ihr euch jetzt mit KI beschäftigt?
> 9. Budget-Hausnummer für ein mögliches Folgeprojekt vorhanden? (nicht
>    verpflichtend, hilft aber bei der Roadmap-Kalibrierung)
>
> Viele Grüße
> Marlon

### 1.2 Vorbereitung durch Marlon (15–20 Minuten, am Tag vor dem Call)

1. **Intake-Antworten lesen** (5 Min) — Prozesse und Zeitangaben rauskopieren in die Bewertungsraster-Vorlage (siehe Abschnitt 3), damit ich im Call sofort eintragen kann statt mitzuschreiben.
2. **System-Check** (5 Min) — Kurz recherchieren, was das genannte ERP/System typischerweise für Schnittstellen/API/Automatisierungsoptionen hat (bei SAP: welche Module vermutlich betroffen sind — SD, MM, FI je nach genannten Prozessen).
3. **Hypothesen bilden** (5–10 Min) — Zu den 3–5 genannten Prozessen: erste Einschätzung, ob das eher "Automatisierung" (regelbasiert, n8n/Zapier-Kandidat), "KI-Unterstützung" (Textgenerierung, Zusammenfassung, Klassifikation) oder "kein guter Kandidat" (zu individuell, zu sensibel, zu selten) ist. Diese Hypothesen sind Ausgangspunkt für den Call, nicht Endergebnis — sie werden im Call verifiziert oder verworfen.

Wenn die Intake-Antworten zu dünn sind (z.B. keine Zeitangaben), vorab eine kurze E-Mail mit 1–2 Nachfragen schicken. Besser vor dem Call klären als im Call Zeit verlieren.

---

## 2. Durchführung des 2h-Calls

Strikt getaktet. Timer sichtbar mitlaufen lassen (z.B. zweiter Monitor mit Stoppuhr). Wenn ein Block droht zu überziehen, aktiv abschneiden und anbieten, Details nach dem Call per E-Mail zu klären — nicht auf Kosten der späteren Blöcke.

| Zeit | Block | Inhalt |
|---|---|---|
| **0:00–0:15** | Kickoff & Kontext | Ziele des Kunden fürs Gespräch abgleichen. Intake-Antworten kurz gemeinsam durchgehen ("Ihr habt X, Y, Z genannt — passt das noch, oder hat sich was verschoben?"). Erwartungsmanagement: "Am Ende habt ihr keine fertige Lösung, sondern eine priorisierte Liste plus PDF." |
| **0:15–1:10** | Prozess-Deep-Dive | 55 Minuten geteilt durch Anzahl besprochener Prozesse (3–5 Stück): bei 5 Prozessen ca. 11 Min je Prozess, bei 3 Prozessen ca. 18 Min. Ablauf Schritt für Schritt durchgehen. Leitfragen unten (jetzt 7 statt 6 — die Abhängigkeits-Frage ist meist kurz beantwortet, "keine" oder eine knappe Nennung, verlängert den Slot in der Praxis kaum). Live in die Bewertungsmatrix eintragen (Bildschirm teilen, Kunde sieht mit — schafft Vertrauen und schon während des Calls Aha-Effekte). |
| **1:10–1:15** | Kurze Pause | 5 Minuten Verschnaufpause, kein fester Puffer. Reicht bei Bedarf auch als kurzer Themenwechsel. |
| **1:15–1:45** | Priorisierung gemeinsam | Matrix (Abschnitt 3) gemeinsam durchgehen, laut denken: "Diese zwei sehen am stärksten aus, weil…". Kunde kann widersprechen oder ergänzen — er kennt interne Politik/Widerstände, die ich nicht sehe. |
| **1:45–2:00** | Tool-Ausblick & nächste Schritte | Grobe Tool-Richtung nennen (nicht die volle Ausarbeitung — die kommt im PDF). Ablauf nach dem Call erklären: PDF in 3–5 Werktagen, Nachfass-Call nach 1 Woche. Fragen offen lassen für den Nachfass-Call statt hier alles klären zu wollen. |

Bei mehr als 5 Prozessen im Call: hart auf die 5 mit dem in der Vorbereitung höchsten Hypothese-Potenzial eingrenzen (Abschnitt 1.2), Rest im Report nur kurz als "beobachtet, nicht vertieft" erwähnen. Sonst wird jeder Slot zu kurz, um belastbar zu sein.

### Leitfragen für den Prozess-Deep-Dive (Block 2)

Pro Prozess, in dieser Reihenfolge:

1. "Beschreib mir den Ablauf, als würdest du es einem neuen Mitarbeiter erklären." (Ablauf verstehen, nicht bewerten)
2. "Wo kommen die Informationen her, die du dafür brauchst?" (Systeme, E-Mails, Excel, Kopf des Kollegen)
3. "Was genau macht daran am meisten Arbeit — das Sammeln der Infos, das Entscheiden, oder das Eintippen/Dokumentieren?" (unterscheidet Automatisierungs- von KI-Kandidat)
4. "Hängt der Prozess an einer bestimmten Abteilung oder Person, ohne die es nicht weitergeht?" (Abhängigkeit — füttert direkt die Umsetzbarkeit-Achse: eine Automatisierung, die trotzdem auf externe Zuarbeit oder eine bestimmte Person wartet, bringt weniger, egal wie regelbasiert der Rest ist. Diese Frage stand bis 2026-09-20 nicht im Fragenkatalog — ein simulierter Testlauf zeigte, dass genau diese Information sonst nur zufällig beiläufig auftaucht, wenn der Kunde sie von sich aus erwähnt, statt verlässlich erfragt zu werden)
5. "Wie oft geht dabei was schief oder muss korrigiert werden?" (Qualitätsproblem = zusätzlicher Hebel)
6. "Wenn das komplett wegfallen würde — was würdet ihr mit der Zeit machen? Und: gibt es dadurch auch Fälle, die aktuell liegen bleiben oder abgelehnt werden?" (Impact greifbar machen — Zeitersparnis UND entgangenes Geschäft, siehe Hinweis unten)
7. "Gibt's das schon irgendwo als Vorlage, Regel oder Checkliste?" (Reifegrad — je strukturierter, desto leichter automatisierbar)

**Entgangenes Geschäft ist kein vierter Scoring-Faktor.** Der Score bleibt strikt Zeitaufwand × Automatisierbarkeit × Umsetzbarkeit (Abschnitt 3.2) — ein vierter Faktor würde den Wertebereich (1–125) und die Schwellen (60/20) sowie die Deckelungs-Begründung bei niedriger Umsetzbarkeit stillschweigend ungültig machen. Wenn ein Kunde von liegengebliebenen Anfragen oder abgelehntem Geschäft berichtet, ist das ein **Freitext-Fakt für die Executive Summary** (oft ein stärkeres Kundenargument als reine Zeitersparnis), nicht Teil der Punktevergabe.

---

## 3. Bewertungsraster

Ziel: 3–5 Zeitfresser objektiv vergleichbar machen, keine Wischi-Waschi-Rangliste.

### 3.1 Drei Kriterien, je 1–5 Punkte

Für jeden im Call besprochenen Prozess:

| Kriterium | 1 Punkt | 3 Punkte | 5 Punkte |
|---|---|---|---|
| **Zeitaufwand (Impact)** | < 2 Std/Monat gesamt | 2–15 Std/Monat gesamt | > 15 Std/Monat gesamt |
| **Automatisierbarkeit** | Stark individuell, viele Ausnahmen, Bauchentscheidung nötig | Teilweise regelbasiert, einige Ausnahmen | Klar regelbasiert / strukturierte Eingabe-Ausgabe, wenig Ausnahmen |
| **Umsetzbarkeit (Aufwand)** | Tiefe Systemintegration nötig, Change-Management, mehrere Abteilungen | Ein System, moderate Einrichtung, ein Verantwortlicher | Steht-Tool oder einfacher Workflow, in Tagen umsetzbar |

**Zeitaufwand** = "Wie sehr tut's weh, dass das manuell läuft" — erfasst wird in **Std./Woche** (Anzahl beteiligter Personen × Zeit pro Durchlauf × Häufigkeit), für die Score-Schwellen unten auf Std./Monat hochgerechnet (× 4,33).

**Automatisierbarkeit** = "Wie klar ist die Logik dahinter" — je mehr Wenn-Dann, desto höher.

**Umsetzbarkeit** = "Wie schnell kriegt man das in Produktion" — das ist der Realitäts-Check, damit nicht nur Wunschdenken in die Priorisierung einfließt.

### 3.2 Score & Priorisierung

Score = Zeitaufwand × Automatisierbarkeit × Umsetzbarkeit (Produkt, nicht Summe — ein Prozess mit 5 Punkten Impact aber 1 Punkt Umsetzbarkeit soll nicht oben landen, weil er in der Praxis nicht angegangen wird).

Score-Bereich: 1–125.

- **≥ 60:** Sofort-Kandidat (Phase 1 der Roadmap)
- **20–59:** Mittelfristig (Phase 2, nach dem ersten Erfolg angehen)
- **< 20:** Beobachten oder verwerfen — im Report kurz erwähnen, aber nicht empfehlen

Das Produkt erledigt das automatisch: Mit Umsetzbarkeit 1 oder 2 ist der Score rechnerisch auf maximal 5 × 5 × 2 = 50 gedeckelt — unter der Sofort-Schwelle von 60. Ein Prozess, der nicht kurzfristig umsetzbar ist, kann also nie in Phase 1 landen, egal wie hoch Impact und Automatisierbarkeit sind. Das ist kein Zufall, sondern der Grund, warum hier ein Produkt und keine Summe verwendet wird — eine zusätzliche Sonderregel braucht es dafür nicht.

**Sonderfall: kein Prozess erreicht die Sofort-Schwelle.** Ein dritter Testlauf (gut organisiertes Unternehmen, alle Prozesse fachlich individuell oder mit tiefer Systemintegration) zeigte, dass dieser Fall real ist und im bisherigen Ablauf drei Anschlussstellen ins Leere laufen lässt: der Prioritäts-Bogen verlangt Phase-1-Maßnahmen, der Abschluss-Bogen ein "Empfohlener Pilot-Prozess", und PDF S.7 den Satz "[Prozess aus Phase 1]". Das ist **kein Fehlschlag des Checks**, sondern ein legitimes, sogar wertvolles Ergebnis — siehe die vorbereitete Antwort unten. Ablauf bei diesem Ergebnis:

1. **Nicht schönrechnen.** Kein Prozess wird künstlich als "Sofort" markiert, nur damit Phase 1 gefüllt ist. Der Score bleibt ehrlich.
2. **Phase 1 im Report entfällt explizit, wird nicht leer gelassen.** Der Report benennt das direkt: "Aktuell kein Prozess mit akutem Sofort-Potenzial" statt die Seite kommentarlos zu verkürzen.
3. **Stärkster Phase-2-Kandidat wird zum "was müsste sich ändern, damit das nach oben rutscht"-Punkt.** Statt eines Pilot-Prozesses aus Phase 1 nennt PDF S.7 den Prozess mit dem höchsten Score unter den Nicht-Sofort-Kandidaten und die konkrete Bedingung, die ihn nach oben schieben würde (z. B. "wenn die DATEV-Buchungslogik durch einen neuen Automatisierungsansatz adressiert wird").
4. **Die "was bekomme ich für mein Geld"-Frage kommt fast immer.** Vorbereitete Antwort, dreiteilig (im Testlauf bestätigt überzeugend): (a) Bestätigung ist ein Ergebnis — der Kunde weiß jetzt konkret, wo er NICHT investieren sollte, oft mit Bezug auf einen früheren gescheiterten Versuch; (b) das PDF bleibt als Referenz gültig, auch in einem Jahr noch nutzbar, wenn sich Tools oder die eigene Situation ändern; (c) Ehrlichkeit statt künstlichem Sofort-Kandidaten ist selbst das Argument — ein Berater, der lieber eine Empfehlung erfindet als "aktuell nichts Dringendes" zu sagen, wäre nicht vertrauenswürdig. Wortlaut siehe Abschluss-Bogen, Framework-Dokument.

**Regel bei schwankenden Zeitangaben (z. B. saisonal):** Wenn ein Kunde selbst eine Spanne nennt (z. B. "15–20 pro Woche, im Winter eher 20–25"), wird für den Score der **typische Wert** verwendet (im Beispiel: der Wert außerhalb der Spitzenzeit), nicht der Extremwert. Die Spanne selbst wird trotzdem in den Report übernommen ("in Spitzenzeiten auch mehr"), damit die Information nicht verloren geht — nur die Punktevergabe bleibt auf einem Wert, sonst kann derselbe Prozess je nach gewähltem Wert die Sofort-Schwelle über- oder unterschreiten und die Priorisierung wird beliebig. Diese Regel gehört zusammen mit dem Konfidenz-Marker (belastbar/grob) auf das Prozessblatt.

**Achtung, Sonderfall Konzentration statt Schwankung:** Die Regel oben ist für **Schwankung** gebaut — ein Prozess läuft das ganze Jahr, mal etwas mehr, mal etwas weniger (z. B. 3,4 vs. 4–5 Std./Woche). Ein dritter Testlauf zeigte einen anderen Fall: ein Prozess läuft **nur in einem begrenzten Zeitfenster fast auf null, davor/danach praktisch nicht** (z. B. Jahresabschluss-Vorbereitung: konzentriert auf ~5 Monate mit 15–20 Std./Woche, den Rest des Jahres kaum etwas). Wendet man die Schwankungsregel hier unverändert an ("Wert außerhalb der Spitzenzeit nehmen"), verschwindet der mit Abstand größte Zeitblock der Firma als Rundungsfehler aus der Std./Woche-Zahl — durchgerechnet: ~0,5 Std./Woche statt eines Jahresschnitts von ~6,7 Std./Woche (350 Std./Jahr ÷ 52). Das fällt nicht bei der Phasen-Einordnung auf (ein fachlich individueller Prozess mit geringer Umsetzbarkeit bleibt "Beobachten", egal welcher Wert gewählt wird) — es fällt beim Kunden auf, sobald er die Ist-Zustand-Tabelle (PDF S.3) liest und seine größte Zeitfresser-Zahl nicht wiedererkennt.

**Unterscheidung: Schwankung vs. Konzentration.**
- **Schwankung** (läuft ganzjährig, mal mehr/mal weniger): Regel unverändert — typischer Wert außerhalb der Spitze wird gescort.
- **Konzentration** (läuft nur in einem klar abgegrenzten Zeitfenster, sonst nahe null): Für Score UND Report wird der **Jahresschnitt** verwendet (Gesamtstunden im Zeitfenster ÷ 52 Wochen), nicht der Wert außerhalb des Fensters. Der Report nennt trotzdem beide Zahlen ("im Schnitt ~7 Std./Woche übers Jahr, konzentriert auf Jan–Mai mit ~15–20 Std./Woche"), damit der Kunde die Zahl wiedererkennt und die Information nicht verloren geht.

### 3.3 Praxis-Hinweis

Die Matrix wird live im Call ausgefüllt (Bildschirmfreigabe), nicht erst danach am Schreibtisch. Der Kunde soll die Bewertung nachvollziehen können — das ist Teil des Vertrauensaufbaus und verhindert spätere Rückfragen wie "warum steht das so weit unten".

---

## 4. Tool-Empfehlungs-Logik

Keine Tool-Empfehlung ohne diese drei Filter, in dieser Reihenfolge:

1. **Integration in Bestandssysteme (v.a. SAP).** Erste Frage immer: Gibt es eine Schnittstelle zum vorhandenen System, oder wird das ein Insel-Tool, das doppelte Datenpflege erzeugt? Bei SAP-Kunden: Prüfen ob native SAP-Funktionen (z.B. SAP-Bordmittel, bestehende RPA-Lizenzen) schon ausreichen, bevor ein externes Tool vorgeschlagen wird. Ein Tool, das nicht andockt, wird in der Praxis nach 3 Wochen nicht mehr benutzt — das ist der häufigste Grund, warum KI-Pilotversuche in Firmen sterben.
2. **Kosten im Verhältnis zur Unternehmensgröße.** Faustregel: Die monatlichen Tool-Kosten sollten den identifizierten Zeitgewinn (in Euro umgerechnet über Stundensatz) klar unterschreiten — Zielgröße Kosten unter 20 % des monatlichen Zeitwerts, sonst rechnet sich's für den Kunden nicht sichtbar genug, um intern durchsetzbar zu sein. Bei KMU: bevorzugt Tools mit monatlicher Kündigung, keine Jahresverträge in der Pilotphase empfehlen.
3. **Reifegrad des Kunden.** Wurde vorher noch nie mit KI gearbeitet → einfaches, sofort nutzbares Tool ohne Setup-Aufwand empfehlen (z.B. ChatGPT/Claude direkt für Textaufgaben), keine Workflow-Plattform. Kunde experimentiert schon selbst → nächste Stufe vorschlagen (n8n/Make für Verkettung, spezialisierte Tools). Nie ein Tool empfehlen, das eine technische Kompetenz voraussetzt, die im Team nachweislich fehlt (aus Intake/Call ersichtlich) — sonst bleibt die Empfehlung Theorie.

Immer 1–2 Alternativen nennen, nicht nur ein Tool — der Kunde soll eine Wahl treffen können, nicht das Gefühl haben, an einen Anbieter verkauft zu werden. Keine Tools empfehlen, mit denen ich selbst keine Erfahrung habe — lieber ehrlich "das müssten wir im Pilotprojekt testen" schreiben.

---

## 5. Das Deliverable: PDF-Report

Zielumfang: 6–8 Seiten. Kein Roman, kein PowerPoint-Bullet-Friedhof. Struktur ist fix, Inhalt variiert je Kunde.

**1. Executive Summary** (eine Seite)
Drei Kernaussagen ganz oben, fett, für den Chef, der den Rest nicht liest: größter Zeitfresser, größtes Potenzial, empfohlener erster Schritt. Ein Satz Einordnung, wo das Unternehmen im Vergleich zu ähnlichen KMU steht (grob, ohne erfundene Statistik).

**2. Ist-Zustand** (eine Seite, tabellarisch)
Die im Call analysierten 3–5 Prozesse als Tabelle: Prozessname, wer ist beteiligt, wie oft, geschätzter Zeitaufwand pro Woche, kurze Beschreibung des aktuellen Ablaufs (2–3 Sätze). Reine Bestandsaufnahme, noch keine Bewertung.

**3. Potenzial-Matrix** (eine Seite, visualisiert)
Die Bewertungsmatrix aus Abschnitt 3 als einfache Grafik (z.B. Balkendiagramm mit Score, oder 2×2-Matrix Impact/Umsetzbarkeit mit den Prozessen als Punkten). Kurzer Absatz, wie der Score zustande kommt (Transparenz schafft Glaubwürdigkeit).

**4. Priorisierte Roadmap** (ein bis anderthalb Seiten, drei Phasen)
- **Sofort (0–4 Wochen):** 1–2 konkrete Maßnahmen mit Sofort-Score, jeweils 2–3 Sätze was zu tun ist und geschätzter Aufwand.
- **3 Monate:** 1–2 Maßnahmen aus dem Mittelfeld, mit Voraussetzungen (was muss vorher geklärt sein).
- **6–12 Monate:** 1 größere Initiative oder strukturelle Empfehlung (z.B. "SAP-Schnittstelle prüfen", "Datenqualität in System X verbessern"), realistisch eingeordnet als längerfristiges Vorhaben.

**5. Tool-Empfehlungen** (eine Seite)
Pro empfohlenem Tool: Name, wofür, ungefähre Kosten, warum genau dieses (kurzer Verweis auf die drei Filter aus Abschnitt 4). Je Tool 1 Alternative nennen. Keine Affiliate-Links in diesem Dokument — das würde die Neutralität der Empfehlung untergraben.

**6. Nächste Schritte** (halbe Seite, CTA)
Konkreter Vorschlag: welcher der Sofort-Punkte eignet sich am besten als Pilotprojekt, Verweis auf das Pilot-Paket (ab €2.500) mit 1 Satz Begründung warum das der logische nächste Schritt ist. Kein Hard-Sell — Ton bleibt beratend, nicht verkäuferisch. Kontaktmöglichkeit für Rückfragen (siehe Abschnitt 6).

---

## 6. Qualitätssicherung

Damit sich die €299 für den Kunden nachweislich lohnen, nicht nur gefühlt:

1. **Sofort-Handover (innerhalb 15 Minuten nach Call-Ende):** Foto/Scan der ausgefüllten Prioritäts- und Abschluss-Bögen per E-Mail an den Kunden, mit 2–3 Sätzen Zusammenfassung. Kein neuer Inhalt — der Kunde hat jede Zahl darauf bereits live im Screenshare gesehen (Abschnitt 3.3), das Foto macht nur greifbar, was er schon kennt. Das ist auch die einzige "Verifikation" vor dem PDF: die Bewertung wurde live nachvollzogen, nicht nachträglich zur Prüfung vorgelegt — ein zusätzlicher Freigabe-Schritt würde nur Zeit kosten, ohne dass der Kunde etwas Neues bestätigt, das er nicht schon gesehen hätte.
2. **PDF-Report** folgt wie gehabt in 3–5 Werktagen (siehe Ablauf-Ansage in Abschnitt 2, Block "Tool-Ausblick & nächste Schritte").
3. **Nachfass-Call nach 1 Woche** (15–20 Minuten, im Preis enthalten, im Call vorab ankündigen). Zweck: Report-Verständnisfragen klären, checken ob mit der Umsetzung des Sofort-Punkts schon begonnen wurde, Stimmung abholen. Das ist auch der natürliche Moment, um über das Pilot-Projekt zu sprechen, ohne dass es wie Nachfassen im Verkaufssinn wirkt, UND der Ort, an dem eine inhaltliche Korrektur passiert, falls beim Formulieren doch ein Missverständnis ins PDF gerutscht ist — nicht eine vorgeschaltete Freigabeschleife.
4. **Rückfragen-Kanal:** Kunde bekommt nach dem Call eine E-Mail-Adresse/Kontaktweg für Rückfragen zum Report, gültig 30 Tage nach Übergabe. Kein Slack-Kanal, keine Dauer-Erreichbarkeit — das würde den Preis nicht mehr tragen (siehe Zeitbudget unten).
5. **Interner Check vor Versand:** Bevor das PDF rausgeht, einmal gegenlesen mit der Frage "Würde ich als Kunde mit diesem Dokument etwas anfangen können, ohne mich nochmal zu melden?" Wenn nein: nachschärfen, nicht versenden.
6. **Feedback einholen:** Im Nachfass-Call kurz fragen, ob der Report verständlich und die Priorisierung nachvollziehbar war. Dient auch dazu, die Methodik hier laufend zu verbessern.

---

## 7. Zeitbudget-Check

Realistische Kalkulation des Gesamtaufwands pro Readiness-Check:

| Tätigkeit | Zeit |
|---|---|
| Vorbereitung (Abschnitt 1.2) | 0,25–0,3 Std |
| Durchführung Call | 2,0 Std |
| Report-Erstellung (Matrix ausformulieren, Roadmap schreiben, PDF layouten) | 2,5–3,5 Std |
| Nachfass-Call inkl. kurzer Vorbereitung | 0,5 Std |
| Puffer für Rückfragen per E-Mail (30-Tage-Fenster, im Schnitt) | 0,3–0,5 Std |
| **Gesamt** | **ca. 5,5–6,8 Std** |

**Effektiver Stundensatz:** €299 ÷ 6 Std ≈ **€50/Std**.

**Einordnung:** Das liegt deutlich unter dem angestrebten Tagessatz (€1.200–1.800/Tag ≈ €150–225/Std). Das Paket ist bewusst kein Gewinntreiber, sondern ein **Trust-Einstieg** mit zwei Funktionen:

1. Niedrige Einstiegshürde für Kunden, die Marlon noch nicht kennen.
2. Vorqualifizierung für das Pilot-Projekt (Paket 2, ab €2.500) — der eigentliche wirtschaftliche Hebel liegt in der Konversion Readiness-Check → Pilot.

**Wirtschaftlichkeits-Schwelle:** Das Paket lohnt sich, solange der Gesamtaufwand unter 6,5 Std bleibt (dann liegt der Stundensatz über €45: 299 ÷ 6,5 ≈ €46) UND die Konversionsrate zum Pilot-Projekt über den Daumen bei mindestens 1 von 4–5 Checks liegt. Sollte die Report-Erstellung regelmäßig länger dauern (z.B. weil Kunden komplexere Prozesse mitbringen als im Intake angegeben), zwei Stellschrauben:

- Report-Vorlage weiter standardisieren (Textbausteine für wiederkehrende Tool-Empfehlungen, Grafik-Template fest verdrahten statt jedes Mal neu bauen).
- Falls die Konversionsrate zum Pilot dauerhaft niedrig bleibt, Preis oder Umfang des Checks überdenken — aktuell ist €299 ein bewusster Trust-Preis, kein kostendeckender Preis, und das ist so lange in Ordnung, wie er neue Pilotprojekte erzeugt.

**Faustregel für die Praxis:** Wenn ein Kunde im Call erkennbar deutlich mehr als 3–5 Prozesse mitbringt oder die Prozesse ungewöhnlich komplex sind, das im Call selbst ansprechen ("Das sieht nach mehr aus, als in 2 Stunden sauber geht — ich fokussiere auf die zwei größten Hebel und der Rest kommt als Kurzhinweis mit ins PDF") statt den Call zu überziehen oder beim Report unbezahlte Mehrarbeit reinzustecken.

**Trockenlauf-Beleg (2026-09-20):** Die Baseline oben (5,5–6,8 Std., Mittelwert ~6,2 Std.) wurde anhand des Petra-Falls (Fallbeispiel, Abschnitt 8 des Gesprächsframeworks) Minute für Minute durchgespielt — Intake, Vorbereitung, alle vier Blöcke des Calls, Sofort-Handover, Report-Erstellung, Nachfass-Call. Ergebnis: **die Baseline hält, mit fast keinem Puffer.** Zwei Erkenntnisse daraus:

- **Das Prozessblatt ist enger als es aussieht, aber nicht so eng wie befürchtet.** Von den ca. 20 Feldern pro Prozess sind nur 4 echte Freitext-Felder (Kurzbeschreibung, Werkzeug/System heute, Fehlerquote, "was würde mit der Zeit passieren"/"bleibt liegen") — der Rest sind Checkboxen und Zahlen, die während des Zuhörens einen Klick statt einen Satz kosten. Die Zeitknappheit pro Prozess (11 Min bei 5 Prozessen, 18 Min bei 3) betrifft also vor allem diese vier Sätze, nicht 20 gleichwertige Eingaben. Praktische Konsequenz siehe Gesprächsframework Abschnitt 1a (Technisches Setup).
- **Der Sofort-Handover (siehe Abschnitt 6) passt ins Budget, aber ohne Marge.** Foto/Scan der Bögen plus 2–3 Sätze kostet ca. 10–15 Minuten, die im Zeitbudget oben unter "Puffer für Rückfragen" mitlaufen (0,3–0,5 Std.) statt eine eigene Zeile zu brauchen. Jede weitere Nacharbeit — insbesondere eine vollständige Nachbereitung einer Gesprächsaufnahme statt punktuellem Nachschlagen — würde die 6,5-Std.-Wirtschaftlichkeitsschwelle sofort reißen. Eine Aufnahme ist deshalb ausdrücklich ein Sicherheitsnetz für einzelne unklare Stellen, keine zweite Notizquelle, die komplett durchgearbeitet wird.
- **Der "kein Sofort-Kandidat"-Fall (Abschnitt 3.2) kostet in Block 3 mehr Zeit, nicht weniger.** Ohne einen klaren Phase-1-Prozess braucht die Formulierung der Kernaussagen und der Ausweich-Empfehlung (stärkster Phase-2-Kandidat + Bedingung) mehr Live-Zeit als der Normalfall, in dem ein Sofort-Prozess einfach benannt wird. Der Prioritäts-Bogen sollte in diesem Fall bewusst zuerst behandelt werden, damit die verbleibende Zeit in Block 3 nicht knapp wird.
