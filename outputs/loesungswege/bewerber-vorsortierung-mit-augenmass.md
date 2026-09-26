# Lösungsweg: Bewerbungen vorsortieren, ohne die Regeln zu brechen

**Website:** `/loesungen/bewerber-vorsortierung-mit-augenmass` · **Paket:** Tagessatz (Workshop + Umsetzung) · **Status:** Anleitung fertig, rechtlich sensibel

## 1. Ausgangslage und Abgrenzung

Sichten von Bewerbungen kostet Tage. Wir bauen Zusammenfassung und Anforderungs-Spiegelung pro Bewerbung. Kein Ranking, kein Score, keine Ablehnung durch das System.

**Nicht Teil davon:** Jede Form von automatischer Bewertung, Reihung oder Filterung (das wäre EU AI Act Anhang III, Hochrisiko, mit Konformitätsbewertung, Registrierung und laufenden Pflichten), Videoanalyse, Persönlichkeitstests, Absagetexte automatisch senden.

## 2. Voraussetzungen beim Kunden

- Bewerbermanagement-System (Personio, Softgarden, SAP SuccessFactors) mit API oder strukturiertem Export, oder mindestens ein Bewerbungsordner pro Stelle
- Anforderungsprofil pro Stelle (Muss, Soll, Kann)
- Betriebsrat und Datenschutzbeauftragter von Anfang an am Tisch (Mitbestimmung nach § 87 BetrVG und § 95 BetrVG, Auswahlrichtlinien)
- Einwilligung oder Rechtsgrundlage: Verarbeitung im Bewerbungsverfahren (§ 26 BDSG), Information der Bewerber über KI-Unterstützung in der Datenschutzerklärung, AVV mit Anbieter, EU-Endpunkt, Löschfristen (6 Monate nach Absage)
- Ehrliche Antwort des Kunden: Will er sichten schneller machen (okay) oder Bewerber automatisch aussieben (nein)

## 3. Werkzeugentscheidung

Claude Sonnet mit striktem Prompt: Zusammenfassen und Spiegeln, keine Bewertung. Ausgabe als einheitliches Profil (Qualifikationen, Erfahrung, Lücken zum Profil, Fragen fürs Gespräch), alle Aussagen mit Verweis auf die Stelle in den Unterlagen. n8n für Anbindung an das Bewerbermanagement. Bewusst keine Zahl, kein Ampelsystem in der Ausgabe, auch nicht "passt gut", das ist bereits eine Wertung.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Workshop (1 Tag): Abgrenzung zum Hochrisiko-Bereich mit HR, Betriebsrat, Datenschutz. Was macht das System, was nicht. Ergebnis: Kurzbeschreibung, die in Datenschutzerklärung und Betriebsvereinbarung passt | 1 Tag |
| 2 | Anforderungsprofile für zwei Pilotstellen strukturieren (Muss/Soll/Kann) | 0,5 Tag |
| 3 | Prompt: Zusammenfassung mit Quellenverweis, Spiegelung gegen Profil als "belegt / nicht belegt / offen", Gesprächsfragen. Verbote: keine Adjektive über Personen, keine Empfehlung, keine Rangfolge, keine Rückschlüsse aus Foto, Name, Alter, Herkunft | 1,5 Tage |
| 4 | Test mit 30 anonymisierten Altbewerbungen, HR prüft: Vollständigkeit, Neutralität, Fehler | 1 Tag |
| 5 | Anbindung an Bewerbermanagement: Profil als Notiz am Bewerber, nicht als Feld, das sortierbar ist | 1 Tag |
| 6 | Dokumentation: Verarbeitungsverzeichnis-Eintrag, Kurzbeschreibung für Bewerber-Info, Protokollierung (welche Bewerbung wann verarbeitet), Löschroutine | 1 Tag |
| 7 | Pilot mit zwei Stellen, Nachbesprechung mit Betriebsrat | 0,5 Tag |

Gesamt: 6 bis 10 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Hier besonders:

- **Neutralitäts-Test als Regressionstest:** Testset enthält Bewerbungspaare, die sich nur in Name, Geschlecht, Alter oder Foto unterscheiden. Die Ausgabe muss identisch sein (bis auf den Namen). Abweichung = rot. Das ist der wichtigste Test in diesem Projekt.
- **Keine sortierbaren Felder:** Das Profil landet als Freitext-Notiz. Technisch verhindern, dass daraus ein Ranking gebaut wird.
- **Löschung:** Verarbeitungsprotokoll und Profile werden mit der Bewerbung gelöscht (6 Monate nach Absage), Löschjob monatlich, im Runbook.
- **Modellwechsel:** Jeder Wechsel des Modells oder Prompts löst den Neutralitäts-Test aus und wird dem Betriebsrat mitgeteilt (in der Vereinbarung festhalten).
- **Anbieter-Vertrag:** AVV, EU-Endpunkt, keine Nutzung zum Training, Aufbewahrung null. Bei Claude: Zero-Data-Retention-Zusatz anfragen.

## 6. Abnahme

- Neutralitäts-Test bestanden (identische Ausgaben für Paare)
- HR bewertet 90 Prozent der Profile als vollständig und korrekt gegen die Unterlagen
- Sichtzeit pro Bewerbung von 15 auf 5 Minuten (HR-Messung)
- Betriebsrat hat der Vereinbarung zugestimmt, Datenschutzerklärung ist angepasst
- Dokumentation liegt vor (Verarbeitungsverzeichnis, Kurzbeschreibung, Testprotokoll)

## 7. Typische Fehler

- **"Nur ein kleiner Score zur Orientierung."** Damit ist es Hochrisiko. Nein.
- **Betriebsrat spät informieren.** Dann wird das Projekt gestoppt, egal wie gut es ist.
- **Anbieter-Marketing glauben.** Viele Recruiting-Tools mit "KI-Matching" sind Hochrisiko-Systeme. Der Kunde muss das wissen, bevor er kauft.
- **Foto und Name im Prompt lassen.** Vor der Verarbeitung entfernen, wo möglich (Anonymisierungsschritt).

## 8. Aufwand und Preis

6 bis 10 Tage über den Tagessatz (€1.200 bis €1.800 pro Tag), weil Beratungsanteil hoch ist: Workshop, Abgrenzung, Dokumentation. Technischer Teil allein wäre ein kleiner Pilot.

## 9. Folge-Use-Cases

- EU-AI-Act-Einstufung (für alle anderen KI-Anwendungen im Haus)
- Stellenanzeigen und HR-Texte (unkritischer Einstieg)
- KI-Einführung im Team (Betriebsratsvorlage wiederverwenden)
