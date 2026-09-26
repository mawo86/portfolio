# Lösungswege: Übersicht

**Zweck:** Verknüpft jeden Use-Case der Website (`/loesungen/<slug>`) mit der internen Schritt-für-Schritt-Anleitung in diesem Ordner. Die Website zeigt Problem und Lösung, die Anleitung zeigt den Weg. Anleitungen gehen nie ins `website/`-Verzeichnis.

**Gemeinsame Grundlage:** `_betriebsstandard.md` (Repo-Struktur, Umgebungen, Tests, Pipeline, Secrets, Monitoring, Rollback, Übergabe). Jede Anleitung verweist in Abschnitt 5 darauf.

**Status-Werte:** Idee · Anleitung fertig · beim Kunden erprobt. Stand 2026-09-26 ist alles "Anleitung fertig", noch nichts beim Kunden erprobt. Nach dem ersten echten Einsatz hier den Status und in der Anleitung die Erkenntnisse nachtragen.

**Struktur jeder Anleitung (9 Abschnitte):** Ausgangslage und Abgrenzung · Voraussetzungen beim Kunden · Werkzeugentscheidung · Umsetzung in Schritten mit Zeit · Deployment und Betrieb · Abnahme · Typische Fehler · Aufwand und Preis · Folge-Use-Cases.

## Vertrieb

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Angebotsentwurf aus der Kundenanfrage | `angebotsentwurf-aus-anfrage` | [`angebotsentwurf-aus-anfrage.md`](angebotsentwurf-aus-anfrage.md) | KI-Pilot-Projekt | Anleitung fertig |
| Eingehende Anfragen bewerten und richtig verteilen | `lead-qualifizierung-eingang` | [`lead-qualifizierung-eingang.md`](lead-qualifizierung-eingang.md) | KI-Pilot-Projekt | Anleitung fertig |
| CRM-Pflege und Nachfassen ohne Nachdenken | `crm-pflege-und-nachfassen` | [`crm-pflege-und-nachfassen.md`](crm-pflege-und-nachfassen.md) | KI-Pilot-Projekt | Anleitung fertig |

## Kundenservice

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Interne Wissensdatenbank, die ihre Quellen nennt | `wissensdatenbank-mit-quellenbeleg` | [`wissensdatenbank-mit-quellenbeleg.md`](wissensdatenbank-mit-quellenbeleg.md) | KI-Pilot-Projekt | Anleitung fertig |
| Service-Anfragen automatisch sortieren und priorisieren | `ticket-klassifikation-kundenservice` | [`ticket-klassifikation-kundenservice.md`](ticket-klassifikation-kundenservice.md) | KI-Pilot-Projekt | Anleitung fertig |
| Antwortentwürfe für den Kundenservice, die zu euren Regeln passen | `antwortentwuerfe-mit-wissensbasis` | [`antwortentwuerfe-mit-wissensbasis.md`](antwortentwuerfe-mit-wissensbasis.md) | KI-Pilot-Projekt | Anleitung fertig |

## Backoffice & Buchhaltung

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Eingangsrechnungen erkennen, prüfen, vorerfassen | `rechnungseingang-vorerfassung` | [`rechnungseingang-vorerfassung.md`](rechnungseingang-vorerfassung.md) | KI-Pilot-Projekt | Anleitung fertig |
| Monatsreport mit Kommentar statt nackter Zahlen | `reporting-kommentierung` | [`reporting-kommentierung.md`](reporting-kommentierung.md) | KI-Pilot-Projekt | Anleitung fertig |
| Mahnwesen mit Fingerspitzengefühl statt Serienbrief | `mahnwesen-vorschlaege` | [`mahnwesen-vorschlaege.md`](mahnwesen-vorschlaege.md) | KI-Pilot-Projekt | Anleitung fertig |

