# Lösungsweg: Vom Prototyp zum Betrieb (Deployment und CI/CD für KI-Workflows)

**Website:** `/loesungen/vom-prototyp-zum-betrieb` · **Paket:** Laufende KI-Begleitung · **Status:** Anleitung fertig, ist zugleich die Referenz für `_betriebsstandard.md`

## 1. Ausgangslage und Abgrenzung

Beim Kunden laufen ein oder mehrere KI-Workflows als Prototyp: auf einem Laptop, in einer Cloud-Instanz ohne Backup, mit Prompts, die niemand versioniert hat. Wir überführen sie in den Betriebsstandard: Repo, Umgebungen, Tests, Pipeline, Secrets, Monitoring, Rollback, Runbook.

**Nicht Teil davon:** Neue Funktionen (erst stabil, dann erweitern), Enterprise-Plattform-Einführung (Kubernetes, Service Mesh), 24/7-Bereitschaft durch mich (ich richte Alarme ein, der Kunde entscheidet, wer reagiert), Migration von Make zu n8n (empfehle ich, mache ich als eigenes Projekt).

## 2. Voraussetzungen beim Kunden

- Bestandsaufnahme: Welche Workflows, wo laufen sie, wer hat sie gebaut, wer nutzt sie
- Server oder Cloud-Umgebung gemäß Hosting-Entscheidung (Docker-fähig, Linux, erreichbar für die Pipeline)
- Git-Hosting: GitHub, GitLab oder Azure DevOps (Kunde ist Owner)
- Jemand aus der IT, der nach der Übergabe Pipeline und Server betreut (mindestens 2 Stunden pro Monat)
- Zugang zu allen Zugangsdaten, die heute im Prototyp stecken (werden rotiert, sobald sie im Secrets-Manager sind)
- Test-Zielsysteme: Q-Mandant, Test-Postfach, Sandbox des Ticketsystems

## 3. Werkzeugentscheidung

| Baustein | Wahl | Begründung |
|---|---|---|
| Laufzeit | n8n in Docker (Postgres statt SQLite), zwei Instanzen test/prod | Export per API, Versionierung möglich, self-hosted |
| Versionierung | Git, ein Repo pro Kunde, Struktur aus `_betriebsstandard.md` | Nachvollziehbarkeit, Rollback |
| Pipeline | GitHub Actions oder GitLab CI (was der Kunde hat) | Kein zusätzliches Tool |
| Tests | Node-Skript für Prompt-Regression, Smoke-Test per HTTP | Leichtgewichtig, keine Testframework-Einführung |
| Secrets | GitHub/GitLab Secrets für Pipeline, n8n-Credentials verschlüsselt zur Laufzeit, optional Azure Key Vault | Kein Klartext im Repo |
| Logging | Entscheidungsprotokoll in Postgres-Tabelle, n8n Error-Workflow | Auswertbar, Grundlage für Monitoring |
| Monitoring | Uptime Kuma oder Healthchecks.io für Heartbeats, Alarme per Teams/Mail, Budget-Alarm in Anthropic Console | Einfach, ausreichend |
| Backup | Nächtlicher Postgres-Dump, 14 Tage, Restore getestet | Workflows sind im Repo, Daten im Dump |

Ablehnen: Make als Laufzeit für kritische Workflows (keine brauchbare Versionierung), Prompts im n8n-Node ohne Repo, Shared-Admin-Logins.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Bestandsaufnahme: Workflows exportieren, Prompts extrahieren, Zugangsdaten inventarisieren, Zielsysteme klären. Ergebnis: Liste mit Risikobewertung (was fällt um, wenn der Laptop ausfällt) | 1 Tag |
| 2 | Repo aufsetzen: Struktur, README, Workflows und Prompts committen (erste Version = Ist-Zustand, auch wenn unschön) | 0,5 Tag |
| 3 | Infrastruktur: Docker Compose für n8n + Postgres, zwei Instanzen, Reverse Proxy mit TLS, Backup-Job | 1 Tag |
| 4 | Secrets: Credentials in n8n neu anlegen (pro Umgebung), alte Schlüssel rotieren, Pipeline-Secrets setzen, Klartext aus Exporten entfernen | 0,5 Tag |
| 5 | Prompts aus Nodes ins Repo: Node liest Prompt aus Datei oder Deploy-Skript setzt ihn ein. Umgebungsvariablen für Mandanten, Postfächer, URLs | 1 Tag |
| 6 | Tests: 20 bis 50 Testfälle pro Workflow aus dem Protokoll oder den Altfällen, `run-tests.mjs`, Schwellen festlegen; Smoke-Test pro Workflow | 1,5 Tage |
| 7 | Pipeline: PR → Tests; Merge → Deploy test → Smoke → Approval → Deploy prod. Rollback per Revert einmal durchspielen | 1 Tag |
| 8 | Monitoring: Entscheidungsprotokoll, Error-Workflow, Heartbeat, Schwellenalarme, Budget-Alarm. Dashboard (einfach: Grafana auf Postgres oder eine SQL-Ansicht) | 1 Tag |
| 9 | Runbook schreiben, Übergabe-Termin mit IT (Pipeline, Rollback, Restore gemeinsam) | 0,5 Tag |

