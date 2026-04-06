---
title: "Ich habe in einem Wochenende eine App gebaut — ohne Programmierer zu sein"
description: "App bauen ohne Programmierkenntnisse — ist das wirklich möglich? Ich habe es gemacht. Zwei eigene Produkte, live, mit KI als Entwicklungspartner. Was dahintersteckt und was du daraus mitnehmen kannst."
date: 2026-04-02
tags: ["KI", "Entwicklung", "Produktivität", "Erfahrungsbericht", "No-Code", "Claude Code"]
draft: false
category: "Erfahrungsbericht"
---

Ich bin kein Programmierer.

Ich verstehe Code, kann ihn lesen, habe über die Jahre Dinge in verschiedenen Sprachen zusammengebaut. Aber Entwickler? Nein. Zu langsam. Zu viele blinde Flecken. Zu viele Abende mit Debugging die ich einfach nicht hatte.

Dann kam [Claude Code](https://claude.ai/code).

<figure>
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt="Code-Editor mit dunklem Theme auf einem Laptop-Bildschirm" />
  <figcaption>Der Arbeitsplatz hat sich verändert. KI schreibt mit. (Foto: Unsplash)</figcaption>
</figure>

## Was ich gebaut habe

Zwei eigene Produkte. Live. **Cookloop** und **DartsIQ**.

Cookloop ist eine Web-App für Rezeptplanung. DartsIQ ein Analyse-Tool für Darts-Spieler.

Beide laufen in der Beta. Beide haben echte Tester. Und beide habe ich in wenigen Tagen gebaut. Kein Entwicklerteam, keine Agentur, keine ausgelagerten Tickets. Nur ich, ein Terminal und KI als Entwicklungspartner.

> Der Zugang zu Software-Entwicklung hat sich fundamental verändert. Nicht irgendwann in der Zukunft. Jetzt, heute, für jeden der es ausprobiert.

## Wie das konkret aussieht

[Claude Code](https://claude.ai/code) läuft direkt im Terminal. Es liest Dateien, versteht das Projekt und schreibt Code. Nicht als Antwort in einem Chat-Fenster, sondern direkt in die richtigen Dateien.

Der Rhythmus ist schnell:

1. Ich beschreibe was ich will
2. Claude baut es
3. Ich teste
4. Ich sage was nicht stimmt. Claude korrigiert.

Das klingt einfacher als es ist. Es gibt Momente wo es hakt. Wo der generierte Code nicht das tut was man erwartet. Wo man verstehen muss was da eigentlich gebaut wurde.

Aber der Grundrhythmus ist ein anderer.

**Früher:** Problem verstehen → Google → Stack Overflow → Code schreiben → debuggen → Stunden später → nächstes Problem.

**Heute:** Problem beschreiben → Code erscheint → testen → weiter.

<figure>
  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" alt="Mehrere Monitore mit Code in einem dunklen Büro" />
  <figcaption>Früher war das der Arbeitsalltag eines Entwicklers. Heute ist es einer von vielen Schritten. (Foto: Unsplash)</figcaption>
</figure>

## Das System dahinter: KI PIONIER und Garrit Wilson

Ich muss an dieser Stelle ehrlich sein: Die Effizienz kam nicht allein von Claude Code.

Hinter dem Arbeitsrhythmus steckt ein System. Ein strukturierter Workspace, der Claude dauerhaft im Kontext hält — wer ich bin, woran ich arbeite, welche Entscheidungen bereits getroffen sind. Claude startet nicht jeden Tag neu bei null. Es kennt das Projekt.

Dieses System habe ich in großen Teilen von **Garrit Wilson** und der [KI PIONIER Akademie](https://ki-pionier-akademie.de) übernommen und auf meine Bedürfnisse angepasst. Garrit hat ein Workspace-Template-Konzept entwickelt, das genau dieses Problem löst: Wie gibst du einer KI dauerhaften Kontext, ohne jedes Mal von vorn anfangen zu müssen?

Die Grundidee: Eine zentrale Konfigurationsdatei (`CLAUDE.md`) beschreibt, wer du bist, was deine Ziele sind und wie der Workspace aufgebaut ist. Slash-Commands wie `/prime` laden diesen Kontext zu Beginn jeder Session. Kontext-Dateien halten aktuelle Projektstände, Entscheidungen und Prioritäten fest. Ein Memory-System merkt sich, was sich über Sessions hinweg bewährt hat.

Was ich daran angepasst habe: die Struktur auf meine Arbeitsschwerpunkte ausgerichtet, eigene Commands entwickelt, das System mit meinem Portfolio-Workspace verbunden und den Blog-Workflow integriert.

Das Ergebnis ist ein persönliches KI-Betriebssystem. Claude kennt meine Projekte. Es kennt meinen Schreibstil. Es weiß was bereits erledigt ist und was als nächstes kommt. Mehr dazu im Artikel [Mein KI-OS](/blog/mein-ki-os).

Wer sich für das Ursprungssystem interessiert: Garrit und die KI PIONIER Community sind bei [ki-pionier-akademie.de](https://ki-pionier-akademie.de) zu finden. Das, was ich dort gelernt und adaptiert habe, hat meine Arbeitsweise fundamental verändert.

## Was sich wirklich verändert hat

Die Flaschenhälse haben sich verschoben.

Früher war der Engpass **Implementierung**. Du hattest eine Idee und brauchtest Programmierkenntnisse. Oder jemanden der sie hatte. Teuer. Langsam. Abhängig.

Heute ist der Engpass **Klarheit**.

Du musst präzise beschreiben können was du willst. Entscheiden, nicht nur wünschen. Verstehen was gebaut wird, auch ohne jeden Codepfad zu kennen.

> Früher hast du einen Entwickler gebraucht. Heute brauchst du eine präzise Beschreibung. Und den Mut anzufangen.

Das ist eine andere Fähigkeit als Programmieren. Und sie ist lernbar.

### Was "die KI führen" bedeutet

Du bist nicht der Coder. Du bist der Architekt.

Du entscheidest was gebaut wird, in welcher Reihenfolge, welche Kompromisse akzeptabel sind. Die KI setzt um. Aber ohne deine Richtung läuft sie im Kreis.

Das Verhältnis erinnert mich an einen erfahrenen Projektleiter mit einem sehr schnellen Junior-Entwickler. Der Junior macht alles was man ihm sagt, aber er braucht klare Ansagen.

## Was das nicht ist

KI-generierter Code ist nicht automatisch guter Code.

Wer keine Ahnung hat was da gebaut wird, läuft irgendwann gegen eine Wand. Ein System das gewachsen ist ohne dass du es verstehst, macht dir Probleme die du nicht lösen kannst.

Ich lese den Code den Claude schreibt. Nicht jeden Buchstaben, aber ich verstehe die Struktur, die Entscheidungen, die Abhängigkeiten. Das ist das Minimum.

Für Unternehmens-Software mit harten Anforderungen an Sicherheit, Skalierung und Compliance brauchst du weiterhin professionelle Entwickler. KI beschleunigt auch deren Arbeit erheblich. Aber ersetzen? Noch nicht.

## Was das für dich bedeutet

Wenn du eine Idee hast, die du jahrelang mit "ich bräuchte mal einen Entwickler" abgetan hast. Schau nochmal hin.

Manche dieser Ideen lassen sich heute alleine bauen. Nicht alle. Aber mehr als du denkst.

Der erste Schritt ist nicht Programmieren lernen.

Der erste Schritt ist: Beschreib die Idee so präzise, dass ein anderer Mensch sie umsetzen könnte. Wenn du das kannst, hast du die Grundvoraussetzung.

## Dein nächster Schritt

<figure>
  <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=1200&q=80" alt="Hände tippen auf einer Laptop-Tastatur" />
  <figcaption>Der erste Schritt ist kleiner als du denkst. (Foto: Unsplash)</figcaption>
</figure>

Nimm die kleinste, konkreteste Version einer Idee die du hast.

Nicht die ganze Vision. Die kleinste sinnvolle Version. Ein Formular. Eine Berechnung. Eine einfache Anzeige. Etwas, das an einem Nachmittag fertig sein könnte.

Öffne [Claude](https://claude.ai). Beschreib es. Schau was passiert.

Das Schlimmste: Es funktioniert nicht und du hast ein paar Stunden investiert.

Das Beste: Du hast ein laufendes Produkt. Und ein komplett neues Bild davon, was für dich möglich ist.

Bevor du loslegst: Wenn du deine Idee zuerst prüfen willst, bevor du baust, zeigt der Artikel [Idee in zwei Stunden validieren](/blog/idee-validieren-mit-ki) wie das geht.

## Mein Toolstack

Für Cookloop und DartsIQ habe ich mit [Claude Code](https://claude.ai/code), Supabase und Vercel gearbeitet. Für das Hosting der finalen Versionen schaue ich mir [Hostinger](/tools#hosting--infrastruktur) und [IONOS](/tools#hosting--infrastruktur) genauer an. Für statisches Deployment war [Netlify](/tools#hosting--infrastruktur) immer meine erste Wahl.

Alle Tools die ich für meine Projekte nutze und empfehle, findest du auf meiner [Tools-Seite](/tools).
