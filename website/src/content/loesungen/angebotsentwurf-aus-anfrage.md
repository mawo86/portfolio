---
title: "Angebotsentwurf aus der Kundenanfrage"
problem: "Eine Anfrage kommt per E-Mail, jemand liest sie, sucht Preise im ERP, tippt das Angebot in Word. Zwei Tage später ist es raus, der Wettbewerber war schneller."
description: "Aus der E-Mail-Anfrage entsteht automatisch ein Angebotsentwurf mit den richtigen Positionen aus eurem ERP. Der Vertrieb prüft und schickt ab."
bereich: "Vertrieb"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Warten auf Antworten"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["n8n", "Claude", "SAP SD oder anderes ERP", "Outlook oder Exchange"]
aufwand: "8 bis 12 Tage"
einsparung: "6 bis 12 Std./Woche im Innendienst"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Automatisierung", "SAP & Enterprise", "Strategie"]
prio: 95
date: 2026-09-26
---

## Wo es hakt

Anfragen kommen in freier Form: mal als Text, mal als PDF, mal als Foto einer Zeichnung. Der Innendienst übersetzt das in Positionen, sucht Preise und Konditionen im ERP und baut das Angebot von Hand. Der Engpass ist nicht die Entscheidung, sondern die Tipparbeit davor.

## Was wir bauen

Ein Workflow liest die eingehende Anfrage, erkennt Kunde, Mengen und Artikel und schlägt passende Positionen aus dem ERP vor. Daraus entsteht ein Angebotsentwurf in eurem Layout, der im Postausgang oder direkt im ERP als Beleg wartet. Ein Mensch prüft, korrigiert und schickt ab, nichts geht ohne Freigabe raus.

## Was das bringt

Die Durchlaufzeit von Anfrage zu Angebot sinkt typischerweise von Tagen auf Stunden. Die Einsparung liegt bei 6 bis 12 Stunden pro Woche im Innendienst, Erfahrungswert aus vergleichbaren Prozessen. Der größere Effekt ist meist die Abschlussquote: Wer zuerst antwortet, gewinnt öfter.

## Was ihr dafür braucht

- Zugriff auf Artikel- und Preisdaten (Export, API oder Lesezugriff auf das ERP)
- 20 bis 30 alte Anfragen mit den zugehörigen Angeboten als Trainingsbeispiele
- Eine Person im Vertrieb, die zwei Wochen lang Entwürfe bewertet

## Warum dieses Paket

Ein abgegrenzter Prozess mit klarem Vorher-Nachher. Vier Wochen reichen, um den Workflow in Produktion zu bringen und zu übergeben. Wenn ihr noch nicht sicher seid, ob dieser oder ein anderer Prozess zuerst dran ist, klärt das der Readiness-Check in zwei Stunden.
