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

Wir überführen eure Workflows in einen Betriebsmodus, den auch eure IT versteht. Workflows, Prompts und Konfiguration liegen versioniert in Git. Es gibt eine Test-Umgebung, in der Änderungen mit echten Beispielfällen automatisch geprüft werden, bevor sie live gehen. Das Deployment läuft per Pipeline auf Knopfdruck, der Rollback genauso. Zugangsdaten liegen in einem Secrets-Manager, nicht im Workflow. Logging zeigt, was das System entschieden hat, und ein Alarm meldet sich, wenn die Fehlerquote steigt oder die Kosten aus dem Rahmen laufen.

## Was das bringt

Änderungen dauern Minuten statt Tage, weil niemand Angst hat, etwas kaputt zu machen. Ausfälle werden bemerkt, bevor der Kunde anruft. Und die Lösung überlebt den Weggang der Person, die sie gebaut hat.

## Was ihr dafür braucht

- Einen Server oder eine Cloud-Umgebung, auf der die Workflows laufen dürfen (klärt der Hosting-Workshop)
- Jemanden aus eurer IT, der die Pipeline nach der Übergabe betreut
- Die Bereitschaft, den Laptop-Workflow einmal sauber neu aufzusetzen

## Warum dieses Paket

Betrieb ist kein Projekt mit Enddatum. In der Begleitung richten wir Pipeline und Monitoring einmal ein und halten sie dann gemeinsam mit eurer IT am Laufen, während weitere Workflows dazukommen. Das gehört bei mir dazu, nicht als Zusatz.
