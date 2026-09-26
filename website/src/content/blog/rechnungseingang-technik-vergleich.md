---
title: "E-Rechnung, OCR oder Sprachmodell: Welche Technik den Rechnungseingang wirklich automatisiert"
description: "XRechnung-Parser, klassische Dokumenten-KI oder ein Sprachmodell mit Bildeingabe? Ein Vergleich der vier Wege, Eingangsrechnungen automatisch zu erfassen, mit Kosten, Grenzen und einer klaren Empfehlung."
date: 2026-09-26
tags: ["KI", "Buchhaltung", "E-Rechnung", "Tools", "SAP"]
draft: false
category: "Tools & Setup"
---

Seit Anfang 2025 muss jedes Unternehmen in Deutschland E-Rechnungen empfangen können. Trotzdem kommen laut Bitkom bei 96 Prozent der Unternehmen Rechnungen weiterhin als PDF per Mail, und nur 45 Prozent können strukturierte E-Rechnungen tatsächlich verarbeiten. Die Realität im Rechnungseingang ist also ein Mix: XML, PDF, Scan, Foto vom Lieferschein.

Für diesen Mix gibt es vier technische Wege. Sie werden ständig durcheinandergeworfen, und das kostet Geld, weil man entweder zu viel Technik kauft oder die falsche.

<figure>
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Stapel Rechnungen neben Laptop und Taschenrechner auf einem Schreibtisch" />
  <figcaption>Vier Formate, vier Techniken. Die Kunst ist, jede Rechnung auf den billigsten Weg zu schicken, der sie sicher liest. (Foto: Unsplash)</figcaption>
</figure>

## Weg 1: Der XML-Parser für echte E-Rechnungen

XRechnung und ZUGFeRD sind keine PDFs mit hübschem Layout, sondern strukturierte Daten. Bei ZUGFeRD steckt das XML im PDF, bei XRechnung ist es die Datei selbst. Lieferant, Rechnungsnummer, Positionen, Steuer, Bankverbindung: alles steht in definierten Feldern.

Dafür brauchst du keine KI. Ein Parser liest das XML, fertig. Fehlerquote praktisch null, Kosten praktisch null. Wer hier ein Sprachmodell drauf loslässt, zahlt für etwas, das eine Bibliothek in Millisekunden erledigt.

**Grenze:** Funktioniert nur, wenn die Rechnung wirklich eine E-Rechnung ist. Das prüft der Workflow als allererstes. Ist es eine, geht sie diesen Weg. Ist es keine, weiter zu Weg 2 bis 4.

## Weg 2: Klassische Dokumenten-KI

Azure Document Intelligence, Google Document AI und ähnliche Dienste haben vortrainierte Rechnungsmodelle. Du schickst das PDF hin, bekommst Felder mit Koordinaten und Konfidenz zurück. Das ist seit Jahren erprobt, schnell und pro Seite günstig, im Bereich von einem Cent.

**Stärken:** Sehr gute Erkennung von Standardlayouts, exakte Positionsangaben auf der Seite, keine Halluzinationen im klassischen Sinn, weil das Modell nur liest, was da steht.

**Grenzen:** Ungewöhnliche Layouts, handschriftliche Ergänzungen, Rechnungen mit Positionstabellen über mehrere Seiten oder Fremdsprachen brauchen Nachtraining oder eigene Regeln. Und: Die Dienste liefern Felder, aber kein Verständnis. Ob "Frachtpauschale" eine Position oder ein Zuschlag ist, entscheidet dein Code.

## Weg 3: Ein Sprachmodell mit Bildeingabe

Claude, GPT und andere aktuelle Modelle lesen Bilder direkt. Du gibst jede Seite als Bild plus den extrahierten Text mit und verlangst eine feste Tabelle zurück, inklusive Sicherheitswert pro Feld. Das ist der Weg, den ich in den meisten Piloten wähle, wenn Weg 1 nicht greift.

**Stärken:** Kommt mit fast jedem Layout klar, versteht Kontext ("Gesamtbetrag abzüglich Gutschrift vom 3.4."), kann in einem Schritt zuordnen, ob es eine Rechnung, eine Gutschrift oder eine Mahnung ist. Ein einziger Prompt ersetzt viele Sonderregeln.

**Grenzen:** Teurer pro Seite als Weg 2, in der Größenordnung von einigen Cent statt einem. Und das Modell kann sich sicher anfühlen und trotzdem falsch liegen. Deshalb gilt: Beträge werden nachgerechnet (Netto plus Steuer muss Brutto ergeben), die Bankverbindung wird gegen den Lieferantenstamm geprüft, und eine abweichende IBAN ist immer rot. Wer das weglässt, baut eine Betrugsmaschine.

