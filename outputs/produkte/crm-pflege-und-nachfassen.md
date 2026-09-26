# Produktkarte: Sprachnotiz Vertrieb

**Use-Case:** `/loesungen/crm-pflege-und-nachfassen` · **Anleitung:** `outputs/loesungswege/crm-pflege-und-nachfassen.md` · **Familie:** D · Sprachnotiz (Teams-Bot, Sprache → System)
**Fertig-Grad:** ●●●●○ (4/5). Fünf Felder sind bei fast jedem Kunden dieselben, CRM-APIs sind Standard. Nach Gerüst-Build ein schnelles Produkt.

## Versprechen (ein Satz für die Website oder das Angebot)

Nach dem Kundentermin eine Minute sprechen oder drei Zeilen tippen. Fünf CRM-Felder, Nachfass-Termin und Follow-up-Entwurf entstehen als Vorschlag, ein Klick übernimmt.

## Lieferform

Teams-Bot (Gerüst aus Sprachnotiz Instandhaltung) + n8n-Blueprint + Betriebsabo

## Was in der Box ist

- Bot-Gerüst, Transkription, Struktur-Prompt für fünf Felder (Status, nächster Schritt, Termin, Entscheider, Volumen), Kunden-Matching mit Rückfrage, Vorher/Nachher-Karte
- CRM-Profile: HubSpot, Pipedrive, Dynamics, SAP Sales Cloud (Schreibrechte nur auf fünf Felder)
- Kalender-Eintrag und Mail-Entwurf über Graph API
- Feldliste-Workshop (60 Min.) zur Reduktion auf fünf Felder
- Testharness 30 Notizen, 90 % auf Status und nächster Schritt

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Teams + Graph (Kalender, Mail) | 1 Tag |
| CRM-API | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- Firmenhandy/Teams, kein WhatsApp privat
- CRM mit API
- Vertriebsleitung akzeptiert: kein Kontrollinstrument

## Einregelung

2 Wochen mit 2 bis 3 Vertrieblern

## Preis

- **Einmalig:** €3.500 Setup
- **Laufend:** €300/Monat Betrieb
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Bliro (250 €/Monat für 5 Nutzer, Meeting-Fokus), Salesforce Einstein, HubSpot AI Notes. Lücke: Außendienst mit Pipedrive/Dynamics und Sprachnotiz nach dem Termin statt Meeting-Aufnahme.

## Risiken und Lizenz

- Leistungskontrolle vermeiden, sonst Nutzung null

## Build-Aufwand für mich

3 Tage nach Bot-Gerüst

## Status

Anleitung fertig. Zweites D-Produkt.
