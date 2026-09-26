# Lösungsweg: CRM-Pflege und Nachfassen ohne Nachdenken

**Website:** `/loesungen/crm-pflege-und-nachfassen` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Vertriebler dokumentieren Termine nicht, Nachfassen hängt an Erinnerung. Wir bauen Sprach- oder Kurznotiz zu strukturierten CRM-Feldern, Nachfass-Termin und Follow-up-Entwurf.

**Nicht Teil davon:** Automatischer Versand, Forecast-Berechnung, CRM-Einführung oder -Wechsel, Aufzeichnung von Kundengesprächen (nur die Notiz danach).

## 2. Voraussetzungen beim Kunden

- CRM mit API und Feld-Schema (welche Felder sind Pflicht, welche Auswahllisten)
- Zwei bis drei Vertriebler, die vier Wochen mitmachen
- Ein Eingabekanal, den sie schon nutzen: Teams-Chat, WhatsApp Business (nur mit Freigabe), Sprachmemo per Mail, Diktier-App
- Fünf gute Follow-up-Mails als Tonvorlage
- Entscheidung: Welche fünf Felder müssen wirklich gepflegt werden (Status, nächster Schritt, Termin, Entscheider, Volumen)
- DSGVO: Notizen enthalten Namen von Kundenkontakten. AVV mit KI-Anbieter, keine Gesundheits- oder Privatinfos, Hinweis an das Team. Betriebsrat: keine Auswertung individueller Aktivität durch das Tool.

## 3. Werkzeugentscheidung

n8n plus Claude Sonnet. Spracherkennung: Whisper-kompatibler EU-Dienst oder die Diktierfunktion des Handys (Text kommt dann schon als Text). Eingabekanal: Teams-Bot ist am sauberssten (Firmenkonto, kein Privatgerät), WhatsApp nur wenn der Kunde es ohnehin geschäftlich nutzt und der Datenschutz zustimmt.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Feldliste auf fünf kürzen, Kanal festlegen, Tonvorlagen sammeln | 0,5 Tag |
| 2 | Eingabekanal: Teams-Bot oder Mail-Trigger, optional Sprache zu Text | 1 Tag |
| 3 | Extraktion: Notiz zu JSON (Kunde, Status, nächster Schritt, Termin, Entscheider, Volumen, offene Punkte). Kunde aus CRM matchen, bei Mehrdeutigkeit nachfragen | 1,5 Tage |
| 4 | Rückfrage-Schleife: Fehlt ein Pflichtfeld, stellt der Bot eine kurze Frage, statt zu raten | 1 Tag |
| 5 | CRM-Update als Vorschlag: Karte mit Vorher/Nachher, Button "Übernehmen" | 1 Tag |
| 6 | Nachfass-Termin im Kalender, Follow-up-Entwurf im Postfach (nicht senden) | 1 Tag |
| 7 | Parallelbetrieb zwei Wochen, wöchentlicher Check-in, Prompt anpassen | 1 Tag verteilt |
| 8 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 6 bis 10 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **CRM-Schreibrechte** nur über den Service-User des Workflows, nur auf die fünf Felder. Kein Löschen, kein Anlegen von Firmen (nur Kontakte, wenn überhaupt).
- **Test-Umgebung:** CRM-Sandbox oder Test-Pipeline. Teams-Bot in test in einem privaten Test-Team.
- **Regressionstest:** 30 Notizen mit erwarteten Feldern, Schwelle 90 Prozent auf Status und nächster Schritt, Volumen darf abweichen.
- **Kein Auto-Save:** Der "Übernehmen"-Klick wird geloggt (wer, wann). Wenn der Klick fehlt, passiert nichts.

## 6. Abnahme

- 80 Prozent der Termine werden innerhalb von 24 Stunden dokumentiert (vorher: unter 30 Prozent, aus dem CRM messbar)
- Vorschläge werden in 85 Prozent der Fälle ohne Änderung übernommen
- Jeder dokumentierte Termin hat einen nächsten Schritt mit Datum
- Vertriebler-Feedback: "kostet mich unter zwei Minuten pro Termin"

## 7. Typische Fehler

- **Zu viele Felder.** Das ist der häufigste Grund, warum CRM-Pflege scheitert, mit oder ohne KI. Fünf Felder, nicht fünfzehn.
- **Raten statt Nachfragen.** Wenn "Volumen" fehlt, fragt der Bot. Ein geratenes Volumen im Forecast ist schlimmer als ein leeres Feld.
- **Privatgeräte ohne Regelung.** WhatsApp auf dem Privathandy ist ein Datenschutz- und Arbeitsrechtsthema. Vorher klären.
- **Führung als Kontrollinstrument.** Wenn das Tool zur Leistungskontrolle wird, nutzt es niemand mehr. Das dem Vertriebsleiter vorab sagen.

## 8. Aufwand und Preis

6 bis 10 Tage. KI-Pilot-Projekt, €3.000 bis €4.500. Danach Begleitung sinnvoll für weitere Vertriebsprozesse.

## 9. Folge-Use-Cases

- Angebotsentwurf aus der Anfrage
- Meeting-Zusammenfassungen (gleiche Technik für interne Termine)
- Lead-Qualifizierung am Eingang

## 10. Belege und Quellen

- Salesforce "State of Sales" 2024 (Pressemitteilung DE 31.07.2024): Vertrieb verbringt nur rund ein Viertel bis 30 % der Zeit mit Verkaufen. Herstellerquelle.
- B2B-Datenverfall: ~30 %/Jahr (Faustregel), Landbase 22,5 bis 70,3 %, Forrester B2B Data Health Benchmark 2024 (40 bis 60 % unvollständige Kontakte, Sekundärzitat). Keine neutrale Primärquelle, als Spanne nennen.
- Zeitersparnis: kein Beleg. Messgröße: Anteil Termine binnen 24 Std. dokumentiert, Anteil Vorschläge unverändert übernommen.
