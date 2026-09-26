# Produktkarte: Betriebspaket

**Use-Case:** `/loesungen/vom-prototyp-zum-betrieb` · **Anleitung:** `outputs/loesungswege/vom-prototyp-zum-betrieb.md` · **Familie:** G · Betriebspaket (Pipeline, Monitoring, Rollback)
**Fertig-Grad:** ●●●●● (5/5). Vollständig kundenunabhängig: Repo, Compose, Pipelines, Runbook sind Vorlagen. Das Betriebspaket ist die Grundlage, auf der alle anderen Produkte laufen, und der Kern der laufenden Begleitung.

## Versprechen (ein Satz für die Website oder das Angebot)

Eure KI-Workflows bekommen Git, Test- und Produktivumgebung, Tests gegen echte Fälle, Deploy per Knopfdruck, Rollback in fünf Minuten, Secrets-Speicher, Protokoll und Alarme. Eure IT betreibt es danach selbst.

## Lieferform

Repo-Vorlage + Docker-Compose-Stack + Pipeline-Vorlagen (GitHub Actions/GitLab CI) + Einrichtungsservice + Monatsabo

## Was in der Box ist

- Repo-Vorlage (Struktur aus _betriebsstandard.md), Docker Compose n8n+Postgres für test/prod, Reverse Proxy, Backup-Job
- Pipeline-Vorlagen: PR-Test (Prompt-Regression), Deploy test → Smoke → Approval → prod, Rollback-Skript, Secrets-Scan im PR
- Deploy-Skript über n8n REST-API (Import, Aktivierung), Prompt-aus-Repo-Mechanik
- Entscheidungsprotokoll-Schema, Error-Workflow, Heartbeat (Uptime Kuma), Alarmregeln, Anthropic-Ausgabenlimit-Leitfaden
- Runbook-Vorlage, Übergabe-Termin (Pipeline, Rollback, Restore gemeinsam)

## Anbindung an das Kundensystem

| Kundensystem | Aufwand |
|---|---|
| Server/Cloud des Kunden mit Docker, Git-Hosting des Kunden | 3 bis 5 Tage für den ersten Workflow |
| jeder weitere Workflow | 1 bis 2 Tage |

## Voraussetzungen beim Kunden

- Server oder EU-Cloud
- Git-Hosting (Kunde ist Owner)
- IT-Ansprechpartner mit 2 Std./Monat

## Einregelung

Erster Deploy und Rollback gemeinsam, dann Betrieb

## Preis

- **Einmalig:** €4.500 Setup erster Workflow, €1.500 je weiterer
- **Laufend:** €350/Monat Betriebstermin, Updates, Alarm-Empfang (bis 3 Workflows), €600 bis 8 Workflows
- Modellkosten trägt der Kunde über eigenen Schlüssel (BYOK). Preise sind Vorschlag, gegen `outputs/consulting-angebot.md` abgleichen.

## Wettbewerb und Positionierung

Kein direkter Wettbewerb im Mittelstand; n8n Business Plan (ab ca. 667 €/Monat self-hosted) bietet Umgebungen und Git-Integration als Feature. Lücke: Kunden auf n8n Community Edition und Kunden, die jemanden brauchen, der den Betrieb mit der IT aufsetzt.

## Risiken und Lizenz

- n8n Community Edition hat keine eingebauten Umgebungen, deshalb zwei Instanzen
- Make-Kunden bekommen eine schwächere Fassung

## Build-Aufwand für mich

5 Tage für alle Vorlagen (großteils aus _betriebsstandard.md ableitbar)

## Status

Betriebsstandard als Text fertig. Als erstes bauen, weil jedes andere Produkt darauf steht.
