---
title: "Monatsreport mit Kommentar statt nackter Zahlen"
problem: "Die Zahlen sind am dritten Werktag da, der Kommentar dazu am zehnten. Controlling schreibt jeden Monat dieselben Sätze neu, Geschäftsführung liest sie nicht."
description: "Aus Controlling-Daten entsteht automatisch ein kommentierter Report: Was hat sich verändert, warum, wo muss man hinschauen."
bereich: "Backoffice & Buchhaltung"
zeitprobleme: ["Zahlen und Reporting", "Wiederkehrende Tipparbeit"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["Claude", "Power BI oder Excel", "SAP CO oder DATEV-Export", "n8n"]
aufwand: "5 bis 8 Tage"
einsparung: "1 bis 2 Tage pro Monatsabschluss"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Strategie", "SAP & Enterprise"]
prio: 72
date: 2026-09-26
---

## Wo es hakt

Zahlen zusammenstellen geht schnell, sie zu erklären dauert. Der Kommentar ist Handarbeit, kommt spät und ist jeden Monat ähnlich. Entscheider bekommen Tabellen statt Aussagen und fragen dann doch nach.

## Was wir bauen

Die Monatszahlen kommen als Export (SAP CO, Power BI, DATEV-BWA) in eine Tabelle mit Ist, Vormonat, Vorjahr und Plan. Ein Skript berechnet Abweichungen absolut und in Prozent, sortiert nach Relevanz und markiert Ausreißer. Erst diese fertige Tabelle geht an das Sprachmodell, mit drei alten Kommentaren als Tonvorlage und einer harten Regel: Es darf nur Zahlen nennen, die in der Tabelle stehen, Ursachen nur als Vermutung formulieren und für jede Vermutung eine Prüffrage ans Controlling stellen. Danach prüft ein zweiter Schritt automatisch jede Zahl im Text gegen die Tabelle. Bei einer Abweichung gibt es keinen Entwurf, sondern eine Fehlermeldung. Der Entwurf wird in eure Word-Vorlage gesetzt und geht an den Controller, der ihn in 20 Minuten schärft.

## Was das bringt

Berichtskommentierung ist einer der Anwendungsfälle, die in der Controlling-Fachwelt inzwischen als Standard gelten. Der Internationale Controller Verein nennt sie in seinen Beiträgen zu generativer KI als typischen Pilotfall neben Kennzahlenanalyse, und die Controlling & Management Review beschreibt 2025, wie Sprachmodelle in automatisierte Reporting-Prozesse eingebunden werden. Belastbare Zahlen zur Zeitersparnis habe ich nicht gefunden. Mein Erfahrungswert: ein bis zwei Tage pro Monatsabschluss, die heute ins Schreiben gehen. Wichtiger als die Stunden ist der Termin: Der Kommentar liegt am dritten Werktag vor, nicht am zehnten.

## Wo es schwierig wird

Das Modell schreibt gern Ursachen, die plausibel klingen und nicht in den Daten stehen. Deshalb rechnet es nicht, deshalb der Quellenzwang auf die Tabelle, deshalb die automatische Zahlenprüfung. Zweitens sind Monatszahlen vertraulich, die Geschäftsführung muss dem Einsatz ausdrücklich zustimmen, und das ist oft die eigentliche Hürde. Drittens läuft der Pilot über zwei Abschlüsse, also acht bis zehn Wochen statt vier. Das sage ich vorher.

## Was ihr dafür braucht

- Die Monatszahlen in einer strukturierten Form (Excel-Export genügt)
- Drei alte Reports mit Kommentar als Vorbild
- Klarheit, welche Kennzahlen wirklich gelesen werden

## Warum dieses Paket

Überschaubarer Aufwand, ein klar definierter Output pro Monat. Nach dem Piloten lässt sich das Muster auf Wochenreports, Vertriebs- oder Produktionsberichte übertragen.
