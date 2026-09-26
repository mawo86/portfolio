---
title: "n8n: Dein erster Automatisierungs-Workflow in 30 Minuten"
description: "n8n installieren, verstehen und den ersten echten Workflow bauen — Schritt für Schritt. Kein Entwickler-Hintergrund nötig."
date: 2026-04-06
tags: ["Automatisierung", "n8n", "Anleitung", "Tools"]
draft: true
category: "Automatisierung"
---

[n8n](/tools#automatisierung) ist das Automatisierungstool, das ich für fast alles nutze. Open Source, visuell, mächtig.

Aber der Einstieg wirkt abschreckend. Zu viele Optionen, zu viele Nodes, zu viele Möglichkeiten. Der häufigste Fehler: Man startet ohne konkretes Ziel und verliert sich im Interface.

Deshalb machen wir es anders. Wir bauen einen echten Workflow. Einen, der tatsächlich nützlich ist. Und dann verstehst du das Prinzip.

<figure>
  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" alt="Automatisierungsvisualisierung mit verbundenen Elementen" />
  <figcaption>Automatisierung ist kein Selbstzweck. Sie löst ein konkretes Problem — oder sie lohnt sich nicht. (Foto: Unsplash)</figcaption>
</figure>

## Was wir bauen

Ein automatisches E-Mail-Benachrichtigungssystem für neue Kontaktanfragen.

Wenn jemand über dein Webformular eine Anfrage sendet, bekommst du sofort eine strukturierte E-Mail mit den Details. Egal wo du gerade bist, egal ob du den Posteingang überwachst.

Klingt einfach. Ist es auch. Aber der Weg dorthin zeigt dir alles, was du über n8n wissen musst.

## Schritt 1: n8n starten

Die schnellste Option: [n8n Cloud](/tools#automatisierung). Unter n8n.io registrieren, kostenlosen Trial starten. Keine Installation, keine Server, kein Ärger. Für den Einstieg genau richtig.

Wenn du es lokal testen willst: `npx n8n` im Terminal. n8n läuft dann unter `localhost:5678`. Dafür brauchst du Node.js.

## Schritt 2: Den Workflow anlegen

Öffne n8n, klick auf "New Workflow". Du siehst eine leere Leinwand.

Das ist dein Arbeitsbereich. Jeder Workflow besteht aus Nodes. Kleine Bausteine, die jeweils eine Aufgabe erledigen. Du verbindest sie, und Daten fließen von links nach rechts.

## Schritt 3: Den Trigger setzen

Jeder Workflow braucht einen Startpunkt. In n8n heißt das Trigger.

Klick auf das Plus-Symbol, such nach "Webhook". Ein Webhook ist eine URL, an die andere Systeme Daten schicken können. Wenn dein Kontaktformular abgesendet wird, schickt es die Daten an diese URL — und dein Workflow startet.

Wähle "Webhook" aus, stelle die Methode auf POST, und kopiere die generierte URL. Diese URL kommt später in dein Kontaktformular.

## Schritt 4: Die Daten verarbeiten

Als nächstes kommt ein "Set"-Node. Damit definierst du, welche Informationen du aus dem Formular-Payload haben willst.

Du ziehst den Node auf die Leinwand und verbindest ihn mit dem Webhook. Dann definierst du Felder: Name aus `body.name`, E-Mail aus `body.email`, Nachricht aus `body.message`. Die genauen Feldnamen hängen davon ab, wie dein Formular die Daten schickt. Das siehst du, wenn du den Webhook das erste Mal auslöst.

## Schritt 5: Die E-Mail senden

Jetzt kommt der eigentliche Nutzen: ein "Send Email"-Node.

n8n kann E-Mails über verschiedene Anbieter senden. Gmail, SMTP, Outlook. Für den Start am einfachsten: Gmail mit deinem Google-Account verbinden. Das dauert zwei Minuten und braucht keine technischen Kenntnisse.

Im Node konfigurierst du: An wen soll die Mail gehen, Betreff, und den Inhalt. Im Inhalt kannst du Variablen aus dem vorherigen Node einbauen: "Neue Anfrage von {{name}} ({{email}}): {{message}}".

## Schritt 6: Testen

Jetzt der wichtigste Schritt.

Klick in n8n auf "Listen for Test Event" beim Webhook-Node. Dann öffne ein neues Browser-Tab und schick eine POST-Anfrage an deine Webhook-URL. Entweder mit einem Test-Tool wie Postman, oder indem du dein Formular tatsächlich absendest.

n8n zeigt dir die eingehenden Daten live. Du siehst genau was ankommt, welche Felder existieren, und ob deine Set-Node die richtigen Werte zieht. Wenn etwas nicht stimmt, korrigierst du es hier. Nicht im Produktivbetrieb.

## Schritt 7: Aktivieren

Wenn alles funktioniert: Schalte den Workflow auf "Active".

Ab jetzt läuft er im Hintergrund. Jede eingehende Anfrage löst automatisch die E-Mail aus. Kein manuelles Prüfen des Postfachs. Kein Verpassen von Anfragen.

<figure>
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt="Code-Editor mit Workflow-Logik auf einem Bildschirm" />
  <figcaption>Wenn der Workflow einmal läuft, läuft er. Ohne dein Zutun. (Foto: Unsplash)</figcaption>
</figure>

## Was du jetzt weißt

> Trigger, Verarbeitung, Aktion. Dieses Muster gilt für praktisch jeden Workflow — egal ob du Rechnungen verarbeitest, Daten synchronisierst oder Benachrichtigungen automatisierst.

n8n hat über 400 integrierte Nodes. Jedes Tool das du kennst — Slack, Notion, Google Sheets, SAP, Salesforce — hat wahrscheinlich einen. Was du gerade gelernt hast, kannst du auf hunderte Szenarien anwenden.

Für einfachere Integrationen zwischen Cloud-Diensten ist [Zapier](/tools#automatisierung) eine gute Alternative. Weniger flexibel, dafür schneller aufgesetzt. Den Unterschied beschreibe ich in meinem [KI-Toolkit](/blog/mein-ki-toolkit).

## Dein nächster Schritt

Bau diesen Workflow nach. Nicht lesen und weiterscrollen. Bauen.

Der erste Workflow ist immer der schwerste. Der zweite dauert halb so lang. Der zehnte baust du in Minuten.

Wenn du wissen willst, welche Prozesse in deinem Unternehmen sich als nächstes für Automatisierung eignen, hilft der Artikel [5 Zeichen, dass ein Prozess nach KI schreit](/blog/ki-prozesse-identifizieren). Und das gesamte Tool-Setup findest du auf der [Tools-Seite](/tools#automatisierung).
