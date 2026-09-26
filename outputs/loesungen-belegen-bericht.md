# Lösungen belegen: Ergebnisbericht

**Ausgeführt:** 2026-09-26, Claude Fable 5.1, auf Basis von `outputs/prompt-loesungen-belegen.md`
**Entscheidungen:** Quellen nur intern (keine Änderung an Schema oder Layout), Recherche deutsch bevorzugt, englisch wo nötig
**Umfang:** 26 Lösungstexte umgeschrieben, 26 Anleitungen um Abschnitt 10 ergänzt, Belegtabelle `outputs/loesungswege/_belege.md` angelegt, INDEX.md um Beleg-Status ergänzt
**Build:** `npm run check` grün nach jedem Batch (52 Seiten, 0 kaputte Links)

## Einschränkung zuerst

Die Sandbox konnte die meisten Quellseiten nicht direkt öffnen (SAP Help, Fraunhofer, Bitkom, Computerwoche, Creditreform blockiert). Geprüft wurde über Suchergebnis-Auszüge, die von mehreren Treffern bestätigt wurden. In der Belegtabelle ist das pro Zeile als Prüftiefe **S** markiert, nur die Anthropic-PDF-Doku ist **V** (Volltext). Vor dem ersten Kundengespräch zu einer Lösung die zwei bis drei Quellen aus Abschnitt 10 der Anleitung einmal selbst öffnen. Das dauert 15 Minuten pro Lösung und ist der Rest an Arbeit, den ich dir nicht abnehmen konnte.

## 1. Status der 26 Lösungen

| Status | Anzahl | Bedeutung |
|---|---|---|
| belegt | 15 | Externer Beleg für Mechanismus und mindestens eine Zahl |
| teilweise | 11 | Mechanismus extern belegt (Doku, Fallstudie), Zeitersparnis als Erfahrungswert gekennzeichnet |
| nur Einschätzung | 0 | |

Ziel waren mindestens 18 belegt oder teilweise, erreicht sind 26. Die vollständige Zuordnung steht in `outputs/loesungswege/INDEX.md`, Abschnitt "Beleg-Status".

Ehrlich dazu: Für **keine** der 26 Lösungen gibt es eine externe, methodisch saubere Zahl zur Zeitersparnis im deutschen Mittelstand. Alle Stundenangaben auf der Website stehen deshalb jetzt mit dem Zusatz "Erfahrungswert". Was es gibt, sind Belege für den Mechanismus (Anbieter-Doku, SAP-Standard, Fallstudien) und für das Problem (Studien zu Zahlungsverzug, Suchzeit, Datenqualität, Schatten-KI).

## 2. Die fünf größten inhaltlichen Korrekturen

1. **EU AI Act, Fristen.** Vorher: Texte gingen implizit vom 2. August 2026 als Stichtag für Hochrisiko-Pflichten aus. Nachher: Der Digital Omnibus (VO (EU) 2026/1744, Amtsblatt 24.07.2026) verschiebt Anhang-III-Pflichten auf den 2. Dezember 2027; Art. 4 (KI-Kompetenz) und Art. 5 (Verbote) gelten seit Februar 2025, Art. 50 ab August 2026. Quelle: Gibson Dunn, Covington, Travers Smith, DLA Piper (Mai bis August 2026). Betrifft eu-ai-act-einstufung, bewerber-vorsortierung, ki-einfuehrung.

2. **SAP Bestell-API.** Vorher: `API_PURCHASEORDER_PROCESS_SRV` als Schnittstelle für Bestellungen genannt. Nachher: Dieser OData-V2-Dienst ist seit S/4HANA 2308 abgekündigt (SAP Note 3502308), Nachfolger ist OData V4 Purchase Order (`api_purchaseorder_2`). Betrifft auftragsbestaetigung-abgleich und rechnungseingang-vorerfassung, Website und Anleitungen.

3. **Betriebsrat.** Vorher: "Routing ist Arbeitsverteilung, das ist mitbestimmungsrelevant" als Tatsache. Nachher: Das Arbeitsgericht Hamburg (16.01.2024, 24 BVGa 1/24) hat entschieden, dass reine KI-Nutzung über den Browser nicht mitbestimmungspflichtig ist; Systeme auf Firmenrechnern mit Protokollierung können es sein. Alle Betriebsrats-Passagen differenzieren jetzt und empfehlen frühe Einbindung als Klugheit, nicht als Pflicht.

