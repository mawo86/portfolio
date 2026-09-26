---
title: "Buchungsvorschläge für SAP FI/CO aus Belegen und Mails"
problem: "Kontierung, Kostenstelle, Steuerkennzeichen: Die Buchhaltung entscheidet das hundertmal am Tag nach Erfahrung. Neue Kollegen brauchen Monate, und Fehler tauchen im Abschluss auf."
description: "Aus Beleg und Kontext entsteht ein Buchungsvorschlag mit Konto, Kostenstelle und Steuerkennzeichen, gelernt aus eurer eigenen Buchungshistorie."
bereich: "SAP-Prozesse"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["SAP FI/CO", "Claude", "n8n oder SAP BTP Integration", "Buchungshistorie als Trainingsdaten"]
aufwand: "10 bis 15 Tage"
einsparung: "5 bis 10 Std./Woche, weniger Umbuchungen im Abschluss, Erfahrungswert"
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

Zwei Stufen, damit das Modell nichts erfindet. Stufe eins ist reine Statistik: Aus eurer Buchungshistorie der letzten zwei Jahre wird pro Lieferant und Belegtext-Muster nachgeschlagen, welche Sachkonten, Kostenstellen und Steuerkennzeichen ihr tatsächlich verwendet habt, mit Häufigkeit. Das liefert für einen neuen Beleg fünf Kandidaten. Stufe zwei ist das Sprachmodell: Es bekommt den Beleg (als Bild und Text) und genau diese fünf Kandidaten und wählt mit Begründung und Sicherheitswert. Es darf kein Konto nennen, das nicht in der Liste steht. Steuerkennzeichen laufen über feste Regeln (Land, Lieferantentyp, Leistungsart), nicht über das Modell. Der Vorschlag landet in der Vorerfassung, über den OData-Dienst API_SUPPLIERINVOICE_PROCESS_SRV oder als Notiz im Beleg-Workflow. Die Buchhaltung bucht, der Workflow hat keine Buchungsberechtigung.

## Was das bringt

Dass Kontierung aus Historie lernbar ist, zeigt SAP selbst: In S/4HANA Cloud gibt es dafür die Funktion "Invoice Object Recommendation", die für Rechnungen ohne Bestellbezug Sachkonto und Kostenobjekt aus historischen Buchungen vorschlägt. Ich baue denselben Mechanismus für Kunden, die diese Funktion nicht lizenziert haben oder noch auf ECC arbeiten, und mache ihn nachvollziehbar, weil jeder Vorschlag seine Kandidaten und seine Begründung zeigt.

Eine externe Zahl zur Zeitersparnis speziell für Kontierung habe ich nicht gefunden. Mein Erfahrungswert: 5 bis 10 Stunden pro Woche in einer Buchhaltung mit 300 oder mehr bestellfreien Belegen im Monat. Der zweite Effekt ist messbarer und für den Abschluss wichtiger: die Zahl der Umbuchungen sinkt, weil Fehler vorn abgefangen werden.

## Wo es schwierig wird

Die Historie enthält eure alten Fehler. Wer sie ungeprüft als Vorbild nimmt, macht aus einer Fehlbuchung von 2024 einen Vorschlag für 2026. Deshalb bereinigen wir die Historie zuerst mit der Buchhaltung: Stornos raus, bekannte Fehlbuchungen markiert. Zweitens: Neue Lieferanten haben keine Historie, und da ist "kein Vorschlag" die richtige Antwort, nicht ein geratener. Drittens will euer Wirtschaftsprüfer wissen, dass das Vier-Augen-Prinzip technisch erhalten bleibt. Das ist es, weil der Workflow nur vorerfassen kann.

## Was ihr dafür braucht

- Export der Buchungshistorie (BSEG/BKPF oder Auswertung) für zwei Jahre, anonymisiert wo nötig
- Schreibzugriff auf die Vorerfassung oder einen abgestimmten Weg, wie Vorschläge zum Buchhalter kommen
- Eine erfahrene Buchhalterin, die die Vorschläge vier Wochen lang bewertet

## Warum dieses Paket

Der Nutzen ist hoch, die Anbindung ist bei SAP-Kunden bekannt, vier Wochen reichen für einen Belegtyp. Weitere Belegarten und der Betrieb folgen in der Begleitung.
