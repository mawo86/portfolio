# Belegtabelle zu den Lösungen

**Zweck:** Meine Antwort auf "Woher wissen Sie das?". Pro Lösung die Aussagen aus dem Website-Text mit Quelle, Art und Prüftiefe. Aussagen ohne Beleg stehen ebenfalls hier, mit dem, was gesucht wurde. Intern, nicht für die Website.

**Recherche:** 2026-09-26, Claude Fable 5.1, Web-Suche. Wichtige Einschränkung: Die Sandbox konnte die meisten Quellseiten nicht direkt abrufen (SAP Help, Fraunhofer, Bitkom, Computerwoche blockiert). Geprüft wurde deshalb über Suchergebnis-Auszüge, nicht über den Volltext. Prüftiefe pro Zeile: **V** = Volltext gelesen, **S** = Suchergebnis-Auszug, mehrere übereinstimmende Treffer, **E** = eigene Einschätzung, kein externer Beleg. Vor dem ersten Kundengespräch zu einer Lösung die S-Quellen einmal selbst aufrufen.

**Art:** Fallstudie · Doku (offizielle Anbieter-/Herstellerdokumentation) · Studie · Gesetz/Behörde · Fachpresse · Einschätzung.

## Quellen, die für mehrere Lösungen gelten

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Claude verarbeitet PDF-Seiten als Text und Bild, Limits 32 MB und 100 Seiten pro Anfrage (600 bei 1M-Kontext) | Anthropic, "PDF support", platform.claude.com/docs/en/build-with-claude/pdf-support | Doku | V | Grundlage für alle Dokumenten-Extraktionen |
| Strukturierte Ausgabe nach JSON-Schema, Grammatik-erzwungen | Anthropic, "Structured outputs", platform.claude.com/docs (Agent SDK) und Cookbook tool_use/extracting_structured_json | Doku | S | Grundlage für "feste Tabelle mit Sicherheitswert" |
| Citations: zitierte Stellen zeigen technisch auf den Quelltext, Chunking auf Satzebene | Anthropic, "Introducing Citations on the Anthropic API" (Jan 2025), platform.claude.com/docs/en/build-with-claude/citations | Doku | S | Wissensdatenbank, Antwortentwürfe |
| API-Daten werden nicht zum Training genutzt, DPA mit SCC Teil der Commercial Terms, Zero Data Retention für Enterprise, Datentransfer in die USA bleibt DSGVO-relevant auch bei EU-Residency | Anthropic Privacy Center (DPA-Artikel), platform.claude.com/docs/en/manage-claude/api-and-data-retention; Zusammenfassung compound.law | Doku | S | Für alle Datenschutz-Passagen |
| n8n: Export/Import als JSON, Credentials nur als ID/Name im Export; Error Trigger für Fehler-Workflows; öffentliche REST-API für Workflows | docs.n8n.io (export-import, errortrigger, api) | Doku | S | Betriebsstandard; Aktivierung per API war in älteren Versionen eingeschränkt (active read-only), in aktuellen Versionen /activate-Endpunkt |
| Anthropic Console: Ausgabenlimits pro Workspace, Alarme bei Schwellen, 429 bei Überschreitung | Anthropic Console-Doku, Zusammenfassungen (Torii, Weckr) | Doku | S | Kosten- und Qualitätsmonitoring, Betriebsstandard |
| Modell-Routing: 85 % Kostenersparnis auf MT-Bench bei 95 % der GPT-4-Qualität (Benchmark, nicht Praxis) | Ong et al., "RouteLLM: Learning to Route LLMs with Preference Data", ICLR 2025, arxiv 2406.18665, LMSYS-Blog Juli 2024 | Studie | S | Monitoring-Lösung |
| Modell-als-Richter erreicht über 80 % Übereinstimmung mit Menschen, gleiche Größenordnung wie Mensch-Mensch | Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", NeurIPS 2023, arxiv 2306.05685 | Studie | S | Monitoring, Abnahme-Logik |
| Preise Stand 09/2026: Haiku 4.5 1/5 USD, Sonnet 4.6 3/15, Sonnet 5 2/10, Opus 4.8 5/25, Opus 5.5 4/20 pro Mio. Token; Batch minus 50 %, Prompt-Caching minus 90 % auf gecachten Input | Preisübersichten (finout, cloudzero, benchlm) | Fachpresse | S | Vor Angeboten gegen platform.claude.com/pricing prüfen |
| ArbG Hamburg 16.01.2024, 24 BVGa 1/24: keine Mitbestimmung bei Nutzung von ChatGPT über Browser/private Accounts; anders, wenn System auf Firmenrechnern läuft und Leistungsdaten aufzeichnen kann | Haufe, CMS, Gleiss Lutz, KPMG Law Zusammenfassungen | Gesetz/Behörde | S | Alle Passagen zum Betriebsrat |
| DSK-Orientierungshilfe "KI und Datenschutz", 6. Mai 2024, Fokus LLM, Checkliste für Auswahl und Einsatz | datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf | Gesetz/Behörde | S | DSGVO-Check |
| HmbBfDI Diskussionspapier 15.07.2024: bloße Speicherung eines LLM ist keine Verarbeitung personenbezogener Daten, Output kann personenbezogen sein | datenschutz-hamburg.de, 240715_Diskussionspapier_HmbBfDI_KI_Modelle.pdf | Gesetz/Behörde | S | DSGVO-Check |
| EU AI Act: Digital Omnibus (VO (EU) 2026/1744, ABl. 24.07.2026, in Kraft 27.07.2026) verschiebt Anhang-III-Hochrisiko-Pflichten auf 02.12.2027, Anhang I auf 02.08.2028; Art. 5 Verbote (seit 02.02.2025), Art. 4 KI-Kompetenz (seit 02.02.2025), Art. 50 Transparenz (02.08.2026) und GPAI-Pflichten bleiben | Gibson Dunn, Travers Smith, Covington Inside Privacy, DLA Piper, CSA (Mai bis Aug 2026) | Gesetz/Behörde | S | Alte Texte nannten August 2026 als Hochrisiko-Termin, korrigiert |
| Bitkom KI-Studie 2025: 36 % der Unternehmen nutzen KI (2024: 20 %), 47 % planen/diskutieren, 33 % höhere Kosten als erwartet | Bitkom, "Künstliche Intelligenz in Deutschland, Studie 2025" (bitkom.org, PDF 2026-02) | Studie | S | KI-Einführung |
| Schatten-KI: 42 % der Unternehmen berichten bekannte oder vermutete Nutzung privater KI-Tools (8 % verbreitet, 17 % Einzelfälle, 17 % vermutet), 604 Unternehmen ab 20 MA | Bitkom Presseinformation "Beschäftigte nutzen vermehrt Schatten-KI", Okt 2025 | Studie | S | DSGVO-Check, KI-Einführung |
| MIT NANDA "The GenAI Divide: State of AI in Business 2025": 95 % der Piloten ohne messbaren P&L-Effekt; Gartner (Juli 2024): mind. 30 % der GenAI-Projekte werden nach PoC abgebrochen | MIT NANDA Report Juli 2025; Gartner Pressemitteilung 29.07.2024 | Studie | S | Vom Prototyp zum Betrieb |