Mehr dazu, was Sprachmodelle können und was nicht, steht in [Was ein Sprachmodell wirklich kann](/blog/sprachmodell-erklaert).

## Weg 4: Die fertige Suite

Anbieter wie Candis, GetMyInvoices, die DATEV-Belegverarbeitung oder die SAP-eigenen Dienste bündeln Erkennung, Freigabe-Workflow und Buchung in einem Produkt. Du kaufst pro Nutzer oder pro Beleg.

**Stärken:** Läuft am ersten Tag, Freigabe-Workflow ist dabei, der Anbieter kümmert sich um GoBD und Updates.

**Grenzen:** Du bekommst die Prozesslogik des Anbieters, nicht deine. Der Abgleich mit Bestellung und Wareneingang ist oft nur bei den teureren Stufen dabei. Und wenn ihr schon SAP mit Vorerfassung habt, kauft ihr Funktionen doppelt.

## Der Vergleich auf einen Blick

| Kriterium | XML-Parser | Dokumenten-KI | Sprachmodell | Fertige Suite |
|---|---|---|---|---|
| Für welche Belege | Nur E-Rechnungen | Standard-PDFs, Scans | Alles, auch Fotos und Sonderfälle | Alles, was der Anbieter unterstützt |
| Kosten pro Beleg | Praktisch null | ca. 1 Cent | Einige Cent | Lizenz pro Nutzer oder Beleg |
| Fehlerquote | Praktisch null | Niedrig bei Standardlayouts | Niedrig, braucht Rechenprüfung | Niedrig |
| Einrichtung | Stunden | Tage | Tage | Tage bis Wochen |
| Abgleich mit Bestellung | Selbst bauen | Selbst bauen | Selbst bauen | Je nach Stufe |
| Datenhoheit | Vollständig | Cloud-Anbieter | Cloud-Anbieter (mit Vertrag) | Cloud-Anbieter |

## Was ich empfehle

Nicht einen Weg wählen, sondern eine Reihenfolge. Der Workflow prüft zuerst, ob eine E-Rechnung vorliegt. Wenn ja: Parser, fertig. Wenn nein: Sprachmodell mit Bildeingabe, weil es den Sonderfall-Zoo eines Mittelständlers mit einem Prompt abdeckt. Dokumenten-KI lohnt sich zusätzlich, wenn das Volumen in die Tausende pro Monat geht und die Cent-Differenz pro Seite ins Gewicht fällt. Die fertige Suite ist die richtige Wahl, wenn ihr kein ERP mit Vorerfassung habt und den Freigabe-Workflow gleich mitkaufen wollt.

> Die Erkennung ist der kleinste Teil. Der Wert entsteht beim Abgleich mit Bestellung und Wareneingang und in der Ampel, die morgens auf dem Bildschirm der Buchhaltung liegt.

Genau dieser Abgleich, den SAP Dreiwegeabgleich nennt, ist bei allen vier Wegen der Teil, den ihr selbst bauen oder gezielt einkaufen müsst. Was manuell erfasste Rechnungen kosten, hat Ardent Partners 2025 für den US-Markt untersucht: rund 11 Dollar pro Rechnung im Durchschnitt, unter 3 Dollar bei Unternehmen mit automatischer Erfassung und Abgleich. Deutsche Beraterzahlen liegen mit 12 bis 15 Euro ähnlich, kommen aber ohne Methodik.

## Drei Dinge, die bei jedem Weg gelten

**GoBD.** Das Original bleibt unverändert im Archiv, das Verfahren ist dokumentiert. Eine fehlende Verfahrensdokumentation gilt als formeller Mangel. Das schreibt ihr während des Projekts, nicht danach.

**Toleranzen.** Zu eng, und Rundungsdifferenzen erzeugen lauter gelbe Ampeln. Zu weit, und Fehler laufen durch. SAP hat dafür Toleranzschlüssel, die ihr übernehmen könnt statt neu zu erfinden.

**Datenschutz.** Rechnungen enthalten Namen, manchmal Bankdaten von Einzelunternehmern. Für Weg 2 bis 4 braucht ihr einen Auftragsverarbeitungsvertrag. Was sonst noch gilt, steht in [KI und DSGVO](/blog/ki-und-dsgvo).

## Dein nächster Schritt

Zähl eine Woche lang, wie viele Rechnungen als E-Rechnung, als PDF und als Scan kommen. Diese drei Zahlen entscheiden, welcher Weg bei euch die Hauptlast trägt. Den kompletten Use Case mit Aufwand und Voraussetzungen findest du in der Lösungsbibliothek: [Eingangsrechnungen erkennen, prüfen, vorerfassen](/loesungen/rechnungseingang-vorerfassung). Was KI in der Buchhaltung darüber hinaus kann und wo sie aufhört, beschreibt [KI in der Buchhaltung](/blog/ki-in-der-buchhaltung).
