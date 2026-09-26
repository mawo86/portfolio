# Produktportfolio: 26 Use-Cases als vermarktbare Produkte

**Erstellt:** 2026-09-26 · **Grundlage:** 26 Lösungen auf `/loesungen`, Anleitungen in `outputs/loesungswege/`, Recherche zu Lizenzen, Marktplätzen und Wettbewerb (Quellen unten)
**Ziel:** Für jeden Use-Case etwas Fertiges, das nur noch an das Kundensystem angebunden wird.

## Die ehrliche Antwort zuerst

"Fertig, nur noch anbinden" gibt es in drei Stufen, und die Recherche zeigt, wo welche möglich ist:

1. **Echte Werkzeuge (eigener Code, frei lizenzierbar):** Wissensbox (RAG-Appliance), Stammdaten-Radar (Analyse-Container), Betriebspaket und Monitor (Repo, Compose, Pipelines, Dashboard). Hier kannst du Software liefern und lizenzieren.
2. **Blueprint-Pakete auf n8n:** 15 der 26 Use-Cases. Der Blueprint ist nach dem ersten Kunden wiederverwendbar, aber die Lizenz von n8n setzt den Rahmen: Du darfst Workflows bauen, einrichten und betreuen (Beratung und Support sind ausdrücklich erlaubt), du darfst **nicht** ein Produkt verkaufen, dessen Wert im Wesentlichen n8n ist, und du darfst n8n nicht für Kunden hosten und dafür Geld nehmen. Eine Embed-Lizenz für White-Label beginnt bei rund 50.000 USD pro Jahr. Konsequenz: Der Kunde betreibt n8n selbst (eigener Server, n8n Cloud oder ab Q3 2026 n8n in SAP Joule Studio auf BTP-Credits), du lieferst Blueprint, Anbindung und Betrieb als Dienstleistung mit Monatsabo.
3. **Beratungs-Kits:** 7 Use-Cases sind Beratung. "Fertig" heißt hier standardisierte Vorlagen, feste Agenda, Fixpreis. Nach dem zweiten Kunden sind sie zu 80 Prozent vorbefüllt.

Zweite Rahmenbedingung: Anthropic verbietet den Weiterverkauf von API-Zugang. Jeder Kunde braucht einen eigenen Schlüssel (Anthropic direkt, AWS Bedrock Frankfurt oder ein EU-Anbieter). Du verkaufst nie Token, sondern Blueprint, Anbindung und Betrieb. Das ist auch datenschutzrechtlich sauberer.

Dritte: Kein Produkt der Liste läuft ohne Einregelung mit Kundendaten. Zwei Wochen Parallelbetrieb mit Bewertungsbogen sind bei jedem Blueprint-Produkt Teil des Setups und stehen so im Preis.

## Acht Produktfamilien statt 26 Einzelprodukte

Die Familien teilen Bausteine, deshalb ist das zweite Produkt einer Familie in Tagen statt Wochen gebaut.

| Familie | Produkte | Gemeinsame Bausteine |
|---|---|---|
| A · Belegpilot (Dokument → ERP) | Auftrag (SAP SD), Angebot, Rechnung, Bestätigung, Angebotsvergleich | Extraktion mit Schema und Sicherheitswert, SAP-Connector-Profile (OData/BAPI), Prüf-Karte, Testharness |
| B · Postfach-Pilot | Service (Ticket), Antwort, Lead | Klassifikations-Prompt, Prüf-Queue, CRM/Ticketsystem-Profile |
| C · Wissensbox | Wissensdatenbank (trägt auch Postfach-Pilot Antwort) | RAG-Appliance, Citations, SSO, Index-Versionierung |
| D · Sprachnotiz | Instandhaltung, Vertrieb, Meeting, Schichtblatt | Teams-Bot-Gerüst (Single-Tenant), Transkription mit Löschung, Struktur-Prompt, Bestätigungskarte |
| E · Finanzpilot | Kontierung, Mahnen, Kommentar | Deterministische Regelwerke (YAML), Zahlen-Verifikation, ERP-Exporte |
| F · Stammdaten-Radar | Analyse + Anlage-Wächter | Normalisierung, unscharfe Suche, Freigabelisten |
| G · Betriebspaket | Betrieb, Monitor | Repo-Vorlage, Compose, Pipelines, Protokoll, Alarme |
| H · Beratungs-Kits | DSGVO, AI Act, Bewerber-Spiegel, Einführung, Hosting, Einseiter, HR-Text | Vorlagen, Workshop-Agenden, gepflegte Listen (Werkzeuge, Optionen, Raster) als Quartalsabo |

## Übersicht

Fertig-Grad: ●●●●● = kundenunabhängig, nur Anbindung · ●●● = wiederverwendbarer Kern, kundenspezifische Konfiguration · ●● = jedes Mal neu abzugrenzen.

