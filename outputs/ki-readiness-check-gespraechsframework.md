# KI-Readiness-Check — Gesprächsframework & Notizbögen

**Internes Arbeitsdokument.** Erweitert `ki-readiness-check-methodik.md` um das, was
dort fehlt: ein Ding, das man sich merken kann, und Notizbögen, deren Felder
1:1 in die PDF-Vorlage (`reference/ki-readiness-check-pdf-vorlage.html`)
passen — ohne Übersetzungsarbeit am Schreibtisch.

**Verhältnis zur Methodik:** Diese Datei erfindet keine neuen Fragen oder
Kriterien. Die sieben Leitfragen und die drei Bewertungsachsen aus der
Methodik (Abschnitt 2 und 3) sind die einzige Quelle dafür — hier werden sie
nur in eine auswendig lernbare und eine ausfüllbare Form gebracht. Wenn sich
die Fragen oder Kriterien mal ändern, zuerst in der Methodik ändern, dann
hier nachziehen.

**Stand 2026-09-20, fünf Testläufe (davon einer bis zum PDF-Entwurf durchgezogen):**

*Testlauf 1* (politisch schwieriger Kunde) deckte auf: eine fehlende
Leitfrage zu Abteilungs-/Personen-Abhängigkeiten, ein fehlender
Konfidenz-Marker für Zeitschätzungen, ein fehlendes Feld für den Fall,
dass Score und politische Realität auseinanderfallen, eine unklare Regel
für mehr als drei Bereiche, ein fehlendes Feld für entgangenes Geschäft
(als Freitext, nicht als Score!) und eine unvorbereitete Antwort auf den
Preis-Einwand am Ende.

*Testlauf 2* (fachlich präziser, technisch versierter Kunde) deckte
zusätzlich auf: die Systemintegrationsfähigkeit (API vs. Export vs.
manuell) fehlte als abgefragte Information und hing vom Zufall ab, ob der
Kunde selbst technisch versiert genug war, eine unpassende
Automatisierungsidee zu korrigieren; die Zeitschätzung hatte kein Feld für
saisonale Schwankung, was bei knapper Nähe zu einer Score-Schwelle die
Priorisierung beliebig macht; die Abhängigkeits-Frage behandelte
"blockierende Abhängigkeit" und "Wissenskonzentration auf eine Person"
fälschlich gleich, obwohl beide entgegengesetzt wirken; und der
Preis-Einwand-Block deckte einen strukturell anderen Einwand nicht ab —
eine Forderung nach technischer Garantie statt einer Preisfrage.

*Testläufe 3–5* (durchweg niedrig scorender Kunde, Kleinstunternehmen mit
falscher Person am Call, und ein PDF-Entwurf aus den Testlauf-3-Daten)
deckten strukturelle Lücken auf, die keine der beiden bisherigen
Rollenspiel-Runden berühren konnte, weil beide Male ein Prozess am Ende
über der Sofort-Schwelle lag: **Erstens**, wenn **kein** Prozess die
Sofort-Schwelle erreicht, laufen drei Anschlussstellen (Prioritäts-Bogen
Phase 1, Abschluss-Bogen "Empfohlener Pilot-Prozess", PDF S.7) ins Leere —
das ist jetzt ein eigener, benannter Ablauf mit vorbereiteter Antwort auf
die "was bekomme ich für mein Geld"-Frage, keine Ausnahme mehr, die
improvisiert werden muss. **Zweitens**, die Schwankungsregel aus Testlauf 2
wurde am falschen Fall geprüft: Bei echter **Konzentration** eines
Prozesses auf ein Zeitfenster (statt bloßer Schwankung) ließ die alte
Regel den größten Zeitblock der Firma auf einen Rundungsfehler
schrumpfen — durchgerechnet in der Methodik, Fix: Jahresschnitt statt
Wert-außerhalb-der-Spitze bei Konzentration. **Drittens**, die
Bereichs-Kategorien (Vertrieb/Kundenservice/Backoffice) haben keinen
Auffangmechanismus für Kleinstunternehmen ohne Abteilungsstruktur.
**Viertens**, das Framework geht implizit von 3–5 Prozessen aus (5 Zeilen
im Prioritäts-Bogen, 6 Maßnahmen in der Roadmap) — bei nur 1–2 genannten
Prozessen skaliert das nicht automatisch mit.

**Trockenlauf (2026-09-20):** Zusätzlich zu den fünf Testläufen wurde der
Petra-Fall Minute für Minute durchgerechnet — nicht als weiteres
Rollenspiel, sondern als Zeit- und Werkzeug-Check: was der Kunde vorab
ausfüllt, was wann auf welchem Bildschirm erfasst wird, was direkt nach
dem Call rausgeht, wie viel Nacharbeit bis zum PDF bleibt. Ergebnis:
Abschnitt 1a (neu) legt fest, was geteilt und was privat ist, und ordnet
ein, dass von ca. 20 Feldern pro Prozess nur 4 echte Freitext-Felder sind
— eine Audioaufnahme ist deshalb ein Sicherheitsnetz zum Nachschlagen,
kein zweiter Notizkanal. Der Abschluss-Bogen hat jetzt einen
Sofort-Handover-Punkt (Foto der Bögen innerhalb 15 Minuten), der zugleich
die Verifikation ersetzt — der Kunde bestätigt live im Screenshare, nicht
nachträglich per Freigabeschleife. Details in Methodik Abschnitt 6 und 7.

Details und Begründungen jeweils an der betroffenen Stelle.

---

## 0. Zwei Festlegungen, auf denen alles Folgende aufbaut

