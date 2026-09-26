# Lösungsweg: Stellenanzeigen und HR-Texte in einer Stunde

**Website:** `/loesungen/stellenanzeigen-und-hr-texte` · **Paket:** KI-Readiness-Check (Einrichtung als Tagessatz oder Eigenleistung) · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

HR schreibt Stellenanzeigen, Zeugnisse, Onboarding-Mails von Hand. Wir richten ein Werkzeug mit geprüften Vorlagen ein. Kein Workflow, keine Integration: ein sauber konfigurierter Assistent plus Einweisung.

**Nicht Teil davon:** Bewerber-Daten verarbeiten (eigener Use-Case mit AI-Act-Fragen), Veröffentlichung auf Jobportalen, Zeugnis-Rechtsprüfung (Vorlage mit Zeugnissprache, Endkontrolle bleibt HR), Betriebsvereinbarungen inhaltlich.

## 2. Voraussetzungen beim Kunden

- KI-Werkzeug mit Business-Vertrag und EU-Datenverarbeitung (Claude Team/Enterprise, ChatGPT Team/Enterprise, Copilot M365). Kein Privatkonto.
- Fünf gute Texte pro Textart als Vorbild
- Pflichtbausteine: AGG-konforme Formulierungen, Benefits-Liste, Datenschutzhinweis für Bewerber, Zeugnis-Formulierungsstandards des Hauses
- Zwei HR-Mitarbeitende für eine zweistündige Einweisung
- Datenschutz: In Stellenanzeigen keine personenbezogenen Daten. Bei Zeugnissen schon: Name und Beurteilung. Deshalb nur mit Business-Vertrag (AVV, kein Training), und der Mitarbeiter-Name wird erst nach der Generierung eingesetzt (Platzhalter im Prompt).

## 3. Werkzeugentscheidung

Das Werkzeug, das der Kunde ohnehin hat oder als erstes einführt. Reihenfolge meiner Empfehlung: Claude Team (Projekte mit Wissensbasis und Anweisungen), dann Copilot (wenn M365 E3/E5 vorhanden, Anzeigen direkt in Word), dann ChatGPT Team. Vorlagen als "Projekt" oder "GPT" mit Systemanweisung, Pflichtbausteinen und Beispieltexten.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Textarten priorisieren (Stellenanzeige zuerst), Vorbilder und Pflichtbausteine sammeln | 0,5 Tag |
| 2 | Pro Textart eine Anweisung schreiben: Rolle, Struktur, Ton, Pflichtbausteine, Verbote (keine Superlative, keine diskriminierenden Formulierungen, keine Versprechen), Ausgabeformat | 1 Tag |
| 3 | Testen mit fünf echten Fällen pro Textart, mit HR bewerten, Anweisung schärfen | 0,5 Tag |
| 4 | Im Werkzeug einrichten (Projekt oder GPT), Wissensdateien hochladen (Benefits, Standards), Zugriff für HR-Team | 0,5 Tag |
| 5 | Einweisung zwei Stunden: Bedienung, Grenzen, Datenschutzregeln (was darf rein), Endkontrolle | 0,5 Tag |
| 6 | Einseiter "So nutzen wir das" für HR, Nachfass-Termin nach vier Wochen | 0,5 Tag |

Gesamt: 2 bis 4 Tage.

## 5. Deployment und Betrieb

Hier gibt es keine Pipeline, aber trotzdem Betrieb:

- **Anweisungen versioniert:** Die Systemanweisungen liegen als Markdown im Kunden-Repo oder in einem SharePoint-Ordner mit Versionierung. Änderungen werden datiert. Sonst weiß nach einem Jahr niemand, warum der Assistent so schreibt.
- **Verantwortlicher:** Eine HR-Person pflegt Vorlagen und Benefits-Liste, Termin quartalsweise.
- **Qualitätsstichprobe:** Monatlich fünf erzeugte Texte gegen die AGG-Checkliste prüfen (das ist keine KI-Prüfung, das ist Arbeitsrecht).
- **Zugriff:** Business-Konten, SSO, Offboarding im Prozess (wer HR verlässt, verliert den Zugang).
- **Kosten:** Feste Lizenz pro Nutzer, kein Token-Risiko. Budget-Alarm entfällt.

## 6. Abnahme

- Stellenanzeige aus Stichworten in unter 15 Minuten inklusive Endkontrolle
- Fünf von fünf Testtexten von HR als "veröffentlichbar nach kleiner Korrektur" bewertet
- AGG-Checkliste bei allen Testtexten bestanden
- HR-Team nutzt das Werkzeug nach vier Wochen für mindestens 80 Prozent der neuen Anzeigen (Nachfass-Termin)

## 7. Typische Fehler

- **Privatkonten dulden.** Dann landen Zeugnisdaten in einem Consumer-Dienst. Business-Vertrag ist Bedingung.
- **Superlative durchlassen.** "Marktführer", "einzigartig", "dynamisches Team" wirken austauschbar. Verbotsliste in die Anweisung.
- **Zeugnisse komplett generieren lassen.** Zeugnissprache ist Rechtssprache. Vorlage mit Bausteinen, HR entscheidet die Note.
- **Keine Einweisung.** Ohne zwei Stunden Schulung wird das Werkzeug wie eine Suchmaschine benutzt und enttäuscht.

## 8. Aufwand und Preis

2 bis 4 Tage. Im Readiness-Check wird entschieden, ob das der erste Schritt ist. Einrichtung über Tagessatz (€1.200 bis €1.800 pro Tag, meist zwei Tage) oder als Anleitung zur Eigenleistung.

## 9. Folge-Use-Cases

- Bewerber-Vorsortierung (der nächste HR-Schritt, mit AI-Act-Abgrenzung)
- Meeting-Zusammenfassungen (gleiche Werkzeugklasse, andere Abteilung)
- KI-Einführung im Team (Schulungsformat wiederverwenden)
