# Produktkarte: Schichtblatt

**Use-Case:** `/loesungen/schichtuebergabe-zusammenfassung` · **Anleitung:** `outputs/loesungswege/schichtuebergabe-zusammenfassung.md` · **Familie:** D · Sprachnotiz (Teams-Bot, Sprache → System)
**Fertig-Grad:** ●●●○○ (3/5). Format und Display sind Standard, Quellen sind jedes Mal anders. Gut als Add-on zu Sprachnotiz Instandhaltung.

## Versprechen (ein Satz für die Website oder das Angebot)

Fünfzehn Minuten vor Schichtende steht eine halbseitige Übergabe auf dem Display an der Linie: offene Störungen, Qualität, Material, Aufträge, Hinweise. Nichts Offenes fehlt.

## Lieferform

n8n-Blueprint + Display-Seite (eigener Code) + Betriebsabo

## Was in der Box ist

- Workflow-Blueprint: Zeitplan-Trigger, Quellen (Schichtbuch digital oder Foto, Störmeldungen, MES-Export), Format mit fünf Rubriken, Vollständigkeitsprüfung offener Störungen, Fallback-Anzeige bei Fehler
- Display-Seite (HTML, Auto-Refresh, nur Werksnetz), Teams-Post, Archiv pro Schicht, Ergänzen-Button für Schichtleiter
- Quellen-Profile: SharePoint-Liste, Excel, Foto-Ordner, SAP PM Meldungen, generischer MES-CSV
- Testharness 20 Schichten, 100 % offene Störungen enthalten

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Schichtbuch + Störmeldungen | 1 bis 2 Tage |
| MES-Export (optional) | 1 bis 2 Tage |
| Display im Werksnetz | 0,5 Tag |

## Voraussetzungen beim Kunden

- Schichtbuch in digitaler Form oder Foto-Disziplin
- Bildschirm an der Linie
- n8n + BYOK
- Betriebsrat: keine Personenauswertung

## Einregelung

2 Wochen über alle Schichten

## Preis

- **Einmalig:** €3.000 Setup
- **Laufend:** €250/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Digitale Schichtbücher (embedded data, Blupassion, Lorent, MES-Module). Lücke: Werke mit vorhandenem Schichtbuch, die keine neue Software einführen wollen, sondern die Zusammenfassung obendrauf.

## Risiken und Lizenz

- Alte Zusammenfassung bei Fehler nie anzeigen
- Handschrift-Erkennung schwankt

## Build-Aufwand für mich

3 Tage

## Status

Anleitung fertig. Add-on zu Sprachnotiz Instandhaltung.
