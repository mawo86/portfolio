---
title: "n8n: Dein erster Automatisierungs-Workflow in 30 Minuten"
description: "n8n installieren, verstehen und den ersten echten Workflow bauen — Schritt für Schritt. Kein Entwickler-Hintergrund nötig."
date: 2026-05-26
tags: ["Automatisierung", "n8n", "Anleitung", "Tools"]
draft: true
---

n8n ist das Automatisierungstool, das ich für fast alles nutze. Open Source, visuell, mächtig.

Aber der Einstieg wirkt abschreckend. Zu viele Optionen, zu viele Nodes, zu viele Möglichkeiten. Der häufigste Fehler: Man startet ohne konkretes Ziel und verliert sich im Interface.

Deshalb machen wir es anders. Wir bauen einen echten Workflow — einen, der tatsächlich nützlich ist. Und dann verstehst du das Prinzip.

## Was wir bauen

Ein automatisches E-Mail-Benachrichtigungssystem für neue Kontaktanfragen.

Wenn jemand über dein Webformular eine Anfrage sendet, bekommst du sofort eine strukturierte E-Mail mit den Details — egal wo du gerade bist, egal ob du den Posteingang überwachst.

Klingt einfach. Ist es auch. Aber der Weg dorthin zeigt dir alles, was du über n8n wissen musst.

## Schritt 1: n8n starten

Die schnellste Option: n8n Cloud. Unter n8n.io registrieren, kostenlosen Trial starten. Keine Installation, keine Server, kein Ärger. Für den Einstieg genau richtig.

Wenn du es lokal testen willst: `npx n8n` im Terminal — fertig. n8n läuft dann unter `localhost:5678`. Dafür brauchst du Node.js.

## Schritt 2: Den Workflow anlegen

Öffne n8n, klick auf "New Workflow". Du siehst eine leere Leinwand.

Das ist dein Arbeitsbereich. Jeder Workflow besteht aus Nodes — kleinen Bausteinen, die jeweils eine Aufgabe erledigen. Du verbindest sie, und Daten fließen von links nach rechts.

## Schritt 3: Den Trigger setzen

Jeder Workflow braucht einen Startpunkt. In n8n heißt das Trigger.

Klick auf das Plus-Symbol, such nach "Webhook". Ein Webhook ist eine URL, an die andere Systeme Daten schicken können. Wenn dein Kontaktformular abgesendet wird, schickt es die Daten an diese URL — und dein Workflow startet.

Wähle "Webhook" aus, stelle die Methode auf POST, und kopiere die generierte URL. Diese URL kommt später in dein Kontaktformular.

## Schritt 4: Die Daten verarbeiten

Als nächstes kommt ein "Set"-Node. Damit definierst du, welche Informationen du aus dem Formular-Payload haben willst.

Du ziehst den Node auf die Leinwand und verbindest ihn mit dem Webhook. Dann definierst du Felder: Name aus `body.name`, E-Mail aus `body.email`, Nachricht aus `body.message`. Die genauen Feldnamen hängen davon ab, wie dein Formular die Daten schickt — das siehst du, wenn du den Webhook das erste Mal auslöst.

## Schritt 5: Die E-Mail senden

Jetzt kommt der eigentliche Nutzen: ein "Send Email"-Node.

n8n kann E-Mails über verschiedene Anbieter senden — Gmail, SMTP, Outlook. Für den Start am einfachsten: Gmail mit deinem Google-Account verbinden. Das dauert zwei Minuten und braucht keine technischen Kenntnisse.

Im Node konfigurierst du: An wen soll die Mail gehen, Betreff, und den Inhalt. Im Inhalt kannst du Variablen aus dem vorherigen Node einbauen: "Neue Anfrage von {{name}} ({{email}}): {{message}}".

## Schritt 6: Testen

Jetzt der wichtigste Schritt: Testen.

Klick in n8n auf "Listen for Test Event" beim Webhook-Node. Dann öffne ein neues Browser-Tab und schick eine POST-Anfrage an deine Webhook-URL — entweder mit einem Test-Tool wie Postman, oder indem du dein Formular tatsächlich absendest.

n8n zeigt dir die eingehenden Daten live. Du siehst genau was ankommt, welche Felder existieren, und ob deine Set-Node die richtigen Werte zieht. Wenn etwas nicht stimmt, korrigierst du es hier — nicht im Produktivbetrieb.

## Schritt 7: Aktivieren

Wenn alles funktioniert: Schalte den Workflow auf "Active".

Ab jetzt läuft er im Hintergrund. Jede eingehende Anfrage löst automatisch die E-Mail aus. Kein manuelles Prüfen des Postfachs. Kein Verpassen von Anfragen.

## Was du jetzt weißt

Du hast den Grundaufbau von n8n verstanden: Trigger, Verarbeitung, Aktion.

Dieses Muster gilt für praktisch jeden Workflow — egal ob du Rechnungen verarbeitest, Daten zwischen Systemen synchronisierst oder Benachrichtigungen automatisierst. Die Bausteine sind immer dieselben. Nur die Nodes ändern sich.

n8n hat über 400 integrierte Nodes. Jedes Tool das du kennst — Slack, Notion, Google Sheets, SAP, Salesforce — hat wahrscheinlich einen. Das bedeutet: Was du gerade gelernt hast, kannst du auf hunderte Szenarien anwenden.

## Dein nächster Schritt

Bau diesen Workflow nach. Nicht lesen und weiterscrollen — bauen.

Der erste Workflow ist immer der schwerste. Der zweite dauert halb so lang. Der zehnte baust du in Minuten.
