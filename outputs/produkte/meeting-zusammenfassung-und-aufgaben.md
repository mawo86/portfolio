# Produktkarte: Meeting-zu-Aufgaben

**Use-Case:** `/loesungen/meeting-zusammenfassung-und-aufgaben` · **Anleitung:** `outputs/loesungswege/meeting-zusammenfassung-und-aufgaben.md` · **Familie:** D · Sprachnotiz (Teams-Bot, Sprache → System)
**Fertig-Grad:** ●●●○○ (3/5). Der Markt ist mit SaaS-Notetakern gesättigt. Als Produkt nur tragfähig, wo Datenschutz (kein externer Notetaker) oder Copilot-Einrichtung gefragt sind.

## Versprechen (ein Satz für die Website oder das Angebot)

Aus dem Meeting werden Entscheidungen, Aufgaben im Tool und ein halbseitiges Protokoll. Mit Copilot als Einrichtung, ohne Copilot als eigener Workflow.

## Lieferform

Variante a: Fixpreis-Einrichtung auf Microsoft-Bordmitteln · Variante b: n8n-Blueprint (Teams/Zoom-Transkript-API) + Betriebsabo

## Was in der Box ist

- Variante a: Regelwerk (welche Meetings, Ansage, Löschfrist), Teams-Transkriptionseinstellungen, Copilot-Prompt-Vorlagen für euer Protokollformat, Planner-Anbindung, 90-Min-Schulung, Einseiter
- Variante b: Transkript-Abholung (Graph/Zoom), Prompt für Entscheidungen/Aufgaben/offene Punkte mit Transkriptverweis, Aufgaben-Vorschlagskarte, Protokoll-Entwurf, Transkript-Löschung
- Aufgabentool-Profile: Planner, To Do, Jira, Asana
- Betriebsrats-Vorlage Aufnahmen

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Variante a: Teams-Admin-Einstellungen | 0,5 Tag |
| Variante b: Graph API oder Zoom API + Aufgabentool | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- Variante a: M365 mit Copilot-Lizenzen
- Variante b: n8n + BYOK, Aufgabentool, das alle nutzen
- Zustimmung zur Aufnahme

## Einregelung

2 Wochen, 5 Meetings

## Preis

- **Einmalig:** Variante a: €2.400 Fixpreis · Variante b: €3.000 Setup
- **Laufend:** Variante b: €250/Monat
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Sally (8 bis 29 €/Nutzer), Bliro, tl;dv, MeetGeek (ca. 10 USD), Microsoft Copilot Recap. Lücke: Kunden, die keinen weiteren SaaS-Notetaker zulassen und Copilot oder eigenen Workflow wollen.

## Risiken und Lizenz

- Preislich nicht gegen 8 €/Nutzer-SaaS antreten, sondern über Datenschutz und Einrichtung

## Build-Aufwand für mich

2 Tage (a), 3 Tage (b) nach Bot-Gerüst

## Status

Anleitung fertig. Niedrige Priorität als Produkt, hoch als Einstiegsdienstleistung im Readiness-Check.
