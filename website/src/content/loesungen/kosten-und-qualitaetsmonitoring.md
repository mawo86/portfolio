---
title: "KI-Kosten und Antwortqualität im Blick behalten"
problem: "Die KI-Rechnung war im ersten Monat 40 Euro, im dritten 900. Niemand weiß, welcher Workflow das war. Und ob die Antworten noch so gut sind wie im Pilot, prüft auch keiner."
description: "Ein Monitoring, das pro Workflow Kosten, Fehlerquote und Antwortqualität zeigt, Budgetgrenzen durchsetzt und Verschlechterungen meldet, bevor sie Kunden erreichen."
bereich: "Technik & Betrieb"
zeitprobleme: ["Zahlen und Reporting", "Fehler und Nacharbeit"]
branchen: ["Dienstleistung", "Fertigung", "Handel", "Software"]
werkzeuge: ["Logging pro Aufruf", "Kosten-Dashboard", "Stichproben-Bewertung", "Budget-Alarme", "Modell-Routing"]
aufwand: "3 bis 5 Tage, dann laufend"
einsparung: "30 bis 60 % geringere Modellkosten, Erfahrungswert (Benchmarks: bis 85 %)"
paket: "begleitung"
reifegrad: "Betrieb"
sapNah: false
blogKategorien: ["Tools & Setup", "Automatisierung", "Strategie"]
prio: 61
date: 2026-09-26
---

## Wo es hakt

KI-Kosten skalieren mit der Nutzung, und Nutzung ist gut. Aber ohne Zuordnung pro Workflow ist die Rechnung eine Blackbox, und ohne Qualitätsmessung merkt ihr eine Verschlechterung erst an Beschwerden. Beides sind Betriebsaufgaben, die im Pilot niemand einplant.

## Was wir bauen

Jeder Aufruf eines Sprachmodells läuft über einen kleinen gemeinsamen Baustein, der Workflow, Zweck, Modell, Eingabe- und Ausgabe-Token und Sicherheitswert protokolliert. Eine Preistabelle im Repo (monatlich aktualisiert, weil sich Preise und Modelle ändern) macht daraus Euro pro Workflow und Tag, sichtbar in einer einfachen Ansicht. Budgetgrenzen gibt es doppelt: hart beim Anbieter (Anthropic erlaubt Ausgabenlimits pro Workspace mit Warnungen bei Schwellen) und weich im eigenen Protokoll pro Workflow, mit Pausieren statt Weiterlaufen. Für die Qualität zieht das System täglich Stichproben und lässt ein zweites Modell nach euren fünf bis zehn Kriterien mit Ja oder Nein bewerten. Wöchentlich prüft ein Mensch zehn Fälle, und wenn Mensch und Modell zu oft auseinanderliegen, wird der Prüf-Prompt geschärft, nicht der Mensch überstimmt. Modell-Routing schickt einfache Aufgaben (Klassifikation, kurze Extraktion) auf das günstige Modell und komplexe auf das starke, mit Regressionstest pro Route vor jeder Umschaltung.

## Was das bringt

Die Größenordnungen sind gut untersucht. RouteLLM, ein Forschungsprojekt aus Berkeley (ICLR 2025), erreichte durch Routing zwischen einem starken und einem schwachen Modell auf dem Benchmark MT-Bench 85 Prozent geringere Kosten bei 95 Prozent der Qualität des starken Modells, auf anderen Benchmarks 35 bis 45 Prozent. Das sind Benchmarks, keine Mittelstands-Workflows, deshalb rechne ich bei euch mit 30 bis 60 Prozent, abhängig davon, wie viel einfache Arbeit dabei ist. Der Preisabstand macht es plausibel: Das kleinste aktuelle Claude-Modell kostet je Million Token ein Bruchteil des größten. Dass ein Modell als Prüfer taugt, zeigt die Arbeit von Zheng et al. (NeurIPS 2023): Ein starkes Modell stimmte in über 80 Prozent der Fälle mit menschlichen Bewertern überein, etwa so oft wie Menschen untereinander. Deshalb die wöchentliche menschliche Stichprobe zur Kalibrierung, nicht als Misstrauen, sondern weil 80 Prozent nicht 100 sind.

## Wo es schwierig wird

Billig und falsch ist teurer als teuer und richtig. Wer nur Kosten misst, merkt den Qualitätsverlust nach dem Routing erst an Beschwerden. Deshalb kein Routing ohne Testset pro Route. Zweitens bewertet ein Modell als Richter systematisch, also auch systematisch falsch, wenn niemand kalibriert. Zehn Fälle pro Woche durch einen Menschen sind Pflicht. Drittens ändern Anbieter Preise und Modelle im Quartalsrhythmus, die Preistabelle veraltet, wenn sie niemand pflegt.

## Was ihr dafür braucht

- Workflows, die bereits laufen (das ist ein Betriebsthema, kein Einstieg)
- Fünf bis zehn Qualitätskriterien pro Workflow, die ihr benennen könnt
- Ein Budget pro Workflow, das ihr festlegen wollt

## Warum dieses Paket

Monitoring wird einmal eingerichtet und dann laufend gepflegt, wenn neue Workflows dazukommen. Das ist Kernbestandteil der Begleitung und der Grund, warum die Lösungen nach Woche vier noch laufen.
