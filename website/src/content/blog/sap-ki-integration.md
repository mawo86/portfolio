---
title: "KI trifft SAP: Was heute schon funktioniert und wo die Reise hingeht"
description: "KI und SAP kombinieren: Konkrete Szenarien für Rechnungserkennung, Berichtsautomatisierung und Chatbots — was heute funktioniert und was kommt."
date: 2026-04-28
tags: ["SAP", "KI", "Enterprise", "Integration"]
draft: false
---

SAP ist das Rückgrat vieler deutscher Unternehmen. Gleichzeitig ist es ein System, das im Alltag mehr Geduld erfordert als die meisten zugeben. Daten extrahieren, Berichte bauen, Rechnungen erfassen — das sind Aufgaben, die täglich Stunden fressen. Und genau hier wird es interessant: Viele dieser Aufgaben lassen sich heute schon mit KI-Werkzeugen automatisieren. Ohne SAP auszutauschen, ohne Millionenprojekt.

Ich arbeite seit Jahren mit SAP und Enterprise-Systemen. Was mich in letzter Zeit am meisten beschäftigt: Die Kombination aus KI und SAP ist kein Zukunftsthema mehr. Es passiert jetzt — nur redet kaum jemand auf Deutsch darüber.

## Warum SAP und KI zusammengehören

SAP-Systeme sind Datengiganten. In einem typischen S/4HANA oder ECC stecken Jahre an Finanzdaten, Bestellhistorien, Lieferantenbewertungen, Produktionsparametern. Das Problem: Diese Daten rauszubekommen und sinnvoll aufzubereiten ist oft aufwendiger als die eigentliche Analyse.

KI ändert das. Nicht indem sie SAP ersetzt, sondern indem sie eine Schicht darüber legt, die Daten liest, interpretiert und aufbereitet — schneller und konsistenter als jeder manuelle Prozess.

## Vier Szenarien, die heute schon funktionieren

### 1. Intelligente Rechnungserkennung für SAP

Eingangsrechnungen kommen als PDF, per Mail, manchmal als Scan. Unterschiedliche Lieferanten, unterschiedliche Formate. Die klassische SAP-Erfassung erfordert, dass jemand die Daten manuell in die MIRO oder den Fiori-Beleg eingibt.

Mit KI-basierter Dokumentenerkennung (OCR + Large Language Models) liest ein Automatisierungsprozess die Rechnung, extrahiert Lieferant, Beträge, Positionen und Kontierung — und legt den Beleg in SAP vor. Der Mensch prüft und gibt frei, statt alles selbst einzutippen.

Das funktioniert heute mit Tools wie Azure Document Intelligence, Google Document AI oder spezialisierten Lösungen wie Parashift. Die SAP-Anbindung läuft über RFC, BAPI oder die SAP Business Technology Platform. Kein Hexenwerk, wenn man beide Seiten kennt.

### 2. Automatisierte Berichtserstellung aus SAP

Jeden Monat das gleiche Spiel: Daten aus SAP ziehen, in Excel aufbereiten, Grafiken bauen, Management-Zusammenfassung schreiben. Das dauert in vielen Unternehmen zwei bis drei Tage.

Ein KI-gestützter Prozess kann das auf Stunden reduzieren. Der Ablauf: SAP-Daten werden automatisch über eine Schnittstelle (OData, RFC oder direkter Datenbankzugriff) exportiert. Ein Skript bereitet die Rohdaten auf. Ein Sprachmodell generiert die Zusammenfassung — inklusive Abweichungsanalyse und Handlungsempfehlungen.

Ich habe das in der Praxis gesehen: Der Monatsabschluss-Bericht, der vorher zwei Tage Arbeit war, entsteht jetzt in zwei Stunden. Der Mensch prüft das Ergebnis und ergänzt Kontext — aber die Fleißarbeit ist weg.

### 3. KI-basierte Auswertung von SAP-Daten

Du willst wissen, welche Lieferanten in den letzten zwölf Monaten die höchste Reklamationsquote hatten. Oder welche Materialgruppen die stärksten Preisschwankungen zeigen. In SAP bedeutet das: Report bauen, Variante pflegen, Daten exportieren, analysieren.

