---
title: "Stammdaten in SAP bereinigen und sauber halten"
problem: "Denselben Kunden gibt es dreimal, Materialtexte sind kryptisch, Adressen veraltet. Jede Auswertung beginnt mit Aufräumen, jede Automatisierung scheitert an den Daten."
description: "Dubletten, Lücken und Widersprüche in Kunden-, Lieferanten- und Materialstamm werden erkannt, Korrekturvorschläge erzeugt und neue Datensätze beim Anlegen geprüft."
bereich: "SAP-Prozesse"
zeitprobleme: ["Fehler und Nacharbeit", "Zahlen und Reporting"]
branchen: ["Fertigung", "Handel", "Dienstleistung"]
werkzeuge: ["SAP MM/SD/FI Stammdaten", "Claude", "Python oder n8n", "Excel für Freigabelisten"]
aufwand: "8 bis 12 Tage, dann laufend"
einsparung: "Grundlage für alle weiteren Automatisierungen"
paket: "begleitung"
reifegrad: "Fortgeschritten"
sapNah: true
blogKategorien: ["SAP & Enterprise", "Strategie"]
prio: 70
date: 2026-09-26
---

## Wo es hakt

Schlechte Stammdaten sind der stille Grund, warum KI-Projekte im Mittelstand scheitern. Die Automatisierung ist fertig, aber sie findet den Kunden nicht, weil er unter drei Schreibweisen existiert. Bereinigung wird aufgeschoben, weil sie groß und undankbar wirkt.

## Was wir bauen

Stufe eins ist Analyse ohne Sprachmodell. Ein Skript zieht Kunden-, Lieferanten- oder Materialstamm als Export, normalisiert Namen (Rechtsformen, Sonderzeichen, Schreibweisen), Adressen und Kennungen wie USt-ID und IBAN und findet Kandidatenpaare über unscharfe Ähnlichkeit. Grenzfälle, bei denen Regeln nicht reichen ("Müller GmbH, Hauptstr. 1" gegen "Mueller GmbH & Co. KG, Hauptstraße 1a"), bekommt das Sprachmodell paarweise vorgelegt und antwortet mit "Dublette", "verschieden" oder "unklar" plus Begründung. Ergebnis sind Excel-Freigabelisten pro Verantwortlichem mit Vorschlag für den führenden Datensatz. Kein Skript schreibt in SAP. Stufe zwei hängt sich an den Anlageprozess: Neue Datensätze werden gegen den Bestand geprüft, bei Verdacht bekommen Anleger und Verantwortlicher eine Nachricht mit dem vorhandenen Satz. In S/4HANA nutzen wir dafür die eingebaute Dublettenprüfung für Geschäftspartner auf Basis der unscharfen HANA-Suche, unser Teil ist die Konfiguration und die zweite Prüfstufe.

## Was das bringt

Wie verbreitet das Problem ist, zeigen mehrere Erhebungen: In einer Planat-Studie bewertete nur ein Prozent der befragten Fachleute die Datenqualität in mittelständischen Fertigern als "sehr hoch". Uniserv fand bei jedem dritten Unternehmen fehlerhafte Postadressen im Kundenstamm und bei jedem fünften Rücksendungen wegen unvollständiger oder doppelter Kundendaten. Der Nutzen der Bereinigung selbst ist schwer in Stunden zu fassen. Er zeigt sich dort, wo Automatisierungen sonst scheitern: Die Auftragsprüfung findet den Kunden, der Rechnungseingang den Lieferanten, die Kontierung ihre Kandidaten. Was wir messen können: Dublettenquote und Füllgrad der Pflichtfelder vorher und nachher.

## Wo es schwierig wird

Zusammenführen zerstört Historie, wenn es falsch war. Deshalb entscheidet immer ein Mensch, und deshalb lieber weniger Vorschläge als falsche. Zweitens ist Bereinigung ohne Anlageprüfung Sisyphusarbeit, in einem Jahr ist der Stamm wieder schmutzig. Drittens: Ohne einen Verantwortlichen pro Stammdatenart, der Nein sagen darf, bleibt jede Liste liegen. Das ist eine Organisationsfrage, keine technische.

## Was ihr dafür braucht

- Exporte der relevanten Stammdaten (Kunden, Lieferanten, Material)
- Verantwortliche in den Fachabteilungen, die Korrekturen freigeben dürfen
- Eine Regel, wer künftig Stammdaten anlegen darf

## Warum dieses Paket

Bereinigung ist kein Vier-Wochen-Projekt, sondern ein Prozess, der laufend gepflegt werden muss. In der Begleitung erledigen wir die Analyse zuerst und bauen dann die Prüfung beim Anlegen ein, parallel zu den Automatisierungen, die davon profitieren.