4. **Monitoring, Routing-Ersparnis.** Vorher: "30 bis 60 Prozent geringere Modellkosten" als nackter Erfahrungswert. Nachher: RouteLLM (ICLR 2025) zeigt 85 Prozent auf MT-Bench bei 95 Prozent Qualität, 35 bis 45 Prozent auf anderen Benchmarks; der Text nennt das als Benchmark und leitet die 30 bis 60 Prozent daraus ab. Dazu Zheng et al. (NeurIPS 2023) für die Modell-als-Richter-Quote von über 80 Prozent.

5. **Angebotsentwurf und SAP-SD-Auftragsprüfung.** Vorher: "Positionen werden erkannt, Angebot entsteht" ohne Realitätsanker. Nachher: Der Zentis-Fall (Computerwoche 2024, Workist) mit der Zahl, die kein Anbieter gern nennt: anfangs 60 Prozent Nacharbeit. Dazu die konkrete SAP-Kette (Kunden-Material-Info über API_CUSTOMER_MATERIAL_SRV, Anlage über API_SALES_ORDER_SRV oder BAPI). Das ist der Stilwechsel der ganzen Übung: die Grenze steht im Text, nicht im Kleingedruckten.

## 3. Drei Lösungen, bei denen die Recherche die Positionierung infrage stellt

Nicht geändert, nur vorgelegt.

1. **sap-fico-buchungsvorschlaege (Pilot, €5.000 bis 5.500).** SAP bietet den Mechanismus in S/4HANA Cloud selbst als "Invoice Object Recommendation" an. Für Cloud-Kunden ist das eher ein Tagessatz-Thema (Funktion aktivieren, Historie aufbereiten, Bewertung begleiten) als ein Pilot für €5.000. Für ECC- und On-Premise-Kunden bleibt der Pilot richtig. Vorschlag: im Text oder Discovery-Call nach der SAP-Version fragen und den Preis daran hängen.

2. **ticket-klassifikation-kundenservice (Pilot, €2.500 bis 4.000).** Zendesk und Freshdesk haben Klassifikation mit Vertrauensstufen eingebaut. Für Kunden auf diesen Systemen liegt dein Wert in Kategorienbereinigung, Regeln, Prüf-Schleife und Betriebsratseinbindung, nicht im Bauen. Das ist eher Tagessatz (2 bis 3 Tage) als Vier-Wochen-Pilot. Der Pilot passt für Shared-Mailbox-Kunden und Jira-Nutzer.

3. **Claude-first als Werkzeugempfehlung (betrifft hosting und alle Datenschutz-Passagen).** Stand September 2026 ist Claude über Microsoft Foundry ohne EU-Datenzone verfügbar, über AWS Bedrock Frankfurt mit. Bei Microsoft-zentrierten Mittelständlern (M365, Azure) ist Azure OpenAI mit EU-Datenzone der bequemere Weg, und dein Werkzeugkasten auf der Website nennt Claude an erster Stelle. Kein Fehler, aber eine Positionierungsfrage: "Claude-Spezialist" oder "Werkzeug folgt Datenklasse und Vertrag". Die Texte sind jetzt neutral formuliert, die Werkzeuge-Sektion der Startseite nicht angefasst.

## 4. Vorher-Nachher: "Was wir bauen" bei angebotsentwurf-aus-anfrage

**Vorher**

Ein Workflow liest die eingehende Anfrage, erkennt Kunde, Mengen und Artikel und schlägt passende Positionen aus dem ERP vor. Daraus entsteht ein Angebotsentwurf in eurem Layout, der im Postausgang oder direkt im ERP als Beleg wartet. Ein Mensch prüft, korrigiert und schickt ab, nichts geht ohne Freigabe raus.

**Nachher**

