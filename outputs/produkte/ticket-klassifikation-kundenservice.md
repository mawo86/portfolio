# Produktkarte: Postfach-Pilot Service

**Use-Case:** `/loesungen/ticket-klassifikation-kundenservice` · **Anleitung:** `outputs/loesungswege/ticket-klassifikation-kundenservice.md` · **Familie:** B · Postfach-Pilot (Eingang sortieren und beantworten)
**Fertig-Grad:** ●●●●○ (4/5). Variante b ist ein echter Blueprint, Variante a ist Konfiguration. Beide sind nach dem ersten Kunden standardisiert.

## Versprechen (ein Satz für die Website oder das Angebot)

Jede Service-Anfrage bekommt beim Eingang Kategorie, Produkt, Priorität und Team. Unsicheres landet in einer Prüf-Warteschlange, Korrekturen machen das System besser.

## Lieferform

Zwei Varianten: (a) Regelwerk + Prüfschleife auf Zendesk/Freshdesk-Bordmitteln als Fixpreis-Einrichtung, (b) n8n-Blueprint für Shared Mailbox, Jira Service Management, SAP Service Cloud + Betriebsabo

## Was in der Box ist

- Kategorien-Workshop-Kit (halber Tag) mit Vorlage zur Bereinigung auf maximal 15 Kategorien
- Variante a: Konfigurationsleitfaden Zendesk Intelligent Triage / Freddy Auto Triage, Prüf-Queue-Regeln, Korrektur-Export als Testset
- Variante b: Workflow-Blueprint mit Klassifikations-Prompt (Haiku), Kundenkontext (A/B/C), Routing-Tabelle, Prüf-Queue, monatlicher Drift-Test gegen 50 neue Tickets
- Betriebsrats-Vorlage (Arbeitsverteilung, keine Personenauswertung)
- Testharness 150 Tickets, Schwellen 90/85 %

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Zendesk/Freshdesk (Variante a) | 1 bis 2 Tage |
| Shared Mailbox über Graph API (b) | 1 Tag |
| Jira SM / SAP Service Cloud API (b) | 2 bis 3 Tage |

## Voraussetzungen beim Kunden

- Variante a: Zendesk Advanced AI (ca. 50 USD/Agent/Monat) oder Freddy Copilot (ca. 29 USD/Agent/Monat) lizenziert, mind. 2.000 historische Tickets
- Variante b: n8n + BYOK, 150 gelabelte Tickets

## Einregelung

1 Woche Parallelbetrieb

## Preis

- **Einmalig:** Variante a: €2.400 Fixpreis (2 Tage) · Variante b: €3.500 Setup
- **Laufend:** Variante b: €300/Monat Betrieb; Variante a: optional €150/Monat Drift-Check
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Zendesk Advanced AI, Freshdesk Freddy, eesel, Parloa (Enterprise). Lücke: Kunden mit Shared Mailbox oder Jira ohne KI-Add-on, und Kunden, die die Regeln und die Betriebsratsfrage geklärt haben wollen.

## Risiken und Lizenz

- Bei Zendesk/Freshdesk-Kunden nicht gegen das Add-on bauen, sondern es einrichten
- Protokollierung pro Mitarbeiter vermeiden

## Build-Aufwand für mich

5 Tage für Blueprint b, 1 Tag für Leitfaden a. Teilt Klassifikations-Baustein mit Lead-Pilot.

## Status

Anleitung fertig. Empfohlener zweiter Build nach Belegpilot Auftrag, weil ERP-unabhängig.
