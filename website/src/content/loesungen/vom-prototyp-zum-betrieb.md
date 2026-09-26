---
title: "Vom Prototyp zum Betrieb: Deployment und CI/CD für KI-Workflows"
problem: "Der n8n-Workflow läuft auf dem Laptop des Praktikanten. Der Prompt wurde letzte Woche geändert, keiner weiß von wem. Beim Update ist alles stehen geblieben, und nachts ruft niemand zurück."
description: "Eure KI-Workflows bekommen Versionierung, eine Test-Umgebung, automatisches Deployment, sauberes Secrets-Handling, Logging und einen Rollback-Weg. Betrieb statt Bastelei."
bereich: "Technik & Betrieb"
zeitprobleme: ["Fehler und Nacharbeit", "Regeln und Unsicherheit"]
branchen: ["Fertigung", "Dienstleistung", "Handel", "Software"]
werkzeuge: ["Git (GitHub oder GitLab)", "n8n oder eigener Code in Docker", "GitHub Actions oder GitLab CI", "Secrets-Manager", "Logging und Alarme"]
aufwand: "5 bis 8 Tage, dann laufend"
einsparung: "Verhindert Ausfälle und stille Fehler, macht Änderungen in Minuten möglich"
paket: "begleitung"
reifegrad: "Betrieb"
sapNah: false
blogKategorien: ["Automatisierung", "Tools & Setup", "SAP & Enterprise"]
prio: 80
date: 2026-09-26
---

## Wo es hakt

Der Mittelstand scheitert selten am Prototyp. Er scheitert daran, dass der Prototyp nie zum Betrieb wird: kein Backup, keine Versionen, Zugangsdaten im Klartext, Prompt-Änderungen ohne Test direkt in Produktion. Beim ersten Ausfall stellt sich heraus, dass niemand weiß, wie das Ding eigentlich läuft.

## Was wir bauen

Wir holen eure Workflows von Laptops und Einzelinstanzen in einen Betrieb, den eure IT versteht. Workflows (bei n8n als JSON-Export), Anweisungen an das Modell und Konfiguration liegen versioniert in eurem Git. Es gibt zwei getrennte Umgebungen, Test und Produktion, als zwei Container mit eigenen Datenbanken, und der Unterschied steckt in Umgebungsvariablen, nicht im Workflow. Änderungen laufen über einen Pull Request, der automatisch 20 bis 50 echte, anonymisierte Testfälle durch die neue Version schickt und die Trefferquote mit der alten vergleicht. Grün heißt: Deploy nach Test, Smoke-Test, Freigabe durch eine benannte Person, Deploy nach Produktion, per Skript über die n8n-Schnittstelle. Zurückrollen ist ein Revert, unter fünf Minuten. Zugangsdaten liegen in einem Secrets-Speicher, nicht im Workflow-Export. Jeder Modellaufruf schreibt eine Protokollzeile, ein Fehler-Workflow meldet Ausfälle, Alarme feuern bei Fehlerquote, Kosten und ausbleibenden Ausführungen. Am Ende steht ein Runbook, das die IT einmal gemeinsam mit mir durchgespielt hat.

## Was das bringt

Warum das nötig ist, belegen zwei Untersuchungen aus 2025. Eine MIT-Studie (NANDA, "The GenAI Divide") fand, dass 95 Prozent der untersuchten Pilotprojekte keinen messbaren Ergebnisbeitrag lieferten. Gartner prognostizierte im Juli 2024, dass mindestens 30 Prozent der Projekte nach dem Proof of Concept abgebrochen werden, wegen Datenqualität, fehlender Risikokontrollen, steigender Kosten oder unklarem Nutzen. Das sind genau die Punkte, die im Betriebsstandard adressiert sind: Tests gegen echte Fälle, Protokoll, Kostenalarm, Rollback.

Die Werkzeuge dafür sind Standard, nicht Sonderbau: n8n exportiert Workflows als JSON und bietet eine REST-Schnittstelle für Import und Aktivierung sowie einen Fehler-Trigger für Alarm-Workflows. Anthropic bietet Ausgabenlimits pro Workspace mit Warnschwellen. Was der Betrieb an Zeit spart, lässt sich nicht extern belegen. Was er verhindert, schon: den Ausfall, den der Kunde vor euch bemerkt.

## Wo es schwierig wird

Wer Make statt n8n nutzt, bekommt keine brauchbare Versionierung, weil Make Szenarien nicht sauber exportiert. Dann ist der Betriebsstandard schwächer, und das sage ich vorher. Zweitens die Versuchung, während der Stabilisierung neue Funktionen einzubauen. Erst Betrieb, dann Features, sonst weiß niemand, was den Fehler verursacht hat. Drittens braucht der Betrieb jemanden in eurer IT, der zwei Stunden im Monat dafür hat. Ohne diese Person läuft es nach meinem Ausstieg genau so lange, bis das erste Zertifikat abläuft.

## Was ihr dafür braucht

- Einen Server oder eine Cloud-Umgebung, auf der die Workflows laufen dürfen (klärt der Hosting-Workshop)
- Jemanden aus eurer IT, der die Pipeline nach der Übergabe betreut
- Die Bereitschaft, den Laptop-Workflow einmal sauber neu aufzusetzen

## Warum dieses Paket

Betrieb ist kein Projekt mit Enddatum. In der Begleitung richten wir Pipeline und Monitoring einmal ein und halten sie dann gemeinsam mit eurer IT am Laufen, während weitere Workflows dazukommen. Das gehört bei mir dazu, nicht als Zusatz.
