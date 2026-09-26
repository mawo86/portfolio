# Produktkarte: Belegpilot Bestätigung

**Use-Case:** `/loesungen/auftragsbestaetigung-abgleich` · **Anleitung:** `outputs/loesungswege/auftragsbestaetigung-abgleich.md` · **Familie:** A · Belegpilot (Dokument → ERP)
**Fertig-Grad:** ●●●●○ (4/5). Kleiner, klar abgegrenzter Prozess auf SAP-Standard. Gut als Add-on, allein selten der Einstieg.

## Versprechen (ein Satz für die Website oder das Angebot)

Auftragsbestätigungen der Lieferanten werden gelesen und positionsweise mit der Bestellung verglichen. Passt es, setzt SAP den Bestätigungssatz, sonst bekommt der Einkäufer die Abweichung.

## Lieferform

n8n-Blueprint-Paket + SAP-Anbindungsservice + Betriebsabo (Add-on zu Belegpilot Auftrag oder Rechnung)

## Was in der Box ist

- Workflow-Blueprint: Postfach, Extraktion, Bestellsuche (Nummer, Fallback Lieferant+Datum), deterministischer Vergleich, Bestätigungssatz, Abweichungs-Karte mit Antwortentwurf
- SAP-Profil: OData V4 Purchase Order (api_purchaseorder_2), Supplier Confirmation, Berechtigungsprofil nur für Bestätigungssätze
- Toleranz-Konfiguration (Preis %, Termin Tage, Mengentoleranz aus Stamm)
- Testharness 30 Fälle, Schwelle 95 % Klassifikation

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| S/4HANA (OData V4) | 2 bis 3 Tage |
| ECC (RFC) | 3 bis 4 Tage |

## Voraussetzungen beim Kunden

- Bestätigungssteuerung im SAP-Customizing aktiv
- n8n-Instanz + BYOK

## Einregelung

2 Wochen Parallelbetrieb

## Preis

- **Einmalig:** €3.000 Setup als Add-on / €4.500 allein
- **Laufend:** €300/Monat Betrieb (Add-on) / €450 allein
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Kaum spezialisierte Anbieter im Mittelstand; große P2P-Suiten (Coupa, Ariba) decken es ab. Lücke: SAP-Mittelständler ohne P2P-Suite.

## Risiken und Lizenz

- Falsch-positives "passt" ist das eigentliche Risiko, deshalb im Zweifel Abweichung

## Build-Aufwand für mich

4 Tage zusätzlich zur Familie A

## Status

Anleitung fertig. Add-on, nach Belegpilot Auftrag bauen.