## HR

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Stellenanzeigen und HR-Texte in einer Stunde statt einem Tag | `stellenanzeigen-und-hr-texte` | [`stellenanzeigen-und-hr-texte.md`](stellenanzeigen-und-hr-texte.md) | KI-Readiness-Check | Anleitung fertig |
| Bewerbungen vorsortieren, ohne die Regeln zu brechen | `bewerber-vorsortierung-mit-augenmass` | [`bewerber-vorsortierung-mit-augenmass.md`](bewerber-vorsortierung-mit-augenmass.md) | Tagessatz | Anleitung fertig |

## Einkauf & Logistik

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Auftragsbestätigungen automatisch mit der Bestellung abgleichen | `auftragsbestaetigung-abgleich` | [`auftragsbestaetigung-abgleich.md`](auftragsbestaetigung-abgleich.md) | KI-Pilot-Projekt | Anleitung fertig |
| Lieferantenangebote vergleichen, ohne Excel-Nachmittag | `lieferantenanfragen-vergleichen` | [`lieferantenanfragen-vergleichen.md`](lieferantenanfragen-vergleichen.md) | KI-Pilot-Projekt | Anleitung fertig |

## Produktion & Technik

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Wartungs- und Störungsberichte per Sprache statt Formular | `wartungsdokumentation-per-sprache` | [`wartungsdokumentation-per-sprache.md`](wartungsdokumentation-per-sprache.md) | KI-Pilot-Projekt | Anleitung fertig |
| Schichtübergabe, die nichts vergisst | `schichtuebergabe-zusammenfassung` | [`schichtuebergabe-zusammenfassung.md`](schichtuebergabe-zusammenfassung.md) | KI-Pilot-Projekt | Anleitung fertig |

## Geschäftsführung

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Besprechungen, die in Aufgaben enden statt in Protokollen | `meeting-zusammenfassung-und-aufgaben` | [`meeting-zusammenfassung-und-aufgaben.md`](meeting-zusammenfassung-und-aufgaben.md) | KI-Readiness-Check | Anleitung fertig |
| Entscheidungsvorlagen: eine Seite statt vierzig Folien | `entscheidungsvorlagen-kurzfassung` | [`entscheidungsvorlagen-kurzfassung.md`](entscheidungsvorlagen-kurzfassung.md) | Tagessatz | Anleitung fertig |

## SAP-Prozesse

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Kundenaufträge vor der Anlage in SAP SD prüfen | `sap-sd-auftragspruefung` | [`sap-sd-auftragspruefung.md`](sap-sd-auftragspruefung.md) | KI-Pilot-Projekt | Anleitung fertig |
| Buchungsvorschläge für SAP FI/CO aus Belegen und Mails | `sap-fico-buchungsvorschlaege` | [`sap-fico-buchungsvorschlaege.md`](sap-fico-buchungsvorschlaege.md) | KI-Pilot-Projekt | Anleitung fertig |
| Stammdaten in SAP bereinigen und sauber halten | `sap-stammdatenqualitaet` | [`sap-stammdatenqualitaet.md`](sap-stammdatenqualitaet.md) | Laufende KI-Begleitung | Anleitung fertig |

## Recht & Organisation

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| DSGVO-Check: Welche Daten dürfen in welches KI-Werkzeug? | `dsgvo-check-fuer-ki-einsatz` | [`dsgvo-check-fuer-ki-einsatz.md`](dsgvo-check-fuer-ki-einsatz.md) | KI-Readiness-Check | Anleitung fertig |
| KI im Team einführen, ohne Angst und ohne Widerstand | `ki-einfuehrung-team-und-betriebsrat` | [`ki-einfuehrung-team-und-betriebsrat.md`](ki-einfuehrung-team-und-betriebsrat.md) | Laufende KI-Begleitung | Anleitung fertig |
| EU AI Act: Wo stehen eure KI-Anwendungen, was müsst ihr tun? | `eu-ai-act-einstufung` | [`eu-ai-act-einstufung.md`](eu-ai-act-einstufung.md) | Tagessatz | Anleitung fertig |

## Technik & Betrieb

