---
title: "E-Mail-Automatisierung mit KI: Von der übervollen Inbox zum Workflow"
description: "Wie du E-Mail-Prozesse mit KI und n8n automatisierst — von Klassifikation über Weiterleitung bis zur automatischen Antwort. Schritt für Schritt."
date: 2026-05-29
tags: ["Automatisierung", "E-Mail", "n8n", "Workflow"]
draft: true
---

Die Inbox ist für viele Teams ein Flaschenhals. Jede Anfrage muss gelesen, verstanden, kategorisiert und weitergeleitet werden. Täglich. Stundenlang.

KI kann das übernehmen. Nicht vollständig — aber den größten Teil der repetitiven Arbeit.

<figure>
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt="Laptop-Bildschirm mit E-Mail-Client und Workflow-Diagramm" />
  <figcaption>Die E-Mail bleibt. Aber wer sie verarbeitet, ändert sich. (Foto: Unsplash)</figcaption>
</figure>

## Was du automatisieren kannst

### Klassifikation

Welche Art von Anfrage ist das? Bestellung, Reklamation, Support-Anfrage, allgemeine Frage, interner Vorgang?

KI liest den E-Mail-Inhalt und klassifiziert ihn automatisch. Genauigkeit bei guter Prompt-Definition: 85-95 % für klar definierte Kategorien.

### Routing

Basierend auf der Klassifikation: Wohin soll die E-Mail? An wen? Mit welcher Priorität?

Die Klassifikation und das Routing können direkt in einen Automatisierungsworkflow einfließen. [n8n](/tools#automatisierung) oder [Zapier](/tools#automatisierung) übernehmen die Weiterleitung ans richtige Postfach, die Zuweisung im Ticketsystem oder die Slack-Nachricht an die zuständige Person.

### Zusammenfassung für den Bearbeiter

Lange E-Mails werden auf die wesentlichen Punkte zusammengefasst. Der Bearbeiter bekommt sofort die relevanten Informationen — ohne den ganzen Text lesen zu müssen.

Besonders wertvoll bei langen E-Mail-Verläufen oder komplexen Anfragen.

### Standard-Antworten vorschlagen

Für die häufigsten Anfragen: KI generiert einen ersten Antwortentwurf. Der Mitarbeiter liest, passt an, sendet. Statt 10 Minuten pro E-Mail: 2 Minuten.

### Automatische Erstantworten

Bei einfachen, eindeutigen Anfragen kann eine automatische Erstantwort sinnvoll sein: "Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden."

Oder für echte Standardfälle: "Ihre Bestellung wurde erfasst. Die Lieferung erfolgt bis [Datum]." — wenn der Prozess das hergibt.

## Ein konkreter Workflow mit n8n

Hier ist, wie ein typischer E-Mail-Automatisierungsworkflow aussieht:

**Trigger:** Neues E-Mail in einem definierten Postfach (Gmail, Outlook, IMAP).

**Schritt 1:** E-Mail-Inhalt an Claude oder GPT senden. Prompt: "Klassifiziere diese E-Mail in eine der folgenden Kategorien: Bestellung, Reklamation, Support, Allgemein. Gib außerdem eine kurze Zusammenfassung in einem Satz."

**Schritt 2:** Basierend auf der Kategorie — Routing. n8n-Switch-Node leitet in verschiedene Pfade.

**Schritt 3a (Bestellung):** Automatisch in CRM eintragen, Bestätigungsmail senden.

**Schritt 3b (Reklamation):** Ticket in Support-System anlegen, an Support-Team weiterleiten, Priorität "Hoch" setzen.

**Schritt 3c (Support):** Zusammenfassung + Antwortentwurf generieren, an Support-Mitarbeiter senden.

**Schritt 3d (Allgemein):** In Standardpostfach weiterleiten.

Dieser Workflow lässt sich in ein bis zwei Tagen aufbauen. Die größte Arbeit liegt in der Definition der Kategorien und der Prompt-Gestaltung.

## Was du beachten musst

**Datenschutz:** E-Mails enthalten oft personenbezogene Daten. Prüfe vor dem Start, welche Tools mit AVV genutzt werden und welche Daten verarbeitet werden dürfen. Mehr dazu im Artikel [KI und DSGVO](/blog/ki-und-dsgvo).

**Fehlerbehandlung:** Was passiert, wenn die Klassifikation falsch ist? Baue immer einen menschlichen Überprüfungsschritt für Ausnahmen ein.

**Kontinuierliche Verbesserung:** Die ersten zwei Wochen wird das System Fehler machen. Sammle sie, passe den Prompt an, verbessere die Kategorien.

> Ein E-Mail-Automatisierungsworkflow wird nie perfekt sein. Aber 80 % Genauigkeit bei 70 % weniger manuellem Aufwand ist ein gutes Ergebnis.

## Dein nächster Schritt

Zähl eine Woche lang, wie viele E-Mails dein Team täglich kategorisiert, weiterleitet oder beantwortet. Dann rechne: Wie viel Zeit wäre das pro Jahr?

Den technischen Einstieg in Automatisierungsworkflows zeigt der Artikel [n8n: Dein erster Workflow in 30 Minuten](/blog/n8n-erster-workflow). Den Vergleich von Automatisierungstools findest du in [Zapier vs n8n](/blog/zapier-vs-n8n).
