# Lösungsweg: Hosting-Entscheidung Cloud, EU-Cloud oder eigener Server

**Website:** `/loesungen/hosting-entscheidung-cloud-eu-onprem` · **Paket:** Tagessatz · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Die Hosting-Frage blockiert Projekte, weil sie abstrakt diskutiert wird. Wir treffen sie anhand konkreter Anwendungsfälle in einem Workshop-Tag mit Entscheidungsvorlage.

**Nicht Teil davon:** Aufbau der Infrastruktur (folgt im Pilot), Vertragsverhandlung mit Anbietern, Netzwerksicherheitskonzept, Zertifizierungsberatung (ISO 27001, TISAX: wir berücksichtigen Vorgaben, wir erarbeiten sie nicht).

## 2. Voraussetzungen beim Kunden

- Zwei bis drei konkrete Anwendungsfälle (idealerweise aus dem Readiness-Check)
- IT-Leitung, Datenschutzbeauftragter, ein Fachbereichsvertreter für einen Tag
- Bestehende Verträge: M365, Azure, AWS, Hetzner? Was ist schon da und bezahlt
- Vorgaben aus Kundenverträgen (Geheimhaltung, Datenlokation) oder Zertifizierungen
- Grobe Mengen: Wie viele Anfragen pro Tag, wie viele Nutzer, wie groß die Dokumentenmenge

## 3. Werkzeugentscheidung

Optionen, die ich gegenüberstelle (Stand vor jedem Workshop prüfen, Angebote ändern sich):

| Option | Typisch für | Datenfluss | Kosten | Grenzen |
|---|---|---|---|---|
| **US-Anbieter mit EU-Vertrag** (Anthropic, OpenAI Business mit EU-Datenverarbeitung, AVV, Zero Retention) | Textarbeit, Extraktion, interne Daten | Verarbeitung in EU-Region, Anbieter ist US-Unternehmen (Cloud Act Thema ehrlich benennen) | pro Token, günstig | Für hochsensible personenbezogene Daten je nach Datenschutzbeauftragtem nicht akzeptiert |
| **Azure OpenAI / AWS Bedrock in EU-Region** | Kunden mit Microsoft- oder AWS-Vertrag | EU-Rechenzentrum, bestehender Rahmenvertrag | pro Token, etwas teurer | Modellauswahl eingeschränkt, gleiche Cloud-Act-Frage |
| **EU-Anbieter** (Mistral, Aleph Alpha, STACKIT, IONOS AI Model Hub, T-Systems) | Wenn EU-Unternehmen Pflicht ist | Vollständig EU | pro Token oder Instanz | Modellqualität teils unter den Marktführern, ehrlich testen |
| **Eigener Server mit Open-Source-Modell** (Llama, Mistral, Qwen auf eigener GPU oder gemieteter GPU in EU) | Strikte On-Prem-Vorgabe, sehr hohe Volumina | Verlässt das Haus nie | Hardware oder GPU-Miete, Betrieb | Kleinere Modelle, eigener Betrieb, Updates, deutlich mehr IT-Aufwand |

Empfehlungslogik: Datenklasse (aus dem DSGVO-Check) entscheidet die Mindestoption, vorhandene Verträge entscheiden innerhalb der Option. Fast immer: differenziert, nicht eine Option für alles.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Vorbereitung: Anwendungsfälle und Datenklassen sichten, Optionen mit aktuellen Konditionen aktualisieren, Kostenmodell vorbereiten (Excel: Anfragen/Tag × Token × Preis, plus Betrieb) | 0,5 Tag |
| 2 | Workshop Vormittag: Pro Anwendungsfall Datenflussdiagramm (welche Daten, von wo, wohin, wer sieht sie), Datenklasse zuordnen | 0,5 Tag |
| 3 | Workshop Nachmittag: Optionen pro Fall durchgehen, Kosten für 12 Monate, Grenzen benennen, Entscheidung pro Fall. Bei On-Prem-Wunsch: Qualitätsdemo klein vs. groß am eigenen Beispiel | 0,5 Tag |
| 4 | Entscheidungsvorlage (eine Seite, Format siehe Entscheidungsvorlagen): Empfehlung pro Fall, Vertragsanforderungen, Kosten, offene Punkte | 0,5 Tag |

Gesamt: 1,5 bis 2 Tage.

## 5. Deployment und Betrieb

Die Entscheidung selbst hat keinen Betrieb, aber sie legt den Betrieb der folgenden Piloten fest:

- **Ergebnis als Architekturentscheidung dokumentieren** (ADR-Format: Kontext, Entscheidung, Konsequenzen) im Kunden-Repo unter `docs/adr/001-hosting.md`. Jeder Pilot verweist darauf.
- **Vertragsanforderungen als Checkliste** an den Einkauf oder die IT: AVV, EU-Region, Zero Retention, kein Training, Subunternehmerliste, Kündigungsfristen.
- **Exit-Strategie:** Bei jeder Option festhalten, wie man wechselt (Prompts und Workflows sind anbieterneutral im Repo, Modellaufruf ist eine austauschbare Schicht, siehe `_betriebsstandard.md`). Das nimmt der Entscheidung die Schwere.
- **Überprüfung nach 12 Monaten:** Anbieterlandschaft ändert sich schnell.

## 6. Abnahme

- Pro Anwendungsfall eine Hosting-Option mit Begründung
- Kosten für 12 Monate pro Option, Vergleich sichtbar
- Vertragsanforderungen als Checkliste
- Entscheidungsvorlage von Geschäftsführung unterschrieben oder mit klarer Rückfrage versehen
- ADR im Repo

## 7. Typische Fehler

- **Eine Option für alles.** Textentwürfe brauchen keinen eigenen Server, Personalakten keinen US-Anbieter.
- **On-Prem versprechen ohne Qualitätsvergleich.** Kleine Modelle können weniger. Am eigenen Beispiel zeigen, dann entscheiden.
- **Cloud Act verschweigen.** Der Datenschutzbeauftragte kennt das Thema. Offen ansprechen, Optionen zeigen.
- **Kosten nur pro Token rechnen.** Betrieb, Updates, Personal beim eigenen Server sind der größere Posten.

## 8. Aufwand und Preis

1,5 bis 2 Tage Tagessatz (€1.800 bis €3.600).

## 9. Folge-Use-Cases

- Jeder Pilot mit eigener Infrastruktur, besonders Wissensdatenbank und Antwortentwürfe
- DSGVO-Check (liefert die Datenklassen)
- Vom Prototyp zum Betrieb (setzt die Entscheidung um)

## 10. Belege und Quellen

- AWS Bedrock eu-central-1 (Frankfurt) mit Claude; Microsoft Foundry Claude GA ohne EU-Datenzone (InfoQ 07/2026); Azure OpenAI Data Zone EU. Stand 09/2026, vor jedem Workshop neu prüfen.
- IONOS AI Model Hub (Berlin, OpenAI-kompatibel, Euro pro Mio. Token), STACKIT AI Model Serving (GA 05/2025), Open Telekom Cloud LLM-Serving (Biere/Magdeburg).
- Anthropic: EU-Datenresidenz, ZDR, DPA; Drittlandtransfer bleibt (compound.law Zusammenfassung, Anthropic Doku).
- CLOUD Act als Argument des Datenschutzbeauftragten: offen ansprechen, nicht wegdiskutieren.
