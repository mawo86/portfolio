---
title: "Welche Daten darf ich in KI-Tools eingeben? Eine praktische Übersicht"
description: "Kundennamen in ChatGPT? Personaldaten in Claude? Was erlaubt ist und was nicht — eine konkrete, alltagstaugliche Übersicht für Unternehmen."
date: 2026-05-08
tags: ["KI", "DSGVO", "Datenschutz", "Praxis"]
draft: true
category: "Datenschutz"
---

Theorie ist eine Sache. Die tägliche Praxis eine andere.

Der DSGVO-Artikel erklärt das Warum. Dieser Artikel beantwortet das Wie. Welche Daten in welche Tools — konkret, ohne Juristendeutsch.

## Die drei Kategorien

Ich teile Daten für den KI-Alltag in drei Kategorien:

**Grün: Kein Einschränkungsbedarf**

Allgemeine Inhalte ohne Personenbezug. Produkttexte, interne Prozessbeschreibungen, anonymisierte Fallbeispiele, Marktanalysen ohne Kundendaten, Vorlagen und Templates, eigene Textentwürfe ohne Bezug zu Personen.

Das kannst du in jeden gängigen KI-Dienst eingeben.

**Gelb: Nur mit passenden Vereinbarungen**

Daten mit indirektem Personenbezug oder vertrauliche Geschäftsdaten. Kundennamen in einem Beispieltext (wenn AVV besteht), anonymisierte Kundendaten für Analyse, interne Strategiepapiere, Finanzkennzahlen des Unternehmens.

Nur in Tools, für die du einen AVV abgeschlossen hast. Im Zweifel: anonymisieren oder paraphrasieren.

**Rot: Nicht in externe Tools**

Direkte personenbezogene Daten ohne Anonymisierung: vollständige Kundendatensätze, Mitarbeiterdaten, Bewerbungsunterlagen, Kranken- und Gesundheitsdaten, Bankverbindungen und Zahlungsdaten, Passwörter und Zugangsdaten.

Diese Daten gehören entweder in lokal betriebene Modelle oder gar nicht in KI-Tools.

## Konkrete Beispiele für den Alltag

**Darf ich ein Kundengespräch transkribieren und in Claude eingeben?**

Kommt drauf an. Das Transkript selbst enthält Personendaten. In Claude for Business (mit AVV): möglicherweise ja. In Claude.ai ohne Enterprise-Vertrag: nein. Besser: Transkript anonymisieren (Namen ersetzen), dann in jedes Tool.

**Darf ich eine E-Mail eines Kunden in ChatGPT einfügen, um eine Antwort zu generieren?**

In ChatGPT Free oder Plus: nein — Personendaten des Kunden landen ohne Einwilligung bei OpenAI. In ChatGPT Enterprise mit AVV: rechtlich besser, aber trotzdem bewusst einsetzen. Alternative: E-Mail paraphrasieren ("Ein Kunde schreibt sinngemäß, dass er mit der Lieferzeit unzufrieden ist") — dann kein Personenbezug mehr.

**Darf ich Bewerbungsunterlagen in KI-Tools einlesen?**

Nein, in externe Consumer-Tools grundsätzlich nicht. Das sind besonders sensible Daten. Für KI-gestützte Bewerbungsanalyse gibt es spezialisierte HR-Tools mit entsprechenden Datenschutzverträgen.

**Darf ich SAP-Exporte in ein KI-Tool laden?**

Kommt auf den Inhalt an. Aggregierte Finanzdaten ohne Kundenbezug: möglicherweise. Reports mit Kundennamen, Adressen oder Kontonummern: nur mit AVV und nur in freigegebene Tools.

**Kann ich WhisperFlow für Meeting-Aufzeichnungen nutzen?**

WhisperFlow verarbeitet lokal auf deinem Gerät — kein Cloud-Upload. Das ist datenschutzrechtlich deutlich unkomplizierter. Trotzdem: Alle Meeting-Teilnehmer müssen wissen, dass aufgezeichnet wird.

## Die einfachste Schutzmaßnahme: Anonymisieren

Wenn du unsicher bist, anonymisiere. Ersetze Namen durch Platzhalter ("Kunde A"), entferne spezifische Zahlen, ersetze Ortsangaben durch allgemeine Beschreibungen.

Ein anonymisierter Text lässt sich meistens genauso gut von KI verarbeiten. Und du hast das Problem gelöst.

> Im Zweifel anonymisieren. Das löst 80 % der DSGVO-Fragen im KI-Alltag.

## Für das gesamte Team

Eine kurze interne Richtlinie — eine halbe Seite reicht — mit den konkreten Regeln für euer Unternehmen reduziert Unsicherheit und verhindert Fehler.

Klare Regeln, welche Tools freigegeben sind. Klare Regeln, was nicht eingegeben werden darf. Ein Ansprechpartner für Fragen.

Das nimmt die Unsicherheit aus dem Alltag.

Den rechtlichen Hintergrund dazu erklärt [KI und DSGVO: Was du wissen musst](/blog/ki-und-dsgvo). Welche Tools datenschutzfreundliche Optionen haben, findest du auf der [Tools-Seite](/tools).
