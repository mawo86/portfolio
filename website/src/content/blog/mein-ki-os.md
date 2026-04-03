---
title: "Mein KI-OS: Wie ich mir einen persönlichen KI-Assistenten gebaut habe"
description: "Kein Tool, kein Abo — sondern ein System. Wie ich Claude Code als persönliches KI-Betriebssystem nutze und was das im Alltag verändert."
date: 2026-05-12
tags: ["KI", "Produktivität", "Setup", "Claude"]
draft: true
---

Die meisten Menschen nutzen KI wie eine Suchmaschine. Frage rein, Antwort raus, Fenster schließen.

Das ist verschenktes Potenzial.

Was ich gebaut habe, ist anders. Kein neues Tool, keine neue App — sondern ein System. Ein KI-Betriebssystem, das mich kennt, meinen Kontext versteht und mit jeder Session besser wird. Ich nenne es KI-OS.

## Das Problem mit dem Standard-Workflow

Stell dir vor, du hast einen neuen Mitarbeiter. Brillant, schnell, immer verfügbar.

Aber jeden Morgen kommt er rein und fragt: "Wer bist du nochmal? Woran arbeiten wir? Was haben wir letzte Woche gemacht?"

So fühlt sich KI ohne System an. Du erklärst jedes Mal von vorn. Du verlierst Zeit. Und der Assistent liefert generische Antworten, weil er deinen Kontext nicht kennt.

## Was ein KI-OS ist

Das Grundprinzip ist einfach: Ich gebe meiner KI dauerhaften Kontext — und sie gibt mir dauerhaft bessere Ergebnisse.

Technisch: Ich nutze Claude Code als Basis. Das ist die CLI-Version von Claude, die direkt im Terminal läuft und auf meine Dateien zugreift. Dazu habe ich eine Ordnerstruktur aufgebaut, die meinen Workspace abbildet.

Ein paar Dateien die immer geladen werden: Wer ich bin. Was meine Ziele sind. An welchen Projekten ich gerade arbeite. Welche Entscheidungen ich getroffen habe. Welche Workflows ich nutze.

Das klingt nach Aufwand. Ist es anfangs auch. Aber nach zwei Wochen merkst du: Du erklärst nichts mehr. Du arbeitest einfach.

## Die drei Schichten

**Schicht 1: Dauerhafter Kontext**

Eine Handvoll Markdown-Dateien, die Claude immer kennt. Mein Profil, meine Ziele, mein aktuelles Fokus-Thema. Zwei bis drei Seiten insgesamt — nicht mehr. Alles darüber hinaus wird Rauschen.

Der entscheidende Punkt: Diese Dateien pflege ich aktiv. Wenn sich ein Ziel ändert, ändere ich die Datei. Wenn ein Projekt abgeschlossen ist, aktualisiere ich den Status. Claude liest immer den aktuellen Stand.

**Schicht 2: Kommandos**

Ich habe wiederkehrende Workflows als Slash-Commands definiert. `/prime` lädt alle wichtigen Kontext-Dateien und bringt Claude auf den aktuellen Stand. `/create-plan` erstellt strukturierte Implementierungspläne bevor ich mit der Arbeit anfange.

Das klingt technisch. Ist es nicht. Es sind Textdateien mit Anweisungen — wie eine Bedienungsanleitung für deinen Assistenten.

**Schicht 3: Gedächtnis**

Claude kann sich Dinge merken. Nicht automatisch — aber wenn ich ihm sage "Merke dir das für zukünftige Sessions", legt er eine Notiz in einem Memory-Ordner ab. Beim nächsten Start liest er diese Notizen und bringt sie ein, wo relevant.

Das Ergebnis: Ein Assistent, der weiß, dass ich direkte Antworten bevorzuge. Der weiß, welche Entscheidungen wir bereits getroffen haben. Der nicht erklärt, was ich schon weiß.

## Was sich dadurch verändert hat

Früher habe ich KI punktuell genutzt. Für einen Text hier, eine Code-Frage da.

Heute ist Claude Code mein primäres Arbeitswerkzeug. Ich plane Projekte damit, schreibe Inhalte damit, entwickle Automatisierungen damit. Die Qualität der Ergebnisse ist nicht marginal besser — sie ist strukturell besser, weil der Kontext stimmt.

Konkret: Ich spare täglich etwa eine Stunde, die ich vorher mit Erklären, Wiederholen und Nachbearbeiten verbracht habe.

## Lohnt sich das?

Wenn du KI ein bis zweimal pro Woche für schnelle Fragen nutzt: Nein. Dafür ist der Aufbau zu aufwendig.

Wenn KI ein tägliches Arbeitswerkzeug für dich ist oder werden soll: Ja. Eindeutig.

Der Aufbau dauert ein Wochenende. Die Pflege ist minimal. Und der Unterschied im Alltag ist sofort spürbar.

## Dein nächster Schritt

Fang mit einer einzigen Datei an.

Öffne einen Texteditor. Schreib auf: Wer bist du beruflich, was sind deine drei wichtigsten Ziele gerade, und welche drei Projekte beschäftigen dich aktuell. Eine halbe Seite reicht.

Kopiere das in dein nächstes Gespräch mit Claude ganz oben rein, bevor du deine eigentliche Frage stellst.

Du wirst den Unterschied in der ersten Antwort merken.
