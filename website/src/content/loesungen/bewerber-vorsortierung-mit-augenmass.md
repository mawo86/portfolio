---
title: "Bewerbungen vorsortieren, ohne die Regeln zu brechen"
problem: "Auf eine Stelle kommen 80 Bewerbungen. Sichten dauert Tage, gute Kandidaten springen ab. Gleichzeitig ist automatische Auswahl im Bewerbungsprozess nach EU AI Act Hochrisiko."
description: "Bewerbungen werden strukturiert zusammengefasst und gegen die Anforderungen gespiegelt. Die Entscheidung bleibt beim Menschen, und das ist dokumentiert."
bereich: "HR"
zeitprobleme: ["Informationen suchen", "Regeln und Unsicherheit"]
branchen: ["Fertigung", "Dienstleistung", "Handel"]
werkzeuge: ["Claude", "Bewerbermanagement-System", "n8n", "Dokumentation nach EU AI Act"]
aufwand: "6 bis 10 Tage"
einsparung: "1 bis 2 Tage pro Stellenbesetzung"
paket: "tagessatz"
reifegrad: "Fortgeschritten"
sapNah: false
blogKategorien: ["Datenschutz", "Strategie"]
prio: 55
date: 2026-09-26
---

## Wo es hakt

Sichten ist Zeitfresser Nummer eins im Recruiting. Gleichzeitig ist Vorsicht geboten: KI-Systeme, die über Bewerber entscheiden oder sie ranken, gelten nach EU AI Act als Hochrisiko mit strengen Pflichten. Viele Anbieter verkaufen genau das, ohne es zu sagen.

## Was wir bauen

Jede Bewerbung wird vor der Verarbeitung anonymisiert, soweit möglich: Name, Foto, Geburtsdatum raus. Das Sprachmodell bekommt die Unterlagen und euer Anforderungsprofil (Muss, Soll, Kann) und erzeugt ein Profil in fester Struktur: Qualifikationen, Erfahrung, je Anforderung "belegt", "nicht belegt" oder "offen" mit Verweis auf die Stelle in den Unterlagen, dazu Fragen fürs Gespräch. Was es nicht erzeugt: einen Score, eine Rangfolge, eine Empfehlung, ein Adjektiv über die Person. Das Profil landet als Freitext-Notiz im Bewerbermanagement, technisch nicht sortierbar. Vor jeder Änderung an Modell oder Anweisung läuft ein Neutralitätstest: Bewerbungspaare, die sich nur in Name, Geschlecht oder Alter unterscheiden, müssen identische Ausgaben erzeugen. Verarbeitungsprotokoll und Profil werden mit der Bewerbung gelöscht.

## Was das bringt

Der Rechtsrahmen ist eindeutiger als bei den meisten KI-Themen. Anhang III der KI-Verordnung stuft Systeme zur Einstellung und Auswahl natürlicher Personen, insbesondere zum Filtern und Bewerten von Bewerbungen, als Hochrisiko ein, und schon eine wesentliche Beeinflussung der Entscheidung durch Ranking oder Scoring reicht dafür. Die Kernpflichten dafür gelten nach dem Digital Omnibus (Verordnung (EU) 2026/1744) ab dem 2. Dezember 2027 statt August 2026. Wer heute ein Ranking-Tool kauft, kauft also ein System, das er in gut einem Jahr mit Konformitätsbewertung, Dokumentation und Registrierung betreiben muss. Wer stattdessen Zusammenfassung und Spiegelung ohne Wertung baut, bleibt außerhalb, und spart trotzdem: Mein Erfahrungswert sind ein bis zwei Tage Sichtzeit pro Stellenbesetzung, extern habe ich dazu keine Zahl gefunden, die auf diese abgespeckte Variante passt.

## Wo es schwierig wird

"Nur ein kleiner Score zur Orientierung" ist der Satz, mit dem es Hochrisiko wird. Nein, auch nicht klein. Zweitens der Betriebsrat: Auswahlrichtlinien sind nach § 95 BetrVG mitbestimmungspflichtig, und ein System, das auf Firmenrechnern Bewerbungen verarbeitet und protokolliert, dürfte auch unter § 87 fallen. Ohne den Betriebsrat am Tisch ist das Projekt vor dem ersten Test zu Ende. Drittens: Anonymisierung ist nie vollständig, ein Lebenslauf verrät das Alter über die Jahreszahlen. Deshalb der Neutralitätstest, nicht das Vertrauen.

## Was ihr dafür braucht

- Anforderungsprofile für die Stellen, die ihr besetzen wollt
- Einbindung von Betriebsrat und Datenschutz von Anfang an
- Ein Bewerbermanagement-System oder zumindest ein strukturierter Ablageordner

## Warum dieses Paket

Hier geht Beratung vor Bau: Abgrenzung zum Hochrisiko-Bereich, Betriebsrat, Datenschutz, Dokumentation. Das passt als Workshop plus Umsetzung über den Tagessatz. Der technische Teil ist danach klein.
