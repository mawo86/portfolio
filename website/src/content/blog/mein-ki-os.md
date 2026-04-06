---
title: "Mein KI-OS: Wie ich mir einen persönlichen KI-Assistenten gebaut habe"
description: "Kein Tool, kein Abo, sondern ein System. Wie Claude Code als persönliches KI-Betriebssystem funktioniert, woher das Konzept kommt und was es im Alltag verändert."
date: 2026-04-06
tags: ["KI", "Produktivität", "Setup", "Betriebssystem", "Claude"]
draft: false
---

Die meisten Menschen nutzen KI wie eine Suchmaschine. Frage rein, Antwort raus, Fenster schließen.

Das ist verschenktes Potenzial.

Was ich nutze, ist anders. Kein neues Tool, keine neue App. Sondern ein System. Ein KI-Betriebssystem, das mich kennt, meinen Kontext versteht und mit jeder Session besser wird. Ich nenne es KI-OS.

Und ich muss direkt sagen: Ich habe dieses System nicht selbst erfunden.

<figure>
  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" alt="Mehrere Monitore mit Code in einem dunklen Büro" />
  <figcaption>Ein System das mitdenkt, statt eines Tools das nur antwortet. (Foto: Unsplash)</figcaption>
</figure>

## Woher dieses System kommt

Das Konzept hinter dem KI-OS stammt von **Garrit Wilson** und der [KIPA KI Pionier Akademie](https://ki-pionier-akademie.de).

Garrit hat ein Workspace-Template-System entwickelt, das eine zentrale Frage löst: Wie gibst du einer KI dauerhaften Kontext, ohne jedes Mal von vorn anfangen zu müssen? Seine Antwort ist strukturiert, durchdacht und direkt einsetzbar. Ich bin über die KIPA Community auf dieses System gestoßen und habe es sofort übernommen.

Was ich gemacht habe: Die Grundstruktur auf meine Arbeitsschwerpunkte ausgerichtet, eigene Commands entwickelt, das System mit meinen Projekten vernetzt und per Online Datenbank und Telegram verbunden.

Das Ergebnis ist meine Version eines KI-Betriebssystems. Aber das Fundament, die Idee und die Architektur dahinter sind Garrits Arbeit. Wer das Ursprungssystem kennenlernen will: [ki-pionier-akademie.de](https://ki-pionier-akademie.de).

## Das Problem mit dem Standard-Workflow

Stell dir vor, du hast einen neuen Mitarbeiter. Brillant, schnell, immer verfügbar.

Aber jeden Morgen kommt er rein und fragt: "Wer bist du nochmal? Woran arbeiten wir? Was haben wir letzte Woche gemacht?"

So fühlt sich KI ohne System an. Du erklärst jedes Mal von vorn. Du verlierst Zeit. Und der Assistent liefert generische Antworten, weil er deinen Kontext nicht kennt.

Garrits Grundidee ist einfach: Löse dieses Problem ein für alle Mal. Gib der KI dauerhaften Kontext. Dann gibt sie dir dauerhaft bessere Ergebnisse.

## Die drei Schichten

Ich nutze [Claude Code](https://claude.ai/code) als technische Basis. Das ist die CLI-Version von Claude, die direkt im Terminal läuft und auf meine Dateien zugreift. Dazu gibt es eine Ordnerstruktur, die meinen Workspace abbildet. Drei Schichten, jede mit einem klaren Zweck.

**Schicht 1: Dauerhafter Kontext**

Eine Handvoll Markdown-Dateien, die Claude immer kennt. Mein Profil, meine Ziele, mein aktuelles Fokus-Thema. Zwei bis drei Seiten insgesamt. Alles darüber hinaus wird Rauschen.

Der entscheidende Punkt: Diese Dateien pflege ich aktiv. Wenn sich ein Ziel ändert, ändere ich die Datei. Wenn ein Projekt abgeschlossen ist, aktualisiere ich den Status. Claude liest immer den aktuellen Stand.

**Schicht 2: Kommandos**

Wiederkehrende Workflows als Slash-Commands. `/prime` lädt alle wichtigen Kontext-Dateien und bringt Claude auf den aktuellen Stand. `/create-plan` erstellt strukturierte Implementierungspläne, bevor ich mit der Arbeit anfange.

Das klingt technisch. Ist es nicht. Es sind Textdateien mit Anweisungen. Wie eine Bedienungsanleitung für deinen Assistenten.

**Schicht 3: Gedächtnis**

Claude kann sich Dinge merken. Wenn ich sage: "Merke dir das für zukünftige Sessions", legt er eine Notiz in einem Memory-Ordner ab. Beim nächsten Start liest er diese Notizen und bringt sie ein, wo relevant.

Das Ergebnis: Ein Assistent, der weiß, dass ich direkte Antworten bevorzuge. Der weiß, welche Entscheidungen wir bereits getroffen haben. Der nicht erklärt, was ich schon weiß.

<figure>
  <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=1200&q=80" alt="Person am Laptop, fokussiert, Notizbuch daneben" />
  <figcaption>Kontext ist alles. Wer ihn pflegt, arbeitet schneller als alle anderen. (Foto: Unsplash)</figcaption>
</figure>

## Was sich dadurch verändert hat

Früher habe ich KI punktuell genutzt. Für einen Text hier, eine Code-Frage da.

Heute ist [Claude Code](https://claude.ai/code) mein primäres Arbeitswerkzeug. Ich plane Projekte damit, schreibe Inhalte damit, entwickle Automatisierungen damit. Die Qualität der Ergebnisse ist nicht marginal besser. Sie ist strukturell besser, weil der Kontext stimmt.

Konkret: Ich spare täglich etwa eine Stunde, die ich vorher mit Erklären, Wiederholen und Nachbearbeiten verbracht habe. Wie das in der Praxis aussieht, habe ich im Artikel [App bauen ohne Programmierer](/blog/app-bauen-ohne-programmierer) beschrieben.

> Der Engpass bei KI ist selten das Modell. Er ist der fehlende Kontext.

## Lohnt sich das?

Wenn du KI ein bis zweimal pro Woche für schnelle Fragen nutzt: Nein. Dafür ist der Aufbau zu aufwendig.

Wenn KI ein tägliches Arbeitswerkzeug für dich ist oder werden soll: Ja. Eindeutig.

Der Aufbau dauert ein Wochenende. Die Pflege ist minimal. Und der Unterschied im Alltag ist sofort spürbar.

Das Ursprungssystem von Garrit Wilson gibt dir einen fertigen Startpunkt, den du nicht selbst konstruieren musst. Die Grundstruktur steht. Du passt sie an. Das ist der schnellste Weg rein.

## Dein nächster Schritt

Fang mit einer einzigen Datei an.

Öffne einen Texteditor. Schreib auf: Wer du beruflich bist, was deine drei wichtigsten Ziele gerade sind, und welche drei Projekte dich aktuell beschäftigen. Eine halbe Seite reicht.

Kopiere das in dein nächstes Gespräch mit [Claude](https://claude.ai) ganz oben rein, bevor du deine eigentliche Frage stellst.

Du wirst den Unterschied in der ersten Antwort merken. Welche Prompts dann den größten Unterschied machen, zeigt der Artikel [5 Prompts, die ich täglich nutze](/blog/prompts-die-funktionieren). Und welche weiteren Tools das System sinnvoll ergänzen, steht in meinem [KI-Toolkit](/blog/mein-ki-toolkit).
