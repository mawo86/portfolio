---
title: "Kundenaufträge vor der Anlage in SAP SD prüfen"
problem: "Bestellungen kommen als PDF, Excel oder freier Text. Der Innendienst tippt sie in SAP ab, und Fehler bei Artikelnummer, Menge oder Lieferadresse fallen erst beim Kunden auf."
description: "Eingehende Bestellungen werden ausgelesen, gegen Stammdaten und Preise geprüft und als vollständiger Auftragsentwurf für SAP SD vorbereitet."
bereich: "SAP-Prozesse"
zeitprobleme: ["Wiederkehrende Tipparbeit", "Fehler und Nacharbeit"]
branchen: ["Fertigung", "Handel", "Großhandel"]
werkzeuge: ["SAP SD", "Claude (Dokumentenerkennung)", "n8n oder SAP BTP", "Outlook"]
aufwand: "10 bis 15 Tage"
einsparung: "8 bis 15 Std./Woche im Innendienst, Erfahrungswert"
paket: "pilot-projekt"
reifegrad: "Fortgeschritten"
sapNah: true
blogKategorien: ["SAP & Enterprise", "Automatisierung"]
prio: 89
date: 2026-09-26
---

## Wo es hakt

Die Auftragserfassung ist der größte manuelle Block im Innendienst von SAP-Mittelständlern. Kunden bestellen in ihrem Format, nicht in eurem. Jede Übertragung ist eine Fehlerquelle, und jeder Fehler kostet Rücksendung, Gutschrift und Vertrauen.

## Was wir bauen

Der Workflow liest jede eingehende Bestellung aus dem Postfach, egal ob PDF, Excel, Text oder Foto. Das Sprachmodell extrahiert Kunde, Bestellnummer, Positionen mit Kundenartikelnummer, Menge, Einheit, Wunschtermin und Lieferadresse als Tabelle mit Sicherheitswert pro Feld. Dann arbeitet SAP: Der Kunde wird über Debitorennummer, Name oder Absenderdomain im Kundenstamm gefunden, die Kundenartikelnummer über die Kunden-Material-Info (in S/4HANA über den Dienst API_CUSTOMER_MATERIAL_SRV) auf eure Materialnummer übersetzt, der Preis kommt aus euren Konditionen. Ergebnis ist ein Auftragsentwurf mit Ampel pro Position. Bei Grün und einem Klick des Innendienstes legt der Workflow den Auftrag über die Standardschnittstelle an: OData-Dienst API_SALES_ORDER_SRV in S/4HANA oder den Funktionsbaustein BAPI_SALESORDER_CREATEFROMDAT2 im klassischen ECC. Kein eigenes Programm im SAP, nur Standard.

## Was das bringt

Dass dieser Weg im Mittelstand läuft, zeigt Zentis: Bestellungen aus E-Mail und PDF werden gelesen, gegen Business Partner, Materialstamm und Kundenmaterialien geprüft und über BAPI_SALESORDER_CREATEFROMDAT2 als SD-Auftrag gebucht (Computerwoche 2024, Workist). Auch dort galt anfangs: 60 Prozent der Aufträge brauchten Nacharbeit, die Quote steigt mit gepflegten Stammdaten.

Zur Zeitersparnis habe ich extern keine belastbare Zahl gefunden, die auf den Mittelstand passt. Mein Erfahrungswert: 8 bis 15 Stunden pro Woche im Innendienst bei 30 oder mehr Bestellungen am Tag über die Pilot-Kundengruppe. Messbar ist etwas anderes sofort: die Zeit bis zur Auftragsbestätigung, die von Stunden oder Tagen auf unter eine Stunde fällt.

## Wo es schwierig wird

Die Kunden-Material-Info ist der Dreh- und Angelpunkt, und sie ist bei den meisten SAP-Kunden lückenhaft. Ohne sie rät das System aus Text, mit ihr trifft es. Deshalb pflegen wir sie im Piloten nebenbei: Jede manuelle Korrektur einer Zuordnung wird ein Vorschlag für einen neuen Eintrag. Zweitens: Kunden, die EDI können, sollten EDI nutzen. KI ist für die Bestellungen, die kein Standardformat haben. Drittens: Konfigurierbare Produkte mit Variantenkonfiguration sind ein eigenes Projekt.

## Was ihr dafür braucht

- Lesezugriff auf Kunden-, Material- und Konditionsstamm sowie auf die Kunden-Material-Info, als OData-Dienste (S/4HANA) oder RFC (ECC)
- Einen von eurer SAP-Basis freigegebenen Anlageweg: OData API_SALES_ORDER_SRV, BAPI oder IDoc ORDERS, mit Service-User und Q-Mandant zum Testen
- 50 alte Bestellungen mit den dazugehörigen SAP-Aufträgen als Testset, darunter bewusst schwierige Fälle

## Warum dieses Paket

Der wirtschaftlich stärkste Fall in meinem Schwerpunkt. Vier Wochen für eine Kundengruppe oder einen Bestellkanal, danach Ausweitung in der Begleitung.
