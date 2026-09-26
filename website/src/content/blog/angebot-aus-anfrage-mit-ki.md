---
title: "Vom Anfrage-PDF zum Angebotsentwurf: So automatisierst du den Innendienst mit KI"
description: "Anfragen kommen als Mail, PDF oder Foto. So baust du einen Workflow, der daraus einen Angebotsentwurf mit Preisen aus dem ERP macht. Schritt für Schritt, mit den Stellen, an denen es hakt."
date: 2026-09-26
tags: ["KI", "Vertrieb", "Automatisierung", "n8n", "SAP"]
draft: false
category: "Automatisierung"
---

Eine Anfrage kommt am Dienstagmorgen rein. Drei Positionen, ein Wunschtermin, ein PDF mit einer Zeichnung im Anhang. Der Innendienst liest sie am Mittwoch, sucht die Artikelnummern, fragt im ERP die Preise ab, tippt das Angebot in die Word-Vorlage. Donnerstag geht es raus. Der Wettbewerber hat am Dienstagnachmittag geantwortet.

Das Problem ist nicht die Entscheidung. Rabatt, Lieferzeit, Zahlungsziel, das kann der Vertrieb in zwei Minuten. Das Problem ist die Tipparbeit davor. Und genau die lässt sich heute automatisieren, ohne dass jemand das ERP anfasst.

<figure>
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Schreibtisch mit Unterlagen, Taschenrechner und Laptop, Angebotskalkulation" />
  <figcaption>Der Engpass im Vertrieb sitzt selten im Gespräch. Er sitzt zwischen Posteingang und Angebotsvorlage. (Foto: Unsplash)</figcaption>
</figure>

## Was am Ende rauskommt

Bevor wir bauen, das Zielbild. Der Workflow liefert keinen fertigen Preis und schickt nichts an den Kunden. Er liefert einen Entwurf: die richtigen Positionen aus eurem Artikelstamm, die richtigen Mengen, den Wunschtermin, die Sonderwünsche als Notiz. Preise kommen ausschließlich aus dem ERP. Zeilen, bei denen sich das Modell nicht sicher ist, sind gelb markiert.

Ein Mensch öffnet den Entwurf, prüft die gelben Zeilen, setzt den Rabatt, schickt ab. Aus 45 Minuten werden 10. Das ist der Erfahrungswert, mit dem ich rechne, und er stimmt nur, wenn die Anfragen halbwegs regelmäßig kommen. Bei drei Anfragen im Monat lohnt sich der Aufbau nicht.

## Schritt 1: Die Anfrage aus dem Postfach holen

Der Workflow (bei mir n8n, [Zapier](/blog/zapier-vs-n8n) geht für einfache Fälle auch) lauscht auf ein Sammelpostfach wie anfragen@. Jede neue Mail wird gelesen, Anhänge werden gespeichert. PDF-Anhänge werden Seite für Seite in Bilder umgewandelt, weil viele Anfragen als Scan oder Foto kommen und der Text im PDF dann gar nicht existiert.

Wichtig an dieser Stelle: Wer darf was sehen? Anfragen enthalten Namen und Kontaktdaten. Welche Daten in welches KI-Werkzeug dürfen, steht im Artikel [Welche Daten darf ich in KI-Tools eingeben?](/blog/ki-daten-eingeben). Kurzfassung: Business-Vertrag mit Auftragsverarbeitung oder gar nicht.

## Schritt 2: Das Modell füllt eine feste Tabelle

Jetzt kommt das Sprachmodell ins Spiel, und zwar mit einer engen Aufgabe. Es bekommt den Mailtext und die Seiten als Bild und soll eine Tabelle zurückgeben. Nicht "fasse die Anfrage zusammen", sondern: Kunde, Positionen mit Bezeichnung, Menge und Einheit, Wunschtermin, Sonderwünsche. Und pro Feld einen Sicherheitswert zwischen 0 und 100.

Der Sicherheitswert ist der wichtigste Teil des Prompts. Ohne ihn sieht jede Antwort gleich überzeugend aus, und ihr merkt erst beim Kunden, dass aus "ca. 500 Stück" plötzlich 5.000 geworden sind. Mit ihm könnt ihr die Zeilen unter 80 gelb markieren und der Rest läuft durch.

Ein Prompt-Ausschnitt, der sich bewährt hat:

```
Extrahiere aus der Anfrage alle angefragten Positionen.
Gib ausschließlich JSON zurück mit den Feldern
kunde, positionen[] (bezeichnung, menge, einheit, sicherheit),
wunschtermin, sonderwuensche, sicherheit_gesamt.
Erfinde nichts. Fehlt eine Angabe, setze null und sicherheit 0.
```

