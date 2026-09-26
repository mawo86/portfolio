# Lösungsweg: DSGVO-Check für den KI-Einsatz

**Website:** `/loesungen/dsgvo-check-fuer-ki-einsatz` · **Paket:** KI-Readiness-Check (Bestandteil) oder halber Workshop-Tag · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Schatten-KI ist Realität, Regeln fehlen. Wir liefern Datenklassifizierung, Werkzeug-Zuordnung, Vertragsliste und Einseiter für das Team.

**Nicht Teil davon:** Rechtsberatung (ich bereite vor, Datenschutzbeauftragter oder Anwalt entscheidet), Datenschutz-Folgenabschätzung im Detail (ich identifiziere, ob eine nötig ist), Verhandlung von Anbieterverträgen, Technische Sperren (Proxy, DLP) einführen.

## 2. Voraussetzungen beim Kunden

- Ehrliche Bestandsaufnahme: Welche KI-Werkzeuge nutzt wer heute, auch privat (anonyme Umfrage, 5 Fragen, vorab)
- Datenschutzbeauftragter (intern oder extern) für eine Stunde Abstimmung
- IT für Fragen zu Verträgen (M365, bestehende AVVs) und technischen Möglichkeiten
- Geschäftsführung, die bereit ist, ein Business-Werkzeug zu bezahlen (sonst bleibt die Schatten-KI)
- Liste der Datenarten im Unternehmen (grob: Kundendaten, Mitarbeiterdaten, Finanzdaten, Konstruktionsdaten, Verträge)

## 3. Werkzeugentscheidung

Kein Werkzeug im technischen Sinn. Ergebnis sind vier Dokumente: Datenklassen-Matrix, Werkzeug-Freigabeliste, Vertragscheckliste, Einseiter. Als Vorlage im Repo (`vorlagen/dsgvo-check/`), pro Kunde angepasst. Empfohlene Werkzeugklasse: Business-Verträge mit AVV, EU-Verarbeitung, kein Training, kurze Aufbewahrung (Claude Team/Enterprise, ChatGPT Team/Enterprise, Copilot M365, Mistral Le Chat Pro als EU-Option).

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Umfrage auswerten: Welche Werkzeuge, welche Daten, wie oft | 0,25 Tag |
| 2 | Datenklassen: drei Stufen (öffentlich, intern, vertraulich/personenbezogen), Beispiele aus dem Haus pro Stufe | 0,25 Tag |
| 3 | Werkzeug-Matrix: pro Werkzeug (heute genutzt und Kandidaten) die Stufe, bis zu der es erlaubt ist, mit Begründung (Vertrag vorhanden? EU? Training? Aufbewahrung?) | 0,5 Tag |
| 4 | Vertragscheckliste: Für das Zielwerkzeug: AVV abschließen, Standardvertragsklauseln bei Nicht-EU, Training deaktivieren, Aufbewahrung minimieren, Admin-Einstellungen (SSO, Datenexport aus) | 0,25 Tag |
| 5 | Einseiter fürs Team: "Das darfst du (Stufe 1 und 2 in Werkzeug X), das nicht (Stufe 3 nie in Consumer-Tools), so machst du es richtig (Namen raus, Platzhalter)". Positiv formuliert | 0,25 Tag |
| 6 | Abstimmung mit Datenschutzbeauftragtem: eine Stunde, Einwände einarbeiten, DSFA-Bedarf für konkrete Anwendungen notieren | 0,25 Tag |
| 7 | Vorstellung im Team (30 Minuten) oder als Teil der Schulung | 0,25 Tag |

Gesamt: 2 bis 3 Tage, davon ein halber Workshop-Tag beim Kunden.

## 5. Deployment und Betrieb

Kein technischer Betrieb, aber Pflege:

- **Dokumente versioniert** im Kunden-Wiki, Änderungsdatum sichtbar. Ohne Datum glaubt in einem Jahr niemand mehr an die Gültigkeit.
- **Jährliche Überprüfung:** Anbieterverträge ändern sich, neue Werkzeuge kommen. Termin im Kalender des Datenschutzbeauftragten.
- **Verarbeitungsverzeichnis:** Jeder KI-Einsatz mit personenbezogenen Daten ist ein Eintrag. Vorlage mitliefern.
- **Technische Flankierung (Empfehlung an IT, nicht Teil des Checks):** Consumer-KI-Domains im Firmennetz blocken oder zumindest melden, sobald das Business-Werkzeug da ist. Erst Alternative, dann Sperre.

## 6. Abnahme

- Vier Dokumente liegen vor, vom Datenschutzbeauftragten gegengezeichnet
- Business-Werkzeug ist beschlossen (oder begründet abgelehnt)
- Team hat den Einseiter erhalten und die Regeln in 30 Minuten vorgestellt bekommen
- Liste der Anwendungen, die eine DSFA brauchen, ist übergeben

## 7. Typische Fehler

- **Verbot ohne Alternative.** Dann geht die Nutzung nur in den Untergrund. Erst Werkzeug, dann Regel.
- **Zu komplexe Klassifizierung.** Drei Stufen. Fünf versteht niemand im Alltag.
- **Rechtsberatung spielen.** Ich sage "so würde ich es vorbereiten", der Datenschutzbeauftragte sagt "so ist es".
- **Consumer-Tarife mit "Training aus" als sicher verkaufen.** Ohne AVV ist es kein Business-Einsatz.

## 8. Aufwand und Preis

Als Bestandteil des Readiness-Checks (€299) in Kurzform: Welche Werkzeugklasse, welche Datenarten sind kritisch. Als eigenständiger halber Workshop-Tag plus Nacharbeit: Tagessatz, 1 bis 1,5 Tage.

## 9. Folge-Use-Cases

- EU-AI-Act-Einstufung (die zweite regulatorische Frage)
- KI-Einführung im Team (Einseiter wird Schulungsmaterial)
- Hosting-Entscheidung (wenn eigene Anwendungen gebaut werden)
- Jede Automatisierung mit personenbezogenen Daten baut auf dieser Matrix auf
