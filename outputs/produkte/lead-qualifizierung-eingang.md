# Produktkarte: Postfach-Pilot Lead

**Use-Case:** `/loesungen/lead-qualifizierung-eingang` · **Anleitung:** `outputs/loesungswege/lead-qualifizierung-eingang.md` · **Familie:** B · Postfach-Pilot (Eingang sortieren und beantworten)
**Fertig-Grad:** ●●●●○ (4/5). Kein ERP, Standard-CRM-APIs, fünf Kriterien als Konfiguration. Nach dem zweiten Kunden ein echtes Regalprodukt.

## Versprechen (ein Satz für die Website oder das Angebot)

Jede Anfrage aus Formular, Postfach oder Messe wird angereichert, nach fünf Kriterien bewertet, an den Richtigen geleitet und mit Erstantwort-Entwurf versehen. Zehn Minuten nach Eingang.

## Lieferform

n8n-Blueprint-Paket + Anbindungsservice + Betriebsabo

## Was in der Box ist

- Workflow-Blueprint: Eingänge (Webhook, Postfach, Scan-Ordner), Website-Anreicherung (nur öffentliche Quellen), Bewertung 1 bis 5 mit Begründung, Spam-Ordner (nie löschen), Zuständigkeitstabelle, CRM-Anlage, Erstantwort-Entwurf
- Kriterien-Workshop-Kit (90 Min.) mit Vorlage für fünf Kriterien und Zuständigkeitsmatrix
- CRM-Profile: HubSpot, Pipedrive, Dynamics, SAP Sales Cloud; Fallback SharePoint-Liste + Teams
- Testharness 50 Altfälle, Schwelle 85 % Passung ±1

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Formular-Webhook + Postfach | 0,5 Tag |
| CRM mit API | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- n8n + BYOK
- CRM oder Bereitschaft zur SharePoint-Liste
- Datenschutzhinweis im Formular angepasst

## Einregelung

1 Woche Parallelbetrieb

## Preis

- **Einmalig:** €2.800 Setup
- **Laufend:** €250/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

HubSpot/Salesforce Lead-Scoring (Enterprise-Tiers), Clay, Zapier-Bastellösungen. Lücke: Mittelstand ohne Marketing-Automation-Suite, der Speed-to-Lead will (HBR: 7x in der ersten Stunde).

## Risiken und Lizenz

- Anreicherung nur Firmenwebsite, keine Personenprofile
- Spam-Filter bewusst vorsichtig

## Build-Aufwand für mich

4 Tage, teilt Klassifikations-Baustein mit Postfach-Pilot Service

## Status

Anleitung fertig. Schnellster Weg zu einem ERP-unabhängigen Regalprodukt.