## angebotsentwurf-aus-anfrage

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Zentis automatisiert Auftragserfassung mit KI (Workist): Bestellungen aus E-Mail/PDF, Abgleich Stammdaten, Buchung per SAP-Schnittstelle; anfangs 60 % manuelle Nachbearbeitung | Computerwoche, "Zentis automatisiert Auftragserfassung mit KI-Hilfe", 2024; Workist-Produktseite SAP S/4HANA | Fachpresse / Anbieter | S | Die 60 % sind der ehrlichste Wert im ganzen Feld, deshalb im Text |
| Fraunhofer IAIS beschreibt automatisierte Angebotserstellung als NLP über unstrukturierte Anfragen plus Verknüpfung mit Produktkatalog | iais.fraunhofer.de, Themenseite "Angebotserstellung automatisieren mit KI" | Doku | S | Seite blockiert, nur Titel und Auszug |
| 6 bis 12 Std./Woche Einsparung | keine externe Quelle mit Methodik gefunden (Beraterblogs nennen 45 bis 90 Min → 10 bis 15 Min pro Angebot ohne Beleg) | Einschätzung | E | Im Text als Erfahrungswert gekennzeichnet |
| Preise kommen aus dem ERP, nicht aus dem Modell | eigene Designentscheidung | Einschätzung | E | Begründung: Rabattlogik ist politisch |

## sap-sd-auftragspruefung

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| API_SALES_ORDER_SRV existiert (S/4HANA Cloud und On-Premise), Anlage über POST auf A_SalesOrder mit Deep Insert für Positionen (to_Item) | SAP Help Portal "Sales Order (A2X, OData V2)"; SAP Community Blog "Posting Sales Orders into S/4HANA Cloud API" | Doku | S | Servicename bestätigt |
| API_CUSTOMER_MATERIAL_SRV (Customer Material A2X) existiert für Kunden-Material-Info | api.sap.com/api/API_CUSTOMER_MATERIAL_SRV | Doku | S | Neu im Text, vorher nicht genannt |
| BAPI_SALESORDER_CREATEFROMDAT2 ist der Standard-Funktionsbaustein für Kundenauftragsanlage (ECC und S/4), Variantenkonfiguration aufwendig | SAP Community, sapdatasheet.org | Doku | S | Bestätigt; Hinweis auf Variantenkonfiguration in "Wo es schwierig wird" übernommen |
| Zentis/Workist nutzen genau diesen Weg (BP, MARA, Kundenmaterial, BAPI) | Workist SAP-Seite, Computerwoche 2024 | Anbieter / Fachpresse | S | |
| 8 bis 15 Std./Woche | keine externe Quelle | Einschätzung | E | Im Text gekennzeichnet |

