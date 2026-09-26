# Produktkarte: Betriebspaket Monitor

**Use-Case:** `/loesungen/kosten-und-qualitaetsmonitoring` · **Anleitung:** `outputs/loesungswege/kosten-und-qualitaetsmonitoring.md` · **Familie:** G · Betriebspaket (Pipeline, Monitoring, Rollback)
**Fertig-Grad:** ●●●●● (5/5). Reines Werkzeug, kundenspezifisch sind nur Kriterien und Budgets.

## Versprechen (ein Satz für die Website oder das Angebot)

Ihr seht pro Workflow Kosten pro Tag, Qualitätsquote und Trend. Budgetgrenzen pausieren statt weiterzulaufen, Routing schickt einfache Aufgaben auf günstige Modelle.

## Lieferform

Docker-Compose-Add-on (Dashboard, eigener Code) + n8n-Hilfs-Subworkflow + Betriebsabo (Add-on zum Betriebspaket)

## Was in der Box ist

- Protokoll-Subworkflow (Modell, Token, Zweck, Sicherheitswert) für alle Workflows
- Preistabelle (YAML, monatlich gepflegt), Kosten-View pro Workflow/Tag, einfaches Dashboard (Grafana oder SQL-View + Export)
- Budget-Alarme doppelt (Anbieter-Console, eigener Tagesalarm mit Pausieren)
- Qualitäts-Stichprobe: Richter-Prompt-Vorlage, Kriterienkatalog-Vorlage, Bewertungsoberfläche für 10 Fälle/Woche, Kalibrierungsvergleich
- Routing-Regel (YAML) mit Regressionstest pro Route
- Monatsbericht-Vorlage

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Bestehendes Betriebspaket | 2 bis 3 Tage |
| Anthropic/Bedrock Console Limits | 0,5 Tag |

## Voraussetzungen beim Kunden

- Betriebspaket im Einsatz
- Kriterien pro Workflow benennbar
- Budget pro Workflow festgelegt

## Einregelung

4 Wochen Kalibrierung

## Preis

- **Einmalig:** €3.000 Setup
- **Laufend:** €200/Monat Add-on (Preistabelle, Bericht)
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Langfuse, Helicone, Portkey (LLM-Observability SaaS, teils Open Source), Anthropic Console. Lücke: Mittelständler ohne Dev-Team, die eine fertige Ansicht plus monatlichen Bericht wollen; alternativ Langfuse self-hosted einbinden statt eigenes Dashboard.

## Risiken und Lizenz

- Eigenes Dashboard nicht überbauen, ggf. Langfuse einsetzen
- Preise ändern sich quartalsweise

## Build-Aufwand für mich

4 Tage (oder 2 Tage mit Langfuse-Integration statt eigenem Dashboard)

## Status

Anleitung fertig. Direkt nach dem Betriebspaket bauen.
