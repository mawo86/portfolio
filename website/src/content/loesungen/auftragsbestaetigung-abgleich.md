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

Der Workflow liest jede Auftragsbestätigung aus dem Postfach, findet die Bestellung im ERP und vergleicht Position für Position: Menge, Preis, Termin, Artikelnummer. Passt alles, wird der Bestätigungsstatus gesetzt. Weicht etwas ab, bekommt der zuständige Einkäufer eine kurze Nachricht mit dem Unterschied und einem Antwortentwurf an den Lieferanten.

## Was das bringt

Die Einsparung liegt bei 3 bis 6 Stunden pro Woche, Erfahrungswert aus vergleichbaren Prozessen. Der größere Nutzen liegt in den vermiedenen Folgekosten: Terminabweichungen sind Wochen früher bekannt, Preisdifferenzen werden vor der Rechnung geklärt.

## Was ihr dafür braucht

- Lesezugriff auf Bestellungen im ERP und Schreibzugriff auf den Bestätigungsstatus (oder eine Liste, die der Einkauf abarbeitet)
- Zugriff auf das Postfach für Auftragsbestätigungen
- 30 alte Bestätigungen mit den Bestellungen als Testmaterial

## Warum dieses Paket

Ein sauber abgegrenzter Prozess mit klarem Vorher-Nachher. Bei SAP-Kunden ist die Schnittstelle bekannt, der Pilot läuft in vier Wochen.
