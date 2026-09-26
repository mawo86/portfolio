# Lösungsweg: Kundenaufträge vor der Anlage in SAP SD prüfen

**Website:** `/loesungen/sap-sd-auftragspruefung` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig, wirtschaftlich stärkster Fall im Schwerpunkt

## 1. Ausgangslage und Abgrenzung

Kundenbestellungen in Fremdformaten werden manuell in SAP SD erfasst. Wir bauen Auslesen, Abgleich mit Stammdaten und Preisen, Auftragsentwurf mit Auffälligkeiten, Anlage per Klick.

**Nicht Teil davon:** Automatische Anlage ohne Klick (kommt frühestens in Stufe zwei nach drei Monaten stabiler Quote), EDI-Anbindung (wenn ein Kunde EDI kann, ist EDI der richtige Weg, nicht KI), Konfigurierbare Produkte mit Variantenkonfiguration, Verfügbarkeitsprüfung (macht SAP bei der Anlage), Kreditlimit.

## 2. Voraussetzungen beim Kunden

- SAP SD (ECC oder S/4) mit Kundenstamm, Materialstamm, Kundenpreisen (Konditionen), Kunden-Material-Info (Kundenartikelnummern)
- Bestellkanal: Postfach (bestellung@), Portal-Downloads, Fax-zu-Mail
- Anlageweg: BAPI_SALESORDER_CREATEFROMDAT2, OData API_SALES_ORDER_SRV (S/4), oder IDoc ORDERS. Abstimmung mit SAP-Basis, welcher Weg freigegeben wird
- 50 alte Bestellungen mit dem daraus entstandenen SAP-Auftrag (Testset), darunter schwierige: Kundenartikelnummern, Abrufe aus Rahmenverträgen, Mengeneinheiten
- Innendienst-Mitarbeiter als Bewerter, vier Wochen
- Datenschutz: Bestellungen enthalten Ansprechpartner. AVV, EU-Endpunkt. Betriebsrat: Prozessunterstützung, keine Leistungsmessung.

## 3. Werkzeugentscheidung

n8n plus Claude Sonnet für Extraktion (PDF, Excel, Text, Bild). Stammdatenabgleich deterministisch über OData-Reads (Kunde per Name/Adresse/Kundennummer, Material per Kundenartikelnummer aus Kunden-Material-Info, dann Materialnummer, dann Textsuche). Preise aus SAP-Konditionen, nie aus dem Modell. Auftragsentwurf als strukturierte Vorschau (Fiori-ähnliche Karte oder Excel-Zeile), "Anlegen"-Klick ruft BAPI/OData auf. Bei S/4 mit BTP: Alternativ SAP Build Process Automation, aber nur wenn der Kunde BTP bereits hat.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Bestellkanal, Kundengruppe für den Pilot (5 bis 10 Stammkunden mit hohem Volumen), Anlageweg mit SAP-Basis, Testset | 1 Tag |
| 2 | Zugriffe: Service-User, OData-Services aktivieren (Kunde, Material, Kunden-Material-Info, Konditionen, Auftrag), Q-Mandant | 1,5 Tage |
| 3 | Extraktion: Kunde, Bestellnummer, Positionen (Kundenartikelnr., Bezeichnung, Menge, Einheit, Preis wenn angegeben), Wunschtermin, Lieferadresse, Hinweise. JSON mit Sicherheitsgrad pro Feld | 2 Tage |
| 4 | Kundenzuordnung: Absenderdomain, Name, Adresse, Bestellhistorie. Lieferadresse gegen Warenempfänger-Partner | 1 Tag |
| 5 | Materialzuordnung: Kunden-Material-Info zuerst, dann Materialnummer, dann Bestellhistorie des Kunden, dann Textähnlichkeit. Jede Stufe mit sinkendem Sicherheitsgrad | 2 Tage |
| 6 | Preis- und Plausibilitätsprüfung: SAP-Konditionspreis vs. Kundenpreis auf Bestellung, Mengeneinheiten, Mindestmengen, Termin realistisch | 1 Tag |
| 7 | Entwurf und Anlage: Vorschau mit Ampeln pro Position, "Anlegen" ruft BAPI im Q-Mandanten, Ergebnis (Auftragsnummer, Fehlermeldungen) zurück | 2 Tage |
| 8 | Parallelbetrieb zwei Wochen: Innendienst legt weiter manuell an, Workflow schlägt vor, Vergleich Position für Position | 1,5 Tage verteilt |
| 9 | Deployment prod, Runbook, Übergabe | 1 Tag |