Der Workflow (bei mir meist n8n) holt die Anfrage aus dem Postfach, inklusive PDF-Anhang. Das Sprachmodell bekommt die Anfrage seitenweise als Bild und Text und gibt eine feste Tabelle zurück: Kunde, Positionen mit Menge und Einheit, Wunschtermin, Sonderwünsche, und pro Feld einen Sicherheitswert. Die Positionen werden gegen euren Artikelstamm und die Bestellhistorie dieses Kunden abgeglichen, zuerst über die Kundenartikelnummer, dann über frühere Aufträge, zuletzt über Textähnlichkeit. Preise kommen ausschließlich aus dem ERP, das Modell rechnet keinen Preis. Daraus entsteht ein Angebotsentwurf als Beleg im Test- oder Produktivsystem oder als Word-Dokument in eurer Vorlage. Zeilen unter einem Sicherheitswert von 80 Prozent sind gelb markiert. Ein Mensch prüft, korrigiert, schickt ab.

## 5. Geprüfte SAP-Servicenamen und Rechtsaussagen

| Aussage | Ergebnis |
|---|---|
| API_SALES_ORDER_SRV (Kundenauftrag, OData V2, Deep Insert) | stimmt |
| API_CUSTOMER_MATERIAL_SRV (Kunden-Material-Info) | stimmt, neu aufgenommen |
| BAPI_SALESORDER_CREATEFROMDAT2 | stimmt |
| API_SUPPLIERINVOICE_PROCESS_SRV (Lieferantenrechnung, Vorerfassung) | stimmt |
| API_PURCHASEORDER_PROCESS_SRV (Bestellung V2) | **korrigiert**: seit 2308 abgekündigt, V4 `api_purchaseorder_2` eingesetzt |
| API_MAINTNOTIFICATION (Instandhaltungsmeldung) | stimmt |
| API_SUPPLIERQUOTATION (Lieferantenangebot) | stimmt, neu aufgenommen |
| ME49 Preisspiegel, ME47, ME92F Bestätigungsüberwachung, MIRO/OMR6 Toleranzen, MRBR Freigabe | stimmt |
| S/4HANA Dublettenprüfung Geschäftspartner (ICM, ab SAP_BASIS 755) | stimmt, neu aufgenommen |
| SAP Invoice Object Recommendation (S/4HANA Cloud) | stimmt, neu aufgenommen |
| EU AI Act Anhang III Hochrisiko ab 02.08.2026 | **korrigiert** auf 02.12.2027 (Digital Omnibus) |
| Art. 4 KI-Kompetenz seit 02.02.2025 | stimmt |
| Anhang III umfasst Einstellung/Auswahl, Ranking reicht | stimmt |
| "Routing ist mitbestimmungspflichtig" | **korrigiert**: differenziert nach ArbG Hamburg 24 BVGa 1/24 |
| § 95 BetrVG Auswahlrichtlinien | Gesetzestext, nicht recherchiert, unstrittig |
| § 11 / § 15 AGG, "junges Team" uneinheitlich | stimmt |
| GoBD BMF 28.11.2019, Verfahrensdokumentation Pflicht | stimmt, Änderung 14.07.2025 ergänzt |
| E-Rechnung Empfangspflicht ab 01.01.2025 | stimmt |
| DSK-Orientierungshilfe 06.05.2024, HmbBfDI 15.07.2024 | stimmt |
| Anthropic: kein Training mit API-/Team-Daten, DPA in Commercial Terms, Drittlandtransfer bleibt | stimmt |

## 6. Was du selbst tun solltest

1. Die S-Quellen der Lösungen, die du zuerst anbietest (SAP-Fälle, Rechnungseingang, Wissensdatenbank), einmal selbst öffnen: je 15 Minuten.
2. Über die drei Positionierungsfragen in Abschnitt 3 entscheiden.
3. Preise in `platform.claude.com/pricing` und die Hosting-Optionen vor dem nächsten Hosting-Workshop neu prüfen, beides ändert sich quartalsweise.
4. Nach dem ersten echten Einsatz einer Lösung die gemessenen Werte (Trefferquote, Zeit) in `_belege.md` als eigene Zeile mit Prüftiefe "eigenes Projekt" eintragen. Damit wird der Erfahrungswert zum Beleg.
