---
title: "Wartungs- und Störungsberichte per Sprache statt Formular"
problem: "Der Techniker weiß nach der Reparatur genau, was los war. Aufgeschrieben wird es abends in drei Stichworten, wenn überhaupt. Beim nächsten Ausfall fängt man wieder bei null an."
description: "Der Techniker spricht den Bericht ins Handy, daraus entsteht ein strukturierter Eintrag mit Anlage, Fehlerbild, Ursache, Maßnahme und Ersatzteilen."
bereich: "Produktion & Technik"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Informationen suchen"]
branchen: ["Fertigung", "Handwerk", "Anlagenbau", "Gebäudetechnik"]
werkzeuge: ["Claude", "Spracherkennung", "n8n", "SAP PM, Instandhaltungssoftware oder SharePoint-Liste"]
aufwand: "6 bis 10 Tage"
einsparung: "20 bis 40 Minuten pro Techniker und Tag"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Automatisierung", "Branchen"]
prio: 74
date: 2026-09-26
---

## Wo es hakt

Dokumentation konkurriert mit der nächsten Störung, und die Störung gewinnt. Was nicht aufgeschrieben wird, fehlt später bei Analyse, Gewährleistung und Einarbeitung. Formulare auf dem Tablet werden umgangen, weil sie in der Halle unpraktisch sind.

## Was wir bauen

Der Techniker spricht direkt nach der Arbeit eine Minute frei ins Firmenhandy, in Teams oder als Sprachmemo. Ein Spracherkennungsdienst auf EU-Servern macht Text daraus, danach wird die Audiodatei gelöscht. Das Sprachmodell bekommt den Text plus eure Anlagenliste mit den Spitznamen der Techniker ("die Alte", "Linie 3 hinten") und die Liste eurer Teilebezeichnungen, und füllt eine feste Struktur: Anlage, Fehlerbild, Ursache (vermutet oder bestätigt), Maßnahme, verwendete Teile, offene Punkte. Fehlt die Anlage oder die Maßnahme, kommt eine kurze Rückfrage. Der Eintrag wird als Karte angezeigt, der Techniker bestätigt, und erst dann legt der Workflow die Meldung im Zielsystem an, in SAP PM über den OData-Dienst API_MAINTNOTIFICATION, sonst in eurer Instandhaltungssoftware oder zum Start in einer SharePoint-Liste. Keine Zeiterfassung, keine Auswertung pro Person.

## Was das bringt

Dass Dokumentation der Schwachpunkt der Instandhaltung ist, steht in jedem Lehrbuch, DIN 31051 setzt sie voraus, und die Praxisberichte beschreiben dieselbe Lücke: Störungsmeldungen sind unvollständig, Ursachen fehlen, Wiederholfehler werden nicht erkannt. Eine externe Zahl, wie viel Zeit Techniker heute mit Dokumentation verbringen, habe ich nicht gefunden. Mein Erfahrungswert: 20 bis 40 Minuten pro Techniker und Tag, die heute abends am Rechner oder gar nicht anfallen.

Zur Technik gibt es belastbare Zahlen: Die Spracherkennung mit dem Modell Whisper erreicht in ruhiger Umgebung Wortfehlerraten um 8 bis 12 Prozent, in industriellem Umfeld werden 16 bis 24 Prozent berichtet, Rauschunterdrückung verbessert das um 20 bis 40 Prozent relativ. Deshalb testen wir im Piloten beides, Geräte-Diktat und serverseitige Erkennung, und deshalb ist die Vokabularliste mit Anlagennamen so wichtig.

## Wo es schwierig wird

Hallenlärm. Die Fehlerraten oben sind der Grund, warum wir Erkennungsrate messen und nicht annehmen. Zweitens Funklöcher: Hallen haben sie, deshalb wird die Sprachmemo lokal gespeichert und später verarbeitet, mit dem Zeitstempel der Aufnahme. Drittens der Betriebsrat: Sprachaufnahmen von Beschäftigten sind ein Mitbestimmungsthema, deshalb Löschung nach Transkription, keine Zeiterfassung, keine Personenauswertung, schriftlich vereinbart. Und ohne die Techniker im Kickoff scheitert es, egal wie gut die Technik ist.

## Was ihr dafür braucht

- Eine Liste eurer Anlagen mit Bezeichnungen, wie die Techniker sie nennen
- Ein Zielsystem (SAP PM, andere Software oder zunächst eine SharePoint-Liste)
- Zwei bis drei Techniker, die vier Wochen mitmachen und ehrlich Feedback geben

## Warum dieses Paket

Der Nutzen zeigt sich schon nach der ersten Woche, die Technik ist überschaubar. Vier Wochen reichen für Aufbau, Test in der Halle und Übergabe.