Gesamt: 10 bis 15 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Mandantentrennung strikt:** BAPI-Aufruf in test geht ausschließlich an Q. Die RFC-Destination oder OData-URL kommt aus der Umgebung. Ein Code-Review-Check prüft, dass keine Mandanten-URL im Workflow-JSON steht.
- **Regressionstest:** 50 Bestellungen, Vergleich mit dem echten SAP-Auftrag: Kunde 100 Prozent, Material 92 Prozent, Menge 98 Prozent, Termin 90 Prozent. Läuft bei jeder Prompt- oder Zuordnungsänderung.
- **Kunden-Material-Info als lebende Tabelle:** Jede manuelle Korrektur einer Materialzuordnung im Parallelbetrieb wird als Vorschlag für einen neuen Kunden-Material-Info-Satz an den Innendienst gegeben. So wird SAP selbst besser, nicht nur der Workflow.
- **Idempotenz:** Bestellnummer plus Kunde als Schlüssel, Doppelanlage technisch verhindert (Prüfung auf vorhandene Kundenbestellnummer im Auftrag).
- **Alarm:** Anteil Positionen mit gelber oder roter Ampel über 30 Prozent, BAPI-Fehlerquote über 5 Prozent, kein Eingang seit 24 Stunden werktags.

## 6. Abnahme

- Zuordnungsquoten wie im Regressionstest im Parallelbetrieb erreicht
- 70 Prozent der Bestellungen der Pilot-Kundengruppe werden mit einem Klick angelegt
- Zeit bis Auftragsbestätigung unter einer Stunde (vorher: Stunden bis Tage)
- Keine Doppelanlage, keine Anlage im falschen Mandanten (Protokoll)
- Innendienst: "Ich prüfe, statt zu tippen"

## 7. Typische Fehler

- **Alle Kunden auf einmal.** Zehn Stammkunden mit gepflegter Kunden-Material-Info im Pilot. Der Rest kommt danach.
- **Materialzuordnung nur über Text.** Kunden-Material-Info ist der SAP-Standard dafür. Erst pflegen, dann automatisieren.
- **Preis aus der Bestellung übernehmen.** Der SAP-Preis gilt. Abweichung ist ein Hinweis für den Innendienst, keine Übernahme.
- **EDI-Kunden mit KI bedienen.** Wenn der Kunde EDI kann, EDI machen. KI ist für die Kunden, die es nicht können.
- **BAPI im P-Mandanten testen.** Nie.

## 8. Aufwand und Preis

10 bis 15 Tage. KI-Pilot-Projekt, €5.000 bis €5.500 für eine Kundengruppe. Ausweitung auf weitere Kunden und Stufe zwei (Anlage ohne Klick bei grüner Ampel) in der Begleitung.

## 9. Folge-Use-Cases

- Angebotsentwurf aus der Anfrage (die Stufe vor der Bestellung)
- Auftragsbestätigungs-Abgleich (Einkaufsseite, gleiche Technik)
- SAP-Stammdatenqualität (Kunden-Material-Info)
- Kosten- und Qualitätsmonitoring

## 10. Belege und Quellen

- SAP Help Portal, "Sales Order (A2X, OData V2)" und api.sap.com API_SALES_ORDER_SRV: Anlage per POST auf A_SalesOrder mit Deep Insert der Positionen.
- api.sap.com API_CUSTOMER_MATERIAL_SRV: Kunden-Material-Info per OData (S/4HANA).
- SAP Community / sapdatasheet: BAPI_SALESORDER_CREATEFROMDAT2, Standard für ECC und S/4, Variantenkonfiguration aufwendig.
- Computerwoche 2024 und Workist-SAP-Seite: Zentis-Fall nutzt genau diese Kette (BP, MARA, Kundenmaterial, BAPI), anfangs 60 % Nacharbeit.
- Zeitersparnis: kein externer Beleg. Messgröße im Piloten: Zeit bis Auftragsbestätigung, Anteil Aufträge mit einem Klick angelegt.
