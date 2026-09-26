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

## sap-fico-buchungsvorschlaege

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| SAP S/4HANA Cloud "Invoice Object Recommendation": ML schlägt für Rechnungen ohne Bestellbezug Sachkonto, Kostenobjekt und CO-PA-Merkmale aus Historie vor; Custom oder vortrainiertes Modell | SAP Developers Tutorial "Use Machine Learning and the Invoice Object Recommendation Business Blueprint", SAP Blog "Intelligent Accounts Payable with SAP S/4HANA Cloud" (2021), SAP Discovery Center (Ariba G/L line-item determination) | Doku | S | Belegt, dass der Mechanismus SAP-Standard ist |
| API_SUPPLIERINVOICE_PROCESS_SRV für Vorerfassung | siehe rechnungseingang | Doku | S | |
| Steuerkennzeichen regelbasiert, nicht per Modell | eigene Designentscheidung | Einschätzung | E | |
| 5 bis 10 Std./Woche, weniger Umbuchungen | keine externe Quelle | Einschätzung | E | |

## sap-stammdatenqualitaet

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| S/4HANA Dublettenprüfung für Geschäftspartner auf Basis unscharfer HANA-Suche (ICM), ohne Drittanbieter ab SAP_BASIS 755; Trefferliste mit Prozent-Score | SAP Blog "SAP S/4HANA Business Partner Duplicate Check" (2021), SAP Note 3612988, SAP Help "Duplicate Check" | Doku | S | Im Text neu aufgenommen |
| Planat-Studie: nur 1 % bewerten Datenqualität in mittelständischen Fertigern als "sehr hoch", 38 % als "hoch", über die Hälfte besorgt | Planat Presseinformation (Presseportal, finanzen.net) | Studie | S | Anbieterstudie, Stichprobe nicht geprüft |
| Uniserv: jedes dritte Unternehmen mit fehlerhaften Postadressen, jedes fünfte mit Retouren durch unvollständige/doppelte Kundendaten; Rücklaufkosten 273.900 Euro/Jahr | Uniserv-Umfrage (über CallCenterProfi, Regis24) | Studie | S | Anbieterstudie; die Euro-Zahl nicht auf die Website übernommen |
| "28 % Dubletten bei europäischem Händler, über 1 Mio. Euro Einsparung" | datamastr.com Blog | Fachpresse ohne Methodik | S | Nicht verwendet |
| Nutzen in Stunden | nicht bezifferbar | Einschätzung | E | Text sagt das ausdrücklich |

## auftragsbestaetigung-abgleich

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| API_PURCHASEORDER_PROCESS_SRV (OData V2) seit Release 2308 abgekündigt, Nachfolger OData V4 "Purchase Order" (api_purchaseorder_2) | SAP Note 3502308, SAP Help "Purchase Order (OData V2) - (Deprecated)", SAP Help "Purchase Order (OData V4)" | Doku | S | **Korrektur:** alter Text nannte nur den V2-Dienst |
| Bestätigungssatz/Supplier Confirmation als Entität der Bestell-API (A_PurchaseOrderItemConfirmation bzw. SupplierConfirmation in V4) | SAP Help "Supplier Confirmation", SAP Community | Doku | S | |
| Bestätigungssteuerung: Tabellen T163L/T163G, Bestätigungsschlüssel, manuelle Pflege im Bestätigungsbild, Überwachung mit ME92F | SAP-Dokumentation "Bestätigungen manuell pflegen", ERPyourself ME92, Munich Enterprise ME92F | Doku | S | |
| 3 bis 6 Std./Woche | keine externe Quelle | Einschätzung | E | |

## lieferantenanfragen-vergleichen

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| ME49 Angebotspreisspiegel vergleicht Angebote zu einer Anfrage positionsweise, Absprung nach ME47 | SAP-Dokumentation "Angebote vergleichen", ERPyourself, guru99 | Doku | S | |
| API_SUPPLIERQUOTATION: Lesen, Anlegen, Ändern von Lieferantenangeboten mit Bezug zur Anfrage | SAP Cloud SDK Doku (SupplierQuotation Service) | Doku | S | |
| 2 bis 5 Std. pro Ausschreibung | keine externe Quelle | Einschätzung | E | |

