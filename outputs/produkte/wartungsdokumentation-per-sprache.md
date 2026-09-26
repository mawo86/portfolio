# Produktkarte: Sprachnotiz Instandhaltung

**Use-Case:** `/loesungen/wartungsdokumentation-per-sprache` · **Anleitung:** `outputs/loesungswege/wartungsdokumentation-per-sprache.md` · **Familie:** D · Sprachnotiz (Teams-Bot, Sprache → System)
**Fertig-Grad:** ●●●○○ (3/5). Bot-Gerüst und Struktur sind wiederverwendbar (für alle D-Produkte). Vokabular und Zielsystem sind pro Kunde, Hallenlärm ist pro Halle.

## Versprechen (ein Satz für die Website oder das Angebot)

Der Techniker spricht eine Minute ins Firmenhandy, das System legt eine vollständige Störungsmeldung in SAP PM oder eurer Instandhaltungssoftware an. Nach Bestätigung, ohne Zeiterfassung.

## Lieferform

Teams-Bot (Single-Tenant, Custom-App-Paket) oder Sprachmemo-per-Mail + n8n-Blueprint + Betriebsabo

## Was in der Box ist

- Bot-Gerüst (Azure Bot, Single-Tenant, ZIP-Paket für den Kunden-Tenant) oder Mail-Eingang für Sprachmemos
- Transkription (EU-Whisper-Dienst) mit sofortiger Audio-Löschung, Vokabular-Injektion (Anlagen-Spitznamen, Teile)
- Struktur-Prompt (Anlage, Fehlerbild, Ursache, Maßnahme, Teile, offene Punkte), Rückfrage-Schleife, Bestätigungskarte
- Ziel-Profile: SAP PM (API_MAINTNOTIFICATION), SharePoint-Liste, generische REST-Vorlage für CMMS
- Offline-Fall (Memo lokal, später verarbeiten), Betriebsrats-Vorlage (Löschung, keine Personenauswertung)
- Testharness 30 Transkripte + 10 Hallenaufnahmen (Wortfehlerrate)

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Teams-Tenant (Custom App Upload erlaubt) + Azure Bot im eigenen Tenant | 1 bis 2 Tage |
| SAP PM OData | 2 Tage |
| SharePoint-Liste | 0,5 Tag |
| CMMS mit REST-API | 2 bis 3 Tage |

## Voraussetzungen beim Kunden

- Firmenhandys mit Teams oder Mail
- Anlagenliste mit Spitznamen
- Betriebsratsvereinbarung zu Sprachaufnahmen
- n8n + BYOK + EU-Transkriptionsdienst

## Einregelung

2 Wochen Hallentest mit 2 bis 3 Technikern, Vokabular erweitern

## Preis

- **Einmalig:** €4.500 Setup (SharePoint) / €6.000 (SAP PM)
- **Laufend:** €400/Monat Betrieb inkl. Vokabularpflege
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

remberg, osapiens, Makula, AX Smartenance (CMMS mit App, Preise auf Anfrage). Lücke: Kunden mit SAP PM oder Alt-CMMS, die keine neue Suite wollen, sondern nur die Eingabe erleichtern.

## Risiken und Lizenz

- Fehlerraten im Lärm (16 bis 24 % berichtet), deshalb Vokabular und Messung
- Zeiterfassung strikt draußen lassen

## Build-Aufwand für mich

8 Tage inkl. Bot-Gerüst (wird von CRM-, Meeting- und Schicht-Produkt mitgenutzt)

## Status

Anleitung fertig. Erstes D-Produkt bauen, weil es das Gerüst für drei weitere liefert.
