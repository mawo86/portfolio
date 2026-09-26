---
title: "Angebotsentwurf aus der Kundenanfrage"
problem: "Eine Anfrage kommt per E-Mail, jemand liest sie, sucht Preise im ERP, tippt das Angebot in Word. Zwei Tage später ist es raus, der Wettbewerber war schneller."
description: "Aus der E-Mail-Anfrage entsteht automatisch ein Angebotsentwurf mit den richtigen Positionen aus eurem ERP. Der Vertrieb prüft und schickt ab."
bereich: "Vertrieb"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Warten auf Antworten"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["n8n", "Claude", "SAP SD oder anderes ERP", "Outlook oder Exchange"]
aufwand: "8 bis 12 Tage"
einsparung: "6 bis 12 Std./Woche im Innendienst, Erfahrungswert"
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

Der Workflow (bei mir meist n8n) holt die Anfrage aus dem Postfach, inklusive PDF-Anhang. Das Sprachmodell bekommt die Anfrage seitenweise als Bild und Text und gibt eine feste Tabelle zurück: Kunde, Positionen mit Menge und Einheit, Wunschtermin, Sonderwünsche, und pro Feld einen Sicherheitswert. Die Positionen werden gegen euren Artikelstamm und die Bestellhistorie dieses Kunden abgeglichen, zuerst über die Kundenartikelnummer, dann über frühere Aufträge, zuletzt über Textähnlichkeit. Preise kommen ausschließlich aus dem ERP, das Modell rechnet keinen Preis. Daraus entsteht ein Angebotsentwurf als Beleg im Test- oder Produktivsystem oder als Word-Dokument in eurer Vorlage. Zeilen unter einem Sicherheitswert von 80 Prozent sind gelb markiert. Ein Mensch prüft, korrigiert, schickt ab.

## Was das bringt

Ein Beleg, dass der Weg funktioniert: Der Fruchtverarbeiter Zentis hat die Auftragserfassung mit einer KI-Lösung automatisiert, die Bestellungen aus E-Mail und PDF liest, gegen Kunden- und Materialstamm prüft und per SAP-Standardschnittstelle bucht (Computerwoche, 2024). Bemerkenswert daran ist die Ehrlichkeit: Anfangs mussten noch 60 Prozent der Aufträge nachbearbeitet werden. Das ist der realistische Startpunkt, nicht die Ausnahme.

Für die Zeitersparnis gibt es viele Anbieterzahlen und wenige belastbare. Ich nenne deshalb einen Erfahrungswert aus vergleichbaren Prozessen: 6 bis 12 Stunden pro Woche im Innendienst, wenn 20 oder mehr Anfragen pro Woche eingehen. Der Effekt, den Kunden zuerst spüren, ist ein anderer: Das Angebot ist am selben Tag draußen.

## Wo es schwierig wird

Die Zuordnung von Freitext auf Artikelnummern ist der Teil, an dem Projekte hängen. "Das gleiche wie im Mai" oder ein Kundenartikelcode, der bei euch nirgends gepflegt ist, kann kein Modell auflösen. Deshalb ist die Bestellhistorie pro Kunde die wichtigste Datenquelle, und deshalb starten wir mit den zehn Kunden, die am meisten und am regelmäßigsten anfragen. Alles andere kommt später oder bleibt Handarbeit.

## Was ihr dafür braucht

- Lesezugriff auf Artikelstamm und Preise: bei SAP über den OData-Dienst für Kundenaufträge oder einen täglichen Export, bei anderen ERP-Systemen ein CSV-Export genügt zum Start
- 20 bis 30 alte Anfragen mit dem daraus entstandenen Angebot als Testfälle, an denen wir die Trefferquote messen
- Eine Person im Vertrieb, die zwei Wochen lang Entwürfe mit "passt", "geändert" oder "verworfen" markiert

## Warum dieses Paket

Ein abgegrenzter Prozess mit klarem Vorher-Nachher. Vier Wochen reichen, um den Workflow in Produktion zu bringen und zu übergeben. Wenn ihr noch nicht sicher seid, ob dieser oder ein anderer Prozess zuerst dran ist, klärt das der Readiness-Check in zwei Stunden.
