# Produktkarte: Wissensbox

**Use-Case:** `/loesungen/wissensdatenbank-mit-quellenbeleg` · **Anleitung:** `outputs/loesungswege/wissensdatenbank-mit-quellenbeleg.md` · **Familie:** C · Wissensbox (RAG-Appliance)
**Fertig-Grad:** ●●●●○ (4/5). Der Showcase existiert bereits (rag-demo). Die Appliance ist eigener Code, damit das einzige Produkt der Liste, das du wirklich als Software lizenzieren kannst. Kundenspezifisch sind Dokumente und SSO.

## Versprechen (ein Satz für die Website oder das Angebot)

Ein Assistent, der Fragen ausschließlich aus euren Dokumenten beantwortet und zu jeder Antwort Datei und Abschnitt nennt. Läuft auf einem Server in der EU oder bei euch im Haus.

## Lieferform

Docker-Compose-Appliance (eigener Code, frei lizenzierbar) + Installationsservice + Betriebsabo

## Was in der Box ist

- Appliance: Ingestion (PDF, DOCX, Wiki, SharePoint-Connector), Chunking mit Überschriftenpfad, Embeddings, Postgres+pgvector, Hybrid-Retrieval, Antwort mit Citations, Web-Oberfläche mit Quellenlinks und Feedback, SSO (Entra ID), Fragen-Protokoll mit Löschfrist
- Modell-Schicht austauschbar: Claude über EU-Endpunkt oder Bedrock Frankfurt, IONOS/STACKIT Open-Source-Modelle, lokales Modell (mit ehrlichem Qualitätsvergleich)
- Index-Versionierung (Blue/Green), Backup-Job, Health-Endpoint, Uptime-Check
- Evaluationsset-Vorlage (20 Fragen), Kuratierungs-Leitfaden für den Wissensverantwortlichen
- Pipeline-Vorlage (GitHub Actions: Lint, Retrieval-Test, Image-Build, Deploy per SSH)
- Runbook, IT-Übergabe (Deploy, Rollback, Restore gemeinsam)

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| EU-Server oder Kundenserver mit Docker, Reverse Proxy, SSO | 2 bis 3 Tage |
| Dokumentenquelle SharePoint/Confluence/Laufwerk | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- Server (Kunde oder EU-Cloud), Hosting-Entscheidung getroffen
- BYOK-Schlüssel oder EU-Anbieter-Konto
- Kuratierter Dokumentenbereich, Wissensverantwortlicher benannt

## Einregelung

2 Wochen Pilot mit 10 bis 20 Nutzern, 17 von 20 Testfragen richtig

## Preis

- **Einmalig:** €6.500 Setup inkl. Installation und Evaluation
- **Laufend:** €490/Monat Betrieb (Updates, Index-Pflege-Jobs, Monitoring, Support) bis 50 Nutzer; €890 bis 200 Nutzer
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Langdock (25 bis 99 €/Nutzer/Monat), nele.ai (Credits, ca. 120 € pauschal für 100 MA), innoGPT, Adacor (18 €/Nutzer), ragspace. Lücke: On-Premise-fähige Appliance mit hartem Quellenzwang und Betrieb durch die IT des Kunden, statt SaaS mit Nutzerlizenzen. Preislich gegen nele.ai nur mit On-Prem- und Quellen-Argument haltbar.

## Risiken und Lizenz

- Preisdruck durch SaaS-Anbieter
- Kuratierung wird unterschätzt
- Kleine lokale Modelle enttäuschen, vorher zeigen

## Build-Aufwand für mich

12 Tage vom Showcase zur Appliance (Packaging, SSO, Connectoren, Pipeline, Doku)

## Status

Showcase vorhanden, Anleitung fertig. Empfohlener dritter Build, weil er auch Postfach-Pilot Antwort trägt.
