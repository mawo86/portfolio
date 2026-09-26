# Lösungsweg: Stammdaten in SAP bereinigen und sauber halten

**Website:** `/loesungen/sap-stammdatenqualitaet` · **Paket:** Laufende KI-Begleitung · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Dubletten, Lücken, Widersprüche in Kunden-, Lieferanten- und Materialstamm. Stufe eins: Analyse und Korrekturvorschläge. Stufe zwei: Prüfung beim Anlegen.

**Nicht Teil davon:** Automatische Änderung von Stammdaten (jede Korrektur wird von der Fachabteilung freigegeben), Migration auf S/4 oder MDG-Einführung, Data Governance als Organisationsprojekt (wir liefern den Anlass und die Werkzeuge, die Rollen legt der Kunde fest), Massenlöschung.

## 2. Voraussetzungen beim Kunden

- Exporte: Kundenstamm (KNA1/KNB1/KNVV oder Business Partner), Lieferantenstamm (LFA1/LFB1), Materialstamm (MARA/MAKT/MARC), je nach Fokus
- Verantwortliche pro Stammdatenart, die Korrekturen freigeben dürfen
- Regeln: Was ist eine Dublette (gleiche USt-ID, gleiche Adresse, ähnlicher Name), welche Felder sind Pflicht
- Anlageprozess heute: Wer legt an, über welche Transaktion oder App
- Datenschutz: Kundenstamm enthält bei Privatkunden personenbezogene Daten. AVV, EU-Endpunkt, Verarbeitung nur für Bereinigung (Zweckbindung). Bei reinen Firmenkunden unkritisch.

## 3. Werkzeugentscheidung

Stufe eins: Python-Skript (pandas, rapidfuzz für unscharfe Vergleiche) für deterministische Analyse. Claude Sonnet nur für die Fälle, die Regeln nicht entscheiden (ist "Müller GmbH, Hauptstr. 1" dasselbe wie "Mueller GmbH & Co KG, Hauptstraße 1a"?), mit Begründung. Ausgabe: Excel-Freigabelisten pro Verantwortlichem. Stufe zwei: n8n-Workflow am Anlageprozess (Trigger: neuer Datensatz per OData-Poll oder Change-Pointer), der gegen den Bestand prüft und bei Verdacht den Anleger und den Verantwortlichen benachrichtigt. Bei S/4 mit MDG: MDG-Regeln nutzen, unser Teil ist dann nur die unscharfe Prüfung.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff: Fokus (eine Stammdatenart zuerst, meist Kunden oder Lieferanten), Regeln, Verantwortliche | 0,5 Tag |
| 2 | Export und Profiling: Füllgrade, Formatfehler, Ausreißer, offensichtliche Dubletten (exakt) | 1 Tag |
| 3 | Unscharfe Dublettensuche: Name, Adresse, USt-ID, IBAN normalisiert, Ähnlichkeitsscore, Kandidatenpaare | 1,5 Tage |
| 4 | Modell-Prüfung der Grenzfälle: Paar plus Kontext, Ausgabe "Dublette / verschieden / unklar" mit Begründung | 1 Tag |
| 5 | Freigabelisten: Excel pro Verantwortlichem mit Vorschlag (zusammenführen, führender Satz, zu korrigierende Felder), Spalten für Entscheidung | 1 Tag |
| 6 | Korrekturdurchführung: Fachabteilung im SAP (oder Massenpflege durch Basis mit der freigegebenen Liste), Nachmessung | 1 Tag Begleitung |
| 7 | Stufe zwei: Anlage-Prüfung als Workflow, Benachrichtigung, Vorschlag "vorhandenen Satz nutzen" | 2 Tage |
| 8 | Runbook, monatlicher Qualitätsbericht (Füllgrade, neue Dubletten, Korrekturen) | 1 Tag |

Gesamt: 8 bis 12 Tage, dann laufend 0,5 Tag pro Monat.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Analyse-Skript versioniert** im Repo, mit Regeln als Konfigurationsdatei (`rules/dubletten.yaml`: Schwellen, Feldgewichte). Jeder Lauf schreibt einen Bericht mit Regelversion.
- **Kein Schreibzugriff des Skripts auf SAP.** Korrekturen macht der Mensch oder ein von der Basis freigegebener Massenlauf. Das ist bewusst so und bleibt so.
- **Regressionstest:** 100 bekannte Paare (Dublette ja/nein, von der Fachabteilung entschieden), Präzision mindestens 90 Prozent bei den Vorschlägen (lieber weniger Vorschläge als falsche Zusammenführungen).
- **Stufe-zwei-Workflow:** Lesezugriff auf Stamm, Benachrichtigung per Teams/Mail, Protokoll jedes Verdachts. Alarm bei Verdachtsquote über 20 Prozent der Neuanlagen (Regel zu scharf oder Anlageprozess kaputt).
- **Monatsbericht** aus dem Protokoll, an die Verantwortlichen und die Geschäftsführung: Das macht Stammdatenqualität sichtbar und hält sie oben.

## 6. Abnahme

- Dubletten in der Fokus-Stammdatenart um mindestens 80 Prozent reduziert (Nachmessung)
- Pflichtfeld-Füllgrad über 95 Prozent
- Anlage-Prüfung verhindert im ersten Monat nachweislich neue Dubletten (Protokoll)
- Verantwortliche und Prozess benannt, Monatsbericht läuft

## 7. Typische Fehler

- **Alle Stammdatenarten gleichzeitig.** Eine zuerst, sichtbarer Erfolg, dann die nächste.
- **Zusammenführen automatisieren.** Eine falsche Zusammenführung zerstört Historie. Immer Freigabe.
- **Ohne Verantwortliche starten.** Ohne Owner ist der Stamm in einem Jahr wieder schmutzig.
- **Stufe zwei vergessen.** Bereinigung ohne Anlageprüfung ist Sisyphos.

## 8. Aufwand und Preis

8 bis 12 Tage Aufbau, dann 0,5 Tag pro Monat. Laufende KI-Begleitung (ab €1.200/Monat), Aufbau alternativ als Pilot €4.000 bis €5.500 plus Begleitung.

## 9. Folge-Use-Cases

- Jede Automatisierung mit Stammdatenbezug: Auftragsprüfung, Rechnungseingang, Buchungsvorschläge, Angebotsentwurf
- Reporting-Kommentierung (Datenqualitäts-Kennzahlen im Monatsreport)
