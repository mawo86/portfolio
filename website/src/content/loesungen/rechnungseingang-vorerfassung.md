---
title: "Eingangsrechnungen erkennen, prüfen, vorerfassen"
problem: "Rechnungen kommen als PDF, Papier und Portal-Download. Jemand tippt Lieferant, Betrag und Kostenstelle ab, sucht die Bestellung und hofft, dass die Summen stimmen."
description: "Eingangsrechnungen werden automatisch ausgelesen, mit Bestellung und Wareneingang abgeglichen und als Buchungsvorschlag vorerfasst."
bereich: "Backoffice & Buchhaltung"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Handel", "Bau", "Dienstleistung"]
werkzeuge: ["Claude (Dokumentenerkennung)", "n8n", "SAP FI/MM oder DATEV", "E-Mail-Postfach oder Scan-Ordner"]
aufwand: "8 bis 12 Tage"
einsparung: "5 bis 10 Std./Woche in der Buchhaltung, Erfahrungswert"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Automatisierung", "SAP & Enterprise", "Branchen"]
prio: 86
date: 2026-09-26
---

## Wo es hakt

Rechnungserfassung ist reine Übertragungsarbeit mit hohem Fehlerrisiko. Der Abgleich mit Bestellung und Wareneingang passiert oft gar nicht oder erst bei Auffälligkeiten. Skonto verfällt, weil Rechnungen liegen bleiben.

## Was wir bauen

Jede Rechnung aus Postfach oder Scan-Ordner wird zuerst auf ihr Format geprüft. Strukturierte E-Rechnungen (XRechnung, ZUGFeRD) werden direkt aus dem XML gelesen, dafür braucht es kein Sprachmodell. Bei PDF, Scan und Foto bekommt das Modell jede Seite als Bild und Text und liefert Lieferant, Rechnungsnummer, Datum, Positionen, Netto, Steuer, Brutto, Bestellnummer, Bankverbindung und Zahlungsbedingung als Tabelle mit Sicherheitswert. Der Lieferant wird über USt-ID, IBAN oder Name im Stamm gefunden, eine abweichende Bankverbindung ist immer rot. Dann der Abgleich, den SAP selbst Dreiwegeabgleich nennt: Bestellung und Wareneingang werden gelesen, Positionen und Beträge mit euren Toleranzen verglichen. Passt alles, legt der Workflow den Beleg über den OData-Dienst API_SUPPLIERINVOICE_PROCESS_SRV als vorerfasst an, nicht gebucht. Bei DATEV ist es ein Belegimport. Das Original-PDF geht unverändert ins Archiv. Die Buchhaltung sieht morgens eine Ampel-Liste und bucht statt zu tippen.

## Was das bringt

Die Kosten der Handarbeit sind gut untersucht, wenn auch für den US-Markt: Ardent Partners nennt in "State of ePayables 2025" rund 10,89 US-Dollar pro manuell verarbeiteter Rechnung, Spitzenreiter mit automatischer Erfassung und Abgleich kommen auf 2,78 Dollar. Das Institute of Finance and Management rechnet mit 10 bis 15 Dollar pro Rechnung. Deutsche Zahlen aus Beraterquellen liegen mit 12 bis 15 Euro ähnlich, sind aber ohne Methodik.

Dazu kommt der Zwang von außen: Seit dem 1. Januar 2025 müssen Unternehmen in Deutschland E-Rechnungen empfangen und verarbeiten können (Wachstumschancengesetz). Bitkom hat 2025 bei 1.103 Unternehmen ab 20 Beschäftigten erhoben, dass erst 45 Prozent das können, während 96 Prozent Rechnungen per E-Mail bekommen. Wer den Eingang jetzt ohnehin anfassen muss, kann den Abgleich gleich mitnehmen.

Mein Erfahrungswert für die Buchhaltung eines Mittelständlers mit 200 bis 500 Rechnungen im Monat: 5 bis 10 Stunden pro Woche, plus Skonto, das nicht mehr verfällt.

## Wo es schwierig wird

Toleranzen. Zu eng gesetzt, erzeugen Rundungsdifferenzen und Frachtpauschalen lauter gelbe Ampeln, und die Buchhaltung prüft wieder alles. SAP hat dafür eigene Toleranzschlüssel, die wir übernehmen statt neu erfinden. Zweitens die GoBD: Das Verfahren muss dokumentiert sein, das Original unverändert bleiben, und eine fehlende Verfahrensdokumentation gilt als formeller Mangel. Das schreiben wir im Projekt mit, nicht danach. Drittens Rechnungen ohne Bestellbezug: Die brauchen einen Kontierungsvorschlag statt eines Abgleichs, das ist ein eigenes Vorhaben.

## Was ihr dafür braucht

- Zugriff auf das Rechnungspostfach oder den Scan-Ordner
- Schreibzugriff auf Vorerfassung im ERP (oder ein Import-Format, das eure Buchhaltung akzeptiert)
- 50 alte Rechnungen mit korrekter Buchung als Testdaten

## Warum dieses Paket

Hoher, sofort sichtbarer Nutzen bei überschaubarer Technik. Ein Klassiker für den ersten Piloten, besonders bei SAP-Mittelständlern, wo die Vorerfassung schon vorhanden ist.