Wie du Prompts grundsätzlich so baust, dass sie zuverlässig liefern, beschreibt [Die 5 Prompts, die ich täglich nutze](/blog/prompts-die-funktionieren).

## Schritt 3: Freitext wird zur Artikelnummer

Hier hängen die meisten Projekte. "Das gleiche wie im Mai" oder "die blauen Halter, 200 Stück" kann kein Modell allein in eine Artikelnummer übersetzen. Was hilft, ist Reihenfolge:

1. **Kundenartikelnummer.** Wenn der Kunde seine eigene Nummer nennt und ihr die im System gepflegt habt, ist das ein exakter Treffer. In SAP heißt das Kunden-Material-Info, andere ERP-Systeme haben ähnliche Tabellen.
2. **Bestellhistorie dieses Kunden.** Was hat er in den letzten zwei Jahren bestellt? Aus 40.000 Artikeln werden 30. Gegen die lässt sich Freitext sehr gut abgleichen.
3. **Textähnlichkeit gegen den Artikelstamm.** Erst als letzte Stufe, und immer mit niedrigerem Sicherheitswert.

Deshalb starten wir nicht mit allen Kunden, sondern mit den zehn, die am häufigsten anfragen. Für die ist die Historie dicht, die Trefferquote hoch, und der Vertrieb sieht nach zwei Wochen einen Effekt.

## Schritt 4: Preise aus dem ERP, nie aus dem Modell

Das Modell rechnet keinen Preis. Nie. Preise, Rabattstaffeln und Konditionen sind in eurem ERP hinterlegt, und nur dort stimmen sie. Bei SAP holt der Workflow sie über den OData-Dienst für Kundenaufträge ([API_SALES_ORDER_SRV](https://api.sap.com/api/API_SALES_ORDER_SRV/overview)), der eine Simulation ohne Buchung erlaubt. Bei anderen Systemen reicht zum Start ein täglicher Preisexport als CSV.

Das klingt nach einer technischen Fußnote, ist aber eine Vertriebsentscheidung. Rabatte sind politisch. Ein Modell, das "wie letztes Mal 8 Prozent" vorschlägt, untergräbt jede Preisdisziplin.

## Schritt 5: Der Entwurf landet, wo der Vertrieb ohnehin arbeitet

Zwei Varianten, je nachdem wie euer Vertrieb arbeitet: Der Workflow legt ein Angebot im Testsystem oder als Beleg mit Status "Entwurf" an. Oder er befüllt eure Word-Vorlage und legt sie mit der ursprünglichen Mail in einen Ordner. Beides funktioniert. Entscheidend ist, dass niemand ein neues Tool öffnen muss.

> Der Workflow ersetzt keinen Vertriebler. Er ersetzt die 35 Minuten, in denen der Vertriebler Sekretär seiner eigenen Anfrage war.

## Was das bringt, ehrlich

Ein belegtes Beispiel aus der Praxis: Der Fruchtverarbeiter Zentis hat die Auftragserfassung so automatisiert, Bestellungen aus Mail und PDF lesen, gegen Stammdaten prüfen, per SAP-Schnittstelle anlegen. Anfangs mussten noch 60 Prozent der Aufträge nachbearbeitet werden. Das ist kein Scheitern, das ist der realistische Startpunkt. Nach ein paar Wochen Feedback sinkt die Quote, weil die Historie wächst und die Prompts schärfer werden.

Wie du daraus einen Business Case rechnest, den die Geschäftsführung unterschreibt, zeigt [KI-ROI berechnen](/blog/ki-roi-berechnen). Für 20 Anfragen pro Woche und 35 Minuten Ersparnis pro Anfrage kommst du auf rund 12 Stunden pro Woche im Innendienst.

## Was ihr braucht, um anzufangen

- Lesezugriff auf Artikelstamm und Preise (OData bei SAP, sonst Export)
- 20 bis 30 alte Anfragen mit dem Angebot, das daraus wurde. Das sind eure Testfälle, an denen ihr die Trefferquote messt, bevor der erste Kunde etwas davon merkt
- Eine Person im Vertrieb, die zwei Wochen lang jeden Entwurf mit "passt", "geändert" oder "verworfen" markiert

Der komplette Use Case mit Aufwand, Paket und Voraussetzungen steht in der Lösungsbibliothek: [Angebotsentwurf aus der Kundenanfrage](/loesungen/angebotsentwurf-aus-anfrage). Wenn du dir noch nicht sicher bist, ob dieser Prozess bei euch der richtige erste ist, hilft [5 Zeichen, dass ein Prozess nach KI schreit](/blog/ki-prozesse-identifizieren).
