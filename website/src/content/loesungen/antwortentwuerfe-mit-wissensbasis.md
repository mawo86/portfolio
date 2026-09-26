---
title: "Antwortentwürfe für den Kundenservice, die zu euren Regeln passen"
problem: "Dieselben zwanzig Fragen, jeden Tag neu getippt. Jeder antwortet etwas anders, und der neue Kollege sucht die Garantieregel in drei Ordnern."
description: "Zu jeder Anfrage liegt ein Antwortentwurf bereit, der eure Wissensbasis, den Kundenkontext und euren Ton kennt. Das Team prüft und sendet."
bereich: "Kundenservice"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Informationen suchen"]
branchen: ["Handel", "Fertigung", "Dienstleistung", "Software"]
werkzeuge: ["Claude", "n8n", "SharePoint oder Confluence als Wissensquelle", "Ticketsystem"]
aufwand: "8 bis 12 Tage"
einsparung: "8 bis 15 Std./Woche im Service-Team"
paket: "pilot-projekt"
reifegrad: "Fortgeschritten"
sapNah: false
blogKategorien: ["Automatisierung", "Grundlagen"]
prio: 82
date: 2026-09-26
---

## Wo es hakt

Antworten schreiben kostet Zeit, weil man Fakten nachschlägt und Formulierungen sucht. Die Qualität hängt von der Person ab. Wissen liegt in Köpfen, alten Mails und einem Ordner, den nur zwei Leute kennen.

## Was wir bauen

Zu jeder Anfrage sucht der Workflow die passenden Abschnitte aus eurer Wissensbasis (Handbücher, FAQ, Garantiebedingungen, die besten alten Antworten), wie bei der Wissensdatenbank über eine Ähnlichkeitssuche in einer Datenbank auf einem EU-Server. Nur diese Abschnitte plus der Kundenkontext gehen an das Sprachmodell, mit 50 guten alten Antworten als Tonvorlage und einer festen Regel: nur aus den Abschnitten antworten, jede Aussage mit Quelle, sonst "dazu habe ich keine gesicherte Information". Die Anthropic-Schnittstelle liefert dafür eine eigene Funktion (Citations), bei der jede zitierte Stelle technisch auf den Quelltext zeigen muss. Der Entwurf erscheint als interne Notiz im Ticket mit Quellenliste, das Team klickt "übernehmen", "ändern" oder "verwerfen". Diese drei Klicks sind zugleich die Qualitätsmessung.

## Was das bringt

Der bekannteste Fall zeigt Nutzen und Grenze zugleich. Klarna meldete im Februar 2024, dass ein KI-Assistent im ersten Monat zwei Drittel der Kundenservice-Chats übernahm, 2,3 Millionen Gespräche, mit Lösungszeiten unter zwei Minuten. Im Mai 2025 räumte der Vorstandschef ein, man habe zu sehr auf Kosten geschaut, die Qualität habe gelitten, und stellte wieder Menschen ein. Seitdem fährt Klarna hybrid: KI für Routine, Menschen mit KI-Unterstützung für den Rest. Genau das ist der Aufbau hier: Entwurf statt Automatik, Mensch entscheidet.

Zur Zeitersparnis habe ich für den Mittelstand keine belastbare Zahl gefunden. Mein Erfahrungswert: 8 bis 15 Stunden pro Woche in einem Service-Team, das heute Antworten aus dem Kopf und aus drei Ordnern zusammensucht. Messbar ab Woche eins: der Anteil übernommener Entwürfe.

## Wo es schwierig wird

Die Wissensbasis. Ein veraltetes Dokument im Index erzeugt eine überzeugende falsche Antwort mit korrekter Quellenangabe. Aussortieren vor der Ingestion und ein Verantwortlicher für die Pflege sind Teil des Projekts. Zweitens die Versuchung, den Quellenzwang zu lockern, weil die Antworten dann "flüssiger" klingen. Genau dann fängt das Modell an zu erfinden. Drittens: Ein Bereich im Pilot, nicht alle Produkte auf einmal.

## Was ihr dafür braucht

- Eure Wissensquellen in irgendeiner digitalen Form (auch unordentlich ist okay)
- 50 gute alte Antworten als Vorbild für den Ton
- Freigabe, dass Kundenanfragen von einem EU-gehosteten KI-Dienst verarbeitet werden (das klären wir im DSGVO-Check)

## Warum dieses Paket

Vier Wochen für Aufbau, Test mit echten Anfragen und Übergabe. Baut auf der Ticket-Sortierung auf, geht aber auch allein. Wenn ihr die Wissensbasis erst aufbauen müsst, ist die quellenbelegte Wissensdatenbank der bessere erste Schritt.
