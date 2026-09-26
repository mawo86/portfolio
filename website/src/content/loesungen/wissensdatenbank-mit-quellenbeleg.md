---
title: "Interne Wissensdatenbank, die ihre Quellen nennt"
problem: "Wie war das mit der Sonderkondition für Kunde X? Wo steht die Einbauanleitung für das alte Modell? Fragen, die täglich im Flur gestellt werden, weil niemand die Suche im Laufwerk erträgt."
description: "Ein Assistent beantwortet Fragen aus euren eigenen Dokumenten und zeigt zu jeder Antwort die Seite, aus der sie stammt. Kein Raten, kein Halluzinieren."
bereich: "Kundenservice"
zeitprobleme: ["Informationen suchen", "Regeln und Unsicherheit"]
branchen: ["Fertigung", "Handel", "Dienstleistung", "Handwerk"]
werkzeuge: ["RAG-Pipeline (eigene Umsetzung)", "Claude", "EU-Hosting oder On-Premise", "SharePoint, Laufwerk oder Confluence"]
aufwand: "10 bis 15 Tage"
einsparung: "30 bis 60 Minuten pro Person und Tag beim Suchen"
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

Eure Dokumente werden in kleine Abschnitte zerlegt und durchsuchbar gemacht. Wer eine Frage stellt, bekommt eine Antwort, die ausschließlich auf euren Dokumenten beruht, mit Verweis auf Datei und Seite. Wenn nichts Passendes gefunden wird, sagt der Assistent genau das. Die Daten bleiben auf einem Server in der EU oder bei euch im Haus.

## Was das bringt

Die Suchzeit sinkt um 30 bis 60 Minuten pro Person und Tag, Erfahrungswert aus vergleichbaren Prozessen. Onboarding wird kürzer, Antworten werden einheitlich. Wie so ein System aussieht, zeige ich im Showcase-Projekt (siehe Projekte).

## Was ihr dafür braucht

- Eure Dokumente in digitaler Form (PDF, Word, Wiki), gern auch alt und unaufgeräumt
- Eine Entscheidung zum Hosting (EU-Cloud oder eigener Server)
- 20 typische Fragen, an denen wir den Assistenten messen

## Warum dieses Paket

Technisch anspruchsvoller als ein Mail-Workflow, aber in vier Wochen als Pilot mit einem Dokumentenbereich machbar. Die Ausweitung auf weitere Bereiche und der Betrieb sind der klassische Fall für die laufende Begleitung.
