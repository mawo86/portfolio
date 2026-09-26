# Prompt: Lösungen recherchieren und handfest belegen (optimiert für Claude Fable 5.1)

Verwendung: Neue Claude Code Session im Workspace-Root, `/prime`, dann den Block unten als erste Nachricht. Die Session braucht Web-Zugriff (WebSearch, WebFetch). Dauer: lang. Der Prompt ist so gebaut, dass Fable in Batches arbeitet und nach jedem Batch committet, damit ein Abbruch nichts verliert.

Vorab entscheiden (Abschnitt "Deine Entscheidungen" im Prompt): ob Quellen sichtbar auf der Website erscheinen sollen oder nur intern. Standard im Prompt: intern plus dezent auf der Website.

---

## Der Prompt

```text
Du arbeitest als Fable 5.1 im Workspace für busche.cloud. Lies zuerst CLAUDE.md (Abschnitte "Use-Case-Bibliothek", "Design-System", "Blog-Styling"), dann outputs/loesungswege/INDEX.md und outputs/loesungswege/_betriebsstandard.md. Danach alle 26 Dateien in website/src/content/loesungen/ und die zugehörigen Anleitungen in outputs/loesungswege/. Erst wenn du alle gelesen hast, beginnst du mit der Arbeit. Keine Vorrede, keine Rückfrage zum Start.

# Das Problem, das du löst

Die 26 Lösungen auf /loesungen sind aus Erfahrung und Plausibilität geschrieben, nicht aus Recherche. Sie klingen an vielen Stellen dahingesagt: "Der Workflow liest die Anfrage und erkennt Kunde, Mengen und Artikel." Wie genau? Womit? Woher weiß der Leser, dass das funktioniert und nicht nur hübsch klingt? Ein Geschäftsführer, der drei solche Sätze liest, denkt: noch ein Berater, der alles kann. Genau das soll die Seite nicht ausstrahlen.

Dein Auftrag: Jede Lösung wird gegen die Realität geprüft und so umgeschrieben, dass ein skeptischer Mittelständler nach dem Lesen denkt: "Der weiß, wie das konkret geht, und er sagt auch, was schwierig ist."

# Was "handfest belegt" heißt

Für jede Lösung recherchierst du drei Dinge und baust sie in den Text ein:

1. **Der Mechanismus.** Wie funktioniert der Kern technisch, in einem oder zwei Sätzen, die ein Nicht-Techniker versteht und ein Techniker nicht peinlich findet. Nicht "die KI erkennt die Positionen", sondern "das Modell bekommt die PDF-Seite als Bild und den Artikelstamm als Liste und gibt pro Zeile Artikelnummer, Menge und einen Sicherheitswert zurück; unter 80 Prozent Sicherheit landet die Zeile zur Prüfung beim Menschen". Der Leser soll sich vorstellen können, was auf dem Bildschirm passiert.

2. **Der Beleg.** Mindestens eine öffentlich nachprüfbare Quelle, dass genau dieser Mechanismus in der Praxis läuft: dokumentierte Fallstudie (Anbieter, Beratung, Fachpresse, Konferenzvortrag), offizielle Dokumentation einer Schnittstelle (SAP API Business Hub, n8n-Docs, Anthropic-Docs), ein öffentliches n8n-Template oder GitHub-Repo, eine Studie mit Methodik. Bevorzugt: deutschsprachige Mittelstandsfälle, dann internationale KMU-Fälle, dann Anbieter-Dokumentation. Nicht als Beleg zählen: Anbieter-Landingpages mit "bis zu 80 Prozent Zeitersparnis" ohne Methodik, LinkedIn-Posts, KI-generierte Blogartikel ohne Autor.

3. **Die Grenze.** Was daran wirklich schwierig ist oder wo es in der Praxis scheitert, mit Quelle oder mit klarer Kennzeichnung als eigene Einschätzung. Eine Lösung ohne genannte Grenze wirkt überheblich. Eine mit Grenze wirkt erfahren.

# Recherche-Regeln

- Pro Lösung 20 bis 40 Minuten Recherche. Suche gezielt: Anbieter-Docs für die genannten Werkzeuge (n8n Node-Docs, SAP API Business Hub für die genannten OData-Services, Anthropic Docs für PDF- und Bild-Eingabe, Buttondown-, Zendesk-, HubSpot-API), Fachpresse (Computerwoche, heise, t3n, CIO, Handelsblatt), Studien (Bitkom, ifo, IW Köln, Fraunhofer, McKinsey, BCG), Anwenderberichte auf Anbieterseiten mit Firmenname und Zahlen, Vorträge (SAP TechEd, n8n Community, Konferenz-Slides), öffentliche Repos und Templates.
- Prüfe jede Zahl, die in den Texten steht (Aufwand, Einsparung), gegen das, was du findest. Wenn eine Quelle eine andere Größenordnung nennt, passe die Spanne an und notiere die Quelle. Wenn du nichts findest, bleibt die Spanne, aber die Formulierung wird "Erfahrungswert, nicht extern belegt". Erfinde keine Zahl, um eine Lücke zu füllen.
- SAP-Services, die im Text stehen (API_SALES_ORDER_SRV, API_PURCHASEORDER_PROCESS_SRV, API_SUPPLIERINVOICE_PROCESS_SRV, API_MAINTNOTIFICATION, BAPI_SALESORDER_CREATEFROMDAT2): Existenz und Zweck auf api.sap.com oder help.sap.com prüfen. Falscher Servicename ist der schnellste Weg, bei einem SAP-Kunden Glaubwürdigkeit zu verlieren.
- EU AI Act, DSGVO, BetrVG, GoBD: Aussagen gegen den Gesetzestext oder offizielle Leitlinien prüfen (eur-lex, Kommissions-Leitlinien, BfDI, Datenschutzkonferenz). Fristen und Artikelnummern nur nennen, wenn geprüft. Bei Unsicherheit die Aussage weicher machen, nicht präziser raten.
- Halte fest, was du geprüft hast, auch wenn es stimmte. Die Belegtabelle (unten) ist das Ergebnis, nicht nur der Text.

# Was du am Text änderst

Schema in src/content/config.ts bleibt unverändert, außer du ergänzst ein optionales Feld `belege` (Array aus {titel, url, art}) für die dezente Quellenanzeige. Frontmatter-Felder `aufwand` und `einsparung` darfst du anpassen, wenn die Recherche es hergibt.

Struktur der Body-Abschnitte bleibt (Wo es hakt, Was wir bauen, Was das bringt, Was ihr dafür braucht, Warum dieses Paket). Innerhalb davon:

- **"Was wir bauen"** bekommt den Mechanismus. Zwei bis vier Sätze, die den Weg vom Eingang zum Ergebnis konkret machen: welches Werkzeug tut was, wo entscheidet der Mensch, was passiert bei Unsicherheit. Werkzeugnamen sind erlaubt und erwünscht, aber nicht als Aufzählung, sondern im Ablauf.
- **"Was das bringt"** bekommt den Beleg. Muster: "Bei [Firma/Studie] lag [Kennzahl] bei [Wert] ([Quelle]). Bei euch hängt es an [Faktor], deshalb rechne ich mit [Spanne]." Wenn kein externer Beleg: "Erfahrungswert aus vergleichbaren Prozessen, extern habe ich dazu keine belastbare Zahl gefunden." Das ist ein Satz, den ein überheblicher Berater nie schreiben würde. Genau deshalb steht er da.
- **Neuer kurzer Absatz "Wo es schwierig wird"** vor "Was ihr dafür braucht": zwei bis drei Sätze zur Grenze. Kein Bullet-Marketing, sondern der Satz, den man am Telefon sagen würde, wenn der Kunde fragt "und was ist der Haken?".
- **"Was ihr dafür braucht"** wird konkreter, wo die Recherche Voraussetzungen zeigt, die fehlten (Lizenz, Berechtigungsobjekt, Datenformat, Mindestmenge).

Ton: Skills meine-stimme und blog-artikel gelten. Kein Gedankenstrich, kein --- als Trenner. Du-Ansprache in der zweiten Person Plural. Keine Superlative, kein "revolutionär", kein "nahtlos", kein "intelligent" als Adjektiv für Software. Jeder Satz mit einer Behauptung braucht entweder einen Mechanismus, einen Beleg oder eine Kennzeichnung als Einschätzung.

Streiche Überheblichkeit aktiv. Suche in jedem Text nach diesen Mustern und ersetze sie:
- "automatisch" ohne Erklärung, wie → durch den Mechanismus
- "erkennt", "versteht", "weiß" für Software → durch das, was technisch passiert (klassifiziert, extrahiert, vergleicht mit)
- Passiv-Zauber ("wird erzeugt", "entsteht") → wer oder was erzeugt es
- Zahlen ohne Herkunft → Herkunft oder Kennzeichnung
- Sätze, die nur Nutzen behaupten ("Das Team wird entlastet") → streichen oder mit Mechanismus füllen

# Belegtabelle (intern)

Lege outputs/loesungswege/_belege.md an. Pro Lösung ein Abschnitt mit einer Tabelle: Aussage im Text | Quelle (Titel, Herausgeber, Jahr, URL) | Art (Fallstudie, Doku, Studie, Gesetz, eigene Einschätzung) | Geprüft am | Anmerkung (was die Quelle wirklich sagt, wo sie vom Text abweicht). Auch Aussagen, die du nicht belegen konntest, stehen drin, mit "kein Beleg gefunden" und was du gesucht hast. Diese Datei ist meine Antwort, wenn ein Kunde fragt "woher wissen Sie das?".

Ergänze in jeder internen Anleitung (outputs/loesungswege/<slug>.md) einen Abschnitt 10 "Belege und Quellen" mit den drei bis fünf wichtigsten Quellen für diesen Fall, damit sie im Kundengespräch griffbereit sind.

# Auf der Website (dezent)

Wenn du das Feld `belege` im Schema ergänzst: LoesungLayout.astro zeigt am Ende des Textes unter der Überschrift "Nachlesen" eine schlichte Liste (Titel als Link, Herausgeber in bone-600), maximal drei Einträge, nur externe Quellen mit Substanz. Keine Fußnoten im Fließtext, keine Zitatzählung. Wenn eine Lösung keine belastbare externe Quelle hat, erscheint der Abschnitt nicht. Design-System einhalten, keine neuen Farben, keine Karten.

# Arbeitsweise

1. Lies alles (oben). Erstelle eine Reihenfolge: zuerst die vier Lösungen mit prio über 85 (die sieht der Besucher zuerst), dann die SAP-Fälle (meine Nische, dort ist Präzision am wichtigsten), dann der Rest nach prio.
2. Arbeite in Batches von vier bis fünf Lösungen. Pro Batch: recherchieren, Website-Text umschreiben, Anleitung um Abschnitt 10 ergänzen, Belegtabelle füllen.
3. Nach jedem Batch: cd website && npm run check (Build, Link-Check, Budget). Grün, dann Commit mit Nachricht "Lösungen belegen: <Slugs>", dann Push. Ein Batch, ein Commit. So geht bei Abbruch nichts verloren.
4. Wenn du bei einer Lösung feststellst, dass sie in der Praxis anders gebaut wird als beschrieben (anderes Werkzeug, anderer Weg), ändere den Text entsprechend und notiere den Grund in der Belegtabelle. Wenn du feststellst, dass eine Lösung in der Praxis kaum vorkommt oder regelmäßig scheitert, schreibe das in "Wo es schwierig wird" und setze in der INDEX.md-Tabelle eine Anmerkung. Lösche keine Lösung ohne mich zu fragen.
5. Frage mich nur, wenn eine Recherche das Paket oder den Preis einer Lösung infrage stellt (das ist Positionierung) oder wenn du eine Lösung ganz streichen willst. Alles andere entscheidest du.
6. Am Ende CLAUDE.md aktualisieren: Hinweis auf _belege.md, das neue Schema-Feld, den "Nachlesen"-Abschnitt, in maximal acht Zeilen.

# Deine Entscheidungen (vorab eintragen)

- Quellen auf der Website sichtbar: ja, dezent als "Nachlesen" (Standard). Alternativ: nein, nur intern; dann Schema und Layout nicht anfassen.
- Sprache der Quellen: deutsch bevorzugt, englisch erlaubt, wenn keine deutsche Quelle vergleichbarer Substanz existiert.

# Was du mir am Ende lieferst

1. Liste der 26 Lösungen mit Status: belegt (externe Quelle für Mechanismus und Zahl), teilweise (Mechanismus belegt, Zahl Erfahrungswert), nur Einschätzung (keine externe Quelle gefunden). Ziel: mindestens 18 belegt oder teilweise.
2. Die fünf größten inhaltlichen Korrekturen (wo der alte Text falsch oder zu optimistisch war), je zwei Sätze: vorher, nachher, Quelle.
3. Drei Lösungen, bei denen die Recherche die Positionierung infrage stellt oder einen Preis zu niedrig oder zu hoch erscheinen lässt, mit Begründung. Nicht ändern, nur vorlegen.
4. Ein Vorher-Nachher-Beispiel eines kompletten Textabschnitts "Was wir bauen", damit ich den Stilwechsel sehe.
5. Liste der SAP-Servicenamen und Rechtsaussagen, die du geprüft hast, mit Ergebnis (stimmt, korrigiert, entfernt).

Beginne mit dem Lesen von CLAUDE.md.
```

