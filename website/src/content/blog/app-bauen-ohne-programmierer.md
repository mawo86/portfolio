---
title: "Ich habe in einem Wochenende eine App gebaut — ohne Programmierer zu sein"
description: "App bauen ohne Programmierkenntnisse — ist das wirklich möglich? Ich habe es gemacht. Zwei eigene Produkte, live, mit KI als Entwicklungspartner. Was dahintersteckt und was du daraus mitnehmen kannst."
date: 2026-06-02
tags: ["KI", "Entwicklung", "Produktivität", "Erfahrungsbericht", "No-Code", "Claude Code"]
draft: true
---

Ich bin kein Programmierer.

Ich verstehe Code, kann ihn lesen, habe über die Jahre Dinge in verschiedenen Sprachen zusammengebaut. Aber Entwickler? Nein. Zu langsam. Zu viele blinde Flecken. Zu viele Abende mit Debugging die ich nicht hatte.

Dann kam Claude Code — und die Frage "App bauen ohne Programmierer, geht das wirklich?" hatte plötzlich eine andere Antwort.

## Was ich gebaut habe

Zwei eigene Produkte. Live. Cookloop und DartsIQ.

Cookloop ist eine Web-App für Rezeptplanung. DartsIQ ein Analyse-Tool für Darts-Spieler. Beide laufen in der Beta. Beide haben echte Tester. Und beide habe ich in wenigen Tagen gebaut — kein Entwicklerteam, keine Agentur, keine ausgelagerten Tickets.

Nur ich, ein Terminal und Claude Code.

Der Zugang zu Software-Entwicklung hat sich fundamental verändert. Das ist keine Übertreibung. Das ist eine Beobachtung aus der Praxis.

## Wie das konkret aussieht

[Claude Code](https://claude.ai/code) läuft direkt im Terminal. Es liest Dateien, versteht das Projekt und schreibt Code — nicht als Antwort in einem Chat-Fenster, sondern direkt in die richtigen Dateien.

Ich beschreibe was ich will. Claude baut es. Ich teste. Es funktioniert, oder ich sage was nicht stimmt. Claude korrigiert.

Klingt einfacher als es ist. Es gibt Momente wo es hakt. Wo der generierte Code nicht das tut was man erwartet. Wo man verstehen muss was da eigentlich gebaut wurde. Aber der Rhythmus ist ein anderer als klassische Entwicklung.

Früher: Problem verstehen → Google → Stack Overflow → Code schreiben → debuggen → Stunden später → nächstes Problem.

Heute: Problem beschreiben → Code erscheint → testen → weiter.

## Was sich wirklich verändert hat

Die Flaschenhälse haben sich verschoben.

Früher war der Engpass Implementierung. Du hattest eine Idee und brauchtest Programmierkenntnisse — oder jemanden mit diesen Kenntnissen. Teuer. Langsam. Abhängig.

Heute ist der Engpass Klarheit. Du musst präzise beschreiben können was du willst. Entscheiden, nicht nur wünschen. Verstehen was gebaut wird — auch ohne jeden Codepfad zu kennen.

Das ist eine andere Fähigkeit als Programmieren. Und sie ist lernbar. Du musst die KI führen lernen.

## Was das nicht ist

KI-generierter Code ist nicht automatisch guter Code.

Wer keine Ahnung hat was da gebaut wird, läuft irgendwann gegen eine Wand. Ein System, das gewachsen ist ohne dass du es verstehst, macht dir Probleme die du nicht lösen kannst.

Ich lese den Code, den Claude schreibt. Nicht jeden Buchstaben — aber ich verstehe die Struktur, die Entscheidungen, die Abhängigkeiten. Das ist das Minimum.

Und für Unternehmens-Software mit harten Anforderungen an Sicherheit, Skalierung und Compliance brauchst du weiterhin professionelle Entwickler. KI beschleunigt auch deren Arbeit erheblich — aber das ist ein anderes Thema.

## Was das für dich bedeutet

Wenn du eine Idee hast, die du jahrelang mit "ich bräuchte mal einen Entwickler" abgetan hast — schau nochmal hin.

Manche dieser Ideen lassen sich heute alleine bauen. Nicht alle. Aber mehr als du denkst.

Der erste Schritt ist nicht Programmieren lernen. Der erste Schritt ist: Beschreib die Idee so präzise, dass ein anderer Mensch sie umsetzen könnte. Wenn du das kannst, hast du die Grundvoraussetzung.

## Dein nächster Schritt

Nimm die kleinste, konkreteste Version einer Idee die du hast.

Nicht die ganze Vision. Die kleinste sinnvolle Version. Ein Formular. Eine Berechnung. Eine einfache Anzeige. Etwas, das an einem Nachmittag fertig sein könnte.

Öffne Claude. Beschreib es. Schau was passiert.

Das Schlimmste: Es funktioniert nicht und du hast ein paar Stunden investiert. Das Beste: Du hast ein laufendes Produkt — und ein neues Bild davon, was möglich ist.

## Mein Toolstack

Für Cookloop und DartsIQ habe ich mit [Claude Code](https://claude.ai/code), Supabase und [Vercel](https://vercel.com) gearbeitet — für schnelles Deployment direkt aus dem Git-Repository. Für das Hosting der finalen Versionen schaue ich mir [Hostinger](/tools#hosting--infrastruktur) und [IONOS](/tools#hosting--infrastruktur) genauer an, beide bieten gute Performance zu fairen Preisen. Und für das statische Deployment zwischendurch war [Netlify](/tools#hosting--infrastruktur) immer meine erste Wahl.

Alle Tools die ich für meine Projekte nutze und empfehle, findest du auf meiner [Tools-Seite](/tools).
