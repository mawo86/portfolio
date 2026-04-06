---
title: "KI und DSGVO: Was du wissen musst, bevor du loslegst"
description: "Welche DSGVO-Regeln gelten beim Einsatz von KI-Tools? Was ist erlaubt, was nicht, und wie schützt du dich und dein Unternehmen rechtlich?"
date: 2026-05-05
tags: ["KI", "DSGVO", "Datenschutz", "Unternehmen", "Recht"]
draft: true
category: "Datenschutz"
---

"Darf ich das überhaupt in ChatGPT eingeben?"

Diese Frage höre ich in fast jedem Beratungsgespräch. Die Antwort ist selten ein einfaches Ja oder Nein. Sie hängt davon ab, was du eingibst, welches Tool du nutzt, und wie es konfiguriert ist.

Hier ist, was du wirklich wissen musst.

<figure>
  <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=1200&q=80" alt="Person liest Dokument am Laptop, nachdenklich" />
  <figcaption>DSGVO und KI sind kein Widerspruch — aber es braucht klare Regeln. (Foto: Unsplash)</figcaption>
</figure>

## Das Grundprinzip: Personenbezogene Daten sind das Risiko

Die DSGVO schützt personenbezogene Daten. Das sind alle Informationen, die einer identifizierbaren natürlichen Person zugeordnet werden können: Name, E-Mail, Telefonnummer, IP-Adresse, Standort — aber auch Kombinationen, die eine Person identifizierbar machen.

Wenn du solche Daten in ein KI-Tool eingibst, verarbeitest du sie außerhalb deiner Kontrolle. Das ist das Kernproblem.

Nicht-personenbezogene Daten hingegen sind unkritisch. Allgemeine Geschäftsanalysen, Produktbeschreibungen, interne Prozessbeschreibungen ohne Personenbezug — kein Problem.

## Was du in welche Tools eingeben darfst

**Consumer-Tools (kostenlose oder günstige Versionen)**

ChatGPT Free, Claude.ai ohne Enterprise-Vertrag, Google Gemini ohne Workspace-Abo: Diese Tools können Eingaben für Trainings- oder Verbesserungszwecke verwenden. Personenbezogene Daten oder vertrauliche Geschäftsdaten haben hier nichts verloren.

**Business-/Enterprise-Versionen**

ChatGPT Enterprise, Claude for Business, Microsoft Copilot 365 mit Enterprise-Konfiguration: Diese Versionen haben Datenverarbeitungsverträge (DPA), die klar regeln, dass deine Daten nicht für Training genutzt werden und in definierten Regionen verbleiben.

Wenn du diese Verträge abgeschlossen und konfiguriert hast, ist die Rechtslage deutlich besser.

**Self-hosted / lokale Modelle**

n8n mit lokalem LLM-Deployment oder eigene Modelle auf eigenen Servern: Maximale Kontrolle. Daten verlassen nie deine Infrastruktur. Aufwendiger einzurichten, aber die einzige wirklich sichere Option für hochsensible Daten.

## Was du konkret beachten musst

**Auftragsverarbeitungsvertrag (AVV)**

Wenn du personenbezogene Daten an einen KI-Anbieter übergibst, ist das Auftragsverarbeitung und erfordert einen AVV. Die meisten Business-Versionen der großen Anbieter bieten das an. Prüfe, ob du einen abgeschlossen hast.

**Datenschutzhinweise für Mitarbeiter und Kunden**

Wenn du KI-Tools in Prozessen einsetzt, die Mitarbeiter- oder Kundendaten betreffen, musst du das dokumentieren und in relevante Datenschutzerklärungen aufnehmen.

**Zweckbindung**

Daten, die für einen Zweck erhoben wurden, dürfen nicht für einen anderen verwendet werden. Kundendaten, die für Vertragsabwicklung erhoben wurden, dürfen nicht einfach in ein KI-Training-Dataset einfließen.

**Keine sensiblen Datenkategorien**

Gesundheitsdaten, politische Überzeugungen, Religionszugehörigkeit, biometrische Daten — diese besonders geschützten Kategorien nach Art. 9 DSGVO haben in externen KI-Tools nichts zu suchen.

> Faustregel: Wenn du die Daten nicht in einer normalen E-Mail an einen externen Dienstleister schicken würdest, gehören sie nicht in ein ungesichertes KI-Tool.

## Praktische Checkliste für den Alltag

Bevor ihr als Team KI-Tools nutzt, solltet ihr folgende Fragen klären:

1. Welche Tools sind freigegeben (mit AVV, Enterprise-Vertrag, oder lokal)?
2. Was darf nicht eingegeben werden? (Kundendaten, Personaldaten, Finanzdaten ohne Anonymisierung)
3. Wer ist intern für Datenschutz-Fragen rund um KI zuständig?
4. Gibt es eine Richtlinie, die das dokumentiert?

Das muss keine 20-seitige Policy sein. Eine halbe Seite mit klaren Regeln reicht für den Anfang.

## Dein nächster Schritt

Wenn du noch keinen AVV mit deinen KI-Tool-Anbietern hast: Heute kümmern. Nicht irgendwann.

Den nächsten Artikel zum Thema — welche Daten konkret in welche Tools dürfen — findest du in [Welche Daten darf ich in KI-Tools eingeben?](/blog/ki-daten-eingeben). Und welche Tools mit guten Datenschutz-Optionen ich empfehle, steht auf der [Tools-Seite](/tools).
