# Produktkarte: Finanzpilot Kommentar

**Use-Case:** `/loesungen/reporting-kommentierung` · **Anleitung:** `outputs/loesungswege/reporting-kommentierung.md` · **Familie:** E · Finanzpilot (Zahlen, Belege, Forderungen)
**Fertig-Grad:** ●●●●○ (4/5). Kennzahlen-Tabelle rein, Text raus. Nach Vorlage und Verifikationsschritt fast kundenunabhängig.

## Versprechen (ein Satz für die Website oder das Angebot)

Am dritten Werktag liegt der Monatskommentar als Entwurf vor: die drei größten Abweichungen, Vermutungen als Vermutungen, Prüffragen ans Controlling. Jede Zahl im Text ist automatisch gegen die Tabelle geprüft.

## Lieferform

n8n-Blueprint + Word-Vorlage + Betriebsabo (oder als Claude-Projekt-Vorlage ohne Workflow für kleine Kunden)

## Was in der Box ist

- Aufbereitungs-Skript (Abweichungen absolut/relativ, Rangfolge, Ausreißer), Kommentar-Prompt mit Quellenzwang auf Tabelle, Zahlen-Verifikation nach der Generierung, Word-Vorlage befüllen
- Import-Profile: Excel-Export SAP CO, Power-BI-Dataset, DATEV BWA
- Vertraulichkeits-Setup: Kunden-API-Key, Protokoll ohne Zahlen
- Testset: drei alte Monate mit Referenzkommentar

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Excel-Export | 0,5 Tag |
| Power BI API | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- Monatszahlen strukturiert exportierbar
- Geschäftsführung stimmt KI für vertrauliche Zahlen zu
- n8n + BYOK

## Einregelung

2 Monatsabschlüsse (8 bis 10 Wochen)

## Preis

- **Einmalig:** €2.800 Setup
- **Laufend:** €200/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Narrative-BI-Funktionen in Power BI/Copilot, Controlling-Software mit KI-Kommentar (Lucanet, Jedox, Board). Lücke: Mittelstand mit Excel-Controlling, dem Copilot zu unscharf und Jedox zu groß ist.

## Risiken und Lizenz

- Modell darf nicht rechnen, Verifikation ist Pflicht
- Pilot dauert zwei Abschlüsse

## Build-Aufwand für mich

3 Tage

## Status

Anleitung fertig. Kleines, sauberes Produkt für Controlling-Kontakte.
