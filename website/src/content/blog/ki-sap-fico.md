---
title: "KI für SAP FI/CO: Konkrete Anwendungsfälle im Controlling"
description: "Wie KI das SAP-Controlling konkret verändert — von automatisierten Abschlüssen über intelligente Abweichungsanalysen bis zu natürlichsprachigen Datenabfragen."
date: 2026-06-16
tags: ["SAP", "KI", "Controlling", "FI/CO", "Enterprise"]
draft: true
category: "SAP & Enterprise"
---

SAP FI/CO ist das Herzstück des Finanzcontrollings in tausenden deutschen Unternehmen. Und gleichzeitig ein System, das täglich Stunden an manueller Arbeit produziert.

Ich arbeite seit Jahren mit SAP-Finance-Strukturen. Was mich in den letzten Monaten beschäftigt: Die Kombination aus KI und SAP FI/CO ist näher als die meisten Controlling-Abteilungen denken.

<figure>
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Controlling-Dashboard mit Finanzkennzahlen und Grafiken" />
  <figcaption>SAP-Daten sind vorhanden. Die Frage ist, wer sie schneller in Erkenntnisse verwandelt. (Foto: Unsplash)</figcaption>
</figure>

## Der Monatsabschluss: Wo die meiste Zeit verloren geht

Jeder Controller kennt das: Die ersten Tage nach Monatsende gehören dem Abschluss. Daten aus verschiedenen Quellen zusammenziehen, Abstimmungsarbeiten, Berichte aufbereiten, Abweichungen kommentieren.

Ein mittelgroßes Unternehmen verbringt 3-5 Arbeitstage pro Monat für diesen Prozess. Bei zwei bis drei Controllern sind das 60-100 Arbeitsstunden monatlich.

Wo KI eingreifen kann:

**Datenaggregation:** Ein automatisierter Prozess exportiert täglich Rohdaten aus SAP (via RFC oder OData), bereitet sie auf und stellt sie in einer konsistenten Struktur bereit. Nicht mehr manuell am Monatsende — sondern laufend.

**Abweichungsanalyse:** KI identifiziert automatisch signifikante Abweichungen gegenüber Vormonat, Vorjahr oder Budget. Der Controller bekommt nicht den rohen Datensatz — er bekommt eine priorisierte Liste der wichtigsten Auffälligkeiten.

**Kommentargenerierung:** Für Standard-Abweichungen generiert KI einen ersten Kommentarentwurf. "Materialkosten +12 % gegenüber Vormonat, getrieben durch gestiegene Rohstoffpreise im Bereich X." Der Controller prüft und ergänzt.

## SAP-Abfragen in natürlicher Sprache

"Zeig mir den Kostenstellenvergleich Q1 2026 vs Q1 2025 für alle Kostenstellen über 100k."

In SAP heute: Report konfigurieren, Parameter setzen, Variante speichern, Daten exportieren. Je nach Kenntnisstand: 10-30 Minuten.

Mit einem KI-gestützten Abfrage-Interface: Frage tippen, Antwort lesen. Sekunden.

Das setzt eine Anbindung voraus. Die technische Grundlage: Ein Sprachmodell mit Zugriff auf SAP-Stammdaten (Kostenstellen, Buchungskreise, Kontenplan) und die Fähigkeit, Abfragen in SAP-lesbare Formate zu übersetzen.

Das ist aufwendiger als eine Zapier-Integration — aber machbar, wenn du beide Seiten kennst. Die RFC-Schnittstelle ist SAP-Standard. Die KI-Seite ist heute für jeden zugänglich.

## Abweichungskommentare aus SAP-Berichten

Ein häufiges Szenario: Der monatliche Abschlussbericht geht an die Geschäftsführung. Er zeigt Zahlen. Er braucht Erklärungen.

Ein automatisierter Prozess kann:
1. SAP-Report exportieren
2. Signifikante Abweichungen identifizieren (Schwellenwert definieren)
3. Für jede Abweichung einen Kommentar-Entwurf generieren
4. Entwürfe dem Controller zur Überprüfung und Freigabe vorlegen

Der Controller verbringt seine Zeit mit inhaltlicher Bewertung und Ergänzung — nicht mit dem Tippen von Standard-Erklärungen.

## Forecast-Unterstützung

KI kann historische SAP-Daten analysieren und Forecasts als Ausgangspunkt generieren. Nicht als Ersatz für den Controller — als erste Schätzung, die qualitativ bewertet wird.

Besonders nützlich: KI kann Muster erkennen, die Menschen übersehen. Saisonalitäten, Kostenentwicklungen, Abweichungskorrelationen über mehrere Perioden.

> Der Wert liegt nicht im Forecast-Ergebnis. Er liegt darin, dass der Controller seine Zeit mit Bewertung und Steuerung verbringt statt mit Zahlenaufbereitung.

## Was SAP-FI/CO-KI-Projekte brauchen

**SAP-Schnittstellen-Kenntnisse:** RFC, BAPI, OData. Ohne das kommt keine KI an die Daten.

**Saubere Stammdaten:** Kostenstellenstrukturen, Kontenplan, Kostenträger. Wenn die Grundstruktur inkonsistent ist, ist jede Analyse unzuverlässig.

**Klares Berechtigungskonzept:** Wer darf welche Daten abfragen? KI-Systeme brauchen SAP-Benutzer mit definierten Rollen.

**Pilotprojekt:** Nicht das gesamte Controlling auf einmal. Ein Report, ein Prozess, ein Monat. Dann bewerten.

Den allgemeinen SAP-KI-Kontext beschreibt der Artikel [KI trifft SAP](/blog/sap-ki-integration). Den strategischen Rahmen für KI-Projekte findest du in [KI-Strategie für Unternehmen](/blog/ki-strategie-erste-schritte).
