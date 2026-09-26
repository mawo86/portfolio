---
title: "Eingangsrechnungen erkennen, prüfen, vorerfassen"
problem: "Rechnungen kommen als PDF, Papier und Portal-Download. Jemand tippt Lieferant, Betrag und Kostenstelle ab, sucht die Bestellung und hofft, dass die Summen stimmen."
description: "Eingangsrechnungen werden automatisch ausgelesen, mit Bestellung und Wareneingang abgeglichen und als Buchungsvorschlag vorerfasst."
bereich: "Backoffice & Buchhaltung"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Handel", "Bau", "Dienstleistung"]
werkzeuge: ["Claude (Dokumentenerkennung)", "n8n", "SAP FI/MM oder DATEV", "E-Mail-Postfach oder Scan-Ordner"]
aufwand: "8 bis 12 Tage"
einsparung: "5 bis 10 Std./Woche in der Buchhaltung"
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

Ein Workflow liest jede eingehende Rechnung aus, egal ob PDF, Scan oder Foto, und erkennt Lieferant, Positionen, Beträge, Steuersätze und Bestellbezug. Er gleicht mit Bestellung und Wareneingang ab, markiert Abweichungen und legt einen Buchungsvorschlag im ERP an. Die Buchhaltung prüft und bucht, statt zu tippen.

## Was das bringt

Die Einsparung liegt bei 5 bis 10 Stunden pro Woche, Erfahrungswert aus vergleichbaren Prozessen. Abweichungen fallen sofort auf, nicht erst im Monatsabschluss. Skontofristen werden eingehalten, weil nichts mehr liegen bleibt.

## Was ihr dafür braucht

- Zugriff auf das Rechnungspostfach oder den Scan-Ordner
- Schreibzugriff auf Vorerfassung im ERP (oder ein Import-Format, das eure Buchhaltung akzeptiert)
- 50 alte Rechnungen mit korrekter Buchung als Testdaten

## Warum dieses Paket

Hoher, sofort sichtbarer Nutzen bei überschaubarer Technik. Ein Klassiker für den ersten Piloten, besonders bei SAP-Mittelständlern, wo die Vorerfassung schon vorhanden ist.