Mit einem KI-Ansatz formulierst du die Frage in natürlicher Sprache. Ein Sprachmodell übersetzt das in eine SAP-Abfrage (CDS View, OData-Call oder SQL auf HANA), holt die Daten und liefert die Antwort — als Text, Tabelle oder Grafik.

Das ist kein Science-Fiction. Tools wie Langchain oder eigene Python-Skripte mit SAP-Connector können das heute abbilden. Die Herausforderung liegt nicht in der KI, sondern in der sauberen Anbindung an SAP und der richtigen Berechtigungssteuerung.

### 4. Chatbots für SAP-Datenabfragen

"Wie hoch war unser Umsatz im März?" — "Welche offenen Bestellungen hat Lieferant XY?" — "Zeig mir alle überfälligen Rechnungen über 10.000 Euro."

Ein SAP-Chatbot beantwortet solche Fragen in Sekunden. Dahinter steht ein Sprachmodell, das die Frage versteht, die richtige SAP-Abfrage auslöst und das Ergebnis aufbereitet zurückgibt. Teams, Slack oder eine eigene Web-Oberfläche dienen als Frontend.

Das funktioniert — mit Einschränkungen. Der Bot muss wissen, welche SAP-Datenquellen er abfragen darf. Die Antworten müssen verifizierbar sein (kein Halluzinieren bei Finanzdaten). Und die Berechtigungen müssen stimmen: Nicht jeder darf alles sehen.

In der Praxis starte ich solche Projekte mit einem eng begrenzten Scope. Zum Beispiel: Nur Einkaufsdaten, nur für das Controlling-Team. Das reduziert Komplexität und Risiko drastisch.

## Was noch nicht funktioniert

Ehrlichkeit gehört dazu. Nicht alles, was technisch möglich klingt, ist heute produktionsreif.

**Vollautomatische SAP-Buchungen ohne menschliche Freigabe** — technisch machbar, praktisch riskant. Bei Finanzdaten willst du einen Menschen im Loop. Zumindest bei allem über Bagatellebeträgen.

**KI-gesteuerte SAP-Customizing-Änderungen** — davon sind wir weit entfernt. SAP-Konfiguration ist zu komplex und zu kontextabhängig, als dass ein Sprachmodell das zuverlässig übernehmen könnte.

**SAPs eigene KI-Produkte (Joule, BTP AI)** — sie werden besser, aber sie sind heute für viele Mittelständler noch zu teuer oder zu unreif. Die gute Nachricht: Du brauchst sie nicht. Die meisten der oben beschriebenen Szenarien lassen sich mit externen Tools umsetzen, die über Standard-Schnittstellen an SAP andocken.

## Was das für dich bedeutet

Wenn du in einem Unternehmen mit SAP arbeitest und dich fragst, wo KI konkret helfen kann: Fang nicht bei der Technologie an. Fang beim Prozess an.

Welche SAP-bezogene Aufgabe frisst in deinem Team die meiste Zeit? Wo werden Daten manuell von A nach B geschoben? Wo wartet jemand auf einen Bericht, den eine Maschine schneller liefern könnte?

Das ist dein Einstiegspunkt. Nicht "Wir machen jetzt KI in SAP", sondern "Wir automatisieren diesen einen Prozess — und nutzen dafür KI-Werkzeuge." Wenn du tiefer einsteigen willst, wie man solche Automatisierungen im Mittelstand konkret angeht, lies meinen Artikel über [KI-Automatisierung im Mittelstand](/blog/ki-automatisierung-mittelstand).

## Dein nächster Schritt

Nimm dir 15 Minuten. Öffne dein SAP-System und schreib drei Prozesse auf, bei denen du oder dein Team regelmäßig Daten manuell exportieren, aufbereiten oder erfassen. Bewerte jeden nach Zeitaufwand pro Woche und Regelmäßigkeit. Der Prozess mit dem höchsten Wert ist dein Kandidat für den ersten KI-Piloten. Kein Großprojekt — ein fokussierter Test, der in zwei bis vier Wochen zeigt, ob es funktioniert.
