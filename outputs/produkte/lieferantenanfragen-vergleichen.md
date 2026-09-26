# Produktkarte: Belegpilot Angebotsvergleich

**Use-Case:** `/loesungen/lieferantenanfragen-vergleichen` · **Anleitung:** `outputs/loesungswege/lieferantenanfragen-vergleichen.md` · **Familie:** A · Belegpilot (Dokument → ERP)
**Fertig-Grad:** ●●●●○ (4/5). Fast kundenunabhängig, weil das Ergebnis Excel ist. Kundenspezifisch ist nur die Einheiten-Tabelle.

## Versprechen (ein Satz für die Website oder das Angebot)

Lieferantenangebote zu einer Anfrage werden gelesen, auf gleiche Einheiten gebracht und als Excel-Vergleich mit Formeln und Auffälligkeiten geliefert. Optional als Angebote in SAP für den Preisspiegel.

## Lieferform

n8n-Blueprint-Paket + Anbindungsservice + Betriebsabo (Add-on)

## Was in der Box ist

- Workflow-Blueprint: Vorgangs-Sammlung (Betreff/Ordner), Extraktion, Zuordnung zur Anfrage, Normalisierung, Summenprüfung, Excel-Vorlage mit Formeln, faktische Kommentarspalte
- Umrechnungstabelle Einheiten pro Artikelgruppe (Vorlage), Kriterienkatalog (Preis, Lieferzeit, Zahlungsziel, Mindestmenge, Fracht, Gültigkeit)
- Optional SAP-Profil API_SUPPLIERQUOTATION für ME49
- Testharness 10 Vorgänge, 98 %-Schwelle auf Zahlen

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Postfach + SharePoint (Excel-Ablage) | 1 Tag |
| SAP MM Angebote (optional) | 2 Tage |

## Voraussetzungen beim Kunden

- n8n + BYOK
- Anfragen mit Nummer im Betreff oder Ordner pro Vorgang

## Einregelung

3 Vorgänge parallel, dann scharf

## Preis

- **Einmalig:** €2.500 Setup
- **Laufend:** €250/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

E-Procurement-Suiten, sonst kaum Wettbewerb für den kleinen Fall. Lücke: Einkauf mit vielen kleinen Ausschreibungen ohne Suite.

## Risiken und Lizenz

- Öffentliche Vergabe ausschließen
- Angebote sind Geschäftsgeheimnisse, Protokoll ohne Preise

## Build-Aufwand für mich

3 Tage zusätzlich zur Familie A

## Status

Anleitung fertig. Schnell baubar, gutes Einstiegsprodukt für den Einkauf.