## mahnwesen-vorschlaege

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Forderungslaufzeit 39,63 Tage, Zahlungsziel 32,13 Tage, Verzug 7,50 Tage (2. HJ 2025), ca. 3,8 Mio. Belege aus dem Debitorenregister, veröffentlicht Feb 2026 | Creditreform, "Zahlungsindikator Deutschland Winter 2025/26" | Studie | S | Zahlen im Text |
| 81 % der deutschen Unternehmen mit Zahlungsverzögerungen, durchschnittliche Verzögerung fast 32 Tage (2025) | Coface Zahlungserfahrungsstudie Deutschland 2025 | Studie | S | Coface misst Verzögerung anders als Creditreform (Befragung vs. Belegdaten); nur 81 % im Text |
| 2 bis 4 Std./Woche | keine externe Quelle | Einschätzung | E | |
| Scoring von Privatpersonen nach Zahlverhalten datenschutzrechtlich heikel | eigene Einschätzung, Art. 22 DSGVO-Nähe | Einschätzung | E | Im Zweifel Datenschutzbeauftragten fragen |

## reporting-kommentierung

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Berichtskommentierung als typischer GenAI-Pilotfall im Controlling | ICV Blog "Generative KI im Controlling", "Zukunft im Blick: So verändert KI das Controlling"; Controller Institut Insights "KI-Use-Cases im Controlling" | Fachpresse | S | |
| Controlling & Management Review 2025, "Generative KI im Controlling praktisch umsetzen" | Springer, doi 10.1007/s12176-025-1497-1 | Studie/Fachartikel | S | Volltext nicht gelesen |
| ICV-Studie zu KI und Automatisierung in Reporting und Forecasting (Eisl, Hofer, Perkhofer) läuft/lief 2025 | Haufe Controlling | Fachpresse | S | Ergebnisse nachschlagen, wenn veröffentlicht |
| 1 bis 2 Tage pro Abschluss | keine externe Quelle | Einschätzung | E | |

## dsgvo-check-fuer-ki-einsatz

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Schatten-KI: 42 % bekannt/vermutet, 8 % weit verbreitet (2024: 4 %), 17 % Einzelfälle, n=604 ab 20 MA, Okt 2025 | Bitkom Presseinformation "Beschäftigte nutzen vermehrt Schatten-KI" | Studie | S | Seite blockiert, Zahlen aus mehreren Treffern konsistent |
| DSK-Orientierungshilfe KI und Datenschutz, 06.05.2024 | datenschutzkonferenz-online.de | Gesetz/Behörde | S | |
| HmbBfDI Diskussionspapier 15.07.2024: LLM speichert keine personenbezogenen Daten, Ein-/Ausgabe fällt unter DSGVO | datenschutz-hamburg.de | Gesetz/Behörde | S | |
| Anthropic: DPA in Commercial Terms, kein Training mit Kundendaten, ZDR für Enterprise, Drittlandtransfer bleibt | Anthropic Privacy Center, API and data retention Doku | Doku | S | |
| Consumer-Konten ohne AVV sind kein Business-Einsatz | eigene Einordnung aus den Anbieterbedingungen | Einschätzung | E | |

## eu-ai-act-einstufung

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Digital Omnibus VO (EU) 2026/1744, ABl. 24.07.2026, in Kraft 27.07.2026; Anhang III Hochrisiko ab 02.12.2027, Anhang I ab 02.08.2028; Art. 5 (02.02.2025), Art. 4 KI-Kompetenz (02.02.2025), Art. 50 (02.08.2026), GPAI (08/2025) unverändert | Gibson Dunn "EU AI Act Omnibus Agreement", Travers Smith, Covington Inside Privacy (Mai 2026), CSA Research Note, DLA Piper, Holland & Knight | Gesetz/Behörde über Kanzlei-Zusammenfassungen | S | **Korrektur** gegenüber Alttext (dort implizit Aug 2026). Vor Workshop eur-lex direkt prüfen |
| Anhang III umfasst Einstellung/Auswahl, Beförderung, Kündigung, Aufgabenzuweisung, Leistungsüberwachung; wesentliche Beeinflussung (Ranking, Filtern, Scoring) reicht | Kanzlei-/Beraterzusammenfassungen (lawpilots, tww.law 22.09.2026, gallmond) zu VO (EU) 2024/1689 Anhang III Nr. 4 | Gesetz/Behörde | S | |
| Art. 26 Abs. 11 Information Betroffener, Art. 14 menschliche Aufsicht | dito | Gesetz/Behörde | S | |

