# Lösungsweg: Angebotsentwurf aus der Kundenanfrage

**Website:** `/loesungen/angebotsentwurf-aus-anfrage` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig, noch nicht beim Kunden erprobt

## 1. Ausgangslage und Abgrenzung

Der Innendienst wandelt freie Kundenanfragen (E-Mail, PDF, Foto) in Angebote um. Wir automatisieren die Vorbereitung: Erkennen, Positionen zuordnen, Preise ziehen, Entwurf erzeugen.

**Nicht Teil davon:** Preisentscheidungen (Rabatte, Sonderkonditionen bleiben beim Menschen), Versand ohne Freigabe, Anfragen mit technischer Auslegung (Konstruktion), Neuanlage von Kunden oder Artikeln.

## 2. Voraussetzungen beim Kunden

- Zugriff auf Artikelstamm und Preislisten: SAP SD (Konditionen), oder Export als CSV täglich
- Anfrage-Postfach (z. B. anfragen@) mit Lesezugriff über Graph API oder IMAP
- 20 bis 30 alte Anfragen mit dem daraus entstandenen Angebot (Trainings- und Testfälle)
- Angebots-Vorlage (Word oder das ERP-Formular) mit Pflichtfeldern
- Ein Innendienst-Mitarbeiter als Bewerter für vier Wochen (etwa 20 Minuten am Tag)
- DSGVO: Anfragen enthalten Kontaktdaten. Auftragsverarbeitungsvertrag mit dem KI-Anbieter, EU-Endpunkt, kein Training. Betriebsrat informieren (keine Leistungskontrolle, nur Prozessunterstützung).

## 3. Werkzeugentscheidung

| Baustein | Wahl | Warum |
|---|---|---|
| Orchestrierung | n8n (Docker beim Kunden oder EU-Cloud) | Versionierbar, ERP-Anbindung per HTTP, kein Vendor-Lock |
| Modell | Claude (Sonnet für Extraktion, Opus nur für unklare Fälle) | Zuverlässige strukturierte Ausgabe, PDF- und Bildverständnis |
| ERP-Anbindung | SAP: OData-Service für Material und Konditionen, sonst CSV-Export | Kleinster gemeinsamer Nenner |
| Ausgabe | Angebot als Beleg im Test-Mandanten (SAP VA21) oder DOCX über Vorlage | Kunde soll im gewohnten System weiterarbeiten |

Ablehnen, wenn: Der Kunde weniger als 20 Anfragen pro Woche hat (Nutzen zu klein) oder Artikelstamm unter 60 Prozent gepflegt ist (dann zuerst Stammdaten).

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Prozess aufzeichnen, 30 Beispielfälle sammeln, Erfolgskriterien festlegen (Trefferquote Positionen, Durchlaufzeit) | 0,5 Tag |
| 2 | Datenzugriff: Service-User, OData oder Export einrichten, Test-Mandant klären | 1 Tag |
| 3 | Extraktion: Prompt für Kunde, Positionen, Mengen, Termin, Sonderwünsche als JSON. Mit 30 Fällen testen, Schwelle 90 Prozent | 1,5 Tage |
| 4 | Zuordnung: Freitext-Positionen auf Artikelnummern mappen (Stamm-Suche, Bestellhistorie des Kunden, Ähnlichkeitssuche). Unsichere Zuordnungen markieren | 2 Tage |
| 5 | Preisfindung: Konditionen aus ERP ziehen, keine eigenen Rabattentscheidungen | 1 Tag |
| 6 | Entwurf erzeugen: Beleg im Test-Mandanten oder DOCX, Anschreiben-Entwurf in Kundenton | 1 Tag |
| 7 | Prüfansicht: Teams-Karte oder E-Mail an den Innendienst mit Entwurf, Markierungen, Link. Ein Klick übernimmt | 1 Tag |
| 8 | Parallelbetrieb eine Woche in test, Bewertungstabelle, Prompt nachschärfen | 1 Tag verteilt |
| 9 | Deployment prod, Runbook, Übergabe | 1 Tag |

