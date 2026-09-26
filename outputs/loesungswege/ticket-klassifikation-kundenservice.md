# Lösungsweg: Service-Anfragen automatisch sortieren und priorisieren

**Website:** `/loesungen/ticket-klassifikation-kundenservice` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Service-Postfach oder Ticketsystem-Eingang wird von Hand sortiert. Wir bauen Klassifikation (Kategorie, Produkt, Priorität, Kunde), Routing ins richtige Team und eine Prüf-Warteschlange für Unklares.

**Nicht Teil davon:** Antworten schreiben (eigener Use-Case), Ticketsystem-Einführung, Telefon-Eingang, SLA-Reporting.

## 2. Voraussetzungen beim Kunden

- Ticketsystem mit API (Zendesk, Freshdesk, Jira SM, SAP Service Cloud, HubSpot Service) oder Shared Mailbox mit Ordnern
- Kategorienliste, wie sie heute gelebt wird (nicht die aus dem Handbuch), Prioritätsregeln (Störung vor Frage, A-Kunden zuerst)
- 100 bis 200 alte Tickets mit korrekter Kategorie und Priorität als Testset
- Teamstruktur: Welche Kategorie geht an welches Team
- Kundenliste mit Klassifizierung (A/B/C) aus dem ERP, falls Priorisierung nach Kundenwert gewünscht
- DSGVO: Tickets enthalten personenbezogene Daten. AVV, EU-Endpunkt. Keine Auswertung pro Mitarbeiter. Betriebsrat: Routing ist Arbeitsverteilung, das ist mitbestimmungsrelevant, vorab einbinden.

## 3. Werkzeugentscheidung

n8n plus Claude Haiku für die Klassifikation (schnell, günstig, reicht für Kategorien), Sonnet nur für Fälle mit niedriger Sicherheit. Ticketsystem-API über HTTP-Node. Bei reiner Shared Mailbox: Graph API, Kategorien als Outlook-Kategorien und Ordnerverschiebung.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Kategorien und Regeln festhalten, Testset von 150 Tickets labeln (der Kunde, nicht ich) | 0,5 Tag |
| 2 | Eingang: Ticketsystem-Webhook oder Postfach-Trigger | 0,5 Tag |
| 3 | Klassifikation: Prompt mit Kategorienliste, Beispielen und Ausgabe als JSON (Kategorie, Produkt, Priorität, Sicherheitsgrad, Begründung). Gegen Testset messen | 1,5 Tage |
| 4 | Kundenkontext: Absender gegen Kundenstamm, A/B/C-Klasse als Prioritätsfaktor | 0,5 Tag |
| 5 | Routing: Felder setzen, Team zuweisen, unsichere Fälle (Sicherheitsgrad unter 0,7) in Prüf-Queue | 1 Tag |
| 6 | Prüf-Queue: Ansicht für den Service-Lead, ein Klick korrigiert, Korrektur fließt als neues Beispiel ins Testset | 1 Tag |
| 7 | Parallelbetrieb eine Woche (Workflow schlägt vor, Mensch sortiert weiter), Vergleich | 0,5 Tag |
| 8 | Scharfschalten, Runbook, Übergabe | 0,5 Tag |

Gesamt: 5 bis 8 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Ticketsystem-Sandbox** für test (Zendesk und Freshdesk haben Sandboxes; bei Jira eigenes Test-Projekt).
- **Regressionstest** gegen das Testset: Kategorie 90 Prozent, Priorität 85 Prozent. Läuft bei jeder Prompt-Änderung und monatlich gegen 50 neue Tickets (Drift erkennen: neue Produkte, neue Fehlerbilder).
- **Korrekturen als Trainingsdaten:** Jede manuelle Umkategorisierung landet automatisch im Testset (Export-Job wöchentlich). So wird der Test mit dem Kunden mit.
- **Alarm:** Anteil Prüf-Queue über 25 Prozent (Prompt passt nicht mehr), kein Ticket seit 12 Stunden im Betrieb.

## 6. Abnahme

- Kategorie stimmt in 90 Prozent, Priorität in 85 Prozent der Fälle
- Kein Ticket mit Priorität "Störung" ist länger als 15 Minuten unzugewiesen (Protokoll)
- Prüf-Queue unter 15 Prozent der Tickets
- Service-Team bestätigt: morgendliches Sortieren entfällt

## 7. Typische Fehler

- **Kategorien aus dem Handbuch statt aus dem Alltag.** Die gelebten Kategorien sind andere. Mit dem Team erarbeiten, nicht aus der Doku übernehmen.
- **Zu viele Kategorien.** Über 15 wird es unscharf. Zusammenlegen, Unterkategorien in Stufe zwei.
- **Sicherheitsgrad ignorieren.** Alles automatisch zuweisen führt zu falschen Zuweisungen, die das Team verärgern. Lieber 15 Prozent in die Prüf-Queue.
- **Betriebsrat übergehen.** Arbeitsverteilung durch ein System ist mitbestimmungspflichtig. Früh und ehrlich einbinden, dann geht es schnell.

## 8. Aufwand und Preis

5 bis 8 Tage. KI-Pilot-Projekt, €2.500 bis €4.000.

## 9. Folge-Use-Cases

- Antwortentwürfe mit Wissensbasis (direkt anschließend, gleiche Tickets)
- Wissensdatenbank mit Quellenbeleg (Grundlage für gute Antworten)
- Kosten- und Qualitätsmonitoring, sobald beide laufen

## 10. Belege und Quellen

- Mittelstand-Digital Zentrum Ruhr-OWL, "KI-basiertes Ticketmanagement für IT-Dienstleister": öffentlich gefördertes Projekt mit genau diesem Mechanismus (Betreff/Beschreibung klassifizieren, Team zuweisen, Priorität).
- Zendesk Help, "Automatically classifying customer intent, sentiment, and language": Vorhersagen mit Vertrauensstufe, eigene Intents.
- Freshdesk Support, "Setting up auto-triage": ca. 2.000 historische Tickets nötig, manueller vs. automatischer Modus. Gut, um Erwartungen zur Datenmenge zu setzen.
- ArbG Hamburg, Beschluss 16.01.2024, 24 BVGa 1/24 (Zusammenfassungen Haufe, CMS, Gleiss Lutz): Browser-Nutzung nicht mitbestimmungspflichtig, Systeme mit Protokollierung auf Firmensystemen möglicherweise doch.
- Zeitersparnis: Fallberichte ohne Methodik (ki-syndikat: 4,5 Std. → unter 1 Std. bei 500 Anfragen/Tag). Im Piloten selbst messen: Zeit bis Erstzuweisung, Anteil Prüf-Queue.
