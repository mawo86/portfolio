# Produktkarte: Finanzpilot Mahnen

**Use-Case:** `/loesungen/mahnwesen-vorschlaege` · **Anleitung:** `outputs/loesungswege/mahnwesen-vorschlaege.md` · **Familie:** E · Finanzpilot (Zahlen, Belege, Forderungen)
**Fertig-Grad:** ●●●●○ (4/5). Regelwerk und Texte sind Konfiguration, OP-Listen sind überall ähnlich. Nach dem ersten Kunden ein Regalprodukt.

## Versprechen (ein Satz für die Website oder das Angebot)

Jeden Werktag um sieben liegt eine Liste: welcher Kunde welche Stufe, mit fertigem Text in eurem Ton. Ein Klick erzeugt den Outlook-Entwurf. Nichts geht ohne euch raus.

## Lieferform

n8n-Blueprint + Regelwerk (YAML) + Anbindungsservice + Betriebsabo

## Was in der Box ist

- Workflow-Blueprint: OP-Abruf, Zahlungshistorie, deterministisches Regelwerk (Überfälligkeit × Kundengruppe × Historie), Ausschlussliste (Streitfälle), Textentwurf pro Fall, Tagesliste, Outlook-Entwurf, Fallende bei Zahlungseingang
- Regelwerk-Vorlage mit drei Kundengruppen und drei Stufen, Ton-Vorlagen
- ERP-Profile: SAP FI (Einzelposten OData/Export), DATEV OPOS-Export, Lexware-Export, generischer CSV
- Regressionstest 40 Fälle (Regelwerk 100 %), Liquiditätsalarm bei Stufe-3-Häufung

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| SAP FI (OData oder täglicher Export) | 2 bis 3 Tage |
| DATEV/Lexware Export + Outlook | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- OP-Liste täglich exportierbar
- Kundengruppen definierbar
- n8n + BYOK

## Einregelung

2 Wochen Parallelbetrieb

## Preis

- **Einmalig:** €3.000 Setup
- **Laufend:** €250/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Bilendo, collectAI, Agicap-Umfeld (AR-Automation SaaS, teils mit Zahlungsabgleich und Inkasso), sevdesk/Lexware-Mahnwesen für Kleinstunternehmen. Lücke: Mittelständler mit SAP/DATEV, die keine AR-Plattform wollen, sondern nur bessere, tägliche Vorschläge in ihrem Postfach.

## Risiken und Lizenz

- Privatkunden: kein Scoring nach Zahlverhalten
- Ausschlussliste pflegen

## Build-Aufwand für mich

4 Tage

## Status

Anleitung fertig. Schnell baubar, gute Ergänzung zu Belegpilot Rechnung.
