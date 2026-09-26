---
title: "Service-Anfragen automatisch sortieren und priorisieren"
problem: "Im Service-Postfach liegen Reklamation, Rechnungsfrage und Ersatzteilbestellung nebeneinander. Jemand sortiert von Hand, und die dringende Störung wartet hinter dem Newsletter-Abmelder."
description: "Jede Service-Anfrage wird beim Eingang erkannt, kategorisiert, mit Dringlichkeit versehen und an das richtige Team geleitet."
bereich: "Kundenservice"
zeitprobleme: ["Informationen suchen", "Warten auf Antworten"]
branchen: ["Fertigung", "Handel", "Dienstleistung", "Software"]
werkzeuge: ["Claude", "n8n", "Ticketsystem (Zendesk, Freshdesk, Jira Service Management, SAP Service Cloud)", "Shared Mailbox"]
aufwand: "5 bis 8 Tage"
einsparung: "5 bis 10 Std./Woche im Service-Team, Erfahrungswert"
paket: "pilot-projekt"
reifegrad: "Einstieg"
sapNah: false
blogKategorien: ["Automatisierung", "Branchen"]
prio: 88
date: 2026-09-26
---

## Wo es hakt

Die Sortierung ist die unsichtbare Arbeit im Service. Sie kostet jeden Morgen eine Stunde, macht niemandem Spaß und entscheidet trotzdem darüber, ob der wichtige Kunde schnell dran ist. Bei Krankheit oder Urlaub bricht sie als Erstes weg.

## Was wir bauen

Jede eingehende Anfrage wird an ein Sprachmodell gegeben, zusammen mit eurer Kategorienliste und je drei bis fünf echten Beispielen pro Kategorie. Zurück kommt eine Tabelle: Kategorie, betroffenes Produkt, Priorität, Stimmung, Sicherheitswert, ein Satz Begründung. Der Absender wird gegen den Kundenstamm geprüft, A-Kunden heben die Priorität. Über die Schnittstelle eures Ticketsystems (Zendesk, Freshdesk, Jira Service Management, SAP Service Cloud) setzt der Workflow die Felder und das Team. Liegt der Sicherheitswert unter 70 Prozent, landet das Ticket in einer Prüf-Warteschlange statt beim falschen Team. Jede Korrektur durch euer Team fließt als neues Beispiel in den Test, das System wird also mit euch besser. Wer Zendesk oder Freshdesk nutzt, hat die Klassifikation als eingebaute Funktion, dann bauen wir nur die Regeln und die Prüf-Schleife.

## Was das bringt

Ein dokumentiertes Mittelstandsprojekt zeigt genau diesen Aufbau: Beim Mittelstand-Digital Zentrum Ruhr-OWL klassifiziert die KI bei einem IT-Dienstleister Betreff und Beschreibung, leitet an das fachliche Team weiter und bewertet die Priorität. Die großen Ticketsysteme liefern die Funktion inzwischen mit: Zendesk gibt für Anliegen, Sprache und Stimmung jeweils eine Vorhersage plus Vertrauensstufe aus, Freshdesk braucht nach eigener Dokumentation etwa 2.000 historische Tickets, bevor die Vorschläge brauchbar werden.

Zur Zeitersparnis gibt es Fallberichte (ein Händler mit 500 Anfragen am Tag nennt eine Erstbearbeitungszeit von 4,5 Stunden auf unter eine Stunde), aber aus Anbieter- und Beraterquellen ohne Methodik. Mein Erfahrungswert für ein Service-Team von drei bis acht Personen: 5 bis 10 Stunden pro Woche, die heute ins morgendliche Sortieren gehen.

## Wo es schwierig wird

Die gelebten Kategorien sind nie die aus dem Handbuch, und über 15 Kategorien wird jede Klassifikation unscharf. Die erste Woche geht deshalb ins Aufräumen der Kategorienliste, nicht ins Bauen. Zweitens ist Routing Arbeitsverteilung: Sobald das System pro Mitarbeiter protokolliert, kann der Betriebsrat mitzubestimmen haben. Das Arbeitsgericht Hamburg hat 2024 entschieden, dass reine KI-Nutzung über den Browser nicht mitbestimmungspflichtig ist, ein System mit Zuweisung und Protokoll ist ein anderer Fall. Früh einbinden, dann geht es schnell.

## Was ihr dafür braucht

- 100 bis 200 alte Anfragen mit ihrer richtigen Kategorie als Trainingsbeispiele
- Eure Kategorien und Prioritätsregeln, so wie ihr sie heute im Kopf habt
- Zugriff auf Postfach und Ticketsystem

## Warum dieses Paket

Sortieren ist der ideale erste Pilot: klarer Input, klarer Output, sofort messbar. Er bereitet den Boden für Antwortentwürfe und Wissensdatenbank als nächste Stufe.
