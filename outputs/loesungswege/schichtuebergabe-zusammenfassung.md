# Lösungsweg: Schichtübergabe, die nichts vergisst

**Website:** `/loesungen/schichtuebergabe-zusammenfassung` · **Paket:** KI-Pilot-Projekt · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Übergaben sind mündlich und lückenhaft. Wir bauen eine automatische Zusammenfassung zum Schichtende aus Schichtbuch, Störmeldungen und optional Produktionsdaten.

**Nicht Teil davon:** Produktionsplanung, OEE-Berechnung, Personaleinsatz, Ersatz der Übergabe (das Gespräch bleibt, wird nur kürzer und vollständiger), Bewertung einzelner Schichten oder Personen.

## 2. Voraussetzungen beim Kunden

- Schichtbuch digital (Excel, SharePoint, MES-Modul) oder handschriftlich als Foto (Handschrifterkennung funktioniert, aber lesbar muss es sein)
- Störmeldungen aus Instandhaltung (siehe Wartungsdokumentation) oder Maschinen-Log
- Optional: Produktionsdaten (Stückzahl, Ausschuss, Stillstand) aus MES oder Excel
- Ausgabeort: Display an der Linie, Teams-Kanal, Ausdruck
- Zwei Schichtleiter als Bewerter
- Betriebsrat: keine personenbezogene Auswertung, Zusammenfassung nennt Anlagen und Ereignisse, nicht Personen (außer als Ansprechpartner für offene Punkte, wenn gewünscht)

## 3. Werkzeugentscheidung

n8n mit Zeitplan-Trigger (Schichtende minus 15 Minuten), Claude Sonnet für Zusammenfassung mit festem Format. Fotoeingabe für handschriftliches Schichtbuch über Claude Bildverständnis. Ausgabe als HTML-Seite für das Display (n8n kann sie ausliefern) und als Teams-Nachricht.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Kickoff mit Schichtleitern: Was muss die nächste Schicht wissen (fünf Rubriken), Quellen, Ausgabeort | 0,5 Tag |
| 2 | Quellen anbinden: Schichtbuch lesen (Liste oder Foto), Störmeldungen, Produktionsdaten | 1,5 Tage |
| 3 | Zusammenfassung: festes Format (Störungen offen/erledigt, Qualität, Material, offene Aufträge, Hinweise), maximal halbe Seite, Ereignisse mit Uhrzeit und Anlage | 1 Tag |
| 4 | Ausgabe: Display-Seite, Teams, Archiv pro Schicht | 1 Tag |
| 5 | Rückkopplung: Schichtleiter kann per Klick "fehlt was" ergänzen, Ergänzung fließt in die nächste Zusammenfassung | 0,5 Tag |
| 6 | Testlauf zwei Wochen über alle Schichten, Format anpassen | 0,5 Tag |
| 7 | Deployment, Runbook, Übergabe | 0,5 Tag |

Gesamt: 4 bis 7 Tage.

## 5. Deployment und Betrieb

Gilt `_betriebsstandard.md`. Spezifisch hier:

- **Zeitkritisch:** Die Zusammenfassung muss vor Schichtende da sein. Retry bei Fehler, Fallback: "Zusammenfassung nicht verfügbar, bitte mündlich übergeben" auf dem Display, statt einer alten Zusammenfassung (die wäre gefährlicher).
- **Regressionstest:** 20 Schichten mit Referenz-Zusammenfassung, Prüfung: jedes Ereignis mit Priorität "Störung offen" muss in der Zusammenfassung stehen (Vollständigkeit 100 Prozent bei offenen Störungen, das ist das Sicherheitskriterium).
- **Display:** Eigene HTML-Seite, die sich alle 60 Sekunden aktualisiert, ausgeliefert vom n8n-Webhook oder statisch auf einem internen Webserver. Kein Login am Display, aber nur im Werksnetz erreichbar.
- **Foto-Eingabe:** Handschrifterkennung schwankt. Bei Sicherheitsgrad unter Schwelle wird der Originalauszug mit angezeigt.

## 6. Abnahme

- Zusammenfassung liegt zu 100 Prozent der Schichten rechtzeitig vor (Protokoll)
- Alle offenen Störungen des Testzeitraums enthalten
- Übergabegespräch von 10 auf 5 Minuten (Schichtleiter-Einschätzung)
- Nachfolgende Schicht bestätigt: "wusste, was los war"

## 7. Typische Fehler

- **Zu lang.** Eine halbe Seite. Wer mehr will, klickt ins Archiv.
- **Personen bewerten.** "Schicht A hatte viel Ausschuss" ist eine Auswertung über Menschen. Nur Anlagen und Ereignisse.
- **Alte Zusammenfassung bei Fehler zeigen.** Lieber "nicht verfügbar".
- **Display vergessen.** Teams liest in der Halle niemand. Der Bildschirm an der Linie ist der Ort.

## 8. Aufwand und Preis

4 bis 7 Tage. KI-Pilot-Projekt, €2.500 bis €3.500.

## 9. Folge-Use-Cases

- Wartungsdokumentation per Sprache (Quelle verbessern)
- Reporting-Kommentierung (Wochen- oder Monatsbericht Produktion nach gleichem Prinzip)
- Wissensdatenbank (Übergaben durchsuchbar)

## 10. Belege und Quellen

- Wiley Prozesstechnik, "Betriebsstörung Kommunikationsfehler": Übergabe Nacht→Früh als kritischster Moment, Schichtbuch/Überlappung/Checkliste.
- 451 Research (zitiert in chemietechnik.de): 40 % der Störfälle kurz nach Übergabe oder An-/Abfahren. Primärquelle nachschlagen, bevor die Zahl in ein Angebot geht.
- "25 bis 40 % Informationsverlust": nur Anbieterblogs, nicht als Fakt verwenden.
- Messgröße im Piloten: Vollständigkeit offener Störungen (100 %), Dauer Übergabegespräch.
