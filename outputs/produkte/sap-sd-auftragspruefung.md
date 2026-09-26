# Produktkarte: Belegpilot Auftrag (SAP SD)

**Use-Case:** `/loesungen/sap-sd-auftragspruefung` · **Anleitung:** `outputs/loesungswege/sap-sd-auftragspruefung.md` · **Familie:** A · Belegpilot (Dokument → ERP)
**Fertig-Grad:** ●●●●○ (4/5). SAP-Standardschnittstellen sind bei jedem Kunden gleich, der Blueprint ist nach dem ersten Kunden wirklich wiederverwendbar. Variabel bleibt die Stammdatenqualität, nicht die Technik.

## Versprechen (ein Satz für die Website oder das Angebot)

Kundenbestellungen aus E-Mail, PDF und Excel landen als geprüfter Auftragsentwurf mit Ampel in SAP SD. Ein Klick legt den Auftrag an.

## Lieferform

n8n-Blueprint-Paket + SAP-Anbindungsservice + Betriebsabo

## Was in der Box ist

- Workflow-Blueprint: Postfach, Extraktion, Kundenfindung, Materialzuordnung (Kunden-Material-Info zuerst), Preisplausibilität, Ampel-Entwurf, Anlage per Klick
- SAP-Connector-Profil S/4HANA: API_SALES_ORDER_SRV, API_CUSTOMER_MATERIAL_SRV, Business Partner, Konditionen; Profil ECC: BAPI_SALESORDER_CREATEFROMDAT2 via RFC/OData-Wrapper
- Kunden-Material-Info-Pflegeschleife: jede Korrektur wird Vorschlag für neuen Eintrag
- Idempotenz-Schutz (Kundenbestellnummer), Q/P-Mandantentrennung per Umgebungsvariable, Berechtigungsprofil für den Service-User (Vorlage für die Basis)
- Testharness mit 50 Fällen-Vorlage, Regressionstest, Prüf-Karte (Teams oder Fiori-ähnliche HTML-Karte)
- Runbook, Übergabe an SAP-Basis und Innendienst

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| S/4HANA (OData, Q- und P-Mandant, Service-User) | 4 bis 6 Tage |
| ECC (RFC/BAPI, ggf. SAP Gateway) | 5 bis 8 Tage |
| Postfach | 0,5 Tag |

## Voraussetzungen beim Kunden

- Eigene n8n-Instanz oder n8n in SAP Joule Studio (GA Q3 2026, läuft auf BTP-Credits), BYOK-Schlüssel
- SAP-Basis gibt OData-Services oder BAPI frei, Q-Mandant mit kopierten Aufträgen
- Kunden-Material-Info für die Pilot-Kundengruppe mindestens rudimentär gepflegt

## Einregelung

2 Wochen Parallelbetrieb pro Kundengruppe, Schwellen Kunde 100 %, Material 92 %, Menge 98 %

## Preis

- **Einmalig:** €6.500 Setup S/4HANA / €8.500 ECC
- **Laufend:** €600/Monat Betrieb, weitere Kundengruppen €900 je Ausweitung
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Workist (Zentis-Fall, Preis auf Anfrage), Turian, SAP eigene Lösungen über Ariba/Business Network. Lücke: SAP-Mittelständler mit 10 bis 50 Stammkunden ohne EDI und ohne Budget für Enterprise-Verträge.

## Risiken und Lizenz

- Kunde will EDI-Ersatz: EDI-Kunden nicht mit KI bedienen, klar abgrenzen
- Variantenkonfiguration explizit ausgeschlossen
- n8n-Lizenz wie oben

## Build-Aufwand für mich

10 Tage für Blueprint plus SAP-Profil S/4HANA, ECC-Profil weitere 4 Tage. Teilt Extraktion und Prüf-Karte mit Familie A.

## Status

Anleitung fertig. Das wirtschaftlich stärkste Produkt in deiner Nische. Empfohlener erster Build.
