# Lösungsweg: Entscheidungsvorlagen auf einer Seite

**Website:** `/loesungen/entscheidungsvorlagen-kurzfassung` · **Paket:** Tagessatz · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Vorlagen sind zu lang, Entscheidungen zu langsam. Wir führen ein Einseiten-Format ein und richten einen Assistenten ein, der aus Fachunterlagen einen Entwurf in diesem Format erzeugt.

**Nicht Teil davon:** Die Entscheidung selbst, Finanzmodellierung (Zahlen kommen aus der Fachabteilung), Workflow-Automatisierung (das ist Werkzeug plus Format, kein Pipeline-Projekt), Geschäftsführungs-Coaching.

## 2. Voraussetzungen beim Kunden

- Geschäftsführung, die das Format will und selbst einfordert
- Drei bis fünf alte Vorlagen (gute und schlechte) als Ausgangsmaterial
- KI-Werkzeug mit Business-Vertrag (wie bei HR-Texten)
- Zwei bis drei Fachabteilungsleiter, die Vorlagen schreiben, für die Einweisung
- Vertraulichkeit: Vorlagen enthalten Strategisches. AVV, kein Training, Zugriff nur für den Kreis, der Vorlagen schreibt.

## 3. Werkzeugentscheidung

Das vorhandene Business-KI-Werkzeug (Claude Projekt, Copilot, ChatGPT Team) mit einer Systemanweisung und dem Format als Vorlage. Kein Workflow. Optional eine Word-Vorlage mit dem Einseiten-Layout, die der Assistent befüllt.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Workshop mit Geschäftsführung (halber Tag): Was braucht ihr für eine Entscheidung? Format festlegen: Frage, Optionen (2 bis 3), Kosten und Nutzen als Spanne, Risiken, Empfehlung, offene Punkte, Anhang-Verweis | 0,5 Tag |
| 2 | Format als Word-Vorlage und als Anweisung: Länge (eine Seite), Sprache (Aussagen statt Adjektive), Zahlen immer mit Quelle, Vermutungen kennzeichnen | 0,5 Tag |
| 3 | Test mit drei alten Vorlagen: Assistent erzeugt Einseiter aus dem alten 40-Seiter, Geschäftsführung bewertet | 0,5 Tag |
| 4 | Einrichtung im Werkzeug, Zugriff für den Autorenkreis | 0,25 Tag |
| 5 | Einweisung 90 Minuten für Autoren: Unterlagen rein, Entwurf raus, dann schärfen. Was der Assistent nicht darf: Zahlen erfinden, Empfehlung ohne Begründung | 0,5 Tag |
| 6 | Erste drei echte Vorlagen begleiten (asynchron, Feedback) | 0,5 Tag verteilt |

Gesamt: 2 bis 3 Tage.

## 5. Deployment und Betrieb

Kein Workflow, aber:

- **Format und Anweisung versioniert** im Kunden-Wiki, Änderungen nur mit Geschäftsführung.
- **Zahlenkontrolle als Regel:** Jede Zahl im Einseiter hat eine Quelle im Anhang. Der Autor prüft das, nicht das Modell. In der Anweisung steht: Zahlen ohne Quelle als "[Quelle fehlt]" markieren.
- **Zugriff:** Business-Konto, begrenzter Nutzerkreis, Offboarding.
- **Review nach drei Monaten:** Werden Entscheidungen schneller? Liest die Geschäftsführung die Anhänge noch? Format anpassen.

## 6. Abnahme

- Drei alte Vorlagen als Einseiter, von der Geschäftsführung als "hätte gereicht" bewertet
- Autoren brauchen unter zwei Stunden für die Endfassung (vorher: Tage)
- Keine Zahl ohne Quelle in den ersten drei echten Vorlagen
- Geschäftsführung nutzt das Format als Pflicht für Entscheidungen über einer Schwelle

## 7. Typische Fehler

- **Format ohne Geschäftsführung festlegen.** Dann nutzt es niemand. Sie muss es wollen und einfordern.
- **Assistent Empfehlungen erfinden lassen.** Die Empfehlung kommt vom Autor. Der Assistent strukturiert.
- **Zahlen ungeprüft übernehmen.** Modell fasst zusammen und rundet gern. Quelle prüfen.
- **Anhang abschaffen.** Der Einseiter ist die Spitze, der Anhang bleibt für Rückfragen.

## 8. Aufwand und Preis

2 bis 3 Tage Tagessatz (€2.400 bis €5.400).

## 9. Folge-Use-Cases

- Reporting-Kommentierung (Zahlen zu Text, monatlich)
- Meeting-Zusammenfassungen (offene Punkte werden Vorlagen)
- EU-AI-Act-Einstufung (oft die erste Entscheidungsvorlage, die damit geschrieben wird)
