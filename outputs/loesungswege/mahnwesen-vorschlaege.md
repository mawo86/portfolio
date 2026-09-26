# Lösungsweg: Mahnwesen mit Fingerspitzengefühl

**Website:** `/loesungen/mahnwesen-vorschlaege` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Offene Posten werden spät und pauschal gemahnt. Wir bauen tägliche Bewertung, Stufenvorschlag und individuellen Textentwurf. Freigabe bleibt beim Menschen.

**Nicht Teil davon:** Automatischer Versand, Inkasso-Übergabe (wird vorgeschlagen, nicht ausgeführt), Ratenvereinbarungen, Zinsberechnung (kommt aus dem ERP-Mahnlauf, falls vorhanden).

## 2. Voraussetzungen beim Kunden

- Offene-Posten-Liste täglich: SAP FBL5N-Export oder OData, DATEV OPOS-Export, Lexware-Export
- Kundenstamm mit Klassifizierung (A/B/C oder Umsatz) und Ansprechpartner Buchhaltung
- Zahlungshistorie der letzten 12 Monate (wer zahlt regelmäßig spät, aber zuverlässig)
- Eure Regeln: drei Kundengruppen, drei Stufen, Wartezeiten, Ausschlüsse (Streitfälle, Großkunden mit Sonderregel)
- Fünf Beispieltexte pro Stufe im Ton des Hauses
- Eine Person, die die tägliche Liste 15 Minuten bearbeitet
- Datenschutz: Zahlungsdaten von Firmenkunden sind unkritisch, bei Privatkunden AVV und Hinweis. Kein Scoring von Privatpersonen (SCHUFA-artige Bewertung ist tabu).

## 3. Werkzeugentscheidung

n8n mit täglichem Zeitplan-Trigger, Claude Sonnet für Fallbewertung und Textentwurf. Ausgabe: Excel-Liste in SharePoint plus Outlook-Entwürfe im Postfach der Buchhaltung, oder direkt als Mahnvorschlag im ERP, wenn das dort abbildbar ist.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Regeln, Kundengruppen, Ausschlüsse, Beispieltexte, Ziele (Außenstandsdauer) | 0,5 Tag |
| 2 | Datenzugriff: OP-Liste und Zahlungshistorie täglich ziehen, Kundenstamm anreichern | 1 Tag |
| 3 | Regelwerk: Stufe aus Überfälligkeit, Kundengruppe, Historie (deterministisch, keine KI). KI nur für Tonlage und Sonderfälle | 1 Tag |
| 4 | Textentwurf: pro Fall passender Text mit Rechnungsbezug, Zahlungsfrist, Kontaktangebot, in Kundenton | 1 Tag |
| 5 | Tagesliste: Excel oder Teams-Karte mit Fall, Stufe, Entwurf, Buttons "senden / ändern / überspringen"; Senden erzeugt Outlook-Entwurf | 1 Tag |
| 6 | Rückmeldeschleife: Zahlungseingang beendet den Fall, Kundenantwort pausiert ihn | 0,5 Tag |
| 7 | Parallelbetrieb zwei Wochen, Regeln nachjustieren | 0,5 Tag |
| 8 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 5 bis 8 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Regelwerk als Datei im Repo** (`rules/mahnstufen.yaml`), nicht im Prompt. Änderungen an Wartezeiten sind Commits mit Freigabe.
- **Test:** Läuft gegen eine Kopie der OP-Liste, Versand-Node zeigt in test auf internes Postfach.
- **Regressionstest:** 40 historische Fälle mit der tatsächlich gewählten Stufe, Regelwerk muss 100 Prozent treffen (deterministisch), Textentwurf wird stichprobenartig geprüft.
- **Alarm:** Fälle in Stufe 3 über Schwelle (Liquiditätswarnung, Geschäftsführung), Job nicht gelaufen.

## 6. Abnahme

- Tagesliste liegt jeden Werktag um 8 Uhr vor
- Stufenvorschlag stimmt in 95 Prozent mit der Buchhaltung überein
- Textentwürfe werden in 80 Prozent unverändert genutzt
- Nach acht Wochen: Außenstandsdauer messbar gesunken (Baseline aus Monat vor Projektstart)

## 7. Typische Fehler

- **Stufenlogik der KI überlassen.** Überfälligkeit und Regeln sind Arithmetik. KI nur für Text.
- **Guten Kunden Standardmahnung schicken.** Deshalb die Kundengruppen. A-Kunden bekommen in Stufe 1 einen Anruf-Vorschlag, keine Mahnung.
- **Streitfälle nicht ausschließen.** Ein Kunde mit offener Reklamation darf nicht gemahnt werden. Ausschlussliste ist Pflicht.
- **Versand automatisieren, weil es "nur Erinnerungen" sind.** Nein. Ein falscher Ton kostet den Kunden.

## 8. Aufwand und Preis

5 bis 8 Tage. KI-Pilot-Projekt, €2.500 bis €3.500.

## 9. Folge-Use-Cases

- Rechnungseingang (Eingangsseite)
- Reporting-Kommentierung (Liquiditätsbericht)
- SAP FI/CO-Buchungsvorschläge

## 10. Belege und Quellen

- Creditreform "Zahlungsindikator Deutschland Winter 2025/26" (Feb 2026): Forderungslaufzeit 39,63 Tage, Zahlungsziel 32,13, Verzug 7,50, Basis 3,8 Mio. Belege. Die Zahl für das Erstgespräch.
- Coface Zahlungserfahrungsstudie 2025: 81 % mit Verzögerungen. Achtung: Coface misst per Befragung, Creditreform per Belegdaten, Verzugsdauern nicht vergleichbar.
- Zeitersparnis: kein Beleg. Messgröße: Verzugsdauer der eigenen Forderungen aus dem ERP, Baseline vor Start.