Gesamt: 8 bis 12 Tage über vier Wochen.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Zwei Postfächer:** test liest ein Kopie-Postfach (Weiterleitungsregel der letzten 20 Anfragen), prod das echte. Kein Workflow darf im test-Modus an echte Kunden senden: Versand-Node ist in test hart auf ein internes Postfach umgeleitet (Env-Var `MAIL_OVERRIDE`).
- **ERP-Mandanten:** Test schreibt in den Q-Mandanten, prod in P. Mandant kommt aus der Umgebung, nie aus dem Workflow.
- **Regressionstest:** 30 Fälle, Vergleich auf Positionen und Mengen. Preisfindung wird nicht getestet (kommt aus dem ERP), Zuordnung schon.
- **Rollback:** Prompt-Version im Entscheidungsprotokoll mitloggen, damit man sieht, ab wann Qualität gekippt ist.
- **Alarme:** Fehlerquote, Kosten, "keine Anfrage seit 24 Stunden an einem Werktag".

## 6. Abnahme

- Positionen und Mengen zu 90 Prozent richtig erkannt (gemessen an 50 Fällen im Parallelbetrieb)
- Durchlaufzeit Anfrage zu Entwurf unter 15 Minuten
- Innendienst-Bewertung "hilft mir" bei mindestens 80 Prozent der Fälle
- Kein Entwurf verlässt das Haus ohne Klick eines Menschen (Stichprobe im Protokoll)
- Übergabe: Runbook, Pipeline-Durchlauf mit IT, ein Rollback gemeinsam

## 7. Typische Fehler

- **Zu früh Preise automatisieren.** Rabattlogik ist politisch. Erst Positionen, Preise aus dem ERP, Sonderkonditionen bleiben Handarbeit.
- **Freitext-Zuordnung unterschätzen.** "Das Ding wie letztes Mal" ist häufig. Bestellhistorie des Kunden als erste Quelle nutzen, nicht den Gesamtstamm.
- **Anhänge ignorieren.** Die Hälfte der Anfragen steht im PDF, nicht im Mailtext. Anhänge immer mitverarbeiten.
- **Prüfansicht zu spät bauen.** Der Innendienst muss den Nutzen ab Woche zwei sehen, sonst kippt die Stimmung.

## 8. Aufwand und Preis

8 bis 12 Tage. KI-Pilot-Projekt, Preisspanne €3.500 bis €5.500 (obere Hälfte wegen ERP-Anbindung). Mit SAP-OData-Anbindung eher €5.000.

## 9. Folge-Use-Cases

- Auftragsprüfung SAP SD (Bestellung statt Anfrage, gleiche Extraktion)
- Lead-Qualifizierung (Anfragen bewerten, bevor sie zum Angebot werden)
- CRM-Pflege und Nachfassen (Angebot raus, Nachfass-Termin automatisch)
- Betrieb: Kosten- und Qualitätsmonitoring, sobald zwei Workflows laufen

## 10. Belege und Quellen

- Computerwoche 2024, "Zentis automatisiert Auftragserfassung mit KI-Hilfe": Bestellungen aus E-Mail/PDF, Stammdatenabgleich, Buchung per SAP-Schnittstelle, anfangs 60 % Nacharbeit. Der ehrlichste Referenzwert, den ich kenne. Im Gespräch nutzen, wenn der Kunde "100 % automatisch" erwartet.
- Fraunhofer IAIS, Themenseite "Angebotserstellung automatisieren mit KI": Mechanismus NLP plus Produktkatalog.
- Anthropic PDF support und Structured outputs (Doku): Grundlage für Extraktion mit festem Schema und Sicherheitswert.
- Zeitersparnis: kein externer Beleg mit Methodik. Im Angebot als Erfahrungswert formulieren, im Piloten messen (Durchlaufzeit Anfrage bis Entwurf, Anteil unveränderter Entwürfe).
