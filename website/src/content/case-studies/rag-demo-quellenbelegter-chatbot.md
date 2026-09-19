---
title: "Showcase: Vom PDF-Stapel zum quellenbelegten Chatbot"
description: "Wie eine RAG-Pipeline aus Handbüchern und Dokumentation einen Chatbot macht, der nur antwortet, was in den Quellen steht, und immer sagt, woher es kommt."
client: "Eigenes Showcase-Projekt"
industry: "RAG / Wissensmanagement"
timeframe: "Prototyp"
role: "KI-Berater & Solution Architect"
services:
  - "RAG-Architektur"
  - "n8n-Workflow"
  - "Prompt Engineering"
  - "Vektordatenbank"
results:
  - metric: "2"
    label: "kombinierte Suchverfahren"
  - metric: "8"
    label: "Pipeline-Schritte, je ein Prompt"
  - metric: "0"
    label: "erfundene Antworten ohne Quellenbeleg"
date: 2026-09-19
draft: false
---

> **Showcase, kein Kundenprojekt.** Diese Pipeline habe ich als eigenes
> Demo-Projekt gebaut, um zu zeigen, wie ein quellenbelegter Chatbot auf
> Basis eigener Dokumente technisch entsteht. Kein NDA, keine echten
> Kundendaten, dafür der volle Blick unter die Haube.

## Ausgangssituation

Ein Sprachmodell weiß nur, was es beim Training gesehen hat. Ein
Firmenhandbuch, ein Produktkatalog oder eine interne Dokumentation kennt es
nicht und rät im Zweifel drauflos. Für Unternehmen, die auf einem Berg
eigener Dokumente sitzen, reicht ein einfacher Chatbot-Wrapper deshalb
nicht: Sie brauchen Antworten, die nachprüfbar sind und Quellen nennen,
statt überzeugend klingender Vermutungen.

## Vorgehen

Die Pipeline läuft in zwei Phasen.

**Indexierung.** Die PDF durchläuft eine Texterkennung, die Struktur
versteht, nicht nur Buchstaben: Überschriften, Tabellen, Absätze bleiben
erhalten. Der Text wird in überschaubare Abschnitte zerschnitten, jeder
Abschnitt in einen Bedeutungsvektor übersetzt und landet in einer
Datenbank.

**Suche.** Eine Nutzerfrage trifft zwei Suchen gleichzeitig: eine nach
Bedeutung, eine nach exakten Wörtern. Bedeutungssuche versteht "Urlaub" und
"Ferien" als dasselbe, versagt aber bei einer Artikelnummer oder einem
Variablennamen, weil solche Begriffe kaum Bedeutung im klassischen Sinn
tragen. Beide Trefferlisten werden fair zusammengeführt, ein zweites Modell
liest die besten Kandidaten noch einmal genau und wählt die relevantesten
aus. Erst die bekommt das Sprachmodell zu sehen, mit einer klaren Anweisung:
Antworte nur, was in diesen Textstellen steht, und sag, woher es kommt.

Gebaut wurde die Pipeline nicht von Hand in n8n zusammengeklickt, sondern
Schritt für Schritt über Prompts an Claude Code, das direkt über
MCP-Schnittstellen auf n8n und die Datenbank zugreift. Jeder Baustein, von
der Vektordatenbank über die Hybrid-Suche bis zum Reranking, entstand aus
einem einzelnen, gezielten Prompt statt aus stundenlangem manuellem
Verdrahten.

## Techstack

| Baustein | Werkzeug | Rolle |
|---|---|---|
| Orchestrierung | n8n | Visuelle Workflow-Engine, verbindet alle Schritte zu einer nachvollziehbaren Kette |
| OCR | Mistral OCR | Verwandelt PDF-Layouts inklusive Tabellen in strukturiertes Markdown |
| Chunking | Recursive Character Text Splitter | Zerlegt Dokumente strukturbewusst in überschaubare Abschnitte |
| Embeddings | Mistral (mistral-embed) | Übersetzt Text in Bedeutungsvektoren, für Indexierung und Suche gleich |
| Datenbank | Supabase (Postgres + pgvector) | Eine Datenbank für Vektorsuche und klassische Volltextsuche zugleich |
| Suchlogik | Reciprocal Rank Fusion | Verschmilzt Vektor- und Volltexttreffer zu einem gemeinsamen Ranking |
| Reranking | Cohere rerank-v3.5 (via OpenRouter) | Liest Frage und Kandidaten gemeinsam, wählt die relevantesten aus |
| Generierung | Claude (via OpenRouter) | Formuliert die finale Antwort, strikt auf Quellen begrenzt |

Kein einzelner Anbieter deckt alle Schritte gleich gut ab. Deshalb dieser
Mix aus Spezialisten statt eines einzigen Tools für alles, lose verbunden
über n8n und OpenRouter, ohne Bindung an einen Anbieter.

## Ergebnis

Der Bot beantwortet Fragen ausschließlich auf Basis der gefundenen
Textstellen und nennt bei jeder Antwort das Quelldokument. Findet er nichts
Passendes, sagt er das ehrlich, statt eine plausible Antwort zu erfinden.
Die Kombination aus Bedeutungssuche und Stichwortsuche fängt auch exakte
Begriffe ab, an denen reine Vektorsuche typischerweise scheitert:
Artikelnummern, Variablennamen, Vertragsparagraphen.

## Was du davon hast

Wenn du auf Handbüchern, Produktkatalogen oder interner Dokumentation
sitzt und einen Chatbot willst, der nachprüfbare Antworten liefert statt zu
raten: Genau das ist die Architektur dafür. Lass uns 30 Minuten sprechen,
ich zeige dir, wie sich das auf deine Dokumente übertragen lässt.