| Use-Case | Website-Slug | Anleitung | Paket | Status |
|---|---|---|---|---|
| Vom Prototyp zum Betrieb: Deployment und CI/CD für KI-Workflows | `vom-prototyp-zum-betrieb` | [`vom-prototyp-zum-betrieb.md`](vom-prototyp-zum-betrieb.md) | Laufende KI-Begleitung | Anleitung fertig |
| Cloud, EU-Cloud oder eigener Server: Wo läuft eure KI? | `hosting-entscheidung-cloud-eu-onprem` | [`hosting-entscheidung-cloud-eu-onprem.md`](hosting-entscheidung-cloud-eu-onprem.md) | Tagessatz | Anleitung fertig |
| KI-Kosten und Antwortqualität im Blick behalten | `kosten-und-qualitaetsmonitoring` | [`kosten-und-qualitaetsmonitoring.md`](kosten-und-qualitaetsmonitoring.md) | Laufende KI-Begleitung | Anleitung fertig |

## Verteilung nach Paket

| Paket | Anzahl |
|---|---|
| KI-Pilot-Projekt | 15 |
| Tagessatz | 4 |
| Laufende KI-Begleitung | 4 |
| KI-Readiness-Check | 3 |

## Pflege

- Neuer Use-Case: zuerst Website-Eintrag in `website/src/content/loesungen/<slug>.md` (Schema in `src/content/config.ts`), dann Anleitung hier mit gleichem Slug, dann diese Tabelle.
- Nach jedem Kundeneinsatz: Status hier auf "beim Kunden erprobt", in der Anleitung Abschnitt 7 (Typische Fehler) um das Gelernte ergänzen, Zeitschätzungen in Abschnitt 4 gegen die Realität prüfen.
- Preise in Abschnitt 8 folgen `outputs/consulting-angebot.md`. Ändern sich die Pakete, hier und dort anpassen.
- Konsistenzprüfung (Slugs Website vs. Anleitungen): das Python-Snippet, das diese Datei erzeugt hat, steht in der Commit-Historie; einfacher: `ls website/src/content/loesungen | sed 's/.md//' | sort` gegen `ls outputs/loesungswege | grep -v '^_' | grep -v INDEX | sed 's/.md//' | sort` mit `diff`.

## Beleg-Status (Recherche 2026-09-26)

Grundlage: `_belege.md`. **belegt** = externer Beleg für Mechanismus und mindestens eine Zahl · **teilweise** = Mechanismus extern belegt (Doku, Fallstudie), Zeitersparnis Erfahrungswert · **Einschätzung** = kein externer Beleg.

| Status | Lösungen |
|---|---|
| belegt (15) | rechnungseingang-vorerfassung, mahnwesen-vorschlaege, wissensdatenbank-mit-quellenbeleg, lead-qualifizierung-eingang, crm-pflege-und-nachfassen, antwortentwuerfe-mit-wissensbasis, eu-ai-act-einstufung, dsgvo-check-fuer-ki-einsatz, bewerber-vorsortierung-mit-augenmass, ki-einfuehrung-team-und-betriebsrat, hosting-entscheidung-cloud-eu-onprem, vom-prototyp-zum-betrieb, kosten-und-qualitaetsmonitoring, meeting-zusammenfassung-und-aufgaben, wartungsdokumentation-per-sprache |
| teilweise (11) | angebotsentwurf-aus-anfrage, sap-sd-auftragspruefung, ticket-klassifikation-kundenservice, sap-fico-buchungsvorschlaege, sap-stammdatenqualitaet, auftragsbestaetigung-abgleich, lieferantenanfragen-vergleichen, reporting-kommentierung, stellenanzeigen-und-hr-texte, schichtuebergabe-zusammenfassung, entscheidungsvorlagen-kurzfassung |
| Einschätzung (0) | keine |

Alle Zeitersparnis-Angaben auf der Website sind als Erfahrungswert gekennzeichnet, sofern keine externe Zahl existiert. Jede Anleitung hat einen Abschnitt 10 mit den zwei bis fünf wichtigsten Quellen und der Messgröße für den Piloten.
