# Lösungsweg: Interne Wissensdatenbank, die ihre Quellen nennt

**Website:** `/loesungen/wissensdatenbank-mit-quellenbeleg` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig, Technik im Showcase erprobt (`rag-demo-quellenbelegter-chatbot`)

## 1. Ausgangslage und Abgrenzung

Mitarbeitende finden Firmenwissen nicht. Wir bauen einen internen Assistenten, der Fragen ausschließlich aus Firmendokumenten beantwortet und pro Antwort Datei und Abschnitt nennt.

**Nicht Teil davon:** Externer Chatbot für Kunden, Zugriffsrechte pro Nutzer über einen Dokumentenbereich hinaus (im Pilot ein Bereich, für alle gleich sichtbar), Live-Anbindung an ERP-Daten, Dokumenten-Erstellung.

## 2. Voraussetzungen beim Kunden

- Ein Dokumentenbereich für den Pilot (z. B. Service-Handbücher oder QM-Dokumente), 50 bis 500 Dokumente
- Entscheidung Hosting: EU-Cloud (Hetzner, IONOS, STACKIT) oder eigener Server. Modell-API mit EU-Endpunkt oder Open-Source-Modell lokal
- 20 typische Fragen mit der richtigen Antwort und Quelle (Testset)
- Ein Wissensverantwortlicher, der veraltete Dokumente aussortiert
- IT für Server, Login (SSO über Entra ID wünschenswert), Netzwerk
- DSGVO: Dokumente enthalten selten personenbezogene Daten, aber prüfen (Personalakten raus). Nutzerfragen werden protokolliert: Hinweis an Nutzer, Löschfrist 90 Tage, keine Auswertung pro Person.

## 3. Werkzeugentscheidung

| Baustein | Wahl | Alternative |
|---|---|---|
| Pipeline | Eigene RAG-Pipeline (Python, wie im Showcase): Parser, Chunker, Embeddings, pgvector, Retriever, Antwort-Modell | Fertige Plattform (z. B. Azure AI Search + OpenAI) wenn der Kunde Microsoft-Vertrag hat |
| Modell | Claude Sonnet über EU-Endpunkt | Lokales Modell (Llama, Mistral) bei strikter On-Prem-Vorgabe, mit ehrlichem Hinweis auf geringere Qualität |
| Oberfläche | Schlanke Web-App (Chat, Quellen als Links) hinter SSO | Teams-Bot, wenn das Team dort lebt |
| Hosting | Docker Compose auf einem EU-Server, Postgres mit pgvector | Kubernetes nur, wenn der Kunde es ohnehin betreibt |

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Bereich, Testfragen, Hosting-Entscheidung (falls offen, Hosting-Workshop vorschalten) | 0,5 Tag |
| 2 | Infrastruktur: Server, Docker, Postgres+pgvector, Reverse Proxy mit TLS, SSO | 1,5 Tage |
| 3 | Ingestion: Parser für PDF, DOCX, Wiki; Chunking mit Überschriften-Pfad; Embeddings; Metadaten (Datei, Abschnitt, Version, Datum) | 2 Tage |
| 4 | Retrieval: Hybrid (Vektor + Volltext), Top-k, Re-Ranking | 1,5 Tage |
| 5 | Antwort mit Quellenzwang, Zitat-Markierungen, "nicht in den Dokumenten" als explizite Antwort | 1 Tag |
| 6 | Oberfläche: Chat, Quellen anklickbar (öffnet Dokument an der Stelle), Feedback-Buttons (hilfreich / nicht) | 2 Tage |
| 7 | Evaluation gegen 20 Testfragen, Chunking und Prompt anpassen, Wissenslücken notieren | 1,5 Tage |
| 8 | Pilotphase zwei Wochen mit 10 bis 20 Nutzern, Feedback auswerten | 1 Tag verteilt |
| 9 | Runbook, Übergabe an IT und Wissensverantwortlichen | 1 Tag |

Gesamt: 10 bis 15 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Da hier eigener Code läuft, zusätzlich:

- **Repo:** `app/` (Pipeline und Web-App), `infra/docker-compose.yml`, `tests/` (Retrieval- und Antwort-Evaluation), `.github/workflows/`.
- **Pipeline:** PR → Lint, Unit-Tests, Retrieval-Evaluation gegen Testfragen (Recall@6 mindestens 85 Prozent). Merge → Docker-Image bauen, in Registry pushen (GitHub Container Registry oder Kunden-Registry), Deploy per SSH auf test (`docker compose pull && up -d`), Smoke-Test (Health-Endpoint, eine Testfrage), Approval, Deploy prod.
- **Index-Versionierung:** Jede Ingestion erzeugt einen neuen Index (Tabelle mit Versionsnummer). Die App zeigt auf die aktive Version. Umschalten und Zurückschalten ist ein UPDATE, kein Neubau.
- **Secrets:** API-Keys und DB-Passwörter als Docker Secrets oder `.env` außerhalb des Repos, im Runbook dokumentiert wo.
- **Monitoring:** Health-Endpoint mit Uptime-Check, Fragen-Protokoll (Frage, Quellen, Feedback, Latenz, Token), Alarm bei Fehlerquote über 5 Prozent oder Latenz über 10 Sekunden. Kostenbudget in der Anthropic Console.
- **Backup:** Postgres-Dump nachts, Aufbewahrung 14 Tage. Dokumente selbst liegen weiterhin beim Kunden, der Index ist reproduzierbar.

## 6. Abnahme

- 17 von 20 Testfragen richtig mit korrekter Quelle
- Null erfundene Aussagen in 100 protokollierten Antworten (Stichprobe)
- Antwortzeit unter 8 Sekunden im Median
- Nutzer-Feedback "hilfreich" bei mindestens 70 Prozent
- IT kann Deploy und Rollback selbst (gemeinsam durchgeführt)

## 7. Typische Fehler

- **Zu große Chunks oder ohne Überschriften-Kontext.** Dann findet der Retriever den Abschnitt nicht oder das Modell weiß nicht, wozu er gehört.
- **Alle Dokumente auf einmal, inklusive Müll.** Der Index ist so gut wie die Dokumente. Kuratierung ist Teil des Projekts.
- **On-Prem-Modell versprechen, ohne Qualitätsunterschied zu benennen.** Ehrlich vergleichen, im Pilot beides testen lassen.
- **Kein Feedback-Button.** Ohne Nutzerfeedback ist die Qualität nach dem Pilot nicht messbar.

## 8. Aufwand und Preis

10 bis 15 Tage. KI-Pilot-Projekt am oberen Ende, €5.000 bis €5.500, bei On-Prem-Modell plus Infrastruktur eher Tagessatz-Projekt. Betrieb und Ausweitung in der Begleitung.

## 9. Folge-Use-Cases

- Antwortentwürfe im Kundenservice (gleicher Index)
- Wartungsdokumentation (Berichte landen im Index)
- Kosten- und Qualitätsmonitoring
- Vom Prototyp zum Betrieb (hier von Anfang an eingebaut)
