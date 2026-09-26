---
title: "Eingehende Anfragen bewerten und richtig verteilen"
problem: "Website-Formular, Info-Postfach, Messe-Kontakte: Alles landet ungefiltert bei denselben zwei Leuten. Gute Anfragen warten, schlechte kosten Zeit."
description: "Jede eingehende Anfrage wird automatisch nach Passung und Dringlichkeit bewertet, angereichert und an die richtige Person geleitet."
bereich: "Vertrieb"
zeitprobleme: ["Warten auf Antworten", "Informationen suchen"]
branchen: ["Dienstleistung", "Fertigung", "Handel", "Handwerk"]
werkzeuge: ["n8n oder Make", "Claude", "CRM (HubSpot, Pipedrive, SAP CX)", "Formspree oder Website-Formular"]
aufwand: "5 bis 8 Tage"
einsparung: "3 bis 6 Std./Woche, schnellere Erstantwort"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: false
blogKategorien: ["Automatisierung", "Strategie"]
prio: 85
date: 2026-09-26
---

## Wo es hakt

Anfragen sind ungleich wertvoll, werden aber gleich behandelt. Die Einschätzung "lohnt sich das" passiert im Kopf einer erfahrenen Person, und wenn die im Urlaub ist, passiert sie gar nicht. Erstantworten dauern, Rückfragen werden vergessen.

## Was wir bauen

Jede Anfrage aus Formular, Postfach oder Messe-Scan landet in einem Workflow. Aus der E-Mail-Domain holt er die Firmenwebsite, liest Startseite und Impressum und fasst zusammen: Branche, Größe, Produkte, Region. Nur öffentliche Quellen, keine Personenprofile. Dann bewertet das Sprachmodell die Anfrage gegen eure fünf Kriterien (Branche, Größe, Thema, Region, Dringlichkeit) und gibt eine Passung von 1 bis 5 mit einem Satz Begründung zurück, plus Spam-Verdacht. Über eine Zuständigkeitstabelle (Region, Produkt, Größe) geht die Anfrage an die richtige Person, als Teams-Nachricht und als Datensatz im CRM mit Kurzprofil und Bewertung. Für Passung 4 und 5 legt der Workflow einen Antwortentwurf im Postfach des Zuständigen ab. Gesendet wird nichts automatisch, Spam wird nie gelöscht, nur in einen Ordner verschoben.

## Was das bringt

Warum die Geschwindigkeit der Erstantwort so viel ausmacht, ist eine der am besten belegten Zahlen im Vertrieb: Eine Untersuchung von 1,25 Millionen Anfragen bei 42 Unternehmen (Oldroyd, McElheran, Elkington, Harvard Business Review, März 2011) zeigte, dass Unternehmen, die innerhalb einer Stunde reagierten, die Anfrage fast siebenmal so oft qualifizieren konnten wie solche, die eine Stunde später anriefen. Dieselbe Untersuchung fand bei 2.241 geprüften Unternehmen eine durchschnittliche Antwortzeit von 42 Stunden, 23 Prozent antworteten gar nicht. Die Zahlen sind aus den USA und über zehn Jahre alt, das Muster hat sich in meiner Erfahrung nicht geändert.

Zur Zeitersparnis im Team habe ich extern nichts Belastbares gefunden. Mein Erfahrungswert: 3 bis 6 Stunden pro Woche. Der Effekt, der zählt: Der Antwortentwurf liegt zehn Minuten nach Eingang bereit.

## Wo es schwierig wird

Fünf Kriterien reichen, bei zehn wird die Bewertung unschärfer statt schärfer. Zweitens der Spam-Filter: Eine echte Anfrage im Spam-Ordner kostet mehr als zwanzig Spam-Mails beim Menschen, deshalb ist der Filter bewusst vorsichtig eingestellt. Drittens die Anreicherung: Die Firmenwebsite ist erlaubt, Personenprofile in sozialen Netzwerken sind ein Datenschutzproblem, das wir nicht anfassen.

## Was ihr dafür braucht

- Eure Kriterien, was eine gute Anfrage ist (drei bis fünf Fragen reichen)
- Zugriff auf Postfach oder Formular-Backend und auf das CRM
- Klare Zuständigkeiten: Wer bekommt was?

## Warum dieses Paket

Klein genug für vier Wochen, groß genug, dass es sich jeden Tag bemerkbar macht. Ideal als erster Pilot, weil kein ERP-Zugriff nötig ist.
