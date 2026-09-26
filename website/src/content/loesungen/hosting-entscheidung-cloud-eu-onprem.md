---
title: "Cloud, EU-Cloud oder eigener Server: Wo läuft eure KI?"
problem: "Der IT-Leiter will nichts in die US-Cloud, der Vertrieb will morgen loslegen, der Datenschutz will Garantien. Die Entscheidung wird vertagt, und damit auch das Projekt."
description: "Eine belastbare Hosting-Entscheidung für eure KI-Anwendungen: Anbieter, Datenflüsse, Kosten, Verträge und die Grenzen jeder Option, in einem Tag."
bereich: "Technik & Betrieb"
zeitprobleme: ["Regeln und Unsicherheit", "Warten auf Antworten"]
branchen: ["Fertigung", "Dienstleistung", "Gesundheit", "Finanzdienstleistung", "Handel"]
werkzeuge: ["Anbieter-Vergleich (Anthropic, OpenAI, Azure OpenAI, EU-Anbieter, Open-Source-Modelle)", "Datenflussdiagramm", "Kostenmodell", "AVV-Checkliste"]
aufwand: "1 bis 2 Tage"
einsparung: "Entscheidung in einem Tag statt in drei Monaten"
paket: "tagessatz"
reifegrad: "Einstieg"
sapNah: false
blogKategorien: ["Datenschutz", "Tools & Setup", "Grundlagen"]
prio: 67
date: 2026-09-26
---

## Wo es hakt

Die Hosting-Frage wird zur Glaubensfrage, weil sie ohne konkrete Anwendung diskutiert wird. Dabei ist die Antwort fast immer differenziert: Unkritische Textarbeit darf in eine große Cloud mit EU-Vertrag, personenbezogene Daten brauchen EU-Hosting, und nur wenige Fälle rechtfertigen einen eigenen Server mit eigenem Modell.

## Was wir bauen

Ein Workshop-Tag mit IT, Datenschutz und Fachbereich, an konkreten Anwendungsfällen statt an Grundsatzfragen. Pro Fall zeichnen wir den Datenfluss (welche Daten, von wo, wohin, wer sieht sie) und ordnen die Datenklasse zu. Dann gehen wir die Optionen durch, mit Stand vom Workshop-Tag, weil sich das Feld schnell bewegt: US-Modelle über einen EU-Vertrag mit Verarbeitung in einer EU-Region, US-Modelle über eine europäische Cloud-Region eines Hyperscalers, europäische Anbieter mit Open-Source-Modellen in deutschen Rechenzentren, oder ein eigener Server mit eigenem Modell. Für jede Option: Vertragsanforderungen, Kosten für zwölf Monate (Anfragen mal Token mal Preis, plus Betrieb), Grenzen. Bei On-Premise-Wunsch zeige ich am eigenen Beispiel den Qualitätsunterschied zwischen kleinem und großem Modell. Ergebnis ist eine einseitige Entscheidungsvorlage und ein Architekturdokument im Repo, auf das jeder Pilot verweist.

## Was das bringt

Die Optionen sind real und unterscheiden sich in Details, die im Vertrieb der Anbieter untergehen. Claude läuft über AWS Bedrock in der Region Frankfurt mit Datenhaltung in der EU. Über Microsoft Foundry ist Claude seit Mitte 2026 zwar allgemein verfügbar, aber ohne europäische Datenzone. Azure OpenAI bietet eine EU-Datenzone für die OpenAI-Modelle. Europäische Anbieter wie IONOS (AI Model Hub, Rechenzentrum Berlin, Abrechnung pro Million Token in Euro), STACKIT (AI Model Serving, allgemein verfügbar seit Mai 2025) und die Open Telekom Cloud betreiben Open-Source-Modelle wie Llama und Mistral in deutschen Rechenzentren, mit OpenAI-kompatibler Schnittstelle, sodass ein Wechsel technisch klein ist. Anthropic selbst bietet für Enterprise-Kunden EU-Datenresidenz und Zero Data Retention an, weist aber darauf hin, dass der Transfer in ein Drittland für DSGVO-Zwecke bestehen bleibt.

Was der Workshop spart: die drei Monate, in denen das Thema sonst zwischen IT und Datenschutz hin- und hergeht, während der Pilot wartet.

## Wo es schwierig wird

Der CLOUD Act. Ein US-Anbieter bleibt ein US-Anbieter, auch mit EU-Region, und euer Datenschutzbeauftragter weiß das. Wer das verschweigt, verliert Vertrauen. Also offen ansprechen und pro Datenklasse entscheiden. Zweitens der Qualitätsunterschied: Kleine Modelle auf dem eigenen Server können weniger, und das merkt man bei komplexen Dokumenten sofort. Das muss man gesehen haben, bevor man sich für On-Premise entscheidet. Drittens verändert sich das Angebot der Anbieter im Quartalsrhythmus, die Entscheidung braucht ein Ablaufdatum.

## Was ihr dafür braucht

- Zwei bis drei konkrete Anwendungsfälle, um die es geht
- IT-Leitung und Datenschutz für einen Tag
- Eure Vorgaben aus Kundenverträgen oder Zertifizierungen (ISO 27001, TISAX), falls vorhanden

## Warum dieses Paket

Ein Workshop-Tag über den Tagessatz. Die Entscheidung ist danach dokumentiert und gilt für alle weiteren Piloten.
