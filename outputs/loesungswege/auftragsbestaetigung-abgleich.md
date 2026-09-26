# Lösungsweg: Auftragsbestätigungen mit der Bestellung abgleichen

**Website:** `/loesungen/auftragsbestaetigung-abgleich` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Auftragsbestätigungen werden abgelegt statt geprüft. Wir bauen Auslesen, Bestellung finden, Position für Position vergleichen, Status setzen oder Abweichung melden.

**Nicht Teil davon:** Verhandlung der Abweichung (Entwurf ja, Entscheidung Mensch), Bestelländerung im ERP (Vorschlag ja, Ausführung Mensch), Lieferavis und Wareneingang, Lieferanten ohne schriftliche Bestätigung.

## 2. Voraussetzungen beim Kunden

- Postfach für Bestätigungen oder Postfach der Einkäufer mit Regel
- ERP mit Bestellzugriff: SAP MM (ME23N, OData V4 Purchase Order api_purchaseorder_2, V2-Dienst API_PURCHASEORDER_PROCESS_SRV seit 2308 abgekündigt, Bestätigungssteuerung), oder anderes ERP mit Export
- Toleranzen: Preis (z. B. 1 Prozent), Termin (z. B. 3 Tage), Menge (0 oder Über-/Unterlieferungstoleranz aus dem Stamm)
- 30 alte Bestätigungen mit Bestellung und tatsächlichem Ausgang
- Einkäufer als Bewerter
- Vertraulichkeit wie beim Angebotsvergleich, Datenschutz unkritisch

## 3. Werkzeugentscheidung

n8n plus Claude Sonnet für Extraktion. Vergleich deterministisch. SAP: Bestätigung als Bestätigungssatz (Bestätigungsart AB) in der Bestellposition anlegen, das ist der SAP-Standardweg und macht den Status im System sichtbar. Ohne SAP: Statusliste in SharePoint plus Teams-Nachricht.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Toleranzen, Zuständigkeit pro Einkäufergruppe, Testset | 0,5 Tag |
| 2 | Eingang: Postfach-Trigger, Anhänge, Duplikate | 0,5 Tag |
| 3 | Extraktion: Lieferant, Bestellnummer, Positionen (Artikel, Menge, Preis, Termin), Bestätigungsnummer als JSON | 1 Tag |
| 4 | Bestellung finden: über Bestellnummer, Fallback Lieferant + Datum + Positionen | 0,5 Tag |
| 5 | Vergleich mit Toleranzen, Klassifikation (passt / Preis / Menge / Termin / Artikel / fehlt) | 1 Tag |
| 6 | Aktion: passt → Bestätigungssatz anlegen; Abweichung → Teams-Nachricht an Einkäufer mit Unterschied und Antwortentwurf an Lieferant | 1,5 Tage |
| 7 | Parallelbetrieb zwei Wochen | 0,5 Tag |
| 8 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 5 bis 8 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **SAP-Schreibzugriff** nur auf Bestätigungssätze, nicht auf Bestellkopf oder -positionen. Service-User mit genau diesem Berechtigungsobjekt. Test im Q-Mandanten.
- **Regressionstest:** 30 Fälle, Klassifikation 95 Prozent (deterministisch nach Extraktion), Extraktion Mengen und Preise 98 Prozent.
- **Terminlogik:** Kalendertage vs. Werktage, Lieferwoche vs. Datum. Normalisierung testen.
- **Alarm:** Anteil "Bestellung nicht gefunden" über 10 Prozent (Lieferanten schreiben Bestellnummern falsch, dann Fallback prüfen).

## 6. Abnahme

- 90 Prozent der Bestätigungen ohne Abweichung automatisch als bestätigt gesetzt
- Alle Abweichungen im Testset erkannt (keine falsche "passt"-Bewertung, das ist die kritische Kennzahl)
- Einkäufer erhält Abweichung innerhalb von 30 Minuten nach Eingang
- Antwortentwürfe werden in 70 Prozent genutzt

## 7. Typische Fehler

- **Falsch-positive "passt".** Schlimmer als jede Fehlmeldung. Im Zweifel als Abweichung melden.
- **Bestätigungssteuerung im SAP nicht aktiv.** Vorher prüfen, ob die Bestellarten Bestätigungen erwarten (Customizing), sonst ist der Status unsichtbar.
- **Teillieferungen.** Eine Bestätigung über zwei Termine ist keine Abweichung, sondern zwei Bestätigungssätze.
- **Preise mit und ohne Fracht vergleichen.** Nettopreis pro Einheit, sonst nichts.

## 8. Aufwand und Preis

5 bis 8 Tage. KI-Pilot-Projekt, €3.000 bis €4.500 (SAP-Anbindung oben).

## 9. Folge-Use-Cases

- Rechnungseingang (der nächste Abgleich in der Kette: Bestellung, Bestätigung, Wareneingang, Rechnung)
- Lieferantenangebote vergleichen (davor)
- SAP-Stammdatenqualität

## 10. Belege und Quellen

- SAP Note 3502308 und SAP Help: API_PURCHASEORDER_PROCESS_SRV (V2) seit 2308 abgekündigt, Nachfolger OData V4 Purchase Order (api_purchaseorder_2). Im Angebot den V4-Dienst nennen.
- SAP Help "Supplier Confirmation" und "Bestätigungen manuell pflegen": Bestätigungssatz ist Standard, Bestätigungssteuerung im Customizing (T163L/T163G), Überwachung ME92F.
- Zeitersparnis: kein Beleg. Messgrößen: Anteil automatisch bestätigter Positionen, Vorlaufzeit bis Abweichungsmeldung.
