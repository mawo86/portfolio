# Lösungsweg: EU AI Act Einstufung und Pflichten

**Website:** `/loesungen/eu-ai-act-einstufung` · **Paket:** Tagessatz · **Status:** Anleitung fertig

## 1. Ausgangslage und Abgrenzung

Niemand im Haus weiß, welche KI-Anwendungen unter welche Risikoklasse fallen. Wir erstellen ein KI-Inventar, stufen ein, benennen Pflichten und Fristen, prüfen bei Hochrisiko-Kandidaten Umgestaltungsoptionen.

**Nicht Teil davon:** Rechtsverbindliche Einstufung (bereite ich vor, Anwalt bestätigt Grenzfälle), Konformitätsbewertung für Hochrisiko-Systeme (das ist ein eigenes, großes Projekt mit benannter Stelle), Anbieterpflichten (der Kunde ist meist Betreiber, nicht Anbieter; wer eigene Modelle trainiert, hat mehr Pflichten, das kläre ich, mache es aber nicht), Produkthaftung.

## 2. Voraussetzungen beim Kunden

- Liste aller KI-Werkzeuge und -Projekte: gekauft, gebaut, geplant, heimlich (Umfrage wie beim DSGVO-Check)
- Geschäftsführung, IT-Leitung, Datenschutz für einen Workshop-Tag; HR und Vertrieb für ihre Anwendungen
- Anbieterunterlagen für gekaufte Werkzeuge (was sagt der Anbieter zur Einstufung, Transparenzinformationen)
- Bereitschaft, eine Anwendung notfalls umzugestalten oder zu stoppen

## 3. Werkzeugentscheidung

Kein technisches Werkzeug. Arbeitsmittel: Inventar-Vorlage (Excel oder SharePoint-Liste) mit Feldern Anwendung, Zweck, Anbieter/eigen, Rolle (Betreiber/Anbieter), Risikoklasse, Begründung, Pflichten, Frist, Verantwortlicher, Status. Einstufungsraster aus dem AI Act (verbotene Praktiken, Anhang III Hochrisiko, Transparenzpflichten für Chatbots und generierte Inhalte, minimales Risiko). Aktuelle Fristen und Leitlinien vor jedem Workshop prüfen, die Umsetzungsakte ändern sich.

## 4. Umsetzung

| Schritt | Inhalt | Zeit |
|---|---|---|
| 1 | Vorbereitung: Liste sichten, Anbieterunterlagen anfordern, Raster auf aktuellen Stand bringen | 0,5 Tag |
| 2 | Workshop-Tag: pro Anwendung Zweck und Rolle klären, einstufen, begründen. Hochrisiko-Kandidaten (typisch: Bewerberauswahl, Mitarbeiterbewertung, Kreditwürdigkeit, Sicherheitskomponenten) gesondert besprechen | 1 Tag |
| 3 | Umgestaltung prüfen: Kann eine Hochrisiko-Anwendung so verändert werden, dass sie herausfällt (Assistenz statt Entscheidung, kein Ranking, Mensch entscheidet nachweisbar)? Pro Kandidat eine Empfehlung | 0,5 Tag |
| 4 | Pflichten pro Anwendung: Transparenz (Nutzer informieren, dass KI im Spiel ist; generierte Inhalte kennzeichnen), Schulungspflicht (KI-Kompetenz der Mitarbeitenden, gilt bereits), Dokumentation, menschliche Aufsicht, Protokollierung bei Hochrisiko | 0,5 Tag |
| 5 | Inventar fertigstellen, Grenzfälle für den Anwalt markieren, Maßnahmenplan mit Fristen und Verantwortlichen | 0,5 Tag |
| 6 | Ergebnisvorstellung Geschäftsführung (60 Minuten), Übergabe an einen Verantwortlichen für die Pflege | 0,25 Tag |

Gesamt: 2 bis 4 Tage.

## 5. Deployment und Betrieb

Kein technischer Betrieb, aber Pflegeprozess:

- **Inventar als lebende Liste:** Jedes neue KI-Projekt beginnt mit einem Eintrag (Pflicht im Projektstart-Formular oder in der KI-Richtlinie). Ohne Eintrag kein Budget.
- **Jährliche Überprüfung** plus Prüfung bei jeder Gesetzesänderung (Umsetzungsakte, Leitlinien). Termin beim Verantwortlichen.
- **Schulungsnachweis:** Wer mit KI arbeitet, braucht nachweisbare Kompetenz. Teilnehmerlisten der Schulungen archivieren (siehe KI-Einführung).
- **Verknüpfung mit dem Betriebsstandard:** Bei selbst gebauten Workflows sind Protokollierung und menschliche Aufsicht bereits im `_betriebsstandard.md` enthalten. Im Inventar darauf verweisen.

## 6. Abnahme

- Inventar vollständig (alle bekannten Anwendungen), jede mit Klasse und Begründung
- Hochrisiko-Kandidaten mit Empfehlung (umgestalten, stoppen, Konformität anstreben)
- Maßnahmenplan mit Fristen und Namen
- Geschäftsführung hat entschieden, was mit den Kandidaten passiert
- Grenzfälle sind beim Anwalt

## 7. Typische Fehler

- **Anbieteraussagen ungeprüft übernehmen.** "Unser Tool ist AI-Act-konform" heißt nichts, wenn der Kunde es für Bewerberauswahl nutzt. Einstufung hängt vom Einsatzzweck ab.
- **Alles als Hochrisiko einstufen aus Vorsicht.** Dann passiert nichts mehr. Die meisten Anwendungen im Mittelstand sind minimal oder Transparenzpflicht.
- **Schulungspflicht vergessen.** Sie gilt schon und ist am einfachsten zu erfüllen.
- **Inventar einmalig.** Ohne Pflegeprozess ist es in sechs Monaten falsch.

## 8. Aufwand und Preis

2 bis 4 Tage Tagessatz (€2.400 bis €7.200). Meist ein Workshop-Tag plus ein bis zwei Tage Vor- und Nacharbeit.

## 9. Folge-Use-Cases

- Bewerber-Vorsortierung (typischer Umgestaltungsfall)
- DSGVO-Check (parallel oder davor)
- KI-Einführung im Team (Schulungspflicht erfüllen)
- Entscheidungsvorlage für die Geschäftsführung zu Hochrisiko-Kandidaten

## 10. Belege und Quellen

- VO (EU) 2026/1744 (Digital Omnibus on AI), ABl. 24.07.2026: Anhang III ab 02.12.2027, Anhang I ab 02.08.2028. Zusammenfassungen: Gibson Dunn, Covington, Travers Smith, DLA Piper (Mai bis Aug 2026). Vor jedem Workshop eur-lex prüfen, Leitlinien der Kommission ändern sich.
- VO (EU) 2024/1689 Anhang III Nr. 4 (Beschäftigung), Art. 4 (KI-Kompetenz, seit 02.02.2025), Art. 5 (Verbote), Art. 14 (menschliche Aufsicht), Art. 26 (Betreiberpflichten), Art. 50 (Transparenz, ab 02.08.2026).
- Bitkom KI 2025 als Kontext, wie wenige Unternehmen überhaupt ein Inventar haben (nicht explizit erhoben, Ableitung).
