---
title: "Mahnwesen mit Fingerspitzengefühl statt Serienbrief"
problem: "Offene Posten stapeln sich, weil Mahnen unangenehm ist und Zeit kostet. Wenn gemahnt wird, dann per Serienbrief, der den guten Kunden genauso trifft wie den Dauerschuldner."
description: "Offene Posten werden täglich geprüft, nach Kundenbeziehung und Historie bewertet und mit individuell formulierten Mahnentwürfen versehen."
bereich: "Backoffice & Buchhaltung"
zeitprobleme: ["Warten auf Antworten", "Regeln und Unsicherheit"]
branchen: ["Dienstleistung", "Handel", "Handwerk", "Fertigung"]
werkzeuge: ["n8n", "Claude", "SAP FI, DATEV oder Lexware", "Outlook"]
aufwand: "5 bis 8 Tage"
einsparung: "2 bis 4 Std./Woche, kürzere Außenstandsdauer"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Automatisierung", "SAP & Enterprise"]
prio: 65
date: 2026-09-26
---

## Wo es hakt

Das Mahnen wird aufgeschoben, weil es niemand gern macht. Standardmahnungen verärgern gute Kunden, die nur eine Rechnung übersehen haben. Beim Dauerschuldner ist der freundliche Ton dagegen verschenkt.

## Was wir bauen

Jeden Werktag um sieben zieht der Workflow die offenen Posten aus dem ERP (SAP: Debitoren-Einzelposten, DATEV: OPOS-Export) und die Zahlungshistorie der letzten zwölf Monate. Die Stufe pro Fall ist Arithmetik, kein Modell: Überfälligkeit, Kundengruppe (A/B/C) und Zahlverhalten ergeben nach eurem Regelwerk Erinnerung, Mahnung, Anruf-Vorschlag oder Übergabe. Streitfälle und gesperrte Kunden sind ausgeschlossen. Erst dann kommt das Sprachmodell: Es schreibt für jeden Fall den Text in eurem Ton, mit Rechnungsbezug, Frist und Kontaktangebot, für den zuverlässigen Kunden anders als für den Dauerschuldner. Ihr seht morgens eine Liste mit Fall, Stufe und Entwurf. "Senden" erzeugt einen Outlook-Entwurf, nichts geht ohne Klick raus. Zahlungseingang beendet den Fall automatisch, eine Kundenantwort pausiert ihn.

## Was das bringt

Wie viel Geld draußen steht, ist gut belegt. Creditreform hat für das zweite Halbjahr 2025 rund 3,8 Millionen Rechnungsbelege ausgewertet: Die Forderungslaufzeit lag im Schnitt bei 39,63 Tagen, davon 32,13 Tage Zahlungsziel und 7,50 Tage Verzug. Coface berichtet für 2025, dass 81 Prozent der befragten deutschen Unternehmen mit Zahlungsverzögerungen zu tun haben. Jeder Tag weniger Verzug ist Liquidität, die ihr nicht vorfinanzieren müsst.

Zur Zeitersparnis im Mahnwesen selbst habe ich extern keine belastbare Zahl gefunden. Mein Erfahrungswert: 2 bis 4 Stunden pro Woche. Die Kennzahl, die zählt, ist die Verzugsdauer eurer eigenen Forderungen, und die messen wir aus dem ERP, vorher und acht Wochen nach Start.

## Wo es schwierig wird

Der Ton. Ein A-Kunde, der eine Rechnung übersehen hat, bekommt bei uns einen Anruf-Vorschlag, keine Mahnung, und das muss im Regelwerk stehen, sonst macht das System Schaden. Zweitens dürfen Kunden mit offener Reklamation nicht gemahnt werden, die Ausschlussliste ist Pflicht und muss gepflegt werden. Drittens, bei Privatkunden: Scoring von Personen nach Zahlverhalten ist datenschutzrechtlich heikel, dort arbeiten wir nur mit Überfälligkeit, nicht mit Bewertung.

## Was ihr dafür braucht

- Zugriff auf die Offene-Posten-Liste (Export oder Schnittstelle)
- Eure Regeln, wer wie angesprochen wird (drei Kundengruppen reichen)
- Eine Person, die die Vorschläge zwei Wochen lang bewertet

## Warum dieses Paket

Klein, klar messbar am Zahlungseingang, in vier Wochen live. Baut sich gut auf die Rechnungseingangs-Automation als zweiter Schritt in der Buchhaltung.