**Zeiteinheit: Std./Woche.** Erfasst wird durchgängig in Std./Woche — das
ist die Einheit, die im Call konkret abgefragt wird ("wie oft pro Woche,
wie viele Personen, wie lange pro Durchlauf") und die die PDF-Vorlage
druckt. Für das Scoring wird die Wochenzahl mit 4,33 auf Std./Monat
hochgerechnet, weil die Score-Schwellen in Abschnitt 3.1 der Methodik in
Std./Monat definiert sind (<2 / 2–15 / >15). Die Methodik ist am
2026-09-19 entsprechend angeglichen worden (Abschnitt 3.1 und 5.2), damit
es nur noch eine erfasste Zahl gibt, keine zwei parallel geführten.

**Matrix-Punktgröße (PDF S.4): Punktgröße = Zeitaufwand-Score.** Die
Streupunkte in der Potenzial-Matrix der PDF-Vorlage haben unterschiedliche
Radien — im HTML selbst nirgends benannt, aber eindeutig als dritte
Dimension gemeint. Festlegung: Punktgröße = Zeitaufwand-Score (1→klein,
5→groß). Steht ab jetzt auf dem Prozessblatt (Abschnitt 3) und als
Kommentar in der PDF-Vorlage selbst, sonst lebt die Regel nur in diesem
Dokument und geht beim nächsten Ausfüllen unter.

---

## 1. Das Merkblatt — die eine Seite, die man auswendig lernt

Das hier wird memoriert, nicht ausgefüllt. Eine Karteikarte, laminiert oder
als Blatt neben dem zweiten Monitor. Ziel: Nach 5–10 Durchläufen läuft der
Call ohne Blick auf Papier.

### Der Satz, der alles zusammenhält

> **"Erzählen. Zerlegen. Werten. Ordnen."**

Vier Wörter, vier Blöcke, in dieser Reihenfolge — sowohl für den ganzen
Call als auch für jeden einzelnen Prozess im Deep-Dive. Das ist die
Fraktal-Eigenschaft, die das Merken trägt: das große Zeitraster des Calls
und der kleine Ablauf pro Prozess sind **dieselbe Bewegung**, nur auf
unterschiedlicher Flughöhe.

### Ebene 1 — Der Call als Ganzes (Merkblatt-Seite, oben)

| Block | Zeit | Ein Wort | Was passiert |
|---|---|---|---|
| **Kickoff** | 0:00–0:15 | *Erzählen* | Kunde erzählt Kontext, ich gleiche Intake-Antworten ab |
| **Deep-Dive** | 0:15–1:10 | *Zerlegen* | Pro Prozess: Erzählen → Zerlegen → Werten (siehe Ebene 2) |
| **Pause** | 1:10–1:15 | — | 5 Min, kein Inhalt |
| **Priorisierung** | 1:15–1:45 | *Ordnen* | Matrix gemeinsam durchgehen, laut denken |
| **Ausblick** | 1:45–2:00 | *Ordnen* | Tool-Richtung, nächste Schritte, Ablauf danach |

**Merksatz für die Blockfolge:** *"Erst hören, dann zerlegen, dann werten,
dann gemeinsam ordnen."* — Kickoff und Deep-Dive sind "Erzählen/Zerlegen",
Priorisierung und Ausblick sind "Ordnen". Die Pause halbiert den Call exakt
in "Kunde redet, ich verstehe" (erste Hälfte) und "ich denke laut,
Kunde bestätigt" (zweite Hälfte). Diese Asymmetrie ist es, die man sich
merkt, nicht die Minutenzahlen.

### Ebene 2 — Pro Prozess im Deep-Dive (Merkblatt-Seite, unten)

Dieselben vier Wörter, jetzt auf einen einzelnen Prozess angewendet. Die
sieben Leitfragen aus der Methodik sind hier nicht neu erfunden, sondern in
vier Phasen gruppiert — das ist der Merk-Trick: sieben einzelne Fragen sind
schwer im Kopf zu halten, vier Phasen mit je 1–2 Fragen sind es nicht.

| Phase | Leitfrage(n) aus der Methodik | Ein Wort |
|---|---|---|
| **1. Erzählen** | "Beschreib mir den Ablauf, als würdest du es einem neuen Mitarbeiter erklären." | *Ablauf* |
| **2. Zerlegen** | "Wo kommen die Informationen her?" + "Was macht am meisten Arbeit — Sammeln, Entscheiden oder Eintippen?" + "Hängt der Prozess an einer bestimmten Abteilung oder Person?" | *Quelle, Reibung & Abhängigkeit* |
| **3. Werten** | "Wie oft geht was schief?" + "Wenn das wegfallen würde — was würdet ihr mit der Zeit machen? Bleibt dadurch auch was liegen?" | *Schmerz & Wert* |
| **4. Ordnen** | "Gibt's das schon als Vorlage/Regel/Checkliste?" | *Reifegrad* |

**Warum genau diese Gruppierung und nicht eine andere:** Frage 1 steht
allein, weil sie der Einstieg ist (offen, nicht wertend). Fragen 2+3 sind
beide "wie ist der Prozess aufgebaut" und liefern zusammen die Rohdaten für
die Automatisierbarkeit-Achse. Fragen 5+6 sind beide "wie sehr tut es weh"
und liefern die Zeitaufwand-Achse (plus, als Freitext ohne Score-Einfluss,
einen Hinweis auf entgangenes Geschäft — siehe Prozessblatt). Frage 7 steht
wieder allein und liefert laut Methodik ebenfalls die
Automatisierbarkeit-Achse ("je strukturierter, desto leichter
automatisierbar") — als zweiter, unabhängiger Datenpunkt neben Fragen 2+3,
nicht als eigene Achse.

**Frage 4 (Abhängigkeit) ist neu seit dem Testlauf vom 2026-09-20** und
schließt die einzige Lücke, die die drei Achsen bis dahin hatten: Sie ist
die erste direkte Leitfrage für die **Umsetzbarkeit**-Achse. Vorher wurde
Umsetzbarkeit ausschließlich aus dem Gesamtbild abgeleitet, ohne dass
danach gefragt wurde — ein simulierter Testkunde erwähnte sowohl "die
Fertigung wird oft zum Flaschenhals" als auch "das ist die Abteilung einer
Kollegin, die das seit 15 Jahren macht" nur beiläufig, nicht weil gezielt
danach gefragt wurde. Beides sind **Abhängigkeiten** (von einer Abteilung,
von einer Person) und damit dieselbe Information — ohne die explizite
Frage taucht sie nur auf, wenn der Kunde von sich aus davon erzählt:

> Erzählen (Einstieg) → Zerlegen (füttert Automatisierbarkeit, Teil 1,
> UND jetzt auch Umsetzbarkeit über die Abhängigkeits-Frage) →
> Werten (füttert Zeitaufwand) → Ordnen (füttert Automatisierbarkeit, Teil 2)
>
> Umsetzbarkeit hat jetzt eine eigene Leitfrage (Abhängigkeit, Phase 2),
> wird aber weiterhin zusätzlich aus dem Gesamtbild der Systemlandschaft
> geschärft — die Frage liefert den wichtigsten Einzelfaktor, ersetzt aber
> nicht die Gesamteinschätzung.

Wer sich das einmal klar gemacht hat, muss sich keine sieben Fragen merken,
sondern nur: *"Ablauf verstehen, dann Reibung und Abhängigkeit finden, dann
Schmerz beziffern, dann Reifegrad checken."* Die genauen Frageformulierungen
liegen griffbereit auf dem Prozessblatt (Abschnitt 3), nicht im Kopf — die
müssen nicht auswendig sitzen, nur die Reihenfolge und der Zweck jeder
Phase.

### Die Bewertungskarte (Rückseite des Merkblatts oder daneben)

Die drei Achsen mit ihren Ankern, damit beim Werten im Call nicht aus dem
Kopf geraten wird, was 1, 3 oder 5 Punkte bedeutet:

| Achse | 1 Punkt | 3 Punkte | 5 Punkte |
|---|---|---|---|
| **Zeitaufwand** | < 2 Std/Monat (≈ < 0,5 Std/Woche) | 2–15 Std/Monat (≈ 0,5–3,5 Std/Woche) | > 15 Std/Monat (≈ > 3,5 Std/Woche) |
| **Automatisierbarkeit** | stark individuell, Bauchentscheidung | teilweise regelbasiert | klar regelbasiert, wenig Ausnahmen |
| **Umsetzbarkeit** | tiefe Integration, Change-Management | ein System, moderat | Stand-Tool, in Tagen umsetzbar |

**Score = Zeitaufwand × Automatisierbarkeit × Umsetzbarkeit** (Produkt,
nicht Summe — siehe Methodik 3.2 für die Begründung). **Wird nicht live
gerechnet.** Im Call werden nur die drei Punktzahlen pro Prozess notiert
(siehe Prozessblatt), multipliziert wird danach am Schreibtisch. Live drei
Zahlen im Kopf multiplizieren, während man gleichzeitig zuhört und
mitschreibt, ist der zuverlässigste Weg, sich zu verrechnen und dem Kunden
eine falsche Priorität vorzuspiegeln.

---

## 1a. Technisches Setup: was ist sichtbar, was ist privat, welche Hilfsmittel

Vor dem ersten echten Call geklärt, nicht während des Calls improvisiert.
Ein durchgerechneter Trockenlauf (Petras Fall, 3 Prozesse, siehe
Fallbeispiel Abschnitt 8) zeigt: Das Prozessblatt hat pro Prozess nur
**4 echte Freitext-Felder** (Kurzbeschreibung, Werkzeug/System heute,
Fehlerquote, "was würde mit der Zeit passieren"/"bleibt liegen") — der
Rest sind Checkboxen und Zahlen, die einen Klick oder eine kurze Ziffer
kosten, keine Formulierungsarbeit während man zuhört. Das ändert, worauf
man sich technisch vorbereiten muss: nicht "jedes Wort mitschreiben",
sondern die vier Sätze pro Prozess, in denen der Kunde etwas in eigenen
Worten beschreibt.

**Zwei Bildschirme, zwei Sichtbarkeiten.**

| Fenster | Inhalt | Warum |
|---|---|---|
| **Geteilt (Kunde sieht mit)** | Kickoff-Bogen, Prozessblatt-Checkboxen/Zahlen, Rohpunkte, später die Matrix | Methodik 3.3: die Bewertung soll nachvollziehbar sein — das ist der Vertrauensmechanismus, kein Nice-to-have |
| **Privat (nur Marlon)** | Kurzbeschreibung, während sie entsteht (getippter Text wird erst nach dem Feinschliff kopiert), Fehlerquote/Freitext, der "PRIVAT, NICHT IM SCREENSHARE"-Block (Prozessblatt) | Ein Kunde, der live mitliest, wie seine eigene Aussage in Echtzeit paraphrasiert und redigiert wird, wirkt unsicherer als einer, der nur das fertige Ergebnis sieht. Die Checkboxen/Zahlen sind dagegen unmittelbar, brauchen keinen Feinschliff — die dürfen live sichtbar sein |

Praktisch: zwei Fenster oder zwei Tabs, geteilter Screenshare zeigt nur
eins davon. Ein einzelnes Dokument mit einem ausgeblendeten Bereich
funktioniert auch, ist aber fehleranfälliger (ein falscher Klick zeigt
den privaten Teil).

**Hilfsmittel für die vier Freitext-Felder pro Prozess.** Keine
Live-Transkription nötig — bei 4 kurzen Feldern und 11–18 Minuten pro
Prozess reicht normales Mitschreiben in eigenen Worten. Eine
Audioaufnahme des Calls ist ein **Sicherheitsnetz für Lücken**, kein
zweiter Notizkanal, der nach dem Call durchgearbeitet wird:

- **Aufnahme nur mit Einwilligung.** Gehört als Checkbox auf den
  Kickoff-Bogen ("Aufnahme zur eigenen Absicherung, wird nach Report-
  Versand gelöscht — einverstanden? Ja/Nein") und hängt mit
  Intake-Frage 7 zusammen (Datenschutz-/Compliance-Vorgaben) — bei
  Betriebsrats- oder Kundendaten-Restriktionen im Zweifel darauf
  verzichten, nicht durchsetzen.
- **Nur zum Nachschlagen, nie zum Nacharbeiten.** Wenn nach dem Call ein
  Feld unklar ist ("was genau war nochmal die Fehlerquote bei Prozess
  2?"), kurz die Stelle in der Aufnahme nachhören. Wird die Aufnahme zur
  Gewohnheit, den ganzen Call nachträglich nochmal durchzuhören, ist das
  eine zusätzliche Stunde Nacharbeit, die das Zeitbudget (Methodik 7,
  6,2 Std. Baseline, Schwelle 6,5 Std.) sofort sprengt — dann lieber im
  Call konsequenter nachfragen, bis das Feld sitzt, statt es später zu
  reparieren.
- **Keine Software-Empfehlung nötig.** Der eingebaute Rekorder des
  Videocall-Tools (Zoom, Teams, Google Meet) reicht — ein separates
  Transkriptions-Tool wäre eine weitere Nachbearbeitungsquelle, die die
  Non-Negotiable-Regel oben ("nur Nachschlagen") unterläuft.

---

## 2. Kickoff-Bogen (Block 1, 0:00–0:15)

Wird ausgefüllt, während der Bildschirm bereits geteilt ist — der Kunde
sieht mit.

```
KICKOFF — [Kundenname] — [Datum]

Ziele-Abgleich (aus Intake, mündlich bestätigt):
□ Passt die Prozessliste aus dem Intake noch? Ja / Nein, geändert:
  _______________________________________________

Erwartungsmanagement gegeben:
□ "Am Ende: priorisierte Liste + PDF, keine fertige Lösung"

Teilnehmer im Call (Name, Rolle):
_______________________________________________

Aufnahme zur eigenen Absicherung (nur Nachschlagen, wird nach
Report-Versand gelöscht):
□ Einverstanden   □ Nicht einverstanden (dann ohne Aufnahme,
  siehe Intake-Frage 7 bei Betriebsrats-/Compliance-Vorgaben)

Systemintegration (aus Intake-Frage 2, hier nur bestätigen/präzisieren):
□ Offene Schnittstelle/API   □ Export mit Zeitversatz (z.B. CSV): ______
□ Komplett manuell           □ Unklar, im Call klären
  → Gilt nur für Prozesse, die tatsächlich eine Systemanbindung
    brauchen — kein pauschaler Abzug für alle Prozesse.

Bereits genannte Prozesse (aus Intake übernommen, hier nur bestätigen):
1. _____________________  Bereich: __________
2. _____________________  Bereich: __________
3. _____________________  Bereich: __________
4. _____________________  Bereich: __________ (optional)
5. _____________________  Bereich: __________ (optional)

Verwendete Bereiche insgesamt (max. 3, siehe unten):
  __________  __________  __________
```

**Bereich** wird hier schon eingetragen (Vertrieb/Kundenservice/Backoffice/
etc.) — das ist Pflichtfeld für PDF S.2 ("aus den Bereichen [Bereich 1],
[Bereich 2], [Bereich 3]") und S.3-Tabellenspalte "Bereich". Wenn das erst
beim Report-Schreiben nachträglich zugeordnet wird, passiert das ohne
Kunden-Bestätigung — hier im Call ist der einzige Moment, in dem der Kunde
selbst sagen kann "das ist eigentlich Backoffice, nicht Vertrieb".

**Maximal 3 Bereiche — das ist eine harte Grenze, keine Empfehlung.** Der
S.2-Satz der PDF-Vorlage ist fest auf drei Slots gebaut ("aus den Bereichen
[Bereich 1], [Bereich 2] und [Bereich 3]"). Ein Testlauf zeigte: bei 5
Prozessen entstehen leicht 4 unterschiedliche Bereiche (z. B. wenn eine
Kundin einen Prozess bewusst aus "Kundenservice" herauslöst und als eigenen
Bereich benennt). Wenn im Call ein vierter Bereich entsteht, zwei
naheliegende Bereiche zusammenfassen (z. B. "Vertrieb & Reklamation" als
ein Slot) und das dem Kunden kurz erklären ("Ich fasse das im Report unter
einem Oberbegriff zusammen, damit es übersichtlich bleibt") — nicht die
PDF-Vorlage stillschweigend mit einem vierten Bereich überladen, den sie
strukturell nicht vorsieht.

**Falls die Kategorien selbst nicht passen (Kleinstunternehmen ohne
Abteilungen):** Ein Testlauf mit einem 6-Personen-Handwerksbetrieb zeigte,
dass Vertrieb/Kundenservice/Backoffice bei so kleinen Teams schlicht nicht
greifen — es gibt "den Chef", "die Monteure", "die Bürokraft", keine
Abteilungen. Dann keine der drei Kategorien erzwingen, sondern selbst einen
passenden Sammelbegriff bilden (z. B. "Büro/Organisation") und dem Kunden
kurz sagen, dass das intern für die Auswertung so zusammengefasst wird —
genau wie beim Zusammenfassen bei einem vierten Bereich oben.

**Warum die Systemintegration jetzt im Kickoff steht, nicht als
Leitfrage pro Prozess:** Ein zweiter Testlauf zeigte, dass ein
Automatisierungsvorschlag technisch ins Leere laufen kann, wenn das im
Intake genannte System keine offene Schnittstelle hat, sondern nur einen
zeitversetzten Export — und dass ein Berater das bei einer unbekannten
Branchensoftware nicht zuverlässig vorab recherchieren kann (anders als
bei SAP oder gängigen CRMs). Die Frage gilt für den ganzen Call einmalig,
nicht pro Prozess — sie würde sonst 3–5 mal denselben Fakt abfragen und
den knappen Deep-Dive-Slot unnötig verlängern. **Wichtig beim Anwenden:**
Das ist Kontext für einzelne Prozesse, kein globaler Abzug. Ein Prozess
ohne Systemanbindung (z. B. eine Dokumentation auf Papier oder in einem
eigenständigen Tool) ist von der Systemintegration-Einschränkung völlig
unberührt — die Einschränkung wird erst relevant, wenn im Deep-Dive
tatsächlich eine Automatisierungsidee mit Systemanbindung entsteht.

---

## 3. Prozessblatt (Block 2, pro Prozess ein Blatt — kopieren)

Das ist das Kernstück. Wird 3–5 mal pro Call ausgefüllt, immer identisch.
Genau diese Wiederholung ist es, die das Blatt nach wenigen Calls auswendig
sitzen lässt.

Die vier Erzählen/Zerlegen/Werten/Ordnen-Phasen strukturieren das Blatt,
mit den originalen Leitfragen der Methodik als Erinnerungsstütze in
Klammern — nicht zum Vorlesen, sondern falls der Faden reißt.

```
PROZESS [1–5]  ————————————————————————————————

Name des Prozesses: _______________________________
Bereich:            _______________________________  ↳ PDF S.3

── 1. ERZÄHLEN (Ablauf verstehen) ──────────────────
  ("Beschreib mir den Ablauf, als würdest du es
   einem neuen Mitarbeiter erklären.")

  Kurzbeschreibung (2–3 Sätze, so wie erzählt):
  ___________________________________________
  ___________________________________________
  ___________________________________________          ↳ PDF S.3

── 2. ZERLEGEN (Reibung & Abhängigkeit finden) ─────
  ("Wo kommen die Informationen her?"
   "Was macht am meisten Arbeit — Sammeln,
   Entscheiden oder Eintippen?"
   "Hängt der Prozess an einer bestimmten Abteilung
   oder Person, ohne die es nicht weitergeht?")

  Werkzeug/System heute: ____________________         ↳ PDF S.3
  Größte Reibung:  □ Sammeln  □ Entscheiden  □ Eintippen
  Ausnahmen/Sonderfälle: viele □  einige □  wenige □   ↳ Automatisierbarkeit
  Braucht dieser Prozess eine Systemanbindung? □ nein  □ ja
    Falls ja: passt zur Kickoff-Systemintegration? □ ja □ nein, Grund: ___
                                                        ↳ Umsetzbarkeit
  Abhängigkeit von Abteilung/Person: □ keine
    □ blockierend (andere Abteilung/Person muss zuarbeiten,
      ohne die es nicht weitergeht — drückt Umsetzbarkeit)
    □ Wissenskonzentration (eine Person kann/macht es allein,
      z. B. "läuft nur über mich" — drückt Umsetzbarkeit NICHT
      zwangsläufig, kann sogar FÜR das Projekt sprechen als
      Risikoreduktion/Wissensdokumentation, siehe Hinweis unten)
    Wer/welche Abteilung: ___________

── 3. WERTEN (Schmerz beziffern) ───────────────────
  ("Wie oft geht was schief oder muss korrigiert
   werden?" "Wenn das wegfallen würde — was würdet
   ihr mit der Zeit machen? Bleibt dadurch auch was
   liegen?")

  Häufigkeit:     □ täglich  □ wöchentlich  □ monatlich
  Personen beteiligt: _____
  Zeit pro Durchlauf: _____ Min
  → Std./Woche gesamt (Personen × Zeit × Häufigkeit
    umgerechnet):                    _____ Std./Woche   ↳ PDF S.2, S.3
  Schwankt saisonal/je nach Auslastung? □ nein
    □ ja, SCHWANKUNG (läuft ganzjährig, mal mehr/mal weniger):
      Spitzenwert: _____ Std./Woche (nur für Report-Text, NICHT
      für die Punktevergabe — außerhalb-der-Spitze-Wert oben scoren)
    □ ja, KONZENTRATION (läuft nur in einem Zeitfenster, sonst
      nahe null): Zeitfenster ______ Wochen, Wert im Fenster
      _____ Std./Woche → Jahresschnitt (× Wochen ÷ 52):
      _____ Std./Woche — DIESER Wert wird oben gescort UND in
      S.3 gedruckt (siehe Bewertungsregel unten, Unterscheidung
      Schwankung/Konzentration)
  Schätzung: □ belastbar (konkrete Zahlen genannt)
             □ grob (Kunde hat selbst Unsicherheit
               benannt, z. B. "könnte auch X sein")
                                                        ↳ Hedge in S.2-Text
  Fehlerquote/Korrekturaufwand: ____________________
  Was würde mit der frei werdenden Zeit passieren?
  ___________________________________________          ↳ für S.2-Narrativ
  Bleibt dadurch aktuell etwas liegen/unerledigt
  (entgangenes Geschäft, kein Score-Faktor!):
  ___________________________________________          ↳ Freitext für S.2,
                                                          NICHT in die
                                                          Punktevergabe

── 4. ORDNEN (Reifegrad) ───────────────────────────
  ("Gibt's das schon als Vorlage, Regel oder
   Checkliste?")

  □ Ja, strukturiert vorhanden   □ Teilweise   □ Nein, nur im Kopf

── BEWERTUNG: ROHPUNKTE (live im Call, sichtbar im Screenshare) ──
  (Zeitaufwand-Punkte direkt von der Std./Woche-Zahl oben ablesen —
   Bewertungskarte gibt die Wochen-Äquivalente vor, keine Kopfrechnung
   nötig: <0,5 → 1 Punkt, 0,5–3,5 → 3 Punkte, >3,5 → 5 Punkte)

  Zeitaufwand-Punkte      (1 / 3 / 5): _____ (bei Schwankung: den
                                                Wert AUSSERHALB der
                                                Spitzenzeit nehmen,
                                                nicht den Spitzenwert)
  Automatisierbarkeit     (1 / 3 / 5): _____
  Umsetzbarkeit           (1 / 3 / 5): _____ (blockierende Abhängigkeit
                                                drückt den Punktwert;
                                                Wissenskonzentration
                                                allein NICHT automatisch —
                                                erst wenn zusätzlich eine
                                                Systemanbindung fehlt
                                                oder nicht passt)

═══ SCORE & PHASE (Pause oder direkt vor Block 3, NICHT während man
    gleichzeitig zuhört) ═══

  Score (Produkt der drei Punkte):     _____ / 125
  → Phase nach Score: □ Sofort (≥60)  □ 3 Monate (20–59)  □ Beobachten (<20)

  Phase abweichend vom Score? □ Nein  □ Ja, Grund: ______________
    (z. B. politisch heikel, Abteilung reagiert empfindlich auf
    Automatisierung — siehe Prioritäts-Bogen für die Report-Formulierung)
  → Tatsächliche Phase für Roadmap: ______________

  Matrix-Position (PDF S.4):
    x = Umsetzbarkeit-Punkte   y = Automatisierbarkeit-Punkte
    Punktgröße = Zeitaufwand-Punkte (1→klein, 5→groß)
```

**Warum die Punkte live vergeben werden, aber der Score nicht:** Methodik
3.3 ist eindeutig — die Bewertung entsteht live im Screenshare, das ist der
Vertrauensmechanismus ("der Kunde soll die Bewertung nachvollziehen
können"). Die drei Rohpunkte (1/3/5 je Achse) werden also **während des
Deep-Dive vergeben und sind sichtbar**, direkt nachdem der Kunde die
jeweilige Frage beantwortet hat. Was **nicht** live passiert, ist das
Ausmultiplizieren von drei Zahlen im Kopf, während man gleichzeitig
zuhört und mitschreibt — das ist der zuverlässigste Weg, sich zu
verrechnen. Deshalb wird der Score selbst (das Produkt) und die
Phasen-Zuordnung in der 5-Minuten-Pause (1:10–1:15) oder in den ersten
Minuten von Block 3 nachgetragen, kurz bevor die Matrix gemeinsam
durchgegangen wird — nicht "nach dem ganzen Call am Schreibtisch", wie es
in einer früheren Version dieses Dokuments stand, und nicht ohne dass der
Kunde die Ableitung sieht.

**Warum "Phase abweichend vom Score" ein eigenes Feld ist (neu seit dem
Testlauf):** Ohne dieses Feld kann ein Prozess einen Score ≥60 erreichen
(also laut Checkbox "Sofort") und trotzdem aus guten Gründen erst in
Phase 2 oder 3 der Roadmap landen — zum Beispiel, weil eine Automatisierung
in der Abteilung einer bestimmten Person intern als Kritik ankäme und das
Projekt an internem Widerstand scheitern würde, noch bevor es startet. Ohne
das Override-Feld widersprechen sich die Score-Checkbox oben und die
tatsächliche Platzierung in der Roadmap, und PDF S.4 verspricht dem Kunden
ausdrücklich zu erklären, "wie der Score zustande kommt" — ein Bogen, der
sich selbst widerspricht, kann das nicht einlösen. Die Regel: der
**Rohscore bleibt unverändert** (er beschreibt objektiv das Potenzial),
aber die **Roadmap-Platzierung** kann bewusst davon abweichen, mit
Begründung. Im PDF-Report wird das dann so formuliert wie im
Prioritäts-Bogen vorgesehen: "objektiv hohes Potenzial, aber mittelfristige
Option, die erst gemeinsam mit dem Fachbereich angegangen werden sollte"
statt einer unkommentierten Sofort-Einstufung.

**Warum der Konfidenz-Marker bei der Zeitschätzung nötig ist:** Ohne ihn
wird eine vage Kundenaussage ("15 pro Woche, könnte auch weniger sein,
hab ich nicht wirklich gezählt") im PDF als fette, ungehedgte Zahl
gedruckt ("rund [X] Stunden pro Woche identifiziert"). Der Kunde liest dann
seine eigene Unsicherheit als angebliche Analyse-Erkenntnis zurück, was
Vertrauen kostet statt aufzubauen. Bei "grob" geschätzten Werten wird die
S.2-Formulierung entsprechend gehedgt ("grob geschätzt rund [X] Stunden pro
Woche" statt "identifiziert").

**Warum bei Schwankungen der niedrigere Wert gescort wird, nicht der
Spitzenwert:** Ein zweiter Testlauf rechnete konkret durch, was passiert,
wenn man stattdessen den Spitzenwert nimmt: 3,4 Std./Woche ergeben 3
Punkte (0,5–3,5-Band), ein saisonaler Spitzenwert von 4–5 Std./Woche
ergibt 5 Punkte (>3,5). Bei gleicher Automatisierbarkeit und Umsetzbarkeit
kann das denselben Prozess von "3 Monate" (Score 45) zu "Sofort" (Score
75) verschieben — je nachdem, welcher der beiden korrekten Werte gewählt
wird. Ohne eine feste Regel ist die Priorisierung damit beliebig. Deshalb:
immer der **typische Wert außerhalb der Spitzenzeit**, der Spitzenwert
wandert nur als Erwähnung in den Report-Text ("in Spitzenzeiten auch mehr"),
nie in die Punktevergabe.

**Warum Konzentration eine andere Regel braucht als Schwankung:** Ein
dritter Testlauf (Jahresabschluss-Vorbereitung einer Steuerkanzlei,
konzentriert auf ~5 Monate mit 15–20 Std./Woche, den Rest des Jahres kaum
etwas) zeigte, dass die Schwankungsregel hier zum falschen Ergebnis führt.
Wendet man "Wert außerhalb der Spitze nehmen" unverändert an, landet der
Prozess bei ~0,5 Std./Woche — der mit Abstand größte Zeitblock der Firma
verschwindet als Rundungsfehler aus PDF S.3 und aus der Summenzeile in
S.2. Der Jahresschnitt (350 Std. im Zeitfenster ÷ 52 Wochen ≈ 6,7
Std./Woche) bildet die tatsächliche Belastung ab, ohne den Ausreißer der
Spitzenzeit zu übernehmen. Der Unterschied zur Schwankung: bei
Schwankung ist der Prozess das ganze Jahr über aktiv, nur mit
unterschiedlicher Intensität — der Wert außerhalb der Spitze ist real und
reicht als konservative Schätzung. Bei Konzentration ist der Prozess
außerhalb des Zeitfensters faktisch nicht vorhanden — "der Wert außerhalb
der Spitze" wäre hier keine konservative Schätzung, sondern eine falsche
Aussage über die Firma.

**Warum Abhängigkeit zwei verschiedene Wirkungen haben kann:** Ein
Testlauf zeigte zwei Fälle, die beide "Abhängigkeit von einer Person"
sind, aber entgegengesetzt wirken. Fall 1 (blockierend): eine andere
Abteilung muss zuarbeiten, bevor der Prozess weitergehen kann (z. B.
"die Fertigung wird zum Flaschenhals") — das ist ein echtes
Umsetzbarkeits-Hindernis, weil eine Automatisierung trotzdem auf externe
Zuarbeit wartet. Fall 2 (Wissenskonzentration): eine einzelne Person kann
und macht den kompletten Prozess allein (z. B. "das läuft komplett über
mich, ich bin der Einzige, der das durchblickt") — das blockiert nichts,
im Gegenteil: es ist oft ein zusätzliches Argument FÜR das Projekt, weil
Automatisierung hier auch Risikoreduktion und Wissensdokumentation bedeutet
(was passiert, wenn diese eine Person ausfällt). Beide Fälle drücken die
Umsetzbarkeit deshalb **nicht automatisch gleich** — nur Fall 1 tut es
direkt; Fall 2 wird erst relevant, wenn zusätzlich die Systemintegration
fehlt oder nicht zur Idee passt (siehe Kickoff-Bogen).

**Separate private Notizen:** Budget-Hausnummer aus dem Intake,
Bauchgefühl zur Pilot-Konversion oder Red Flags (z. B. erkennbarer
interner Widerstand) gehören **nicht** auf dieses Blatt, sondern in eine
eigene, nicht geteilte Zeile — das ist ein anderes Problem als die
Scoring-Sichtbarkeit und braucht eine eigene Markierung:

```
── PRIVAT, NICHT IM SCREENSHARE ──
  Red Flags / interner Widerstand: _______________
  Bauchgefühl Pilot-Konversion:    _______________
```

---

## 4. Prioritäts-Bogen (Block 3, 1:15–1:45)

Wird ausgefüllt, nachdem alle Prozessblätter vorliegen. Trägt die
Scores aus den einzelnen Prozessblättern zusammen und ist die direkte
Vorlage für PDF S.2 (Kernaussagen) und S.4 (Matrix-Kommentare).

```
PRIORITÄTS-ÜBERSICHT

Prozess          Score   Phase        
────────────────────────────────────────
[Name P1]        ___     ________      
[Name P2]        ___     ________      
[Name P3]        ___     ________      
[Name P4]        ___     ________      
[Name P5]        ___     ________      

Summe Std./Woche über alle Prozesse:  _____   ↳ PDF S.2 "[X] Stunden pro Woche"
                                                  und S.3 "Summe"

Drei Kernaussagen für Executive Summary (PDF S.2):
  01 Größter Hebel (höchster Score):
     _______________________________________
  02 Schnellster Erfolg (Sofort-Phase + geringster Umsetzungsaufwand):
     _______________________________________
  03 Strategische Weichenstellung (aus "Was würde mit der Zeit
     passieren"-Antworten oder Reifegrad-Mustern):
     _______________________________________

Roadmap-Maßnahmen (PDF S.5 — normal 6 Stück in 3 Phasen, je Titel + 1 Satz;
Phase 3 ist laut Methodik meist eine strukturelle Empfehlung, nicht direkt
aus einem einzelnen Prozess abgeleitet. Bei nur 1–2 besprochenen Prozessen
oder ohne Sofort-Kandidat: Anzahl skaliert mit dem, was tatsächlich da ist
— lieber 3 begründete Maßnahmen als 6 aufgeblähte):

  PHASE 1 · SOFORT (0–4 Wochen) — aus Sofort-Prozessen ableiten
    □ Kein Prozess erreicht die Sofort-Schwelle (Score ≥60) — siehe
      Methodik Abschnitt 3.2 "Sonderfall: kein Prozess erreicht die
      Sofort-Schwelle". Phase 1 entfällt im Report EXPLIZIT
      ("Aktuell kein Prozess mit akutem Sofort-Potenzial"), wird
      nicht kommentarlos leer gelassen. Weiter unten: stärkster
      Phase-2-Kandidat + Bedingung, die ihn nach oben schieben würde.
    Maßnahme 1: _______________________________
      Kurzbeschreibung: ________________________
    Maßnahme 2: _______________________________
      Kurzbeschreibung: ________________________

  PHASE 2 · 3 MONATE — aus Mittelfeld-Prozessen ableiten
    Maßnahme 3: _______________________________
      Kurzbeschreibung + Voraussetzung: _________
    Maßnahme 4: _______________________________
      Kurzbeschreibung + Voraussetzung: _________

  PHASE 3 · 6–12 MONATE — meist 1 strukturelle Empfehlung
    (z. B. "SAP-Schnittstelle prüfen", "Datenqualität verbessern"),
    nicht zwingend aus einem der 3–5 besprochenen Prozesse
    Maßnahme 5: _______________________________
      Kurzbeschreibung: ________________________
    Maßnahme 6 (falls zutreffend, sonst weglassen):
      _______________________________

Reaktion des Kunden auf die Priorisierung (Widerspruch/Ergänzung —
kennt interne Politik, die ich nicht sehe):
_______________________________________________
  → Falls Widerspruch politischer Natur: auf dem betroffenen
    Prozessblatt "Phase abweichend vom Score" ausfüllen (siehe
    dort) und die Roadmap-Maßnahmen oben entsprechend anpassen,
    BEVOR der Report geschrieben wird.
```

**Warum die Roadmap-Maßnahmen ein eigener Block sind, kein Nebenprodukt
der Score-Tabelle:** PDF S.5 verlangt sechs benannte Maßnahmen mit je
einem Satz Kurzbeschreibung — das lässt sich aus "Prozess X hat Score Y"
allein nicht ableiten, vor allem nicht Phase 3, die laut Methodik ohnehin
meist eine strukturelle Empfehlung statt einer direkten Prozess-Fortsetzung
ist. Ohne dieses Feld wird die Roadmap-Seite beim Report-Schreiben aus dem
Bauch heraus neu erfunden, obwohl der Bogen sie eigentlich schon im Call
hätte festhalten können.

**Warum "Reaktion des Kunden" ein eigenes Feld ist:** Die Methodik sagt
ausdrücklich, der Kunde kann der Priorisierung widersprechen, weil er
interne Widerstände kennt, die im Deep-Dive nicht sichtbar wurden. Ohne
dieses Feld geht dieser Einwand unter, wenn drei Tage später der Report
geschrieben wird — dann zählt nur noch, was auf dem Papier steht.

---

## 5. Abschluss-Bogen (Block 4, 1:45–2:00)

```
ABSCHLUSS

Genannte Tool-Richtung (grob, volle Ausarbeitung kommt ins PDF):
_______________________________________________

Offene Fragen für den Nachfass-Call:
_______________________________________________

Empfohlener Pilot-Prozess (für PDF S.7 "[Prozess aus Phase 1]"):
_______________________________________________
  □ Kein Phase-1-Prozess vorhanden (siehe Prioritäts-Bogen). PDF S.7
    nennt stattdessen den stärksten Phase-2-Kandidaten + die konkrete
    Bedingung, die ihn nach oben schieben würde:
    Prozess: ___________________  Bedingung: ___________________

Termin Nachfass-Call vereinbart:  ______________

Direkt nach dem Call (innerhalb von 15 Min, noch vor Report-Erstellung):
□ Foto/Scan der ausgefüllten Bögen (Prioritäts- + Abschluss-Bogen)
  per E-Mail an den Kunden gesendet, mit 2–3 Sätzen Zusammenfassung
  → siehe Methodik Abschnitt 6, "Sofort-Handover"

Falls Preis-Einwand kam ("was bekomme ich für 299 €, ist das nur
ein Sales-Call?") — Kernaussagen, nicht ablesen, aber parat haben:
  □ Das PDF gehört dem Kunden, unabhängig davon, was danach passiert
  □ Konkreter Inhalt: priorisierte Liste + nachvollziehbare Bewertung
    + erste Tool-Richtung — auch ohne Folgeauftrag nutzbar
  □ Ehrlich zugeben: ja, es ist auch ein Einstieg fürs Pilotprojekt —
    aber ohne Verpflichtung dazu

Falls kein Prozess die Sofort-Schwelle erreicht und der Kunde fragt
"was bekomme ich dann für meine 299 €?" (dritter Testlauf, kam
zugespitzt und wiederholt — mit die kritischste Frage im ganzen
Gespräch) — dreiteilige Antwort, im Testlauf überzeugend bestätigt:
  □ Bestätigung ist ein Ergebnis: der Kunde weiß jetzt konkret, wo er
    NICHT investieren sollte — oft mit Bezug auf einen früheren
    gescheiterten Anlauf, den der Kunde selbst erwähnt hat
  □ Das PDF bleibt als Referenz gültig, auch in einem Jahr noch
    nutzbar (neue Tools, geänderte Situation)
  □ Ehrlichkeit statt künstlichem Sofort-Kandidaten ist selbst das
    Argument: ein erfundener "Quick Win" wäre kein Gefallen

Falls Garantie-Einwand kam ("garantierst du, dass Tool X wirklich mit
unserem System funktioniert, bevor ich fürs Pilotprojekt zahle?"):
  □ Keine ungeprüfte Zusage geben — unseriös und nicht haltbar
  □ Stattdessen anbieten: die ersten 1–2 Tage des Pilotprojekts sind
    Verifikation an echten Daten/echtem Export, mit Ausstiegsoption,
    falls sich der Ansatz dabei als nicht tragfähig erweist
```

**Warum der Preis-Einwand-Block hier steht, nicht in der Methodik:** Die
Methodik begründet in Abschnitt 7 ausführlich, warum €299 bewusst ein
Trust-Preis und kein kostendeckender Preis ist — das ist aber eine interne
Kalkulationslogik, keine für den Kunden formulierte Antwort. Ein Testlauf
zeigte: die Frage "ist das nur ein verlängerter Sales-Call?" kommt am Ende
des Calls plausibel und sollte nicht zum ersten Mal in dem Moment
beantwortet werden. Die drei Punkte oben sind keine Skript-Vorlage zum
Vorlesen, sondern Anker, damit die Antwort im Call nicht improvisiert
werden muss.

**Warum der Garantie-Einwand ein eigener Block ist, kein Duplikat des
Preis-Einwands:** Ein zweiter Testlauf zeigte einen strukturell anderen
Einwand — nicht "was bekomme ich für mein Geld", sondern "garantierst du
technische Machbarkeit, bevor ich fürs Pilotprojekt zahle". Eine unseriöse
Zusage ("ja, das passt sicher") wäre der einfachste Weg, den Call positiv
zu beenden, aber falsch, wenn die Kompatibilität tatsächlich unklar ist
(z. B. bei einer unbekannten Branchensoftware ohne dokumentierte API). Die
ehrliche Antwort — keine Garantie, aber eine kurze, risikoarme
Verifikationsphase am Anfang des Pilotprojekts — hat sich im Testlauf als
überzeugender erwiesen als eine leere Zusage, gerade bei technisch
versierten Kunden, die eine Garantie ohnehin kritisch hinterfragen würden.

---

## 6. Vom Bogen zum PDF — die Übersetzungstabelle

Damit beim Report-Schreiben nichts neu erfunden werden muss, sondern nur
noch übertragen wird:

| PDF-Feld | Quelle im Bogen |
|---|---|
| S.2 "[Anzahl] Prozesse aus [Bereich 1/2/3]" | Kickoff-Bogen, Prozessliste + Bereich |
| S.2 "rund [X] Stunden pro Woche" (gehedgt, falls "grob" markiert) | Prioritäts-Bogen, Summe Std./Woche + Konfidenz-Marker je Prozessblatt |
| S.2 Kernaussagen 01/02/03 | Prioritäts-Bogen, "Drei Kernaussagen" (inkl. entgangenes Geschäft aus Prozessblatt, falls genannt) |
| S.3 Tabelle (Name, Bereich, Beschreibung, Std./Woche, Werkzeug) | Prozessblatt, Abschnitt 1+2+3 |
| S.4 Matrix (x/y/Punktgröße pro Prozess) | Prozessblatt, "Matrix-Position" |
| S.4 Kommentare je Cluster | Prioritäts-Bogen + Prozessblatt-Bewertung |
| S.5 Roadmap, normal 6 Maßnahmen in 3 Phasen, skaliert bei wenigen Prozessen (Platzierung ggf. abweichend vom Score) | Prioritäts-Bogen, Block "Roadmap-Maßnahmen" + Prozessblatt "Phase abweichend vom Score" |
| S.6 Tool-Tabelle | Abschluss-Bogen, "Tool-Richtung" + Tool-Empfehlungs-Logik (Methodik 4) |
| S.7 "[Prozess aus Phase 1]" ODER, falls kein Sofort-Kandidat, stärkster Phase-2-Kandidat + Bedingung | Abschluss-Bogen, "Empfohlener Pilot-Prozess" (inkl. Fallback-Feld) |

Wenn eine Zeile im PDF beim Ausfüllen leer bleibt, obwohl alle Bögen
vollständig sind, fehlt ein Feld auf einem Bogen — dann wird dieses
Dokument nachgezogen, nicht das PDF mit einer Ad-hoc-Schätzung gefüllt.

---

## 7. Übungsweg zum Auswendig-Können

1. **Erste 2–3 Calls:** Merkblatt sichtbar auf dem zweiten Monitor, Bögen
   digital ausfüllen (z. B. als Textdatei neben dem Videofenster).
2. **Nach 3 Calls:** Merkblatt nur noch griffbereit, nicht mehr dauerhaft
   im Blick — Blockfolge und Vier-Phasen-Struktur sollten sitzen.
3. **Ab Call 5:** Merkblatt weglegen. Bögen bleiben, weil sie das
   Arbeitsdokument für den Report sind, nicht weil sie zum Erinnern
   gebraucht werden.
4. **Regelmäßiger Check:** Alle paar Monate das Merkblatt danebenlegen
   und prüfen, ob sich die eigene Praxis noch mit "Erzählen, Zerlegen,
   Werten, Ordnen" deckt. Wenn nicht — Methodik überarbeiten, nicht nur
   den eigenen Ablauf stillschweigend driften lassen.

---

## 8. Fallbeispiel: kein Sofort-Kandidat (aus Testlauf 3, 2026-09-20)

Ein durchgerechnetes Beispiel, weil ein ausgefülltes Blatt schneller
verstehen lässt als ein weiterer Absatz Begründung. Kundin: kleine
Steuerberatungskanzlei, 9 Mitarbeiter, DATEV, bereits gut organisiert.

| Prozess | Std./Woche | Zeitaufwand | Autom. | Umsetz. | Score | Phase |
|---|---|---|---|---|---|---|
| Mandanten-Rückfragen (Telefon) | ~13 (grob) | 5 | 1 | 2 | 10 | Beobachten |
| Jahresabschluss-Vorbereitung | ~7 im Jahresschnitt (konzentriert Jan–Mai auf 15–20) | 5 | 1 | 1 | 5 | Beobachten |
| Papierbeleg-Digitalisierung | 4–5 | 5 | 3 | 2 | 30 | 3 Monate |

**Kein Prozess erreicht die Sofort-Schwelle.** Papierbeleg-Digitalisierung
ist der stärkste Kandidat (Score 30), aber die Umsetzbarkeit bleibt
niedrig, weil ein früherer Automatisierungsversuch an der
DATEV-Buchungslogik scheiterte — genau der Fall, für den PDF S.7 jetzt
einen Fallback-Satz vorsieht: *"Stärkster Kandidat für einen zweiten
Anlauf: Papierbeleg-Digitalisierung — vorausgesetzt, ein neuer Ansatz
adressiert gezielt die DATEV-Buchungslogik, an der der letzte Versuch
scheiterte."*

Zwei Dinge an diesem Beispiel, die sich nicht aus der Tabelle allein
ergeben: Erstens, die Jahresabschluss-Zeile zeigt genau den
Konzentrations-Fall — der Jahresschnitt (~7 Std./Woche) steht in S.3,
nicht der Wert außerhalb der Saison (~0,5), der den Prozess unsichtbar
gemacht hätte. Zweitens, "kein Sofort-Kandidat" hat den Score-Bereich
selbst nicht verändert (1–125, Schwellen 60/20 unangetastet) — es hat nur
sichtbar gemacht, dass die Anschlussstellen im Report (S.5, S.7,
Abschluss-Bogen) einen expliziten Pfad für dieses Ergebnis brauchen,
keinen impliziten.