## bewerber-vorsortierung-mit-augenmass

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Recruiting-KI mit Ranking/Filtern = Hochrisiko Anhang III; Frist 02.12.2027 | siehe eu-ai-act | Gesetz/Behörde | S | |
| § 95 BetrVG Auswahlrichtlinien mitbestimmungspflichtig; § 87 bei Systemen mit Protokollierung auf Firmensystemen wahrscheinlich (ArbG Hamburg 2024 im Umkehrschluss) | Kanzleizusammenfassungen zu 24 BVGa 1/24 | Gesetz/Behörde | S | § 95-Aussage ist Gesetzestext, nicht recherchiert, aber unstrittig |
| Neutralitätstest mit Bewerbungspaaren | eigene Methode | Einschätzung | E | |
| 1 bis 2 Tage Sichtzeit pro Stelle | keine externe Quelle | Einschätzung | E | |

## ki-einfuehrung-team-und-betriebsrat

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Bitkom 2025: 36 % nutzen KI, 33 % höhere Kosten als erwartet | Bitkom Studienbericht KI 2025 | Studie | S | |
| MIT NANDA 2025: 95 % ohne messbaren P&L-Effekt (52 Interviews, 153 Befragte, 300 Deployments) | MIT NANDA "The GenAI Divide" Juli 2025 | Studie | S | Methodik ist dünn (Interviews/Survey), im Text als "Untersuchung" nicht "Studie" |
| Gartner 29.07.2024: mind. 30 % GenAI-Projekte nach PoC abgebrochen bis Ende 2025 | Gartner Pressemitteilung | Studie/Prognose | S | Prognose, keine Messung |
| Hans-Böckler-Stiftung Datenbank Betriebs-/Dienstvereinbarungen mit KI-Vereinbarungen (menschliche Entscheidung, Schulung vor Nutzung, jährlich) | boeckler.de | Doku | S | |
| ArbG Hamburg 2024 | siehe oben | Gesetz/Behörde | S | |
| Art. 4 KI-Kompetenz seit 02.02.2025 | siehe eu-ai-act | Gesetz/Behörde | S | |
| Zielwerte 60 % / 80 % aktive Nutzer | eigene Zielsetzung | Einschätzung | E | Im Text so gekennzeichnet |

## hosting-entscheidung-cloud-eu-onprem

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Claude auf AWS Bedrock in eu-central-1 Frankfurt verfügbar | modelavailability.com, Gerloff "Claude on AWS vs Azure vs Google Cloud GDPR" (2026) | Doku/Fachpresse | S | |
| Claude auf Microsoft Foundry GA (07/2026) ohne EU-Datenzone | InfoQ "Claude Reaches GA on Microsoft Foundry: European Enterprises Cannot Deploy It" (07/2026), Microsoft Q&A | Fachpresse | S | Kann sich schnell ändern, vor Workshop prüfen |
| Azure OpenAI "Data Zone Standard" EU für OpenAI-Modelle | i6eal Guide, Microsoft-Doku | Doku | S | |
| IONOS AI Model Hub: Llama, Mistral u. a., Rechenzentrum Berlin, OpenAI-kompatible API, Abrechnung pro Mio. Token in Euro | IONOS Blog, neuost Test, digital-magazin | Anbieter/Fachpresse | S | |
| STACKIT AI Model Serving GA seit Mai 2025, Llama/Mistral, EU | docs.stackit.cloud, innfactory Test | Doku | S | |
| Open Telekom Cloud / T Cloud Public: LLM-Serving mit Meta/Mistral, Rechenzentren Biere/Magdeburg | t-systems.com Referenz | Anbieter | S | |
| Anthropic: EU-Datenresidenz und ZDR für Enterprise, Drittlandtransfer bleibt | siehe oben | Doku | S | |

## vom-prototyp-zum-betrieb

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| MIT NANDA 95 %, Gartner 30 % | siehe ki-einfuehrung | Studie | S | |
| n8n Export/Import JSON, REST-API, Error Trigger | docs.n8n.io | Doku | S | Aktivierung per API in älteren Versionen eingeschränkt |
| Anthropic Ausgabenlimits pro Workspace mit Warnschwellen | Console-Doku über Torii/Weckr | Doku | S | |
| Make ohne brauchbare Versionierung | eigene Erfahrung | Einschätzung | E | |