## wissensdatenbank-mit-quellenbeleg

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| 1,8 Std./Tag Suchen (McKinsey Global Institute, "The Social Economy", 2012), 2,5 Std./Tag (IDC) | MGI 2012; IDC-Zitat über Cottrill Research | Studie | S | Alt (2012), im Text mit Jahr genannt |
| RAG-Testbetrieb in KMU: ca. 20 Beschäftigte, 81 Dokumente, lokal laufende Modelle, seit April 2025 | ResearchGate, "Aufbau eines Retrieval-Augmented-Generation-Systems für Wissenssicherung in KMU", 2025 | Studie | S | Volltext nicht abgerufen |
| Fraunhofer IESE beschreibt RAG-Aufbau und Fehlerquellen | iese.fraunhofer.de/blog/retrieval-augmented-generation-rag | Doku | S | Seite blockiert |
| Citations erzwingt gültige Verweise auf Quelltext | Anthropic Citations (siehe oben) | Doku | S | Mechanismus für "Quellenzwang technisch" |
| Kleine On-Prem-Modelle liefern schlechtere Antworten als große | eigene Einschätzung, im Piloten zu messen | Einschätzung | E | |

## ticket-klassifikation-kundenservice

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Mittelstand-Digital Zentrum Ruhr-OWL: KI-basiertes Ticketmanagement bei IT-Dienstleister, Klassifikation aus Betreff und Beschreibung, Routing ans Fachteam, Priorisierung | mittelstand-digital-ruhr-owl.de/ki-basiertes-ticketmanagement-fuer-it-dienstleister | Fallstudie (öffentlich gefördert) | S | Seite blockiert, Auszug |
| Zendesk Intelligent Triage: Vorhersage für Intent, Sprache, Stimmung mit Vertrauensstufe hoch/mittel/niedrig, eigene Intents möglich | support.zendesk.com, "Automatically classifying customer intent, sentiment, and language" | Doku | S | |
| Freshdesk Freddy Auto Triage braucht ca. 2.000 historische Tickets für brauchbare Vorschläge, manueller oder automatischer Modus | support.freshdesk.com, "Setting up auto-triage" | Doku | S | Zahl im Text übernommen |
| Händler mit 500 Anfragen/Tag: Erstbearbeitungszeit 4,5 Std. → unter 1 Std. | ki-syndikat.de Blog (Nov 2025) | Fachpresse ohne Methodik | S | Im Text als Fallbericht ohne Methodik gekennzeichnet |
| ArbG Hamburg 2024 zur Mitbestimmung | siehe oben | Gesetz/Behörde | S | Alte Formulierung "mitbestimmungsrelevant" abgeschwächt auf "kann sein, wenn protokolliert wird" |
| 5 bis 10 Std./Woche | keine externe Quelle | Einschätzung | E | |

## rechnungseingang-vorerfassung

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Kosten pro manueller Rechnung: 10,89 USD Durchschnitt, Best-in-Class 2,78 USD | Ardent Partners, "State of ePayables 2025" (zitiert über Bottomline, Quadient, Stealth Agents) | Studie | S | US-Markt, im Text so gekennzeichnet |
| 10 bis 15 USD pro Rechnung | Institute of Finance and Management (IOFM), zitiert über Lydonia, Quadient | Studie | S | |
| 12 bis 15 Euro manuell, 2 bis 4 Euro automatisiert | AWP Consult, Optikronix (Beraterblogs) | Fachpresse ohne Methodik | S | Im Text als "ohne Methodik" gekennzeichnet |
| E-Rechnung: Empfangspflicht ab 01.01.2025 nach EN 16931 (Wachstumschancengesetz) | Deutsche Handwerks Zeitung, Bitkom | Gesetz/Behörde | S | Ausstellungspflicht gestaffelt 2027/2028, im Text nicht genannt |
| Bitkom 2025: 45 % können E-Rechnungen empfangen, 96 % erhalten Rechnungen per E-Mail, n=1.103 ab 20 MA | Bitkom Research Presseinformation | Studie | S | |
| API_SUPPLIERINVOICE_PROCESS_SRV: Anlegen, Lesen, Freigeben, Stornieren von Lieferantenrechnungen, Vorerfassung (parken) möglich | api.sap.com/api/API_SUPPLIERINVOICE_PROCESS_SRV; SAP Community Frage zum Parken | Doku | S | Servicename bestätigt |
| SAP-Toleranzschlüssel (OMR6), Dreiwegeabgleich Bestellung/Wareneingang/Rechnung, Zahlsperre bei Abweichung, Freigabe MRBR | SAP-Dokumentation Logistik-Rechnungsprüfung, guru99, mind-logistik | Doku | S | |
| GoBD (BMF 28.11.2019, Änderung 14.07.2025): Verfahrensdokumentation Pflicht, fehlende Doku ist formeller Mangel, strukturierte E-Rechnung muss nur als Datensatz aufbewahrt werden | BMF-Schreiben, DATEV, IHK Nordschwarzwald | Gesetz/Behörde | S | |
| 5 bis 10 Std./Woche | keine externe Quelle für den Mittelstand | Einschätzung | E | |
