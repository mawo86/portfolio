# Lösungsweg: Antwortentwürfe für den Kundenservice

**Website:** `/loesungen/antwortentwuerfe-mit-wissensbasis` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Zu jeder Service-Anfrage soll ein Antwortentwurf im Ticket liegen, der Wissensbasis, Kundenkontext und Ton kennt und seine Quellen nennt.

**Nicht Teil davon:** Automatischer Versand, Chatbot für Endkunden auf der Website (anderer Risikograd), Aufbau der Wissensbasis von null (siehe Wissensdatenbank), Mehrsprachigkeit über Deutsch und Englisch hinaus.

## 2. Voraussetzungen beim Kunden

- Wissensquellen in digitaler Form: Handbücher, FAQ, Garantiebedingungen, interne Wiki-Seiten, die 200 besten alten Antworten
- Ticketsystem mit API (Entwurf als interne Notiz oder Draft-Reply)
- 50 gute alte Antworten für den Ton, 30 Ticket-Antwort-Paare als Testset
- Ein Service-Mitarbeiter, der vier Wochen jeden Entwurf mit "übernommen / geändert / verworfen" markiert
- DSGVO: AVV, EU-Endpunkt, Kundendaten werden nicht in die Wissensbasis geschrieben. Klar trennen: Wissensbasis (Firmenwissen) und Kontext (dieses Ticket).

## 3. Werkzeugentscheidung

Retrieval über eine kleine RAG-Pipeline (Chunking, Embeddings, Vektorsuche) auf EU-Hosting: pgvector in Postgres (läuft im selben Container wie n8n) statt externer Vektor-Dienst. Claude Sonnet als Antwortmodell mit striktem Quellenzwang ("nur aus den Auszügen antworten, sonst 'weiß ich nicht'"). Bei sehr kleiner Wissensbasis (unter 50 Seiten) reicht es, die komplette Wissensbasis in den Kontext zu geben, dann keine Vektorsuche.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Wissensquellen sichten, Themenbereich für den Piloten wählen (ein Produktbereich), Testset | 0,5 Tag |
| 2 | Ingestion: Dokumente zu Text, Chunking (400 bis 800 Token, Überschriften mitnehmen), Embeddings, pgvector. Als wiederholbarer Job (wöchentlich) | 2 Tage |
| 3 | Retrieval: Ticket-Text zu Suchanfrage, Top-6-Abschnitte, Re-Ranking über Modell | 1 Tag |
| 4 | Antwort-Prompt: Ton aus Beispielen, Quellenzwang, Ausgabe mit Quellenliste (Datei, Abschnitt), Sicherheitsgrad | 1,5 Tage |
| 5 | Ticket-Integration: Entwurf als interne Notiz mit Quellen und Button "als Antwort übernehmen" | 1 Tag |
| 6 | Bewertungsschleife: übernommen / geändert / verworfen als Feld im Ticket, wöchentliche Auswertung | 0,5 Tag |
| 7 | Parallelbetrieb zwei Wochen, Prompt und Chunking nachschärfen, fehlende Wissensinhalte identifizieren (das ist oft der größte Nutzen) | 1,5 Tage verteilt |
| 8 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 8 bis 12 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Zwei Wissensbasen:** test hat einen Index aus denselben Dokumenten, aber die Ingestion läuft zuerst gegen test. Erst wenn Regressionstest grün, wird der prod-Index aktualisiert (Blue-Green: neuen Index bauen, dann umschalten).
- **Regressionstest** auf zwei Ebenen: Retrieval (sind die richtigen Abschnitte unter den Top 6, 85 Prozent) und Antwort (Bewertung durch Modell-als-Richter gegen Referenzantwort, plus wöchentlich zehn Fälle durch einen Menschen).
- **Quellenpflicht technisch erzwingen:** Antworten ohne Quellenangabe werden nicht als Entwurf angezeigt, sondern als "keine gesicherte Antwort" markiert.
- **Dokumenten-Änderungen:** Ingestion-Job hängt am Dokumentenordner (SharePoint-Webhook oder täglicher Vergleich). Änderungsprotokoll: Welche Version welches Dokuments war zum Antwortzeitpunkt im Index.

## 6. Abnahme

- 60 Prozent der Entwürfe werden ohne oder mit kleiner Änderung übernommen (Ziel nach vier Wochen, steigt danach)
- Null erfundene Fakten in der Stichprobe (100 Antworten, geprüft gegen Quellen)
- Bearbeitungszeit pro Ticket sinkt messbar (Ticketsystem-Report vorher/nachher)
- Liste der Wissenslücken übergeben (Fragen, zu denen nichts gefunden wurde)

## 7. Typische Fehler

- **Wissensbasis nicht kuratieren.** Veraltete Dokumente im Index erzeugen selbstbewusst falsche Antworten. Vor der Ingestion aussortieren, Verantwortlichen für Pflege benennen.
- **Quellenzwang weglassen, weil Antworten dann "flüssiger" klingen.** Genau dann halluziniert das Modell. Quellenzwang bleibt.
- **Alle Produktbereiche auf einmal.** Ein Bereich im Pilot, dann ausweiten.
- **Bewertungsschleife vergessen.** Ohne "übernommen / geändert / verworfen" weiß niemand, ob es besser wird.

## 8. Aufwand und Preis

8 bis 12 Tage. KI-Pilot-Projekt, €4.000 bis €5.500. Betrieb und Ausweitung in der Begleitung.

## 9. Folge-Use-Cases

- Wissensdatenbank intern (gleicher Index, andere Oberfläche)
- Ticket-Klassifikation davor
- Kosten- und Qualitätsmonitoring
