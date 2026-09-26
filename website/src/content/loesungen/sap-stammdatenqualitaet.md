---
title: "Stammdaten in SAP bereinigen und sauber halten"
problem: "Denselben Kunden gibt es dreimal, Materialtexte sind kryptisch, Adressen veraltet. Jede Auswertung beginnt mit Aufräumen, jede Automatisierung scheitert an den Daten."
description: "Dubletten, Lücken und Widersprüche in Kunden-, Lieferanten- und Materialstamm werden erkannt, Korrekturvorschläge erzeugt und neue Datensätze beim Anlegen geprüft."
bereich: "SAP-Prozesse"
zeitprobleme: ["Fehler und Nacharbeit", "Zahlen und Reporting"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["SAP MM/SD/FI Stammdaten", "Claude", "Python oder n8n", "Excel für Freigabelisten"]
aufwand: "8 bis 12 Tage, dann laufend"
einsparung: "Grundlage für alle weiteren Automatisierungen"
paket: "begleitung"
reifegrad: "Fortgeschritten"
sapNah: true
blogKategorien: ["SAP & Enterprise", "Strategie"]
prio: 70
date: 2026-09-26
---

## Wo es hakt

Schlechte Stammdaten sind der stille Grund, warum KI-Projekte im Mittelstand scheitern. Die Automatisierung ist fertig, aber sie findet den Kunden nicht, weil er unter drei Schreibweisen existiert. Bereinigung wird aufgeschoben, weil sie groß und undankbar wirkt.

## Was wir bauen

In der ersten Stufe analysiert ein Skript eure Stammdaten auf Dubletten (auch bei abweichender Schreibweise), fehlende Pflichtfelder, veraltete Adressen und widersprüchliche Angaben. Für jeden Fund entsteht ein Korrekturvorschlag mit Begründung, den die Fachabteilung in einer Liste freigibt. In der zweiten Stufe prüft der Workflow neue Datensätze beim Anlegen und warnt, bevor die nächste Dublette entsteht.

## Was das bringt

Der direkte Zeitgewinn ist schwer zu beziffern. Der indirekte ist groß: Auswertungen stimmen ohne Nacharbeit, und jede weitere Automatisierung (Auftragsprüfung, Rechnungseingang, Buchungsvorschläge) funktioniert, weil die Daten es zulassen.

## Was ihr dafür braucht

- Exporte der relevanten Stammdaten (Kunden, Lieferanten, Material)
- Verantwortliche in den Fachabteilungen, die Korrekturen freigeben dürfen
- Eine Regel, wer künftig Stammdaten anlegen darf

## Warum dieses Paket

Bereinigung ist kein Vier-Wochen-Projekt, sondern ein Prozess, der laufend gepflegt werden muss. In der Begleitung erledigen wir die Analyse zuerst und bauen dann die Prüfung beim Anlegen ein, parallel zu den Automatisierungen, die davon profitieren.
