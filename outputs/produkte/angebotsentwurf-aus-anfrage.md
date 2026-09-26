# Produktkarte: Belegpilot Angebot

**Use-Case:** `/loesungen/angebotsentwurf-aus-anfrage` · **Anleitung:** `outputs/loesungswege/angebotsentwurf-aus-anfrage.md` · **Familie:** A · Belegpilot (Dokument → ERP)
**Fertig-Grad:** ●●●○○ (3/5). Kern (Extraktion, Prüf-Karte, Word-Entwurf) ist kundenunabhängig und einmal baubar. Die Zuordnung auf Artikelnummern ist immer kundenspezifisch, deshalb kein Grad 5.

## Versprechen (ein Satz für die Website oder das Angebot)

Aus der Kundenanfrage im Postfach wird binnen 15 Minuten ein Angebotsentwurf im ERP oder in eurer Word-Vorlage. Ein Mensch prüft und sendet.

## Lieferform

n8n-Blueprint-Paket + Anbindungsservice + Betriebsabo

## Was in der Box ist

- Workflow-Blueprint (n8n JSON): Postfach-Trigger, PDF/Bild-Extraktion, Zuordnung, Preisabruf, Entwurf, Prüf-Karte
- Extraktions-Schema (JSON) mit Sicherheitswert pro Feld, Prompt-Set mit Kundenton-Slot
- Zuordnungslogik in drei Stufen (Kundenartikelnummer, Bestellhistorie, Textähnlichkeit) als konfigurierbare Tabelle
- Connector-Profile: SAP SD (OData, Konditionen), CSV-Export-Fallback, Word-Vorlage (DOCX-Template)
- Testharness mit 30 Beispielfällen-Vorlage, Regressions-Skript, Bewertungsbogen "passt / geändert / verworfen"
- Runbook, Betriebsstandard, Schulung Innendienst (60 Min.)

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| SAP S/4HANA oder ECC (OData bzw. RFC, Lesen Stamm/Konditionen, Anlage Angebot VA21 optional) | 3 bis 5 Tage |
| Anderes ERP mit CSV-Export + Word-Vorlage | 2 bis 3 Tage |
| Postfach Microsoft 365 (Graph) oder IMAP | 0,5 Tag |

## Voraussetzungen beim Kunden

- Eigene n8n-Instanz (Docker beim Kunden, n8n Cloud oder ab GA n8n in SAP Joule Studio) und eigener Anthropic- oder Bedrock-Schlüssel (BYOK)
- 20 bis 30 alte Anfragen mit Angebot als Testset
- Artikelstamm mit gepflegten Kundenartikelnummern für die Pilot-Kunden

## Einregelung

2 Wochen Parallelbetrieb mit Bewertungsbogen, Schwelle 90 % Positionen richtig

## Preis

- **Einmalig:** €4.500 Setup (SAP) / €3.000 (CSV+Word)
- **Laufend:** €450/Monat Betrieb: Prompt-Pflege, Blueprint-Updates, Monitoring, Support 48h
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Workist, Turian (Enterprise, Preis auf Anfrage, meist ab fünfstellig im Jahr). Lücke: Mittelständler mit 20 bis 200 Anfragen pro Woche, die keinen Enterprise-Vertrag wollen und ihr ERP behalten.

## Risiken und Lizenz

- n8n-Lizenz: Kunde betreibt n8n selbst, ich liefere Blueprint und Service (erlaubt). Kein White-Label.
- Rabattlogik bleibt manuell, sonst politisches Risiko beim Kunden

## Build-Aufwand für mich

8 Tage für den ersten Blueprint (teilt Extraktions-Baustein und Prüf-Karte mit allen A-Produkten), danach 2 Tage pro ERP-Profil

## Status

Anleitung fertig (outputs/loesungswege). Blueprint nicht gebaut. Empfohlener zweiter Build nach Belegpilot Auftrag.
