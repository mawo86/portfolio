---
title: "Buchungsvorschläge für SAP FI/CO aus Belegen und Mails"
problem: "Kontierung, Kostenstelle, Steuerkennzeichen: Die Buchhaltung entscheidet das hundertmal am Tag nach Erfahrung. Neue Kollegen brauchen Monate, und Fehler tauchen im Abschluss auf."
description: "Aus Beleg und Kontext entsteht ein Buchungsvorschlag mit Konto, Kostenstelle und Steuerkennzeichen, gelernt aus eurer eigenen Buchungshistorie."
bereich: "SAP-Prozesse"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["SAP FI/CO", "Claude", "n8n oder SAP BTP Integration", "Buchungshistorie als Trainingsdaten"]
aufwand: "10 bis 15 Tage"
einsparung: "5 bis 10 Std./Woche, weniger Umbuchungen im Abschluss"
paket: "pilot-projekt"
reifegrad: "Fortgeschritten"
sapNah: true
blogKategorien: ["SAP & Enterprise", "Automatisierung"]
prio: 84
date: 2026-09-26
---

## Wo es hakt

Die Kontierungslogik steckt in den Köpfen erfahrener Buchhalter, nicht im System. Sie ist konsistent, solange dieselben Leute buchen. Bei Urlaub, Wechsel oder Wachstum wird sie es nicht mehr, und die Umbuchungen im Monatsabschluss zeigen das.

## Was wir bauen

Der Workflow nimmt den Beleg (Rechnung, Gutschrift, Reisekosten) und seinen Kontext (Lieferant, Bestellung, Text) und schlägt Sachkonto, Kostenstelle oder Auftrag und Steuerkennzeichen vor. Grundlage ist eure eigene Buchungshistorie der letzten zwei Jahre, nicht eine allgemeine Regel. Der Vorschlag erscheint in der Vorerfassung mit Begründung und Sicherheitsgrad. Unsichere Fälle werden markiert, nicht durchgewunken.

## Was das bringt

Die Einsparung liegt bei 5 bis 10 Stunden pro Woche, Erfahrungswert aus vergleichbaren Prozessen. Umbuchungen im Abschluss gehen zurück, weil Fehler vorn abgefangen werden. Neue Kollegen buchen ab Woche eins konsistent.

## Was ihr dafür braucht

- Export der Buchungshistorie (BSEG/BKPF oder Auswertung) für zwei Jahre, anonymisiert wo nötig
- Schreibzugriff auf die Vorerfassung oder einen abgestimmten Weg, wie Vorschläge zum Buchhalter kommen
- Eine erfahrene Buchhalterin, die die Vorschläge vier Wochen lang bewertet

## Warum dieses Paket

Der Nutzen ist hoch, die Anbindung ist bei SAP-Kunden bekannt, vier Wochen reichen für einen Belegtyp. Weitere Belegarten und der Betrieb folgen in der Begleitung.
