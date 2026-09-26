# Lösungsweg: Monatsreport mit Kommentar statt nackter Zahlen

**Website:** `/loesungen/reporting-kommentierung` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Zahlen liegen früh vor, der Kommentar spät. Wir bauen einen Workflow, der aus den Monatszahlen einen Kommentarentwurf erzeugt: Abweichungen, plausible Ursachen aus den Daten, offene Fragen.

**Nicht Teil davon:** Aufbau des Reportings selbst (Power BI, Datenmodell), Prognosen, Zahlen erfinden oder interpretieren, wo Daten fehlen. Der Kommentar stellt Fragen, wenn er keine Ursache belegen kann.

## 2. Voraussetzungen beim Kunden

- Monatszahlen strukturiert: Excel-Export aus SAP CO (Kostenstellenbericht, Ergebnisrechnung) oder Power-BI-Dataset mit API, oder DATEV BWA
- Vergleichswerte: Vormonat, Vorjahr, Plan
- Drei alte Reports mit Kommentar als Vorbild
- Definition, welche 8 bis 12 Kennzahlen kommentiert werden
- Controller als Bewerter, drei Monatsabschlüsse lang
- Datenschutz: Finanzzahlen sind vertraulich, nicht personenbezogen. AVV, EU-Endpunkt, kein Training. Geschäftsführung muss dem Einsatz für vertrauliche Zahlen zustimmen (oft die eigentliche Hürde).

## 3. Werkzeugentscheidung

n8n mit Monats-Trigger oder manuellem Start, Claude Opus für den Kommentar (hier zählt Qualität des Textes, Volumen ist gering: einmal im Monat). Zahlen werden vor dem Modell deterministisch aufbereitet (Abweichungen in Prozent und absolut, Rangfolge), das Modell schreibt nur Text zu den vorberechneten Fakten. Ausgabe als Word-Dokument über Vorlage oder direkt in die Report-Mail.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Kennzahlen, Vorbild-Reports, Format des Kommentars (Länge, Gliederung, Tonfall), Erfolgskriterium | 0,5 Tag |
| 2 | Datenzugriff: Export oder API, Normalisierung in eine Tabelle (Kennzahl, Ist, Vormonat, Vorjahr, Plan) | 1 Tag |
| 3 | Aufbereitung: Abweichungen berechnen, Top-3 nach Relevanz (absolut und relativ), Ausreißer markieren. Alles ohne KI | 1 Tag |
| 4 | Kommentar-Prompt: nur aus den gelieferten Zahlen argumentieren, jede Ursachenvermutung als solche kennzeichnen, offene Fragen ans Controlling formulieren, Länge eine Seite | 1,5 Tage |
| 5 | Ausgabe: Word-Vorlage befüllen (Kommentar plus Tabelle), Entwurf an Controller | 1 Tag |
| 6 | Erster Live-Abschluss parallel, Controller bewertet Satz für Satz (stimmt / zu spekulativ / fehlt) | 0,5 Tag |
| 7 | Zweiter Abschluss mit angepasstem Prompt, Deployment, Runbook | 1 Tag |

Gesamt: 5 bis 8 Tage, verteilt über zwei Monatsabschlüsse.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Niedrige Frequenz, hoher Anspruch:** Der Regressionstest besteht aus den drei alten Monaten, für die es Referenzkommentare gibt. Modell-als-Richter prüft: keine Zahl im Text, die nicht in der Tabelle steht (harte Regel, null Toleranz), Ursachen als Vermutung markiert.
- **Zahlen-Verifikation technisch:** Nachgelagerter Schritt extrahiert alle Zahlen aus dem Kommentar und prüft sie gegen die Eingabetabelle. Bei Abweichung kein Entwurf, sondern Fehlermeldung.
- **Vertraulichkeit:** Zahlen nur über den API-Key des Kunden, Protokoll ohne die Zahlen selbst (nur Kennzahl-Namen und Status), Entwürfe nicht im Chat-Tool, sondern im geschützten Ordner.
- **Test:** Läuft mit den Zahlen eines alten Monats gegen die Word-Vorlage, prod mit dem aktuellen Monat.

## 6. Abnahme

- Kommentar liegt am dritten Werktag vor (statt am zehnten)
- Null Zahlen im Text, die nicht aus der Tabelle stammen (automatisch geprüft)
- Controller braucht unter 30 Minuten für die Endfassung
- Geschäftsführung bestätigt: Kommentar wird gelesen, Rückfragen werden weniger

## 7. Typische Fehler

- **Modell rechnen lassen.** Abweichungen werden vor dem Modell berechnet. Das Modell schreibt, es rechnet nicht.
- **Ursachen als Fakten.** "Umsatz gesunken, weil der Markt schwächelt" ist erfunden. "Umsatz um 8 Prozent gesunken, stärkster Rückgang in Region Nord; Ursache bitte prüfen" ist richtig.
- **Zu viele Kennzahlen.** Über zwölf wird der Kommentar zur Aufzählung.
- **Geschäftsführungs-Freigabe für vertrauliche Daten überspringen.** Das rächt sich, wenn es jemand später erfährt.

## 8. Aufwand und Preis

5 bis 8 Tage. KI-Pilot-Projekt, €2.500 bis €4.000. Wegen der Monatsfrequenz läuft der Pilot über zwei Abschlüsse, also acht bis zehn Wochen statt vier. Das vorher sagen.

## 9. Folge-Use-Cases

- Entscheidungsvorlagen (gleiches Prinzip: Fakten rein, Text raus)
- Mahnwesen (Liquiditätsteil)
- Schichtübergabe (Tagesrhythmus statt Monat, gleiche Struktur)

## 10. Belege und Quellen

- ICV Blog "Generative KI im Controlling" und Controller Institut "KI-Use-Cases im Controlling": Kommentierung als Standard-Pilotfall.
- Controlling & Management Review 2025, "Generative KI im Controlling praktisch umsetzen" (Springer): Einbindung von LLMs in Reporting-Prozesse.
- ICV-Studie Reporting/Forecasting (Eisl, Hofer, Perkhofer): Ergebnisse nachschlagen, sobald veröffentlicht.
- Zeitersparnis: kein Beleg. Messgrößen: Tag der Kommentarfreigabe, Controller-Zeit für Endfassung.
