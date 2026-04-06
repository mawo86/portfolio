---
title: "KI-Glossar für Entscheider: Die 20 Begriffe, die du kennen musst"
description: "LLM, RAG, Prompt Engineering, Halluzination — KI-Gespräche sind voller Fachbegriffe. Hier sind die 20 wichtigsten, verständlich erklärt für Führungskräfte."
date: 2026-04-24
tags: ["KI", "Grundlagen", "Glossar", "Entscheider"]
draft: true
---

Du sitzt in einem Meeting über KI-Einführung. Jemand spricht von "RAG-Architektur", jemand anderes von "Fine-Tuning" und der Berater fragt nach eurem "Prompt-Engineering-Ansatz".

Du nickst. Du verstehst die Hälfte. Und du triffst trotzdem Entscheidungen, die viel Geld kosten.

Das hier ändert das.

## A–F

**Agent / KI-Agent**
Ein Sprachmodell, das nicht nur antwortet, sondern selbstständig Aufgaben ausführt. Es kann Tools nutzen, Informationen recherchieren, Code ausführen und mehrere Schritte planen. Agenten sind der nächste Entwicklungsschritt nach einfachen Chatbots.

**API (Application Programming Interface)**
Eine Schnittstelle, über die Software mit anderer Software kommuniziert. Wenn dein Unternehmen ein KI-Modell in ein bestehendes System einbinden will, passiert das über eine API. Du brauchst kein technisches Verständnis — aber du solltest wissen, dass "KI anbinden" fast immer "API nutzen" bedeutet.

**Automatisierung**
Der Prozess, bei dem wiederkehrende Aufgaben durch Software übernommen werden. KI-gestützte Automatisierung geht weiter als klassische Automatisierung: Sie kann mit unstrukturierten Eingaben umgehen — E-Mails, PDFs, freie Texte. Mehr dazu im Artikel [n8n: Dein erster Workflow](/blog/n8n-erster-workflow).

**Context Window**
Wie viel Text ein Modell auf einmal "sehen" und verarbeiten kann. Ein großes Context Window bedeutet: Du kannst ein langes Dokument auf einmal hineinladen. Für Unternehmen relevant, wenn große Verträge, Berichte oder Datenmengen analysiert werden sollen.

**Fine-Tuning**
Ein vortrainiertes Modell wird zusätzlich auf unternehmenseigene Daten trainiert, damit es besser auf spezifische Aufgaben oder den Unternehmenskontext ausgerichtet ist. Aufwendig und teuer. Für die meisten Anwendungsfälle nicht nötig — RAG ist oft die bessere Alternative.

## G–L

**Halluzination**
Ein Sprachmodell gibt eine Antwort, die falsch ist — aber überzeugend klingt. Es "erfindet" Fakten, Quellen oder Zahlen. Das ist kein Bug, sondern ein systemisches Merkmal. Gegenmaßnahme: bei faktenkritischen Aufgaben immer gegenchecken.

**Inference**
Der Prozess, bei dem ein trainiertes Modell eine Anfrage verarbeitet und eine Antwort generiert. Relevant für Kosten: Je mehr Inference, desto höher der API-Verbrauch. Wer viele Anfragen automatisiert, sollte die Inference-Kosten einplanen.

**KI-Modell vs. KI-Produkt**
Ein Modell ist das technische Fundament (z.B. GPT-4, Claude 3). Ein Produkt ist die Benutzeroberfläche darüber (z.B. ChatGPT, Claude.ai). Du kannst das gleiche Modell über verschiedene Produkte nutzen — oder über die API direkt ansprechen.

**LLM (Large Language Model)**
Das technische Wort für das, was die meisten "KI" nennen. Ein sehr großes, auf riesigen Textmengen trainiertes Modell, das Sprache versteht und generiert. Claude und GPT-4 sind LLMs. Der Begriff taucht in jeder technischen Diskussion auf.

**Latenz**
Die Zeit, die ein Modell braucht, um zu antworten. Für Anwendungen, die in Echtzeit reagieren müssen — z.B. Chatbots im Kundenservice — ist niedrige Latenz wichtig. Für Batch-Verarbeitungen (z.B. nächtliche Berichterstellung) irrelevant.

## M–R

**Multimodal**
Ein Modell, das nicht nur Text, sondern auch Bilder, Audio oder andere Datentypen verarbeiten kann. Relevant für Anwendungsfälle wie Rechnungserkennung aus Fotos oder Analyse von Produktbildern.

**Prompt**
Die Eingabe, die du einem Sprachmodell gibst. Nicht nur eine Frage, sondern die gesamte Anweisung. Wie du einen Prompt formulierst, beeinflusst die Qualität der Antwort erheblich. Fünf Prompts, die wirklich funktionieren, findest du im Artikel [5 Prompts, die ich täglich nutze](/blog/prompts-die-funktionieren).

**Prompt Engineering**
Die Kunst, Prompts so zu formulieren, dass das Modell möglichst gute Ergebnisse liefert. Nicht Magie, sondern Struktur: Klare Rollen geben, Kontext liefern, Format vorgeben. Eine wichtige Fähigkeit für alle, die KI regelmäßig nutzen.

**RAG (Retrieval-Augmented Generation)**
Eine Technik, bei der das Modell nicht nur auf sein Trainingswissen zurückgreift, sondern aktiv in einer Wissensdatenbank sucht und die Ergebnisse in die Antwort einbezieht. Sehr relevant für unternehmensinterne Anwendungen: Dein Modell kennt deine Handbücher, Verträge und Richtlinien. Ohne Fine-Tuning.

## S–Z

**System-Prompt**
Eine versteckte Anweisung, die vor jeder Nutzeranfrage geladen wird. Damit wird dem Modell gesagt, wie es sich verhalten soll — welche Rolle es einnimmt, welchen Ton es nutzt, was es nicht tun darf. Wichtig für Anwendungen, die konsistentes Verhalten brauchen.

**Token**
Die Einheit, in der Sprachmodelle Text verarbeiten. Ungefähr ein Wort oder eine Silbe. Relevant für Kosten: API-Anbieter berechnen pro Token. Wer lange Dokumente verarbeitet, braucht viele Token.

**Use Case**
Der konkrete Anwendungsfall. "Wir wollen KI nutzen" ist kein Use Case. "Wir wollen täglich 80 Support-E-Mails automatisch klassifizieren" ist ein Use Case. Je schärfer definiert, desto besser die Ergebnisse.

**Vektor-Datenbank**
Eine spezielle Datenbank, die Inhalte so speichert, dass ähnliche Inhalte schnell gefunden werden können. Basis für RAG-Systeme. Relevant, wenn du eine interne Wissensbasis mit KI durchsuchbar machen willst.

**Zero-Shot / Few-Shot**
Wie viele Beispiele das Modell braucht, um eine Aufgabe zu erledigen. Zero-Shot: kein Beispiel nötig. Few-Shot: zwei bis fünf Beispiele im Prompt verbessern die Ergebnisse erheblich. Relevant beim Prompt Engineering.

> Wer diese 20 Begriffe kennt, spricht auf Augenhöhe mit Technologie-Teams und Beratern — und trifft bessere Entscheidungen.

## Dein nächster Schritt

Speicher dir diese Liste. Beim nächsten Meeting mit KI-Bezug wirst du sie brauchen.

Und wenn du von Begriffen in Aktion sehen willst: Der Artikel [ChatGPT vs Claude für Unternehmen](/blog/chatgpt-vs-claude-unternehmen) setzt viele davon in den Praxiskontext.
