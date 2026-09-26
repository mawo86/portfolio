---
title: "Interne Wissensdatenbank, die ihre Quellen nennt"
problem: "Wie war das mit der Sonderkondition für Kunde X? Wo steht die Einbauanleitung für das alte Modell? Fragen, die täglich im Flur gestellt werden, weil niemand die Suche im Laufwerk erträgt."
description: "Ein Assistent beantwortet Fragen aus euren eigenen Dokumenten und zeigt zu jeder Antwort die Seite, aus der sie stammt. Kein Raten, kein Halluzinieren."
bereich: "Kundenservice"
zeitprobleme: ["Informationen suchen", "Regeln und Unsicherheit"]
branchen: ["Fertigung", "Handel", "Dienstleistung", "Handwerk"]
werkzeuge: ["RAG-Pipeline (eigene Umsetzung)", "Claude", "EU-Hosting oder On-Premise", "SharePoint, Laufwerk oder Confluence"]
aufwand: "10 bis 15 Tage"
einsparung: "Suchzeit sinkt spürbar; extern belegt: 1,8 bis 2,5 Std./Tag gehen heute ins Suchen"
paket: "pilot-projekt"
reifegrad: "Fortgeschritten"
sapNah: false
blogKategorien: ["Grundlagen", "Tools & Setup", "Datenschutz"]
caseStudy: "rag-demo-quellenbelegter-chatbot"
prio: 90
date: 2026-09-26
---

## Wo es hakt

Das Wissen ist da, aber nicht auffindbar. Neue Kollegen brauchen Monate, erfahrene werden ständig unterbrochen. Ein normaler Chatbot hilft nicht, weil er eure Dokumente nicht kennt und bei Unwissen einfach etwas erfindet.

## Was wir bauen

Eure Dokumente (PDF, Word, Wiki) werden in Abschnitte von wenigen hundert Wörtern zerlegt, jeder Abschnitt behält Dateiname, Kapitelpfad und Version. Zu jedem Abschnitt wird ein numerischer Fingerabdruck berechnet und in einer Datenbank auf einem Server in der EU gespeichert (bei mir Postgres mit pgvector, kein externer Suchdienst). Stellt jemand eine Frage, sucht das System die sechs ähnlichsten Abschnitte plus eine klassische Volltextsuche, und nur diese Abschnitte bekommt das Sprachmodell zu sehen. Es antwortet mit Zitatmarkierungen, die auf Datei und Abschnitt zeigen. Die Anthropic-Schnittstelle liefert dafür eine eigene Funktion (Citations), bei der jede zitierte Stelle technisch auf den Quelltext zeigen muss. Findet die Suche nichts Passendes, ist die Antwort "dazu steht nichts in den Dokumenten". Genau so war es im Showcase gebaut, das ihr unter Projekte anschauen könnt.

## Was das bringt

Wie viel Zeit ins Suchen geht, ist gut belegt, wenn auch mit älteren Zahlen: McKinsey Global Institute schätzte 1,8 Stunden pro Tag (2012), IDC rund 2,5 Stunden. Beides Wissensarbeiter im Schnitt, nicht euer Servicetechniker. Dass RAG-Systeme in kleinen Unternehmen funktionieren, zeigt ein dokumentierter Testbetrieb in einem KMU mit rund 20 Beschäftigten und 81 Dokumenten, mit lokal laufenden Modellen (Fachbeitrag 2025). Fraunhofer IESE beschreibt denselben Aufbau als Standardweg, um "mit eigenen Daten zu chatten", und benennt auch die Fehlerquellen.

Eine belastbare Zahl, wie viel Suchzeit bei euch wegfällt, habe ich extern nicht gefunden. Wir messen sie selbst: 20 Testfragen vorher mit der Stoppuhr, nachher mit dem Assistenten.

## Wo es schwierig wird

Der Index ist so gut wie die Dokumente. Ein veraltetes Handbuch im Index erzeugt eine selbstbewusste, falsche Antwort mit korrekter Quellenangabe. Deshalb ist Kuratierung Teil des Projekts und jemand muss den Hut aufhaben. Zweitens sind Tabellen und Zeichnungen in PDFs schwer zu zerlegen, dort ist die Trefferquote niedriger. Drittens: Wer strikt On-Premise mit einem kleinen Open-Source-Modell arbeiten will, bekommt spürbar schlechtere Antworten als mit den großen Modellen. Das zeige ich im Piloten an euren Fragen, dann entscheidet ihr.

## Was ihr dafür braucht

- Eure Dokumente in digitaler Form (PDF, Word, Wiki), gern auch alt und unaufgeräumt
- Eine Entscheidung zum Hosting (EU-Cloud oder eigener Server)
- 20 typische Fragen, an denen wir den Assistenten messen

## Warum dieses Paket

Technisch anspruchsvoller als ein Mail-Workflow, aber in vier Wochen als Pilot mit einem Dokumentenbereich machbar. Die Ausweitung auf weitere Bereiche und der Betrieb sind der klassische Fall für die laufende Begleitung.