---

## Notizen für dich (nicht Teil des Prompts)

**Warum Mechanismus, Beleg, Grenze.** Überheblichkeit entsteht nicht durch starke Behauptungen, sondern durch Behauptungen ohne Innenleben. Ein Satz, der erklärt, wie etwas funktioniert, wo es herkommt und wo es scheitert, kann sehr selbstbewusst sein und wirkt trotzdem bodenständig. Die drei Elemente zwingen Fable, für jede Lösung genau das zu produzieren, statt Adjektive zu tauschen.

**Warum der Satz "extern habe ich dazu keine belastbare Zahl gefunden" wichtig ist.** Er ist das Gegenteil von dahingesagt. Er zeigt, dass gesucht wurde, und er baut Vertrauen für die Zahlen, die belegt sind. Fable neigt ohne diese Vorgabe dazu, Lücken mit plausiblen Zahlen zu füllen. Der Prompt verbietet das explizit.

**Warum Batches mit Commits.** Die Session wird lang (26 Lösungen, je 20 bis 40 Minuten Recherche). Ohne Commits pro Batch riskiert ein Kontextfenster-Ende oder ein Abbruch den ganzen Fortschritt. Mit Commits kannst du die Session jederzeit mit "Lies _belege.md und mache mit den fehlenden Lösungen weiter" fortsetzen.

**Warum SAP-Servicenamen eigens geprüft werden.** Deine Nische ist SAP-nahe Prozessautomatisierung. Ein falscher OData-Servicename auf der Website ist für einen SAP-Basis-Admin ein Ausschlusskriterium, und Modelle erfinden solche Namen gern. Die Namen in den aktuellen Texten stammen aus meinem Gedächtnis, nicht aus einer Prüfung gegen api.sap.com. Genau deshalb steht der Punkt drin.

**Erwartete Dauer.** Realistisch zwei bis drei lange Sessions. Reihenfolge im Prompt sorgt dafür, dass die sichtbarsten und die nischenkritischsten Lösungen zuerst fertig werden.

**Was danach sinnvoll ist.** Wenn die Belegtabelle steht, ist sie auch Rohmaterial für Blog-Artikel ("Was die Zahlen zu KI im Rechnungseingang wirklich hergeben") und für den Discovery-Call, wenn ein Kunde nach Referenzen fragt, die du noch nicht hast.