Gesamt: 5 bis 8 Tage für den ersten Workflow inklusive Infrastruktur, jeder weitere Workflow 1 bis 2 Tage.

## 5. Deployment und Betrieb

Dieser Use-Case ist der Betriebsstandard. Vollständig in `_betriebsstandard.md`. Zusätzlich für den laufenden Betrieb in der Begleitung:

- **Monatlicher Betriebstermin (60 Minuten) mit der IT:** Alarme der letzten vier Wochen, Kosten pro Workflow, Qualitätsstichprobe, anstehende Updates (n8n-Version, Modellwechsel), Schlüsselrotation fällig?
- **n8n-Updates:** Erst test, Smoke-Test, dann prod. Nie direkt prod. Changelog lesen, Breaking Changes bei Nodes prüfen.
- **Modellwechsel (neues Modell, Anbieter-Deprecation):** Regressionstest mit neuem Modell in test, Vergleich Trefferquote und Kosten, dann Umschaltung per Umgebungsvariable, Rollback ebenso.
- **Restore-Test halbjährlich:** Backup einspielen in eine dritte Instanz, prüfen. Ein Backup, das nie eingespielt wurde, ist Hoffnung.
- **Notfall:** Runbook Kapitel 1: Workflow deaktivieren (ein API-Aufruf, im Runbook mit curl-Befehl), Kapitel 2: Rollback, Kapitel 3: wer wird angerufen.

## 6. Abnahme

- Alle Workflows laufen aus dem Repo, kein Prototyp mehr auf Einzelgeräten
- Pipeline: Änderung an einem Prompt landet über PR, Test, Approval in prod, gemeinsam durchgeführt
- Rollback gemeinsam durchgeführt, unter fünf Minuten
- Kein Klartext-Secret im Repo oder in Workflow-Exports (Skript prüft im PR)
- Alarme feuern (Test durch absichtlichen Fehler)
- Restore getestet
- Runbook liegt vor, IT hat es gelesen und einmal benutzt

## 7. Typische Fehler

- **Neue Funktionen während der Stabilisierung.** Erst Betrieb, dann Features. Sonst verschwimmt, was den Fehler verursacht hat.
- **Test und Prod in einer Instanz** ("wir deaktivieren den Workflow einfach"). Zwei Instanzen, zwei Datenbanken.
- **Prompts nur im Node.** Dann ist die Versionierung eine Illusion.
- **Alarme ohne Empfänger.** Ein Alarm an ein Postfach, das niemand liest, ist kein Alarm. Namen im Runbook.
- **Übergabe als Dokument statt als Termin.** Die IT muss es einmal selbst gemacht haben.

## 8. Aufwand und Preis

5 bis 8 Tage Aufbau, dann 0,5 bis 1 Tag pro Monat Betrieb. Kernbestandteil der laufenden KI-Begleitung (ab €1.200/Monat). Bei neuen Piloten von mir ist der Standard von Anfang an dabei und kostet nichts extra: Er ist der Grund, warum die Lösung nach Woche vier noch läuft.

## 9. Folge-Use-Cases

- Kosten- und Qualitätsmonitoring (baut auf dem Entscheidungsprotokoll auf)
- Jeder weitere Workflow kommt in dieselbe Pipeline (1 bis 2 Tage statt 5 bis 8)
- Hosting-Entscheidung (falls noch offen)

## 10. Belege und Quellen

- MIT NANDA 2025 (95 %) und Gartner 2024 (30 %): Warum Piloten sterben. Gartner nennt Datenqualität, Risikokontrollen, Kosten, unklaren Nutzen, das ist die Gliederung des Betriebsstandards.
- docs.n8n.io: Export/Import, öffentliche REST-API, Error Trigger. Hinweis: Aktivierung per API war in älteren Versionen read-only, aktuelle Versionen haben /activate.
- Anthropic Console: Ausgabenlimits pro Workspace, Alarme bei 50/75/90 %.
- `_betriebsstandard.md` ist die ausführliche Fassung.
