# Lösungsweg: Wartungs- und Störungsberichte per Sprache

**Website:** `/loesungen/wartungsdokumentation-per-sprache` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Techniker dokumentieren nicht, weil Formulare in der Halle unpraktisch sind. Wir bauen Sprachnotiz zu strukturiertem Instandhaltungseintrag mit Rückfrage bei Lücken.

**Nicht Teil davon:** Predictive Maintenance, Sensoranbindung, Ersatzteilbestellung (wird erkannt, nicht ausgelöst), Arbeitszeiterfassung (bewusst nicht: Betriebsrat), Einführung einer Instandhaltungssoftware.

## 2. Voraussetzungen beim Kunden

- Anlagenliste mit Bezeichnungen, wie die Techniker sie nennen ("die Alte", "Linie 3 hinten"), plus offizielle Nummer
- Zielsystem: SAP PM (Meldung IW21, Auftrag), andere Instandhaltungssoftware mit API, oder als Start eine SharePoint-Liste
- Aufnahmekanal: Firmenhandy mit Teams oder Diktier-App, kein Privatgerät
- Zwei bis drei Techniker, die mitmachen und ehrlich sagen, was nervt
- Feldliste: Anlage, Fehlerbild, Ursache (vermutet/bestätigt), Maßnahme, Teile, Dauer (optional), offene Punkte
- Betriebsrat: Sprachaufnahmen von Mitarbeitenden sind mitbestimmungsrelevant. Aufnahme wird nach Transkription gelöscht, keine Auswertung pro Person, keine Zeiterfassung. Das schriftlich vereinbaren.

## 3. Werkzeugentscheidung

Spracherkennung: EU-gehosteter Whisper-Dienst oder Diktierfunktion des Geräts (dann kommt Text). Bei Hallenlärm ist Geräte-Diktat oft schlechter als serverseitige Erkennung, im Pilot beides testen. Claude Sonnet für Strukturierung und Rückfragen. n8n für Anbindung. Fachvokabular (Anlagennamen, Teilebezeichnungen) als Liste in den Prompt, sonst wird "Servoventil" zu "Servierwentil".

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff mit Technikern (nicht nur Leitung): Feldliste, Anlagennamen, Kanal, was sie nie wieder tippen wollen | 0,5 Tag |
| 2 | Aufnahmekanal: Teams-Bot oder Sprachmemo-Mail, Transkription, Löschung der Audiodatei | 1 Tag |
| 3 | Strukturierung: Prompt mit Fachvokabular, Anlagen-Matching (Spitzname zu Nummer), JSON-Ausgabe, Sicherheitsgrad pro Feld | 1,5 Tage |
| 4 | Rückfrage-Schleife: fehlt Anlage oder Maßnahme, eine kurze Frage zurück (Text oder Sprache) | 1 Tag |
| 5 | Bestätigungsansicht: Karte mit Eintrag, "Speichern" oder "Ändern", danach Anlage im Zielsystem | 1 Tag |
| 6 | Zielsystem-Anbindung: SAP PM Meldung (OData API_MAINTNOTIFICATION) oder SharePoint-Liste | 1 Tag |
| 7 | Hallentest zwei Wochen, Vokabular erweitern, Erkennungsrate messen | 1 Tag verteilt |
| 8 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 6 bis 10 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Audio-Löschung technisch:** Audiodatei wird nach Transkription im selben Workflow gelöscht, Löschung geloggt. Keine Aufbewahrung, auch nicht in test.
- **Vokabularliste im Repo** (`vocab/anlagen.csv`, `vocab/teile.csv`), Änderungen per Commit. Techniker melden neue Begriffe, Instandhaltungsleiter pflegt monatlich.
- **Regressionstest:** 30 Transkripte (Text, nicht Audio) mit erwartetem JSON, Anlage 95 Prozent, Maßnahme 85 Prozent. Audio-Erkennung separat mit 10 Aufnahmen bei Hallenlärm bewerten (Wortfehlerrate).
- **Offline-Fall:** Kein Netz in der Halle ist häufig. Sprachmemo wird lokal gespeichert und später gesendet, der Workflow verarbeitet nachträglich (Zeitstempel der Aufnahme, nicht des Eingangs).
- **Alarm:** Erkennungsrate unter Schwelle (viele "Ändern"-Klicks), keine Einträge an einem Produktionstag.

## 6. Abnahme

- Eintrag pro Störung in unter zwei Minuten Technikerzeit
- Anlage in 95 Prozent richtig zugeordnet, Eintrag in 80 Prozent ohne Änderung gespeichert
- Anzahl dokumentierter Störungen pro Woche steigt messbar (Baseline aus dem Monat vorher)
- Techniker-Feedback: "nutze ich freiwillig"
- Betriebsratsvereinbarung unterschrieben

## 7. Typische Fehler

- **Mit der Leitung planen, ohne die Techniker.** Sie sind die Nutzer. Ohne sie im Kickoff scheitert es.
- **Zeiterfassung mit reinnehmen.** Damit wird es ein Kontrollinstrument und ist tot.
- **Fachvokabular weglassen.** Erkennung ohne Anlagennamen liegt bei 60 Prozent, mit bei über 90.
- **Nur online denken.** Hallen haben Funklöcher.

## 8. Aufwand und Preis

6 bis 10 Tage. KI-Pilot-Projekt, €3.000 bis €4.500 (SAP PM oben).

## 9. Folge-Use-Cases

- Schichtübergabe (die Einträge werden Teil der Übergabe)
- Wissensdatenbank (Störungshistorie durchsuchbar: "hatten wir das schon?")
- Kosten- und Qualitätsmonitoring

## 10. Belege und Quellen

- api.sap.com API_MAINTNOTIFICATION, SAP Help "Operations for Maintenance Notifications": Meldungsanlage per OData, ETag-Pflicht bei Änderungen.
- Whisper-Fehlerraten: ca. 8 bis 12 % sauber, 16 bis 24 % industriell, Rauschunterdrückung 20 bis 40 % relativ (Forasoft 2026, VexaScribe, MLCommons). Keine peer-reviewte Industriestudie, im Piloten selbst messen (Wortfehlerrate an 10 Hallenaufnahmen).
- DIN 31051 (Dokumentation als Grundlage der Instandhaltung), mymaintenance.blog Praxisberichte.
- Zeit pro Techniker: kein Beleg.
