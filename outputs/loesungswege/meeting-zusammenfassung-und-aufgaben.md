# Lösungsweg: Besprechungen, die in Aufgaben enden

**Website:** `/loesungen/meeting-zusammenfassung-und-aufgaben` · **Paket:** KI-Readiness-Check (Einrichtung als Tagessatz) · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Protokolle kommen spät, Aufgaben verschwinden. Wir richten ein: Aufnahme oder Notizen zu Entscheidungen, Aufgaben im Aufgabentool, Kurzprotokoll. Zwei Varianten: Bordmittel (Copilot, Teams-Recap) oder eigener Workflow.

**Nicht Teil davon:** Aufzeichnung ohne Zustimmung, Bewertung von Redeanteilen oder Personen, Kundengespräche (nur interne Meetings im Pilot), Kalender-Automatisierung.

## 2. Voraussetzungen beim Kunden

- Meeting-Plattform: Teams (mit oder ohne Copilot-Lizenz), Zoom, Google Meet
- Aufgabentool, das alle nutzen: Planner, To Do, Jira, Asana, Notion. Wenn es keins gibt, ist das zuerst zu klären
- Einigung im Team über Aufnahme (Zustimmung aller Teilnehmer pro Meeting, Ansage zu Beginn) oder alternativ: ein Protokollant tippt Stichworte, das reicht als Eingabe
- Wunschformat Protokoll (halbe Seite: Entscheidungen, Aufgaben, offene Punkte)
- Betriebsrat: Aufnahmen von Mitarbeitenden sind mitbestimmungsrelevant, Löschung nach Verarbeitung, keine Personenauswertung
- Datenschutz: AVV, EU-Verarbeitung. Bei Copilot ist das im M365-Vertrag geregelt.

## 3. Werkzeugentscheidung

**Variante A (Bordmittel, bevorzugt wenn M365 E3/E5 plus Copilot vorhanden):** Teams-Transkription, Copilot-Recap, Aufgaben nach Planner. Aufwand: Einrichtung, Regeln, Schulung. Kein eigener Workflow.

**Variante B (eigener Workflow, wenn kein Copilot oder Format nicht passt):** Transkript aus Teams/Zoom per API, Claude Sonnet für Entscheidungen, Aufgaben, Protokoll; n8n legt Aufgaben im Tool an (als Vorschlag, Moderator bestätigt); Protokoll als E-Mail-Entwurf.

Im Readiness-Check wird entschieden. Faustregel: Copilot-Lizenz vorhanden → A. Sonst B, weil Copilot allein für Meetings zu teuer ist.

## 4. Umsetzung

**Variante A:**

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Regeln: welche Meetings, Ansage, Löschfrist, Protokollformat | 0,5 Tag |
| 2 | Teams-Einstellungen (Transkription, Aufbewahrung), Copilot-Prompts für das Format als Vorlage, Planner-Anbindung | 0,5 Tag |
| 3 | Schulung 90 Minuten für Moderatoren, Einseiter | 0,5 Tag |
| 4 | Nachfass nach vier Wochen | 0,5 Tag |

Gesamt: 2 Tage.

**Variante B:**

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Regeln wie oben, Aufgabentool-Zugriff | 0,5 Tag |
| 2 | Transkript-Abholung (Teams Graph API oder Zoom API) nach Meeting-Ende | 1 Tag |
| 3 | Prompt: Entscheidungen, Aufgaben (Wer, Was, Bis wann, Quelle im Transkript), offene Punkte, Protokoll halbe Seite | 1 Tag |
| 4 | Aufgaben als Vorschlag: Karte an Moderator, Bestätigung legt sie im Tool an | 1 Tag |
| 5 | Protokoll als E-Mail-Entwurf an Moderator, Transkript danach löschen | 0,5 Tag |
| 6 | Test zwei Wochen, Deployment, Runbook | 0,5 Tag |

Gesamt: 4 Tage.

## 5. Deployment und Betrieb

Variante A: Kein eigener Betrieb. Regeln versioniert im Kunden-Wiki, Lizenz-Verwaltung durch IT, quartalsweise Stichprobe der Protokolle auf Format.

Variante B: Gilt `_betriebsstandard.md`. Spezifisch: Transkript-Löschung nach Verarbeitung im Workflow, geloggt. Regressionstest mit 10 Transkripten (Aufgaben vollständig erkannt, 90 Prozent). Aufgaben nie ohne Bestätigung anlegen. Alarm bei Meeting mit Transkript ohne verarbeitete Zusammenfassung nach 60 Minuten.

## 6. Abnahme

- Aufgaben aus dem Meeting sind am selben Tag im Tool (Stichprobe fünf Meetings)
- Protokoll halbe Seite, innerhalb von 30 Minuten nach Meeting-Ende
- Moderator-Aufwand unter fünf Minuten pro Meeting
- Team-Feedback nach vier Wochen: "Diskussionen wiederholen sich weniger"

## 7. Typische Fehler

- **Aufnahme ohne Ansage und Zustimmung.** Rechtlich und kulturell ein Fehler. Immer ansagen.
- **Aufgaben automatisch anlegen.** Ohne Bestätigung landen falsche Aufgaben bei falschen Leuten, das Tool verliert Vertrauen.
- **Kein Aufgabentool.** Dann bleibt das Protokoll ein Text. Erst Tool, dann Automatisierung.
- **Copilot kaufen nur für Meetings.** Zu teuer. Nur, wenn es ohnehin kommt.

## 8. Aufwand und Preis

Variante A: 2 Tage Tagessatz. Variante B: 4 Tage, als kleiner Pilot €2.500 oder Tagessatz. Entscheidung im Readiness-Check.

## 9. Folge-Use-Cases

- Entscheidungsvorlagen (aus offenen Punkten wird eine Vorlage)
- CRM-Pflege (dieselbe Technik für Kundentermine)
- KI-Einführung im Team

## 10. Belege und Quellen

- Microsoft Work Trend Index 2025 (23.04.2025, 31.000 Befragte, 31 Länder) und WorkLab "Breaking down the infinite workday": Unterbrechung alle 2 Minuten, Meetings ohne nächste Schritte. Herstellerquelle, so benennen.
- Microsoft Tech Community: Meeting Recap und Copilot in Teams (Doku).
- Zeitersparnis: kein Beleg. Messgröße: Aufgaben am Meeting-Tag im Tool, Moderator-Zeit pro Meeting.
