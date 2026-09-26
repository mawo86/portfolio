# Produktkarte: Belegpilot Rechnung

**Use-Case:** `/loesungen/rechnungseingang-vorerfassung` · **Anleitung:** `outputs/loesungswege/rechnungseingang-vorerfassung.md` · **Familie:** A · Belegpilot (Dokument → ERP)
**Fertig-Grad:** ●●●○○ (3/5). Technisch weit vorne, aber der Markt ist voll (siehe Wettbewerb). Nur als Teil der Belegpilot-Familie für SAP-Kunden sinnvoll, nicht als Einzelprodukt gegen Candis.

## Versprechen (ein Satz für die Website oder das Angebot)

Eingangsrechnungen werden gelesen, mit Bestellung und Wareneingang abgeglichen und als vorerfasster Beleg mit Ampel in SAP oder als DATEV-Import bereitgestellt.

## Lieferform

n8n-Blueprint-Paket + Anbindungsservice + Betriebsabo

## Was in der Box ist

- Workflow-Blueprint: Formatweiche (XRechnung/ZUGFeRD direkt aus XML, sonst Extraktion), Lieferantenfindung, Bankdaten-Warnung, Dreiwegeabgleich mit Toleranzen, Vorerfassung, Ampel-Liste, Archivierung des Originals
- Connector-Profile: SAP (API_SUPPLIERINVOICE_PROCESS_SRV, OData V4 Purchase Order, Wareneingang), DATEV (Belegimport-Format, Unternehmen online), Scan-Ordner/Postfach
- Toleranz-Konfiguration übernimmt SAP-Toleranzschlüssel (OMR6) statt eigener Regeln
- GoBD-Bausteine: Verarbeitungsprotokoll, unverändertes Original, Vorlage Verfahrensdokumentation (10 Seiten, kundenspezifisch zu ergänzen)
- Testharness 50 Rechnungen, Regressionstest mit 98 %-Schwelle auf Kopfdaten

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| SAP MM/FI (OData, Q/P) | 4 bis 6 Tage |
| DATEV (Belegimport, Steuerberater-Abstimmung) | 2 bis 3 Tage |
| Postfach/Scan-Ordner | 0,5 Tag |

## Voraussetzungen beim Kunden

- n8n-Instanz + BYOK-Schlüssel
- Bestellungen und Wareneingänge im System (sonst nur Erfassung, kein Abgleich)
- Vier-Augen-Prinzip organisatorisch vorhanden

## Einregelung

2 Wochen Parallelbetrieb, Toleranzen nachjustieren

## Preis

- **Einmalig:** €5.500 Setup SAP / €3.500 DATEV
- **Laufend:** €500/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Candis, GetMyInvoices, Flowwer, Klippa, Finmatics, d.velop für DATEV-Welt (SaaS ab zweistelligen Euro pro Monat), SAP eigene Lösungen (Ariba, Invoice Object Recommendation). Lücke: SAP-Kunden, die Vorerfassung im SAP behalten wollen und keinen weiteren SaaS-Anbieter mit eigenem Portal möchten.

## Risiken und Lizenz

- Bei reinen DATEV-Kunden verliert man gegen SaaS-Anbieter mit Portal, Zahlungslauf und Steuerberater-Anbindung
- Betrugsschutz: Bankdaten niemals automatisch aktualisieren

## Build-Aufwand für mich

6 Tage zusätzlich zur Familie A (Formatweiche, Abgleich, GoBD-Vorlage)

## Status

Anleitung fertig. Als drittes Produkt der Familie A, nur für SAP-Kunden aktiv vermarkten.