| Produkt | Fam. | Fertig | Einmalig | Laufend | Karte |
|---|---|---|---|---|---|
| Belegpilot Auftrag (SAP SD) | A | ●●●●○ | €6.500 Setup S/4HANA | €600/Monat Betrieb | [`sap-sd-auftragspruefung.md`](sap-sd-auftragspruefung.md) |
| Belegpilot Angebot | A | ●●●○○ | €4.500 Setup (SAP) | €450/Monat Betrieb | [`angebotsentwurf-aus-anfrage.md`](angebotsentwurf-aus-anfrage.md) |
| Belegpilot Rechnung | A | ●●●○○ | €5.500 Setup SAP | €500/Monat Betrieb | [`rechnungseingang-vorerfassung.md`](rechnungseingang-vorerfassung.md) |
| Belegpilot Bestätigung | A | ●●●●○ | €3.000 Setup als Add-on | €300/Monat Betrieb (Add-on) / €450 allein | [`auftragsbestaetigung-abgleich.md`](auftragsbestaetigung-abgleich.md) |
| Belegpilot Angebotsvergleich | A | ●●●●○ | €2.500 Setup | €250/Monat Betrieb | [`lieferantenanfragen-vergleichen.md`](lieferantenanfragen-vergleichen.md) |
| Postfach-Pilot Service | B | ●●●●○ | Variante a: €2.400 Fixpreis (2 Tage) | Variante b | [`ticket-klassifikation-kundenservice.md`](ticket-klassifikation-kundenservice.md) |
| Postfach-Pilot Antwort | B | ●●●○○ | €4.000 Setup (zusätzlich zur Wissensbox) | €400/Monat Betrieb | [`antwortentwuerfe-mit-wissensbasis.md`](antwortentwuerfe-mit-wissensbasis.md) |
| Postfach-Pilot Lead | B | ●●●●○ | €2.800 Setup | €250/Monat Betrieb | [`lead-qualifizierung-eingang.md`](lead-qualifizierung-eingang.md) |
| Wissensbox | C | ●●●●○ | €6.500 Setup inkl. Installation und Evaluation | €490/Monat Betrieb (Updates | [`wissensdatenbank-mit-quellenbeleg.md`](wissensdatenbank-mit-quellenbeleg.md) |
| Sprachnotiz Instandhaltung | D | ●●●○○ | €4.500 Setup (SharePoint) | €400/Monat Betrieb | [`wartungsdokumentation-per-sprache.md`](wartungsdokumentation-per-sprache.md) |
| Sprachnotiz Vertrieb | D | ●●●●○ | €3.500 Setup | €300/Monat Betrieb | [`crm-pflege-und-nachfassen.md`](crm-pflege-und-nachfassen.md) |
| Meeting-zu-Aufgaben | D | ●●●○○ | Variante a: €2.400 Fixpreis | Variante b | [`meeting-zusammenfassung-und-aufgaben.md`](meeting-zusammenfassung-und-aufgaben.md) |
| Schichtblatt | D | ●●●○○ | €3.000 Setup | €250/Monat Betrieb | [`schichtuebergabe-zusammenfassung.md`](schichtuebergabe-zusammenfassung.md) |
| Finanzpilot Kontierung | E | ●●●○○ | €6.500 Setup | €500/Monat Betrieb | [`sap-fico-buchungsvorschlaege.md`](sap-fico-buchungsvorschlaege.md) |
| Finanzpilot Mahnen | E | ●●●●○ | €3.000 Setup | €250/Monat Betrieb | [`mahnwesen-vorschlaege.md`](mahnwesen-vorschlaege.md) |
| Finanzpilot Kommentar | E | ●●●●○ | €2.800 Setup | €200/Monat Betrieb | [`reporting-kommentierung.md`](reporting-kommentierung.md) |
| Stammdaten-Radar | F | ●●●●○ | €2.900 Fixpreis Analyse + Freigabelisten (eine Stammdatenart) | €350/Monat Wächter + Monatsbericht | [`sap-stammdatenqualitaet.md`](sap-stammdatenqualitaet.md) |
| Betriebspaket | G | ●●●●● | €4.500 Setup erster Workflow, €1.500 je weiterer | €350/Monat Betriebstermin | [`vom-prototyp-zum-betrieb.md`](vom-prototyp-zum-betrieb.md) |
| Betriebspaket Monitor | G | ●●●●● | €3.000 Setup | €200/Monat Add-on (Preistabelle | [`kosten-und-qualitaetsmonitoring.md`](kosten-und-qualitaetsmonitoring.md) |
| KI-Regelwerk-Kit (DSGVO) | H | ●●●●● | €1.900 Fixpreis (2 bis 3 Tage inkl. halbem Workshop-Tag) | optional €90/Quartal | [`dsgvo-check-fuer-ki-einsatz.md`](dsgvo-check-fuer-ki-einsatz.md) |
| KI-Inventar-Kit (AI Act) | H | ●●●●● | €3.600 Fixpreis (Workshop-Tag + 1 bis 2 Tage Vor-/Nacharbeit) | optional €120/Quartal | [`eu-ai-act-einstufung.md`](eu-ai-act-einstufung.md) |
| Bewerber-Spiegel | H | ●●○○○ | €7.200 bis €12.000 (6 bis 10 Tage Tagessatz) | kein Abo; optional €250/Monat Betrieb | [`bewerber-vorsortierung-mit-augenmass.md`](bewerber-vorsortierung-mit-augenmass.md) |
| Einführungsprogramm | H | ●●●●○ | €4.800 Programm (Kickoff, 2 Betriebsratstermine, Vorlagen, Evaluierung) + €1.200 je Schulungsgruppe (8 bis 12 Personen) | im Rahmen der laufenden Begleitung enthalten | [`ki-einfuehrung-team-und-betriebsrat.md`](ki-einfuehrung-team-und-betriebsrat.md) |
| Hosting-Workshop | H | ●●●●● | €2.700 Fixpreis (1,5 bis 2 Tage) | optional €120/Quartal | [`hosting-entscheidung-cloud-eu-onprem.md`](hosting-entscheidung-cloud-eu-onprem.md) |
| Einseiter-Kit | H | ●●●●● | €2.400 Fixpreis (2 bis 3 Tage) | kein Abo | [`entscheidungsvorlagen-kurzfassung.md`](entscheidungsvorlagen-kurzfassung.md) |
| HR-Textassistent | H | ●●●●● | €2.400 Fixpreis (2 Tage) | optional €90/Quartal Vorlagenpflege | [`stellenanzeigen-und-hr-texte.md`](stellenanzeigen-und-hr-texte.md) |

## Preislogik

- **Einmalig** = Anbindung an das Kundensystem plus Einregelung (zwei Wochen Parallelbetrieb). Höhe folgt der Schnittstelle: Excel/Postfach günstig, CRM und DATEV mittel, SAP OData teurer, ECC/RFC am teuersten.
- **Laufend** = Betrieb und Weiterentwicklung als Dienstleistung: Prompt- und Blueprint-Updates, Monitoring, Alarm-Empfang, Support mit 48-Stunden-Antwort, bei Kits die gepflegte Liste. Das ist die produktisierte Form der "Laufenden KI-Begleitung" und ersetzt sie nicht, sondern füllt sie.
- **Modellkosten** immer beim Kunden (BYOK). Faustregel für das Angebot: bei Belegpilot-Produkten unter 50 Euro pro Monat pro 1.000 Dokumente mit Sonnet-Klasse, Wissensbox je nach Nutzung 30 bis 200 Euro.
- Kits sind Fixpreise zwischen 1.900 und 4.800 Euro und liegen damit zwischen Readiness-Check (299) und Pilot (ab 2.500). Sie sind der natürliche zweite Kauf nach dem Check.
- Alle Preise sind Vorschläge und gegen `outputs/consulting-angebot.md` abzugleichen. Sie sind so gesetzt, dass ein Produkt-Setup innerhalb der Pilot-Spanne (2.500 bis 5.500) oder knapp darüber liegt, wenn SAP im Spiel ist.

## Wo Marktplätze helfen und wo nicht

- **SAP Store:** PartnerEdge Open Ecosystem ist kostenlos, ein Listing im SAP Store braucht die Build-Partnerschaft (rund 2.000 Euro pro Jahr plus Zertifizierung). Sinnvoll erst, wenn Belegpilot Auftrag bei drei Kunden läuft. Beobachten: n8n in Joule Studio (GA Q3 2026) und der 100-Millionen-Partnerfonds für Agenten auf der SAP Business AI Platform.
- **Zendesk / Freshworks Marketplace:** Für Postfach-Pilot Service nicht nötig, weil Variante a Konfiguration ist und Variante b außerhalb der Plattform läuft. Ein Listing lohnt erst mit einer echten App.
- **HubSpot Marketplace:** verlangt drei aktive Installationen vor dem Listing. Für Postfach-Pilot Lead erst nach drei Kunden denkbar.
- **Microsoft AppSource / Teams Store:** Sprachnotiz-Bots werden als Custom-App-Paket (ZIP) je Kunde im Tenant installiert, Single-Tenant-Bot im Kunden-Tenant. Kein Store nötig, kein Partner-Center-Aufwand. Ein Store-Listing würde Multi-Tenant und Publisher-Verifikation erfordern, das ist ein späterer Schritt.
- **n8n Template-Bibliothek:** Kostenlose Templates mit Affiliate-Link bringen Reichweite und 30 Prozent Provision auf n8n-Cloud-Referrals, aber keine Produkterlöse. Gut als Marketing für abgespeckte Fassungen (z. B. Mahnwesen ohne ERP-Anbindung).

## Build-Reihenfolge (Empfehlung)

Kriterien: Nutzen für deine Nische, Wiederverwendung der Bausteine, wie schnell etwas verkaufbar ist.

| # | Produkt | Warum zuerst | Build |
|---|---|---|---|
| 1 | Beratungs-Kits DSGVO, AI Act, Hosting, HR-Text, Einseiter | Sofort verkaufbar, null Integration, füllen die Lücke zwischen Check und Pilot | 8 Tage Vorlagen gesamt |
| 2 | Betriebspaket | Jedes Blueprint-Produkt steht darauf, größtenteils aus `_betriebsstandard.md` ableitbar | 5 Tage |
| 3 | Belegpilot Auftrag (SAP SD) | Deine Nische, stärkster Business Case, Bausteine für die ganze Familie A | 10 Tage |
| 4 | Stammdaten-Radar (Analyse) | Fixpreis-Report ohne Integration, öffnet Tür zu Belegpilot bei SAP-Kunden | 6 Tage |
| 5 | Postfach-Pilot Lead und Service | ERP-unabhängig, schnellstes Regalprodukt außerhalb SAP | 9 Tage |
| 6 | Wissensbox | Showcase existiert, trägt Postfach-Pilot Antwort, einziges echtes Softwareprodukt | 12 Tage |
| 7 | Finanzpilot Mahnen, Belegpilot Angebotsvergleich | Kleine, schnelle Add-ons für bestehende Kunden | 7 Tage |
| 8 | Sprachnotiz Instandhaltung (+ Gerüst) | Öffnet Produktion, Gerüst trägt drei weitere D-Produkte | 8 Tage |
| 9 | Rest der Familien A, D, E, Monitor | Als Add-ons, wenn Kunden da sind | nach Bedarf |

Realistisch: Schritte 1 bis 3 in den ersten sechs Wochen nebenberuflich, dann pro Monat ein bis zwei weitere Produkte. Kein Produkt ohne mindestens einen Pilotkunden fertig bauen; die ersten Kunden zahlen den Pilotpreis, das Produkt entsteht aus dem Projekt.

## Was auf die Website gehört

Noch nichts. Erst wenn ein Produkt bei einem Kunden läuft, bekommt die zugehörige Lösungsseite einen Abschnitt "Als fertiges Paket" mit Lieferform, Setup-Preis und Monatspreis. Bis dahin bleiben die Pakete (Check, Pilot, Begleitung) die Verkaufsform, und die Produktkarten sind dein internes Angebots-Baukastensystem.

## Quellen der Recherche (Stand 2026-09-26, Suchergebnis-Auszüge)

- n8n Sustainable Use License (docs.n8n.io): Beratung und Workflow-Bau erlaubt; kein Produkt mit n8n als Kern, kein Hosting gegen Entgelt; Embed-Lizenz ab ca. 50.000 USD/Jahr; Self-hosted Business Plan ab ca. 667 Euro/Monat; Creator-Programm mit 30 % Affiliate.
- n8n in SAP Joule Studio: SAP-Beteiligung an n8n, verwaltete n8n-Umgebung auf BTP, GA Q3 2026, Abrechnung über BTP-Credits (news.sap.com 05/2026, n8n Blog, SAPinsider).
- SAP PartnerEdge: Open Ecosystem kostenlos, Build-Partnerschaft ab ca. 2.000 Euro/Jahr für SAP-Store-Listing.
- Anthropic Commercial Terms: kein Weiterverkauf von API-Zugang, BYOK als empfohlener Weg (sitepoint, ConductAtlas).
- Marketplaces: Zendesk (OAuth-Pflicht), Freshworks (Review, 80 % Testabdeckung), HubSpot (3 aktive Installationen), Microsoft (AI Cloud Partner Program, Publisher-Verifikation, Single-Tenant-Bots per Custom Upload).
- Wettbewerbspreise: Zendesk Advanced AI ca. 50 USD/Agent, Freddy Copilot ca. 29 USD/Agent; Langdock 25 bis 99 Euro/Nutzer, nele.ai ca. 120 Euro pauschal (Credits), moinAI ab ca. 790 Euro/Monat, Adacor 18 Euro/Nutzer; Sally 8 bis 29 Euro/Nutzer, Bliro 250 Euro/5 Nutzer, MeetGeek ca. 10 USD; Workist, Turian, Parashift, Candis, Bilendo, remberg: Preise auf Anfrage.
