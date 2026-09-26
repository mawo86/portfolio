---
title: "Besprechungen, die in Aufgaben enden statt in Protokollen"
problem: "Nach dem Meeting schreibt jemand das Protokoll. Zwei Tage später. Wer was bis wann macht, steht irgendwo im Text, und beim nächsten Termin fängt die Diskussion von vorn an."
description: "Aus der Aufnahme oder den Notizen entstehen automatisch Entscheidungen, Aufgaben mit Verantwortlichen und ein kurzes Protokoll in eurem Format."
bereich: "Geschäftsführung"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Dienstleistung", "Fertigung", "Handel", "Handwerk"]
werkzeuge: ["Microsoft Teams oder Zoom", "Claude oder Copilot", "Planner, To Do oder Jira", "n8n"]
aufwand: "2 bis 4 Tage"
einsparung: "2 bis 4 Std./Woche pro Führungskraft"
paket: "readiness-check"
reifegrad: "Einstieg"
sapNah: false
blogKategorien: ["Tools & Setup", "Grundlagen", "Erfahrungsbericht"]
prio: 66
date: 2026-09-26
---

## Wo es hakt

Protokolle kosten Zeit und werden nicht gelesen. Aufgaben verschwinden im Fließtext. Entscheidungen werden nicht festgehalten und deshalb später neu diskutiert. Das Problem ist nicht das Meeting, sondern der Weg danach.

## Was wir bauen

Zwei Wege, je nachdem, was ihr habt. Mit Microsoft 365 und Copilot-Lizenz nutzen wir die Bordmittel: Teams-Transkription, den Meeting-Recap und die Aufgabenübernahme nach Planner. Meine Arbeit ist dann Einrichtung, Regeln und Schulung. Ohne Copilot bauen wir den Weg selbst: Nach Meeting-Ende holt der Workflow das Transkript aus Teams oder Zoom über deren Schnittstellen, das Sprachmodell extrahiert Entscheidungen, Aufgaben (wer, was, bis wann, mit Verweis auf die Stelle im Transkript) und offene Punkte und schreibt ein Protokoll von einer halben Seite in eurem Format. Aufgaben werden dem Moderator als Vorschlag gezeigt und erst nach Bestätigung im Aufgabentool angelegt. Das Transkript wird danach gelöscht. In beiden Fällen gilt: Aufnahme nur mit Ansage und Zustimmung.

## Was das bringt

Meetings sind der größte Produktivitätsfresser, sagt Microsofts Work Trend Index 2025 auf Basis von 31.000 Befragten in 31 Ländern und Nutzungsdaten aus Microsoft 365: Unterbrechungen alle zwei Minuten im Arbeitstag, Meetings ohne klare nächste Schritte als häufigste Klage. Dass die Bordmittel dafür gebaut sind, zeigt Microsofts eigene Dokumentation zu Meeting-Recaps und Copilot in Teams. Die Zahlen stammen vom Hersteller des Werkzeugs, das ist bei der Bewertung mitzudenken.

Zur Zeitersparnis habe ich keine neutrale Zahl gefunden. Mein Erfahrungswert: 2 bis 4 Stunden pro Woche und Führungskraft, die heute in Protokolle und Nachfassen gehen. Messbar am selben Tag: Sind die Aufgaben aus dem Meeting abends im Tool?

## Wo es schwierig wird

Aufnahme ohne Ansage ist rechtlich und kulturell ein Fehler, und Sprachaufnahmen von Beschäftigten sind ein Betriebsratsthema. Zweitens: Aufgaben automatisch anlegen führt zu falschen Aufgaben bei falschen Leuten, dann verliert das Tool sein Vertrauen. Deshalb die Bestätigung. Drittens: Ohne ein Aufgabentool, das alle nutzen, bleibt das Protokoll ein Text. Erst Tool, dann Automatisierung. Und Copilot nur für Meetings zu lizenzieren, rechnet sich meist nicht.

## Was ihr dafür braucht

- Einigkeit im Team, dass Meetings aufgezeichnet werden dürfen (oder ein Protokollant, der mitschreibt)
- Ein Aufgabentool, das alle nutzen
- Euer Wunschformat für Protokolle

## Warum dieses Paket

Oft reicht ein sauber eingerichtetes Werkzeug (Copilot, Teams-Funktionen, ein Claude-Projekt) plus klare Regeln. Der Readiness-Check klärt, ob ihr einen Workflow braucht oder nur die richtige Einrichtung. Letzteres ist ein Tag über den Tagessatz.
