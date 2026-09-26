---
title: "CRM-Pflege und Nachfassen ohne Nachdenken"
problem: "Nach dem Kundengespräch bleibt das CRM leer, weil niemand Lust auf Datenpflege hat. Nachfassen passiert, wenn es gerade einfällt. Also selten."
description: "Gesprächsnotizen wandern automatisch strukturiert ins CRM, Nachfass-Termine und Entwürfe entstehen von selbst."
bereich: "Vertrieb"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Dienstleistung", "Fertigung", "Handel"]
werkzeuge: ["Claude", "n8n", "CRM (HubSpot, Pipedrive, Dynamics, SAP CX)", "Teams oder Outlook"]
aufwand: "6 bis 10 Tage"
einsparung: "2 bis 4 Std./Woche pro Vertriebler"
paket: "pilot-projekt"
reifegrad: "Fortgeschritten"
sapNah: false
blogKategorien: ["Automatisierung", "Tools & Setup"]
prio: 70
date: 2026-09-26
---

## Wo es hakt

Vertriebler verkaufen gern und dokumentieren ungern. Das Ergebnis: Das CRM zeigt einen Stand von vor drei Wochen, Prognosen stimmen nicht, und der Kollege, der einspringt, weiß nichts. Nachfassen hängt an Erinnerung und Disziplin.

## Was wir bauen

Nach dem Termin spricht der Vertriebler eine Minute ins Firmenhandy oder schreibt drei Zeilen in einen Teams-Chat. Der Workflow wandelt Sprache in Text und lässt das Sprachmodell daraus genau fünf Felder füllen: Status, nächster Schritt, Termin dafür, Entscheider, geschätztes Volumen. Der Kunde wird über den Namen im CRM gefunden, bei Mehrdeutigkeit fragt der Bot nach, statt zu raten. Fehlt ein Pflichtfeld, kommt eine kurze Rückfrage. Der Vertriebler sieht eine Karte mit Vorher und Nachher und bestätigt mit einem Klick, erst dann schreibt der Workflow über die CRM-Schnittstelle (HubSpot, Pipedrive, Dynamics, SAP Sales Cloud). Parallel entstehen ein Kalendereintrag für den Nachfass-Termin und ein Entwurf für die Follow-up-Mail im Postfach. Gesendet wird nichts automatisch.

## Was das bringt

Das Problem ist gut vermessen. Salesforce fand im "State of Sales"-Report 2024, dass Vertriebsmitarbeitende nur rund ein Viertel bis 30 Prozent ihrer Zeit mit Verkaufen verbringen, der Rest geht in Dateneingabe, Nachbereitung und interne Abstimmung. Und B2B-Kontaktdaten veralten schnell: Je nach Quelle wechseln pro Jahr 22 bis 70 Prozent der Kontakte Position, Telefonnummer oder E-Mail, die häufig zitierte Faustregel liegt bei rund 30 Prozent jährlich. Ein CRM, das nicht direkt nach dem Termin gepflegt wird, ist deshalb in einem Jahr zur Hälfte falsch.

Zur Zeitersparnis: Mein Erfahrungswert sind 2 bis 4 Stunden pro Woche und Vertriebler. Messbar ist etwas anderes sofort: der Anteil der Termine, die innerhalb von 24 Stunden dokumentiert sind.

## Wo es schwierig wird

Fünf Felder, nicht fünfzehn. Das ist der häufigste Grund, warum CRM-Pflege scheitert, mit oder ohne KI. Zweitens raten wir nicht: Ein geratenes Volumen im Forecast ist schlimmer als ein leeres Feld, deshalb die Rückfrage. Drittens Privatgeräte: WhatsApp auf dem privaten Handy ist ein Datenschutz- und Arbeitsrechtsthema, deshalb Firmenhandy oder Teams. Und wenn das Werkzeug zur Leistungskontrolle wird, nutzt es niemand mehr. Das sage ich dem Vertriebsleiter vorher.

## Was ihr dafür braucht

- Ein CRM mit API oder Import-Schnittstelle
- Zwei bis drei Vertriebler, die vier Wochen mitmachen
- Eine Entscheidung, welche Felder wirklich gepflegt werden müssen (weniger ist mehr)

## Warum dieses Paket

Der Workflow ist technisch überschaubar, die Hürde ist die Gewohnheit. Vier Wochen mit wöchentlichem Check-in reichen, um beides zu schaffen. Danach lohnt sich die Begleitung, um weitere Prozesse im Vertrieb anzuschließen.
