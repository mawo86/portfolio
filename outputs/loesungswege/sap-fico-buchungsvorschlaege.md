# Lösungsweg: Buchungsvorschläge für SAP FI/CO

**Website:** `/loesungen/sap-fico-buchungsvorschlaege` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Kontierung (Sachkonto, Kostenstelle/Auftrag, Steuerkennzeichen) ist Erfahrungswissen. Wir bauen einen Vorschlag pro Beleg auf Basis der eigenen Buchungshistorie, angezeigt in der Vorerfassung mit Begründung und Sicherheitsgrad.

**Nicht Teil davon:** Buchen ohne Freigabe, Bestellbezogene Rechnungen (die kontiert die Bestellung, siehe Rechnungseingang), Anlagenbuchhaltung, Konzernkonsolidierung, Steuerberatung (Steuerkennzeichen werden aus Historie vorgeschlagen, Prüfung bleibt beim Fachbereich).

## 2. Voraussetzungen beim Kunden

- SAP FI (ECC oder S/4), Vorerfassung im Einsatz (FV60 oder Fiori-App)
- Export der Buchungshistorie zwei Jahre: BKPF/BSEG oder Auswertung mit Lieferant, Belegtext, Betrag, Sachkonto, Kostenstelle, Steuerkennzeichen. Personenbezogene Daten (Reisekosten) anonymisieren
- Kontenplan und Kostenstellenhierarchie mit Klartextbezeichnungen
- Belegeingang digital (siehe Rechnungseingang) oder zumindest PDF
- Erfahrene Buchhalterin als Bewerterin
- Wirtschaftsprüfer informieren: Vorschlag ändert nichts an der Verantwortung, aber am Prozess. Dokumentation für die Prüfung (wer hat freigegeben) bleibt im SAP-Beleg.

## 3. Werkzeugentscheidung

Zwei Stufen: Erstens Ähnlichkeitssuche über die Historie (gleicher Lieferant, ähnlicher Belegtext, ähnlicher Betrag) als deterministischer Kandidatenfilter. Zweitens Claude Sonnet, der aus Beleg und Kandidaten den Vorschlag mit Begründung formuliert. Das Modell wählt aus Kandidaten, es erfindet keine Konten. Anbindung: n8n mit OData (API_SUPPLIERINVOICE_PROCESS_SRV oder Journal Entry API für Vorerfassung) oder, wenn keine API freigegeben wird, Vorschlag als Notiz im Beleg-Workflow (SAP Business Workplace) oder als Excel für die Buchhaltung.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Belegarten für den Pilot (z. B. Lieferantenrechnungen ohne Bestellbezug), Historie-Export, Erfolgskriterien | 0,5 Tag |
| 2 | Historie aufbereiten: Bereinigen, anonymisieren, Kandidaten-Index (Lieferant, Textmuster, Betragsklassen) | 1,5 Tage |
| 3 | Kandidatenfilter: Für einen Beleg die 5 wahrscheinlichsten Kontierungen aus der Historie mit Häufigkeit | 1,5 Tage |
| 4 | Vorschlags-Prompt: Beleginhalt plus Kandidaten, Ausgabe Konto, Kostenstelle/Auftrag, Steuerkennzeichen, Begründung, Sicherheitsgrad. Bei Kandidatenmangel: "kein Vorschlag" | 1,5 Tage |
| 5 | Test gegen 200 Historie-Belege (Rückwärtstest: hätte das System die tatsächliche Kontierung getroffen?) | 1 Tag |
| 6 | Anbindung Vorerfassung: Vorschlag in Beleg schreiben (Status vorerfasst) oder Excel-Liste | 2 Tage |
| 7 | Parallelbetrieb drei Wochen, Fehlerklassen analysieren (neue Lieferanten, Sammelrechnungen) | 1,5 Tage verteilt |
| 8 | Deployment, Runbook, Übergabe, Dokumentation für Wirtschaftsprüfer | 1 Tag |

Gesamt: 10 bis 15 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Historie-Index versioniert:** Der Kandidatenindex wird monatlich aus den neuen Buchungen aktualisiert (das System lernt aus den Freigaben). Jede Indexversion ist datiert, Rollback auf die vorige möglich.
- **Regressionstest:** 200 Belege Rückwärtstest, Trefferquote Sachkonto 85 Prozent, Kostenstelle 80 Prozent, Steuerkennzeichen 95 Prozent. Bei Unterschreitung nach Indexupdate: Update zurückrollen.
- **Vier-Augen bleibt technisch:** Der Workflow hat keine Buchungsberechtigung, nur Vorerfassung. Berechtigungsobjekt F_BKPF_BUK ohne Aktivität 01 Buchen.
- **Mandanten:** Q mit kopierten Belegen für test, P für prod. Historie-Export nur aus P, anonymisiert.
- **Alarm:** Trefferquote im laufenden Betrieb (Anteil unveränderter Freigaben) fällt unter 75 Prozent über eine Woche.

## 6. Abnahme

- Rückwärtstest: 85 / 80 / 95 Prozent
- Im Parallelbetrieb werden 75 Prozent der Vorschläge unverändert freigegeben
- Erfassungszeit pro Beleg halbiert (Messung Buchhaltung)
- Umbuchungen im Monatsabschluss nach drei Monaten gesunken (Baseline aus Vorjahr)
- Wirtschaftsprüfer hat Prozessbeschreibung erhalten

## 7. Typische Fehler

- **Modell frei kontieren lassen.** Es erfindet dann plausible, falsche Konten. Nur aus Kandidaten wählen.
- **Historie mit Fehlern trainieren.** Alte Fehlbuchungen werden zu Vorschlägen. Historie mit der Buchhaltung bereinigen (Stornos raus, bekannte Fehler markieren).
- **Steuerkennzeichen als KI-Thema behandeln.** Steuer ist regelbasiert (Land, Lieferantentyp, Leistungsart). Regeln vor Modell.
- **Neue Lieferanten ohne Fallback.** Ohne Historie kein Vorschlag, das ist richtig. Nicht raten.

## 8. Aufwand und Preis

10 bis 15 Tage. KI-Pilot-Projekt am oberen Ende, €5.000 bis €5.500, mit mehreren Belegarten Übergang in Begleitung.

## 9. Folge-Use-Cases

- Rechnungseingang (bestellbezogene Rechnungen, Abgleich statt Kontierung)
- Stammdatenqualität (Lieferantenstamm sauber = bessere Kandidaten)
- Reporting-Kommentierung

## 10. Belege und Quellen

- SAP Developers Tutorial "Invoice Object Recommendation Business Blueprint" und SAP Blog "Intelligent Accounts Payable with SAP S/4HANA Cloud" (2021): SAP bietet den Mechanismus selbst an (Sachkonto, Kostenobjekt, CO-PA aus Historie). Im Gespräch: Wenn der Kunde S/4HANA Cloud mit dieser Funktion hat, sie zuerst prüfen, bevor wir bauen.
- api.sap.com API_SUPPLIERINVOICE_PROCESS_SRV: Vorerfassung per API.
- Zeitersparnis: kein Beleg. Messgrößen: Anteil unverändert freigegebener Vorschläge, Umbuchungen im Abschluss vorher/nachher.
