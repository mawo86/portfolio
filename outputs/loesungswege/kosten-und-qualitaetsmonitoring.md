# Lösungsweg: KI-Kosten und Antwortqualität im Blick behalten

**Website:** `/loesungen/kosten-und-qualitaetsmonitoring` · **Paket:** Laufende KI-Begleitung · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Workflows laufen, die Rechnung steigt, die Qualität ist ungemessen. Wir bauen Kostenzuordnung pro Workflow, Budgetgrenzen, Qualitätsstichproben mit Modell-als-Richter plus Mensch, und Modell-Routing.

**Nicht Teil davon:** Aufbau der Workflows selbst, Business-Case-Rechnung (Einsparung in Euro, das liefert der Kunde aus seinen Zahlen), Anbieterwechsel als Projekt, Fine-Tuning von Modellen.

## 2. Voraussetzungen beim Kunden

- Mindestens ein Workflow im Betriebsstandard (Entscheidungsprotokoll vorhanden). Ohne Protokoll zuerst "Vom Prototyp zum Betrieb"
- Pro Workflow fünf bis zehn Qualitätskriterien in einem Satz ("Kategorie stimmt", "keine erfundene Zahl", "Ton passt", "Quelle genannt")
- Budget pro Workflow und Monat, festgelegt von Fachbereich und Geschäftsführung
- Eine Person, die wöchentlich 20 Minuten zehn Stichproben bewertet
- API-Konsole des Anbieters mit Zugang für Budget-Einstellungen

## 3. Werkzeugentscheidung

- **Kosten:** Jeder Modellaufruf loggt Modell, Input-/Output-Token, Workflow, Zweck. Preis pro Modell als Tabelle im Repo (`config/preise.yaml`, monatlich aktualisiert). Dashboard: Grafana auf Postgres oder eine gepflegte SQL-View plus Excel-Export. Budget-Alarm doppelt: im Anbieter-Dashboard (harte Grenze pro Key) und im eigenen Protokoll (Tagesbudget pro Workflow).
- **Qualität:** Täglich zufällige Stichprobe (z. B. 20 Fälle pro Workflow) durch ein zweites Modell nach den Kriterien bewerten (Richter-Prompt gibt pro Kriterium ja/nein plus Begründung). Wöchentlich zehn Fälle durch einen Menschen, Vergleich Mensch vs. Richter (Kalibrierung). Trend über Zeit.
- **Routing:** Klassifikation, Extraktion einfacher Felder und Zusammenfassungen kurzer Texte auf ein günstiges Modell (Haiku), komplexe Texte, Begründungen und Grenzfälle (niedriger Sicherheitsgrad) auf Sonnet, Opus nur für seltene, hochwertige Ausgaben (Monatskommentar). Routing-Regel im Repo, Umschaltung per Konfiguration, Regressionstest pro Route.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Bestandsaufnahme: Welche Workflows, welche Modelle, aktuelle Rechnung, Protokoll-Vollständigkeit prüfen | 0,5 Tag |
| 2 | Protokoll erweitern: Token, Modell, Zweck, Sicherheitsgrad in jedem Aufruf (Helfer-Subworkflow in n8n, den alle nutzen) | 0,5 Tag |
| 3 | Kosten-Dashboard: View pro Workflow und Tag, Preise, Trend, Top-Verursacher | 0,5 Tag |
| 4 | Budget-Alarme: Anbieter-Konsole (Key pro Kunde, Monatsgrenze) und eigener Tagesalarm; bei Überschreitung Workflow pausieren und Fachbereich informieren | 0,5 Tag |
| 5 | Qualitätskriterien mit Fachbereich formulieren, Richter-Prompt bauen, tägliche Stichprobe einrichten | 1 Tag |
| 6 | Bewertungsoberfläche für den Menschen (einfache Liste: Fall, Ausgabe, Kriterien ankreuzen), Kalibrierungsvergleich | 0,5 Tag |
| 7 | Routing: Aufrufe klassifizieren (einfach/komplex), Regel definieren, Regressionstest mit günstigem Modell, Umschaltung, Kosten vorher/nachher | 1 Tag |
| 8 | Monatsbericht-Vorlage (Kosten, Qualität, Trend, Auffälligkeiten), Übergabe | 0,5 Tag |

Gesamt: 3 bis 5 Tage, dann 0,5 Tag pro Monat.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Richter-Prompt und Kriterien versioniert.** Änderung der Kriterien setzt den Trend zurück (neuer Messabschnitt, im Dashboard markiert).
- **Kalibrierung:** Weichen Mensch und Richter bei mehr als 20 Prozent der Fälle ab, wird der Richter-Prompt nachgeschärft, nicht der Mensch überstimmt.
- **Routing-Regressionstest:** Bei jedem Modell- oder Routing-Wechsel läuft das Testset pro Route. Qualitätsverlust über 3 Prozentpunkte = Routing zurück.
- **Preis-Tabelle monatlich:** Anbieter ändern Preise und Modelle. Termin im Betriebstermin.
- **Alarme:** Tagesbudget überschritten, Qualitätsquote fällt zwei Tage in Folge unter Schwelle, Richter-Ausfall (keine Bewertung seit 48 Stunden).

## 6. Abnahme

- Jeder Euro der Anbieter-Rechnung ist einem Workflow zugeordnet (Abweichung Protokoll vs. Rechnung unter 5 Prozent)
- Budget-Alarm getestet (künstlich ausgelöst)
- Qualitätsquote pro Workflow wird täglich gemessen, Mensch-Richter-Übereinstimmung über 80 Prozent
- Routing eingeführt, Kosten pro Aufruf gesunken (Erfahrungswert 30 bis 60 Prozent) bei stabiler Qualität im Testset
- Erster Monatsbericht liegt vor

## 7. Typische Fehler

- **Nur Kosten messen.** Billig und falsch ist teurer als teuer und richtig. Qualität immer mitmessen.
- **Richter ohne menschliche Kalibrierung.** Der Richter bewertet dann konsequent falsch. Zehn Fälle pro Woche durch einen Menschen sind Pflicht.
- **Routing nach Bauchgefühl.** Testset pro Route, sonst merkt man Qualitätsverlust erst an Beschwerden.
- **Budget-Alarm ohne Aktion.** Alarm muss pausieren oder jemanden anrufen, sonst ist er Dekoration.

## 8. Aufwand und Preis

3 bis 5 Tage Aufbau, dann 0,5 Tag pro Monat. Teil der laufenden KI-Begleitung (ab €1.200/Monat).

## 9. Folge-Use-Cases

- Jeder bestehende Workflow wird günstiger und messbar
- Reporting-Kommentierung (KI-Kosten und -Nutzen im Monatsreport der Geschäftsführung)
- Vom Prototyp zum Betrieb (Voraussetzung)

## 10. Belege und Quellen

- RouteLLM (Ong et al., ICLR 2025, arxiv 2406.18665; LMSYS Blog 07/2024): 85 % Ersparnis auf MT-Bench bei 95 % Qualität, 45 % MMLU, 35 % GSM8K. Benchmark, nicht Praxis, deshalb 30 bis 60 % als eigene Schätzung.
- Zheng et al. (NeurIPS 2023, arxiv 2306.05685): über 80 % Übereinstimmung Modell-Richter mit Menschen. Begründung für wöchentliche Kalibrierung.
- Preisstand 09/2026 (Haiku 4.5 1/5, Sonnet 5 2/10, Opus 5.5 4/20 USD pro Mio. Token): vor jedem Angebot gegen platform.claude.com/pricing prüfen.
- Anthropic Console Ausgabenlimits.
