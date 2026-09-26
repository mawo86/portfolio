# Lösungsweg: Eingangsrechnungen erkennen, prüfen, vorerfassen

**Website:** `/loesungen/rechnungseingang-vorerfassung` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Eingangsrechnungen werden manuell erfasst. Wir bauen Auslesen, Abgleich mit Bestellung und Wareneingang, Buchungsvorschlag in der Vorerfassung.

**Nicht Teil davon:** Automatisches Buchen ohne Freigabe, Zahlungslauf, E-Rechnungs-Pflichtformate (XRechnung, ZUGFeRD werden strukturiert gelesen, aber nicht erzeugt), Rechnungen ohne Bestellbezug in Stufe eins (kommen in Stufe zwei mit Kontierungsvorschlag).

## 2. Voraussetzungen beim Kunden

- Rechnungseingang zentral: Postfach (rechnung@) oder Scan-Ordner
- ERP: SAP (MIRO/Vorerfassung, Bestellungen ME23N, Wareneingang), DATEV (Unternehmen online, Belegimport) oder anderes mit Import
- Lieferantenstamm mit Bankdaten, USt-ID, Zahlungsbedingungen
- 50 alte Rechnungen mit ihrer korrekten Buchung (Testset), darunter Sonderfälle: Teilrechnung, Gutschrift, Abweichung
- Buchhalterin als Bewerterin, vier Wochen
- Compliance: Vier-Augen-Prinzip bleibt (Vorschlag ist nicht Freigabe), GoBD (Original unverändert archivieren, Verarbeitung protokollieren), Betrugsprüfung (geänderte Bankdaten immer markieren)

## 3. Werkzeugentscheidung

n8n plus Claude Sonnet mit Bild- und PDF-Eingabe (kein separater OCR-Dienst nötig, bei sehr schlechten Scans Vorverarbeitung). Bei XRechnung/ZUGFeRD: XML direkt parsen, kein Modell nötig. ERP: SAP über OData (API_SUPPLIERINVOICE_PROCESS_SRV für Vorerfassung, OData V4 Purchase Order api_purchaseorder_2 für Bestellung; der V2-Dienst API_PURCHASEORDER_PROCESS_SRV ist seit 2308 abgekündigt) oder Batch-Input-Vorlage, DATEV über Belegimport-Format.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Prozess und Regeln (Toleranzen für Abweichungen, wer freigibt), Testset 50 Rechnungen | 0,5 Tag |
| 2 | Eingang: Postfach-Trigger, Anhänge extrahieren, Duplikaterkennung (Hash und Rechnungsnummer) | 1 Tag |
| 3 | Extraktion: Lieferant, Rechnungsnummer, Datum, Positionen, Netto/Steuer/Brutto, Bestellnummer, Bankdaten, Zahlungsbedingung als JSON. XRechnung direkt aus XML | 1,5 Tage |
| 4 | Lieferantenzuordnung gegen Stamm (USt-ID, IBAN, Name), Bankdatenabweichung als Warnung | 1 Tag |
| 5 | Abgleich: Bestellung und Wareneingang ziehen, Positionen und Beträge mit Toleranzen vergleichen, Abweichungen klassifizieren (Preis, Menge, fehlender Wareneingang) | 2 Tage |
| 6 | Vorerfassung: Beleg im ERP anlegen (Status "vorerfasst", nicht gebucht), Original archivieren, Prüfhinweise als Notiz | 1,5 Tage |
| 7 | Prüfansicht für Buchhaltung: tägliche Liste mit Ampel (grün passt, gelb Abweichung, rot Prüfung), Klick öffnet Beleg | 1 Tag |
| 8 | Parallelbetrieb zwei Wochen, Toleranzen nachjustieren | 1 Tag verteilt |
| 9 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 8 bis 12 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **ERP-Mandant:** test schreibt in Q-Mandant mit kopierten Bestellungen, prod in P. Der Mandant kommt aus der Umgebungsvariable, der Workflow kennt keine Mandantennummer.
- **Regressionstest:** 50 Rechnungen, Felder Brutto, Rechnungsnummer, Lieferant müssen 98 Prozent stimmen (hier ist die Messlatte höher als bei Klassifikationen), Positionen 90 Prozent.
- **Betrugsschutz technisch:** Bankdaten aus der Rechnung werden nie in den Stamm geschrieben. Abweichung vom Stamm erzeugt rote Ampel und Nachricht an zwei Personen.
- **GoBD:** Original-PDF unverändert im Archiv (ERP-Anhang oder DMS), Verarbeitungsprotokoll mit Zeitstempel im Entscheidungsprotokoll, Löschung nur nach Aufbewahrungsfrist.
- **Alarm:** Duplikatrate über 10 Prozent, Anteil rote Ampel über 30 Prozent, keine Rechnung seit 24 Stunden werktags.

## 6. Abnahme

- Kopfdaten 98 Prozent, Positionen 90 Prozent korrekt
- 70 Prozent der Rechnungen grün (Abgleich ohne Abweichung) und in unter 10 Minuten vorerfasst
- Keine Doppelvorerfassung in der Testphase
- Buchhaltung bestätigt: Erfassungszeit pro Rechnung von Minuten auf Sekunden (Prüfen statt Tippen)
- Skonto-Auswertung: Anteil fristgerecht bearbeiteter Rechnungen steigt

## 7. Typische Fehler

- **Toleranzen zu eng.** Rundungsdifferenzen und Frachtpauschalen erzeugen sonst lauter gelbe Ampeln. Mit der Buchhaltung realistische Grenzen setzen.
- **Rechnungen ohne Bestellbezug im Pilot.** Das ist Kontierungslogik (siehe SAP FI/CO-Buchungsvorschläge), nicht Abgleich. Getrennt halten.
- **Original antasten.** Nie das PDF verändern oder nur den extrahierten Text archivieren.
- **Bankdaten automatisch aktualisieren.** Klassischer Betrugsweg. Immer manuell und mit Rückruf.

## 8. Aufwand und Preis

8 bis 12 Tage. KI-Pilot-Projekt, €4.000 bis €5.500 (mit SAP-OData eher oben).

## 9. Folge-Use-Cases

- SAP FI/CO-Buchungsvorschläge (für Rechnungen ohne Bestellung)
- Mahnwesen (die Ausgangsseite)
- Auftragsbestätigungs-Abgleich (gleiche Technik, Einkauf)

## 10. Belege und Quellen

- Ardent Partners, "State of ePayables 2025": 10,89 USD pro manueller Rechnung, Best-in-Class 2,78 USD. IOFM: 10 bis 15 USD. US-Zahlen, für Größenordnung.
- Bitkom Research 2025 (n=1.103): 45 % können E-Rechnungen empfangen, 96 % bekommen Rechnungen per E-Mail. Empfangspflicht seit 01.01.2025 (Wachstumschancengesetz, EN 16931).
- api.sap.com API_SUPPLIERINVOICE_PROCESS_SRV: Anlegen (auch vorerfasst), Lesen, Freigeben, Stornieren.
- SAP Logistik-Rechnungsprüfung: Toleranzschlüssel (OMR6), Dreiwegeabgleich, Zahlsperre, Freigabe MRBR. Die Toleranzen des Kunden übernehmen, nicht neu definieren.
- BMF-Schreiben GoBD 28.11.2019 (geändert 14.07.2025): Verfahrensdokumentation, Unveränderbarkeit, Aufbewahrung; strukturierte E-Rechnung nur als Datensatz aufbewahren.
- Zeitersparnis 5 bis 10 Std./Woche: Erfahrungswert, kein Mittelstandsbeleg gefunden.
