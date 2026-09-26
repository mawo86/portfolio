---
title: "Auftragsbestätigungen automatisch mit der Bestellung abgleichen"
problem: "Die Auftragsbestätigung des Lieferanten wird abgelegt, nicht gelesen. Dass Preis oder Liefertermin abweichen, merkt man beim Wareneingang. Oder bei der Rechnung."
description: "Jede Auftragsbestätigung wird gegen die Bestellung geprüft. Abweichungen bei Menge, Preis und Termin landen sofort auf dem Tisch."
bereich: "Einkauf & Logistik"
zeitprobleme: ["Fehler und Nacharbeit", "Informationen suchen"]
branchen: ["Fertigung", "Handel", "Bau"]
werkzeuge: ["Claude (Dokumentenerkennung)", "n8n", "SAP MM oder anderes ERP"]
aufwand: "5 bis 8 Tage"
einsparung: "3 bis 6 Std./Woche, weniger Fehllieferungen"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Automatisierung", "SAP & Enterprise"]
prio: 68
date: 2026-09-26
---

## Wo es hakt

Der Abgleich ist wichtig und wird trotzdem übersprungen, weil er stumpf ist. Abweichungen kosten später ein Vielfaches: verschobene Produktion, Nachverhandlung, Rechnungsklärung. Im ERP steht der Bestellstatus falsch, bis jemand nachpflegt.

## Was wir bauen

Der Workflow liest jede Auftragsbestätigung aus dem Postfach. Das Sprachmodell extrahiert Lieferant, eure Bestellnummer, Positionen mit Menge, Preis und Termin. Dann findet der Workflow die Bestellung in SAP, in S/4HANA über den OData-V4-Dienst für Bestellungen (API_PURCHASEORDER_2, der Vorgänger API_PURCHASEORDER_PROCESS_SRV ist seit Release 2308 abgekündigt), im ECC über RFC. Der Vergleich ist deterministisch: Position für Position Menge, Nettopreis pro Einheit und Termin gegen eure Toleranzen. Passt alles, schreibt der Workflow einen Bestätigungssatz in die Bestellposition, genau dort, wo SAP ihn mit der Bestätigungssteuerung erwartet, damit der Status im System sichtbar ist und die Überwachung (ME92F) grün zeigt. Weicht etwas ab, geht eine Nachricht an den Einkäufer mit dem Unterschied und einem Antwortentwurf an den Lieferanten. Der Workflow ändert nie Kopf oder Positionen der Bestellung.

## Was das bringt

SAP hat den Prozess seit Jahrzehnten vorgesehen: Bestätigungssteuerschlüssel, Bestätigungsarten, Überwachung offener Bestätigungen. Was fehlt, ist der Schritt vom PDF in den Bestätigungssatz, und genau den bauen wir. Die Extraktion aus PDF und E-Mail ist dieselbe Technik wie bei Rechnungseingang und Auftragsprüfung, mit denselben Grenzen.

Eine externe Zahl zur Zeitersparnis gibt es dafür nicht, ich habe keine gefunden. Mein Erfahrungswert: 3 bis 6 Stunden pro Woche im Einkauf. Der größere Effekt ist in Euro schwer zu greifen und trotzdem der Grund für das Projekt: Terminabweichungen sind Wochen früher bekannt, Preisdifferenzen werden vor der Rechnung geklärt statt in der Rechnungsprüfung.

## Wo es schwierig wird

Ein falsches "passt" ist schlimmer als jede Fehlmeldung, deshalb im Zweifel als Abweichung melden. Zweitens funktioniert der Weg nur, wenn eure Bestellarten Bestätigungen überhaupt erwarten (Customizing der Bestätigungssteuerung), das prüfen wir am ersten Tag. Drittens schreiben Lieferanten eure Bestellnummer gern falsch oder gar nicht, dann braucht es den Fallback über Lieferant, Datum und Positionen, und der ist unschärfer.

## Was ihr dafür braucht

- Lesezugriff auf Bestellungen im ERP und Schreibzugriff auf den Bestätigungsstatus (oder eine Liste, die der Einkauf abarbeitet)
- Zugriff auf das Postfach für Auftragsbestätigungen
- 30 alte Bestätigungen mit den Bestellungen als Testmaterial

## Warum dieses Paket

Ein sauber abgegrenzter Prozess mit klarem Vorher-Nachher. Bei SAP-Kunden ist die Schnittstelle bekannt, der Pilot läuft in vier Wochen.
