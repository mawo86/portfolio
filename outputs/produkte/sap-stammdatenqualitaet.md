# Produktkarte: Stammdaten-Radar

**Use-Case:** `/loesungen/sap-stammdatenqualitaet` · **Anleitung:** `outputs/loesungswege/sap-stammdatenqualitaet.md` · **Familie:** F · Stammdaten-Radar
**Fertig-Grad:** ●●●●○ (4/5). Die Analyse ist ein echtes Werkzeug: Export rein, Bericht raus, bei jedem Kunden gleich. Der Wächter ist Standard-Integration.

## Versprechen (ein Satz für die Website oder das Angebot)

Eine Analyse zeigt Dubletten, Lücken und Widersprüche in Kunden-, Lieferanten- oder Materialstamm mit Korrekturvorschlag pro Verantwortlichem. Danach verhindert eine Anlageprüfung, dass neue entstehen.

## Lieferform

Analyse-Werkzeug (Python, Docker, eigener Code) als Fixpreis-Report + optionaler Anlage-Wächter (n8n-Blueprint) + Monatsabo

## Was in der Box ist

- Analyse-Container: Normalisierung, exakte und unscharfe Dublettensuche, Pflichtfeld-Füllgrade, Modell-Prüfung der Grenzfälle mit Begründung, Excel-Freigabelisten pro Verantwortlichem, Qualitätsbericht (PDF)
- Regeln als YAML (Schwellen, Feldgewichte) pro Stammdatenart, Vorlagen für Kunden, Lieferanten, Material
- Anlage-Wächter: OData-Poll oder Change-Pointer, Prüfung gegen Bestand, Benachrichtigung mit vorhandenem Satz; bei S/4HANA Konfiguration der eingebauten Dublettenprüfung zuerst
- Monatsbericht-Vorlage (Füllgrade, neue Dubletten, Korrekturen), Verantwortlichen-Rollenbeschreibung

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Stammdaten-Export (CSV/Excel) für Analyse | 0,5 Tag |
| S/4HANA Dublettenprüfung aktivieren + Wächter | 2 bis 3 Tage |
| ECC Wächter (Poll) | 3 Tage |

## Voraussetzungen beim Kunden

- Export der Stammdaten
- Verantwortliche pro Stammdatenart
- Für Wächter: n8n + BYOK, Lesezugriff Stamm

## Einregelung

Analyse sofort, Wächter 1 Monat Beobachtung

## Preis

- **Einmalig:** €2.900 Fixpreis Analyse + Freigabelisten (eine Stammdatenart) · €3.500 Setup Wächter
- **Laufend:** €350/Monat Wächter + Monatsbericht
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

SAP MDG (Enterprise), Uniserv, Omikron, ISO-Gruppe (Dublettencheck-Spezialisten), Camelot-Beratung. Lücke: Mittelständler, die einen Bericht mit Freigabelisten wollen, keine MDG-Einführung.

## Risiken und Lizenz

- Zusammenführen bleibt Menschensache
- Ohne Verantwortliche verpufft es

## Build-Aufwand für mich

6 Tage (Analyse-Container), 3 Tage Wächter

## Status

Anleitung fertig. Die Analyse als Fixpreis-Report ist das schnellste "fertige" Produkt der Liste, weil sie ohne Integration verkaufbar ist.