## kosten-und-qualitaetsmonitoring

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| RouteLLM: 85 % Kostenersparnis auf MT-Bench, 45 % MMLU, 35 % GSM8K bei 95 % GPT-4-Qualität | Ong et al. ICLR 2025, arxiv 2406.18665, LMSYS Blog 01.07.2024 | Studie | S | Text nennt Benchmark-Charakter ausdrücklich |
| Zheng et al. 2023: >80 % Übereinstimmung Modell-Richter mit Menschen, ähnlich Mensch-Mensch | arxiv 2306.05685, NeurIPS 2023 | Studie | S | |
| Preisabstand Haiku zu Opus (1/5 vs 4/20 bzw. 5/25 USD pro Mio. Token) | Preisübersichten 09/2026 | Fachpresse | S | Im Text nur "Bruchteil", keine Zahl, weil Preise wechseln |
| Anthropic Ausgabenlimits und Alarme | siehe oben | Doku | S | |
| 30 bis 60 % in Praxis-Workflows | eigene Schätzung aus Benchmark abgeleitet | Einschätzung | E | |

## lead-qualifizierung-eingang

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| 1,25 Mio. Leads bei 42 US-Unternehmen: Kontakt innerhalb einer Stunde → fast 7x höhere Qualifizierungswahrscheinlichkeit; Audit von 2.241 Unternehmen: Ø Antwortzeit 42 Std., 23 % antworten nie | Oldroyd, McElheran, Elkington, "The Short Life of Online Sales Leads", Harvard Business Review, März 2011 | Studie | S | US, 2011, im Text so eingeordnet. Nicht verwechseln mit der MIT/InsideSales-Studie 2007 (5-Minuten-Regel) |
| 3 bis 6 Std./Woche | keine externe Quelle | Einschätzung | E | |
| Anreicherung nur aus Firmenwebsite, keine Personenprofile | eigene Datenschutz-Entscheidung | Einschätzung | E | |

## crm-pflege-und-nachfassen

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Vertrieb verbringt nur ~25 bis 30 % der Zeit mit Verkaufen | Salesforce "State of Sales" 6. Ausgabe 2024, Pressemitteilung DE 31.07.2024 ("nur ein Viertel seiner Zeit mit Kund:innen") | Studie (Anbieter) | S | Quellen nennen 25 %, 30 % und 40 %, je nach Lesart; Text nennt Spanne |
| B2B-Daten veralten ~30 % pro Jahr; Landbase: 22,5 bis 70,3 %; 65,8 % wechseln Titel, 42,9 % Telefon, 37,3 % E-Mail in 12 Monaten | bliro Blog (30 %), Landbase Research | Fachpresse/Anbieter | S | Keine neutrale Primärquelle, Text nennt Spanne und "je nach Quelle" |
| Forrester B2B Data Health Benchmark 2024: 40 bis 60 % der CRM-Kontakte unvollständig | zitiert über b77.de | Studie | S | Nicht im Text verwendet (Sekundärzitat) |
| 2 bis 4 Std./Woche pro Vertriebler | keine externe Quelle | Einschätzung | E | |

## antwortentwuerfe-mit-wissensbasis

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Klarna Feb 2024: KI-Assistent übernimmt 2/3 der Chats, 2,3 Mio. Gespräche im ersten Monat, Lösungszeit unter 2 Min., "entspricht 700 Agenten" | Klarna Pressemitteilung 27.02.2024 (über CX Dive, Forbes, Bigeye) | Fallstudie (Anbieter) | S | |
| Klarna Mai 2025: CEO Siemiatkowski "we went too far", Qualität gesunken, Rekrutierung von Menschen, hybrides Modell | CX Dive, Forbes 18.05.2025, MLQ | Fachpresse | S | Zentraler Beleg für "Entwurf statt Automatik" |
| Anthropic Citations | siehe oben | Doku | S | |
| 8 bis 15 Std./Woche | keine externe Quelle | Einschätzung | E | |

## stellenanzeigen-und-hr-texte

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| § 11 AGG neutrale Ausschreibung, Vermutungswirkung, § 15 AGG Entschädigung | ADVANT Beiten, Haufe "Gestaltung von rechtssicheren Stellenanzeigen" | Gesetz/Behörde | S | |
| "junges Team": LAG-Entscheidung ohne Benachteiligung vs. ArbG Dortmund 60.000 Euro Entschädigung ("junges und engagiertes Team") | Haufe AGG-Kommentar, efarbeitsrecht, betriebs-berater | Gesetz/Behörde | S | Aktenzeichen nicht recherchiert, vor Nutzung im Gespräch nachschlagen |
| Claude Team/Enterprise: kein Training mit Customer Content, DPA enthalten; Consumer-Terms ohne diese Zusagen | Anthropic Privacy Center "Is my data used for model training?", Commercial Terms | Doku | S | |
| 3 bis 5 Std./Woche | keine externe Quelle | Einschätzung | E | |

