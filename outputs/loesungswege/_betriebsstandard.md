# Betriebsstandard für KI-Workflows beim Kunden

**Zweck:** Der gemeinsame Nenner für Abschnitt 5 (Deployment und Betrieb) aller Lösungswege. Jede Anleitung verweist hierher und ergänzt nur, was für den jeweiligen Use-Case anders ist. Intern, nicht für die Website.

**Stand:** 2026-09-26

## 1. Grundsatz

Ein Workflow ist erst fertig, wenn er ohne mich läuft: versioniert, getestet, deploybar per Knopfdruck, überwacht, zurückrollbar. Alles andere ist ein Prototyp. Der Betriebsstandard gilt für n8n-Workflows, Make-Szenarien (eingeschränkt, siehe 7) und eigenen Code gleichermaßen.

## 2. Repository-Struktur (pro Kunde ein Repo)

```
kunde-<name>/
  README.md                 Zweck, Ansprechpartner, Notfall-Kontakt, Runbook-Link
  workflows/                n8n-Exports als JSON, ein Workflow pro Datei
  prompts/                  Prompts als Markdown, Versionierung über Git
  tests/
    faelle/                 Testfälle: Eingabe + erwartetes Ergebnis (JSON)
    run-tests.mjs           Prompt-Regressionstest (siehe 4)
  deploy/
    docker-compose.yml      n8n + Postgres, getrennt für test und prod
    deploy.sh               Import + Aktivierung via n8n REST API
  .github/workflows/
    test.yml                bei Pull Request
    deploy.yml              bei Merge auf main
  docs/runbook.md           Was tun bei Ausfall, Fehlerhäufung, Kostenexplosion
```

Prompts liegen nie nur im n8n-Node. Der Node liest sie aus dem Repo (Mount) oder wird beim Deploy aus `prompts/` befüllt. Damit ist jede Prompt-Änderung ein Commit mit Autor und Zeitpunkt.

## 3. Umgebungen

| Umgebung | Zweck | Daten | Wer darf ändern |
|---|---|---|---|
| **lokal** | Bauen, ausprobieren | synthetische Daten | ich |
| **test** | Abnahme mit dem Kunden, Regressionstests | anonymisierte Kopie echter Fälle | Pipeline |
| **prod** | Echtbetrieb | Echtdaten | nur Pipeline |

Test und Prod sind zwei n8n-Instanzen (zwei Container, zwei Datenbanken), nie ein Instanz mit "aktiv/inaktiv". Unterschied liegt in Umgebungsvariablen (`N8N_ENV=test|prod`), Zugangsdaten und Zielsystemen (Test-Postfach, Test-Mandant im ERP).

## 4. Tests

- **Prompt-Regressionstest:** `tests/faelle/*.json` enthält 20 bis 50 echte, anonymisierte Fälle mit erwartetem Ergebnis (Kategorie, extrahierte Felder, Entscheidung). `run-tests.mjs` schickt jeden Fall durch den aktuellen Prompt und vergleicht. Schwelle: mindestens 90 Prozent Treffer, sonst rot. Läuft bei jedem Pull Request.
- **Workflow-Smoke-Test:** Nach Deploy in test wird ein Beispieldatensatz eingespielt und geprüft, ob das erwartete Ergebnis am Ziel ankommt (E-Mail im Test-Postfach, Beleg im Test-Mandanten).
- **Abnahme:** Der Kunde arbeitet eine Woche parallel in test, bevert die Vorschläge in einer Tabelle (richtig, falsch, unsicher). Erst ab 90 Prozent "richtig" geht es nach prod.

## 5. Pipeline

**Bei Pull Request (`test.yml`):** Checkout, Node 20, `npm ci`, `node tests/run-tests.mjs` mit dem API-Key aus GitHub Secrets. Ergebnis als PR-Kommentar (Trefferquote, Abweichungen).

**Bei Merge auf main (`deploy.yml`):**
1. `deploy.sh test` importiert alle `workflows/*.json` über die n8n REST API (`POST /api/v1/workflows`, bestehende per `PUT` überschreiben), setzt Prompts ein, aktiviert.
2. Smoke-Test gegen test.
3. Manuelles Approval (GitHub Environment `prod` mit Required Reviewer = Kunde oder ich).
4. `deploy.sh prod`, gleiche Schritte.

**Rollback:** `git revert` des letzten Commits, Merge, Pipeline läuft. Dauer unter fünf Minuten. Im Runbook steht der Befehl.

## 6. Secrets

- Kein API-Key, kein Passwort im Workflow-JSON oder im Repo. n8n-Credentials werden pro Umgebung einmal manuell angelegt und im Export durch ihre ID referenziert.
- Externe Schlüssel (Anthropic, ERP-Service-User) liegen in GitHub Secrets (Pipeline) und in der n8n-Credential-Verschlüsselung (Laufzeit). Bei Kunden mit eigenem Vault (Azure Key Vault, HashiCorp) dorthin.
- Service-User im ERP mit minimalen Rechten: nur die Tabellen und Aktionen, die der Workflow braucht. Lese- und Schreibrechte getrennt beantragen.
- Rotation: alle 90 Tage, Termin im Runbook.

## 7. Logging, Monitoring, Alarme

- **Entscheidungsprotokoll:** Jeder KI-Aufruf schreibt eine Zeile (Zeitpunkt, Workflow, Eingabe-ID, Modell, Token, Ergebnis, Sicherheitsgrad) in eine Tabelle (Postgres im Container oder SharePoint-Liste beim Kunden). Grundlage für Qualitätsstichproben und Kostenzuordnung.
- **Fehler:** n8n Error-Workflow schickt jede fehlgeschlagene Ausführung mit Link an Teams-Kanal oder Postfach des Kunden und an mich.
- **Schwellen:** Fehlerquote über 5 Prozent am Tag, Kosten über dem Tagesbudget, keine Ausführung seit 24 Stunden (Eingang versiegt = etwas ist kaputt). Jeweils ein Alarm.
- **Kostenlimit:** Budget-Alarm in der Anthropic Console pro Kunde und API-Key. Bei Überschreitung pausiert der Workflow (Deaktivierung per API), nicht der Kunde.
- **Make statt n8n:** Make hat keine brauchbare Export-API für Versionierung. Wenn der Kunde Make hat: Szenario-Blueprint monatlich manuell exportieren und committen, Prompts trotzdem im Repo halten. Ehrlich sagen, dass CI/CD hier schwächer ist.

## 8. Übergabe an den Kunden

- Runbook (`docs/runbook.md`): Wer wird angerufen, wie deaktiviert man den Workflow, wie rollt man zurück, wie liest man das Entscheidungsprotokoll, wann läuft die Schlüsselrotation.
- 60 Minuten Übergabe-Termin mit der IT: Pipeline einmal gemeinsam durchlaufen, einen Rollback gemeinsam machen.
- Zugriff: Der Kunde ist Owner des Repos, ich bin Collaborator. Bei Ende der Zusammenarbeit entferne ich mich selbst.

## 9. Was ich dem Kunden dazu sage

"Der Pilot ist nach vier Wochen fertig. Dass er in zwölf Monaten noch läuft, liegt an den Punkten oben. Die gehören dazu, sind kein Aufpreis, und sie sind der Grund, warum die Begleitung nach dem Pilot Sinn hat."
