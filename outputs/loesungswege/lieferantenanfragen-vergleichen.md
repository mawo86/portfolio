# Lösungsweg: Lieferantenangebote vergleichen

**Website:** `/loesungen/lieferantenanfragen-vergleichen` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Angebote kommen in unterschiedlichen Formaten, der Einkauf tippt Vergleichstabellen. Wir bauen Auslesen, Normalisieren, Gegenüberstellen mit Abweichungshinweisen.

**Nicht Teil davon:** Vergabeentscheidung, Verhandlung, Lieferantenbewertung (Qualität, Zuverlässigkeit aus Historie kommt in Stufe zwei), Anfragen erstellen und versenden, Ausschreibungsrecht (öffentliche Vergabe hat eigene Regeln, hier nicht abgedeckt).

## 2. Voraussetzungen beim Kunden

- Postfach oder Ordner, in dem Angebote landen, pro Anfrage identifizierbar (Anfragenummer im Betreff oder Ordner pro Vorgang)
- Die eigene Anfrage (Positionen, Mengen, Einheiten) strukturiert oder als Dokument
- 10 alte Vorgänge mit je 2 bis 4 Angeboten und der damaligen Vergleichstabelle
- Kriterien neben dem Preis: Lieferzeit, Zahlungsziel, Mindestmenge, Fracht, Gültigkeit, Zertifikate
- Einkäufer als Bewerter für vier Wochen
- Datenschutz unkritisch (Firmendaten), aber Vertraulichkeit: Angebote sind Geschäftsgeheimnisse, AVV und kein Training.

## 3. Werkzeugentscheidung

n8n plus Claude Sonnet mit PDF-Eingabe. Normalisierung (Einheiten, Staffeln, Währung) deterministisch nach der Extraktion. Ausgabe als Excel-Vergleich mit Formeln (Summen rechnet Excel, nicht das Modell) in SharePoint, optional Übergabe an SAP MM als Angebotsspiegel (ME49), wenn der Kunde dort arbeitet.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Kriterien, Vorgangs-Identifikation, Testvorgänge | 0,5 Tag |
| 2 | Eingang: Angebote pro Vorgang sammeln (Betreff, Ordner), Vollständigkeit erkennen (alle angefragten Lieferanten da?) | 1 Tag |
| 3 | Extraktion: Positionen, Mengen, Einheiten, Einzel- und Staffelpreise, Nebenkosten, Bedingungen, Gültigkeit als JSON | 1,5 Tage |
| 4 | Zuordnung zur Anfrage: Positionen matchen, Abweichungen erkennen (andere Menge, Ersatzartikel, fehlende Position) | 1 Tag |
| 5 | Normalisierung: gleiche Einheit, gleiche Menge, Staffel auf Anfragemenge, Fracht anteilig | 0,5 Tag |
| 6 | Vergleichstabelle: Excel mit Positionen, Lieferanten, Gesamtkosten, Markierung fehlt/abweichend/ungewöhnlich, Kommentarspalte vom Modell (kurz, faktisch) | 1 Tag |
| 7 | Parallelbetrieb drei Vorgänge, Abgleich mit manueller Tabelle | 0,5 Tag |
| 8 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 4 bis 7 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Regressionstest:** 10 Altvorgänge, Preise und Mengen müssen zu 98 Prozent stimmen (Zahlenextraktion aus PDF ist kritisch), Zuordnung 90 Prozent.
- **Zahlenprüfung:** Positionssummen aus dem Angebot werden mit extrahierten Einzelwerten nachgerechnet. Stimmt die Summe nicht, wird die Position markiert. Das fängt Extraktionsfehler.
- **Vertraulichkeit:** Angebote bleiben im Kunden-SharePoint, das Protokoll speichert keine Preise, nur Vorgang und Status.
- **Alarm:** Vorgang seit Gültigkeitsende ohne Vergleich (Angebot verfällt).

## 6. Abnahme

- Vergleichstabelle für drei Testvorgänge deckungsgleich mit manueller Tabelle (Preise, Summen)
- Zeit pro Vorgang von Stunden auf unter 20 Minuten Prüfung
- Alle Abweichungen vom Angefragten wurden erkannt (kein "übersehener Ersatzartikel")
- Einkauf nutzt die Tabelle als Verhandlungsgrundlage

## 7. Typische Fehler

- **Modell summieren lassen.** Summen rechnet Excel. Das Modell liefert Einzelwerte.
- **Einheiten unterschätzen.** Stück, Karton, Palette, kg, m. Umrechnungstabelle pro Artikelgruppe pflegen.
- **Nur den Preis vergleichen.** Fracht, Zahlungsziel, Mindestmenge ändern die Reihenfolge. Deshalb die Kriterienliste.
- **Öffentliche Vergabe.** Wenn der Kunde Vergaberecht anwenden muss, ist das ein anderes Projekt.

## 8. Aufwand und Preis

4 bis 7 Tage. KI-Pilot-Projekt, €2.500 bis €3.500.

## 9. Folge-Use-Cases

- Auftragsbestätigungs-Abgleich (nach der Bestellung)
- Rechnungseingang (nach der Lieferung)
- SAP-Stammdatenqualität (Lieferantenstamm)

## 10. Belege und Quellen

- SAP-Dokumentation "Angebote vergleichen" (ME49 Preisspiegel), ME47 Angebot pflegen.
- SAP Cloud SDK Doku: API_SUPPLIERQUOTATION für Lieferantenangebote mit Anfragebezug.
- Zeitersparnis: kein Beleg. Messgröße: Zeit von letztem Angebotseingang bis fertiger Vergleichstabelle.
