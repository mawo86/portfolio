---
title: "Schichtübergabe, die nichts vergisst"
problem: "Die Übergabe zwischen Früh- und Spätschicht dauert zehn Minuten und hängt davon ab, wer sich was gemerkt hat. Was im Schichtbuch steht, liest niemand mehr."
description: "Aus Schichtbuch, Störmeldungen und Produktionsdaten entsteht automatisch eine Übergabe-Zusammenfassung mit den drei Dingen, die die nächste Schicht wissen muss."
bereich: "Produktion & Technik"
zeitprobleme: ["Informationen suchen", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Lebensmittel", "Chemie", "Logistik"]
werkzeuge: ["Claude", "n8n", "Schichtbuch (digital oder Foto)", "Teams oder Aushang-Display"]
aufwand: "4 bis 7 Tage"
einsparung: "10 bis 15 Minuten pro Übergabe, weniger Wiederholfehler"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: false
blogKategorien: ["Automatisierung", "Branchen"]
prio: 58
date: 2026-09-26
---

## Wo es hakt

Übergaben sind mündlich, unvollständig und abhängig von Personen. Das Schichtbuch ist Pflichtprogramm, aber niemand liest zwanzig Einträge, bevor er anfängt. Wiederholfehler entstehen, weil die Information da war, aber nicht ankam.

## Was wir bauen

Fünfzehn Minuten vor Schichtende startet der Workflow und sammelt, was passiert ist: Einträge aus dem Schichtbuch (digital oder als Foto einer handschriftlichen Seite, die das Modell liest), Störmeldungen aus der Instandhaltung, wenn vorhanden Stückzahlen und Stillstände aus dem MES. Das Sprachmodell füllt daraus ein festes Format mit fünf Rubriken: Störungen offen und erledigt, Qualität, Material, offene Aufträge, Hinweise. Jedes Ereignis mit Uhrzeit und Anlage, maximal eine halbe Seite. Die Zusammenfassung erscheint auf dem Bildschirm an der Linie und in Teams, das Archiv hält jede Schicht. Schlägt der Workflow fehl, zeigt das Display "nicht verfügbar, bitte mündlich übergeben", nie eine alte Zusammenfassung. Der Schichtleiter kann per Klick ergänzen, was fehlt.

## Was das bringt

Die Übergabe ist als Risikopunkt gut dokumentiert. In der Prozessindustrie gilt die Übergabe von der Nacht- an die Frühschicht als kritischste Kommunikationssituation, mit Schichtbuch, Überlappungszeit und Checkliste als Gegenmaßnahmen (Praxisbericht, Wiley Prozesstechnik). Eine Auswertung von 451 Research, die in der Fachpresse zitiert wird, ordnet 40 Prozent der Störfälle der Zeit kurz nach der Übergabe oder dem An- und Abfahren von Anlagen zu. Anbieter digitaler Schichtbücher nennen Informationsverluste von 25 bis 40 Prozent bei mündlicher Übergabe, dafür habe ich keine Primärquelle gefunden, deshalb steht die Zahl hier nicht als Fakt.

Mein Erfahrungswert: Das Übergabegespräch wird von zehn auf fünf Minuten kürzer und vollständiger. Das Sicherheitskriterium, das wir prüfen, ist ein anderes: Jede offene Störung des Testzeitraums muss in der Zusammenfassung stehen, ohne Ausnahme.

## Wo es schwierig wird

Handschrift. Die Fotoerkennung schwankt mit der Lesbarkeit, deshalb zeigt das System bei niedrigem Sicherheitswert den Originalausschnitt mit an. Zweitens die Länge: Eine halbe Seite, sonst liest es niemand. Drittens Personen: "Schicht A hatte viel Ausschuss" ist eine Auswertung über Menschen. Die Zusammenfassung nennt Anlagen und Ereignisse, keine Namen, und das steht in der Vereinbarung mit dem Betriebsrat.

## Was ihr dafür braucht

- Zugriff auf Schichtbuch und Störmeldungen in irgendeiner digitalen Form
- Zwei Schichtleiter, die die Zusammenfassung vier Wochen lang bewerten
- Eine Entscheidung, wo die Zusammenfassung sichtbar sein soll

## Warum dieses Paket

Klar abgegrenzt, schnell umgesetzt, sofort im Alltag spürbar. Ein guter Pilot, um Vertrauen in der Produktion aufzubauen, bevor größere Themen wie Wartungsdokumentation folgen.
