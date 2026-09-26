# Lösungsweg: Eingehende Anfragen bewerten und richtig verteilen

**Website:** `/loesungen/lead-qualifizierung-eingang` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Anfragen aus Website-Formular, Info-Postfach und Messe-Scans landen ungefiltert. Wir bauen Eingang, Anreicherung, Bewertung, Verteilung und Erstantwort-Entwurf.

**Nicht Teil davon:** Automatische Absagen, Scoring von Personen (nur Unternehmen und Anliegen), Outbound-Recherche über Kaufdatenbanken, CRM-Migration.

## 2. Voraussetzungen beim Kunden

- Zugriff auf Formular-Backend (Formspree, HubSpot Forms, eigenes) und Postfach
- CRM mit API (HubSpot, Pipedrive, Dynamics, SAP CX) oder mindestens Import
- Kriterien: Branche, Größe, Region, Thema, Dringlichkeit (drei bis fünf Fragen, mit dem Vertriebsleiter festlegen)
- Zuständigkeitsmatrix: Wer bekommt was (Region, Produkt, Größe)
- 50 alte Anfragen mit dem tatsächlichen Ausgang (Auftrag, kein Auftrag, Spam)
- DSGVO: Anreicherung nur aus öffentlichen Quellen (Website, Handelsregister-Basisdaten, Impressum). Keine Personenprofile. Datenschutzhinweis im Formular anpassen.

## 3. Werkzeugentscheidung

n8n als Orchestrierung, Claude Sonnet für Bewertung und Antwortentwurf, HTTP-Node für CRM. Anreicherung über die Firmen-Website (Fetch + Zusammenfassung) statt teurer Datenanbieter. Für Kunden ohne API-fähiges CRM: Ergebnis als Excel-Zeile in SharePoint plus Teams-Nachricht.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Kriterien und Zuständigkeiten festhalten, 50 Altfälle als Testset labeln | 0,5 Tag |
| 2 | Eingänge anbinden: Formular-Webhook, Postfach-Trigger, Messe-Scan-Ordner | 1 Tag |
| 3 | Anreicherung: Domain aus E-Mail, Website abrufen, Kurzprofil (Branche, Größe, Produkte) erzeugen | 1 Tag |
| 4 | Bewertung: Prompt mit Kriterien, Ausgabe als JSON (Passung 1 bis 5, Dringlichkeit, Thema, Begründung in einem Satz). Test gegen 50 Fälle | 1 Tag |
| 5 | Verteilung: Zuständigkeitsmatrix als Tabelle, Teams-Nachricht oder CRM-Owner setzen | 0,5 Tag |
| 6 | Erstantwort-Entwurf: nur für Passung 4 bis 5, in Kundenton, als Entwurf im Postfach des Zuständigen (nicht senden) | 1 Tag |
| 7 | CRM-Anlage: Kontakt, Firma, Deal mit Bewertung und Kurzprofil | 1 Tag |
| 8 | Parallelbetrieb eine Woche, Bewertung durch Vertrieb | 0,5 Tag |
| 9 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 5 bis 8 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Webhook-URLs** unterscheiden sich zwischen test und prod. Das Formular zeigt in test auf den Test-Webhook (eigenes Testformular auf einer nicht verlinkten Seite).
- **CRM-Sandbox:** HubSpot und Dynamics haben Sandboxes, Pipedrive nicht (dort Test-Pipeline mit Präfix "TEST-"). Nie in der Prod-Pipeline testen.
- **Regressionstest** auf Passung: Abweichung um mehr als eine Stufe zählt als Fehler. Schwelle 85 Prozent, weil Bewertung subjektiver ist als Extraktion.
- **Alarm:** Kein Eingang seit 48 Stunden (Formular kaputt ist häufiger als man denkt).

## 6. Abnahme

- Passung stimmt in 85 Prozent der Fälle mit dem Vertriebsleiter überein
- Erstantwort-Entwurf liegt innerhalb von 10 Minuten nach Eingang im Postfach
- Kein Fall wurde falsch als Spam einsortiert (Stichprobe aller Spam-Markierungen der Testwoche)
- CRM-Datensatz vollständig (Firma, Kontakt, Quelle, Bewertung)

## 7. Typische Fehler

- **Zu viele Kriterien.** Fünf reichen. Bei zehn wird die Bewertung unschärfer, nicht schärfer.
- **Spam-Filter zu scharf.** Lieber eine Spam-Mail zu viel beim Menschen als eine echte Anfrage im Papierkorb. Spam nie automatisch löschen, nur in einen Ordner.
- **Antwortentwurf automatisch senden.** Nie. Der erste Kontakt entscheidet, ein Mensch klickt.
- **Anreicherung überdrehen.** Website reicht. Wer LinkedIn-Profile zieht, hat ein Datenschutzproblem.

## 8. Aufwand und Preis

5 bis 8 Tage. KI-Pilot-Projekt, €2.500 bis €4.000. Guter Einstiegspilot, weil kein ERP nötig.

## 9. Folge-Use-Cases

- Angebotsentwurf aus der Anfrage (der nächste Schritt im selben Prozess)
- CRM-Pflege und Nachfassen
- Ticket-Klassifikation im Service (gleiche Technik, anderes Postfach)
