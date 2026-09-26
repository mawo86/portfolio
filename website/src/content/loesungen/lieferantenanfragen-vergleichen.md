---
title: "Lieferantenangebote vergleichen, ohne Excel-Nachmittag"
problem: "Drei Lieferanten, drei PDF-Angebote, drei verschiedene Strukturen. Der Einkauf tippt alles in eine Tabelle, bevor überhaupt verglichen werden kann."
description: "Angebote werden ausgelesen, auf eine gemeinsame Struktur gebracht und mit Abweichungen, Konditionen und Risiken gegenübergestellt."
bereich: "Einkauf & Logistik"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Zahlen und Reporting"]
branchen: ["Fertigung", "Bau", "Handel"]
werkzeuge: ["Claude (Dokumentenerkennung)", "n8n", "Excel oder SAP MM", "E-Mail"]
aufwand: "4 bis 7 Tage"
einsparung: "2 bis 5 Std. pro Ausschreibung"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: true
blogKategorien: ["Automatisierung", "SAP & Enterprise"]
prio: 62
date: 2026-09-26
---

## Wo es hakt

Jeder Lieferant baut sein Angebot anders auf. Vor dem Vergleich steht das Übertragen, und dabei passieren Fehler bei Einheiten, Staffelpreisen und Nebenkosten. Der eigentliche Einkaufsjob, verhandeln und entscheiden, kommt zu kurz.

## Was wir bauen

Angebote zu einer Anfrage landen im Postfach und werden über die Anfragenummer im Betreff oder einen Ordner pro Vorgang gesammelt. Das Sprachmodell liest jedes Angebot als Bild und Text und liefert Positionen, Mengen, Einheiten, Einzel- und Staffelpreise, Nebenkosten, Zahlungsbedingungen und Gültigkeit als Tabelle. Danach rechnet der Workflow, nicht das Modell: Einheiten werden umgerechnet, Staffeln auf eure Anfragemenge bezogen, Fracht anteilig verteilt, und die Positionssummen aus dem Angebot werden gegen die extrahierten Einzelwerte nachgerechnet. Stimmt eine Summe nicht, ist die Position markiert, das fängt Lesefehler. Ergebnis ist eine Excel-Tabelle mit Formeln (Summen rechnet Excel) und einer kurzen, faktischen Kommentarspalte. Wer in SAP arbeitet, bekommt die Werte als Angebote im System (Dienst API_SUPPLIERQUOTATION), damit der Preisspiegel (ME49) sie vergleicht.

## Was das bringt

Der Preisspiegel in SAP existiert seit jeher, aber er vergleicht nur, was vorher jemand eingetippt hat. Das Tippen ist der Teil, der wegfällt. Eine externe Studie zur Zeitersparnis im Angebotsvergleich habe ich nicht gefunden. Mein Erfahrungswert: 2 bis 5 Stunden pro Ausschreibung bei drei bis vier Angeboten, bei vielen kleinen Ausschreibungen summiert sich das auf einen Tag pro Woche. Der Nutzen, der sich nicht in Stunden misst: Ersatzartikel, abweichende Mengen und Nebenkosten fallen auf, bevor bestellt ist.

## Wo es schwierig wird

Einheiten. Stück, Karton, Palette, Kilogramm, Meter, und jeder Lieferant meint etwas anderes. Ohne eine Umrechnungstabelle pro Artikelgruppe vergleicht man Äpfel mit Kartons. Zweitens gilt für öffentliche Auftraggeber Vergaberecht mit eigenen Regeln, das ist ein anderes Projekt. Drittens sind Angebote Geschäftsgeheimnisse, deshalb bleiben sie in eurem SharePoint und das Protokoll speichert keine Preise.

## Was ihr dafür braucht

- Eure Anfragen und die zugehörigen Angebote der letzten Monate als Testmaterial
- Eine Vorstellung, welche Kriterien euch neben dem Preis wichtig sind
- Zugriff auf das Postfach, in dem Angebote landen

## Warum dieses Paket

Klarer Prozess, klar messbarer Nutzen, vier Wochen. Mit SAP-MM-Anbindung wird daraus in der Begleitung ein durchgängiger Bestellprozess.
