---
title: "Kundenaufträge vor der Anlage in SAP SD prüfen"
problem: "Bestellungen kommen als PDF, Excel oder freier Text. Der Innendienst tippt sie in SAP ab, und Fehler bei Artikelnummer, Menge oder Lieferadresse fallen erst beim Kunden auf."
description: "Eingehende Bestellungen werden ausgelesen, gegen Stammdaten und Preise geprüft und als vollständiger Auftragsentwurf für SAP SD vorbereitet."
bereich: "SAP-Prozesse"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Handel", "Großhandel"]
werkzeuge: ["SAP SD", "Claude (Dokumentenerkennung)", "n8n oder SAP BTP", "Outlook"]
aufwand: "10 bis 15 Tage"
einsparung: "8 bis 15 Std./Woche im Innendienst"
paket: "pilot-projekt"
reifegrad: "Fortgeschritten"
sapNah: true
blogKategorien: ["SAP & Enterprise", "Automatisierung"]
prio: 89
date: 2026-09-26
---

## Wo es hakt

Die Auftragserfassung ist der größte manuelle Block im Innendienst von SAP-Mittelständlern. Kunden bestellen in ihrem Format, nicht in eurem. Jede Übertragung ist eine Fehlerquelle, und jeder Fehler kostet Rücksendung, Gutschrift und Vertrauen.

## Was wir bauen

Der Workflow liest jede eingehende Bestellung aus, erkennt Kunde, Positionen, Mengen, Wunschtermin und Lieferadresse und gleicht mit Kundenstamm, Materialstamm und Kundenpreisen ab. Unbekannte Artikelnummern werden über eure Zuordnungstabelle oder die Bestellhistorie aufgelöst. Das Ergebnis ist ein fertiger Auftragsentwurf mit markierten Auffälligkeiten, den der Innendienst prüft und mit einem Klick in SAP anlegt.

## Was das bringt

Die Einsparung liegt bei 8 bis 15 Stunden pro Woche im Innendienst, Erfahrungswert aus vergleichbaren Prozessen. Fehlerquote und Rücksendungen sinken. Die Auftragsbestätigung geht innerhalb einer Stunde raus, was Kunden merken.

## Was ihr dafür braucht

- Lesezugriff auf Kunden-, Material- und Preisstammdaten
- Eine abgestimmte Schnittstelle für die Auftragsanlage (BAPI, IDoc oder Upload-Vorlage)
- 50 alte Bestellungen mit den zugehörigen SAP-Aufträgen als Testmaterial

## Warum dieses Paket

Der wirtschaftlich stärkste Fall in meinem Schwerpunkt. Vier Wochen für eine Kundengruppe oder einen Bestellkanal, danach Ausweitung in der Begleitung.