## wartungsdokumentation-per-sprache

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| API_MAINTNOTIFICATION (OData, S/4HANA Cloud und On-Premise): Meldungskopf, Positionen, Ursachen, Maßnahmen, Partner; ETag/If-Match bei Änderungen | api.sap.com API_MAINTNOTIFICATION, SAP Help "Operations for Maintenance Notifications" | Doku | S | Servicename bestätigt |
| Whisper WER ca. 8 bis 12 % sauber, 16 bis 24 % industriell/klinisch, Rauschunterdrückung 20 bis 40 % relative Verbesserung | Forasoft "Speech Recognition Accuracy in Noise" (2026), VexaScribe WER-Daten, MLCommons Whisper Benchmark | Fachpresse/Benchmark | S | Keine peer-reviewte Industriestudie gefunden; Zahlen als "berichtet" formuliert |
| DIN 31051 setzt Dokumentation voraus, Praxisberichte zu unvollständigen Störmeldungen | mymaintenance.blog (DIN 31051 Dokumentation) | Fachpresse | S | |
| 20 bis 40 Min./Techniker/Tag | keine externe Quelle | Einschätzung | E | Im Text gekennzeichnet |

## schichtuebergabe-zusammenfassung

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Übergabe Nacht→Früh als kritischste Kommunikationssituation in der Chemieanlage, Gegenmaßnahmen Schichtbuch, Überlappung, Checkliste | Wiley Prozesstechnik, Praxisbericht "Betriebsstörung Kommunikationsfehler" | Fachpresse | S | |
| 451 Research: 40 % der Störfälle kurz nach Übergabe oder beim An-/Abfahren | zitiert in chemietechnik.de "Digitalisierung verhindert Störfälle in der Produktion" | Studie (Sekundärzitat) | S | Primärquelle nicht gefunden, im Text als "zitiert" markiert |
| 25 bis 40 % Informationsverlust bei mündlicher Übergabe | Anbieterblogs (embedded data, Blupassion) | Anbieter ohne Quelle | S | Im Text ausdrücklich als nicht belegt gekennzeichnet |
| Übergabe 10 → 5 Min. | keine externe Quelle | Einschätzung | E | |

## meeting-zusammenfassung-und-aufgaben

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Work Trend Index 2025: 31.000 Befragte, 31 Länder, Unterbrechung alle 2 Minuten, ineffiziente Meetings größter Produktivitätsstörer, fehlende nächste Schritte | Microsoft Blog 23.04.2025, WorkLab "Breaking down the infinite workday" | Studie (Hersteller) | S | Herstellerquelle, im Text so benannt |
| Teams Meeting Recap / Copilot in Teams Doku | Microsoft Tech Community "Turn meetings into momentum with Microsoft 365 Copilot" | Doku | S | |
| 2 bis 4 Std./Woche pro Führungskraft | keine externe Quelle | Einschätzung | E | |

## entscheidungsvorlagen-kurzfassung

| Aussage | Quelle | Art | Tiefe | Anmerkung |
|---|---|---|---|---|
| Amazon: sechsseitige narrative Memos, kein PowerPoint, stilles Lesen zu Meetingbeginn, "gutes Memo schwerer als 20 Folien" | Jeff Bezos, Aktionärsbrief 2017; CNBC 2018/2019 | Primärquelle (Brief) | S | |
| 0,5 bis 1 Tag pro Vorlage | keine externe Quelle | Einschätzung | E | |

## Zusammenfassung Prüftiefe

Alle externen Belege dieser Tabelle sind Stufe S (Suchergebnis-Auszug, mehrere Treffer), mit Ausnahme der Anthropic-PDF-Dokumentation (V). Vor dem ersten Kundengespräch zu einer Lösung: die zwei bis drei wichtigsten S-Quellen dieser Lösung einmal selbst öffnen und die Zahl gegen den Originaltext prüfen. Dauer pro Lösung etwa 15 Minuten.
