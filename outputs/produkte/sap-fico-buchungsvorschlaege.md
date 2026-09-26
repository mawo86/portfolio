# Produktkarte: Finanzpilot Kontierung

**Use-Case:** `/loesungen/sap-fico-buchungsvorschlaege` · **Anleitung:** `outputs/loesungswege/sap-fico-buchungsvorschlaege.md` · **Familie:** E · Finanzpilot (Zahlen, Belege, Forderungen)
**Fertig-Grad:** ●●●○○ (3/5). Historie-Index und Prompt sind Standard, die Historie selbst ist pro Kunde schmutzig. Für S/4HANA Cloud gibt es den SAP-Standard, dort ist das Produkt Aktivierung plus Bewertung.

## Versprechen (ein Satz für die Website oder das Angebot)

Für Belege ohne Bestellbezug liegt in der Vorerfassung ein Kontierungsvorschlag aus eurer eigenen Buchungshistorie: Sachkonto, Kostenstelle, Steuerkennzeichen, mit Begründung. Die Buchhaltung bucht.

## Lieferform

n8n-Blueprint + Historie-Index (eigenes Skript) + SAP-Anbindungsservice + Betriebsabo; für S/4HANA-Cloud-Kunden alternativ Fixpreis-Aktivierung von SAP Invoice Object Recommendation

## Was in der Box ist

- Historie-Aufbereitung (Skript: Bereinigung, Anonymisierung, Kandidatenindex nach Lieferant/Textmuster/Betragsklasse), monatliches Index-Update mit Rollback
- Vorschlags-Prompt (wählt nur aus Kandidaten), Regelwerk Steuerkennzeichen (YAML), Sicherheitswert, Begründung
- SAP-Profil Vorerfassung (API_SUPPLIERINVOICE_PROCESS_SRV) ohne Buchungsrecht, Berechtigungsvorlage
- Rückwärtstest 200 Belege (85/80/95 %), Dokumentation für den Wirtschaftsprüfer (Vorlage)

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| S/4HANA oder ECC Vorerfassung + Historie-Export | 4 bis 6 Tage |
| S/4HANA Cloud mit IOR: Aktivierung | 2 Tage |

## Voraussetzungen beim Kunden

- Buchungshistorie 2 Jahre exportierbar
- Vorerfassung im Einsatz
- n8n + BYOK
- Wirtschaftsprüfer informiert

## Einregelung

3 Wochen Parallelbetrieb, 75 % unverändert freigegeben

## Preis

- **Einmalig:** €6.500 Setup / €2.400 IOR-Aktivierung (S/4HANA Cloud)
- **Laufend:** €500/Monat Betrieb inkl. Index-Update
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

SAP Invoice Object Recommendation (S/4HANA Cloud), Candis/Finmatics mit Kontierungsvorschlag (DATEV-Welt). Lücke: ECC- und On-Premise-Kunden ohne Zugang zu SAPs ML.

## Risiken und Lizenz

- Alte Fehlbuchungen werden Vorschläge, Bereinigung ist Pflicht
- Steuer regelbasiert, nie per Modell

## Build-Aufwand für mich

7 Tage (Skript + Blueprint), teilt Prüf-Karte mit Familie A

## Status

Anleitung fertig. Nach Belegpilot Rechnung bauen, gemeinsame Kunden.
