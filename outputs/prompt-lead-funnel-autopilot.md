# Prompt: Lead-Funnel-Autopilot für busche.cloud (optimiert für Claude Fable 5.1)

Verwendung: Neue Claude Code Session im Workspace-Root starten, `/prime` ausführen, dann den kompletten Block unten als erste Nachricht einfügen. Der Prompt ist so gebaut, dass Fable selbstständig erkennt, was die Website erreichen soll, eigene Vorschläge macht, sie priorisiert und direkt umsetzt. Rückfragen sind nur an definierten Stellen vorgesehen.

Anpassen vor dem Einfügen: Abschnitt 8 (Entscheidungen, die du vorab treffen kannst). Alles andere kann so bleiben.

---

## Der Prompt

```text
Du arbeitest als Fable 5.1 in meinem Workspace für busche.cloud. Lies zuerst CLAUDE.md vollständig, dann context/personal-info.md, context/business-info.md, context/strategy.md und outputs/consulting-angebot.md. Sieh dir danach die Website in website/src an (index.astro, leistungen.astro, Layout.astro, config/site.ts, content/config.ts, die Blog-Artikel-Frontmatter). Fasse in maximal 12 Zeilen zusammen, was die Website heute erreichen will, für wen, und wo der Weg vom Besucher zum zahlenden Kunden bricht. Diese Zusammenfassung ist dein Arbeitsauftrag, nicht meine Bestätigung. Warte nicht auf mich, arbeite danach direkt weiter.

# Rolle und Haltung

Du bist nicht Umsetzer meiner Ideen, du bist der Consultant für meine eigene Website. Das heißt:
- Du erkennst das Ziel selbst (Leads für KI-Beratung im Mittelstand, 10 bis 500 Mitarbeitende, Pakete: Readiness-Check 299 €, Pilot ab 2.500 €, Begleitung ab 1.200 €/Monat, Tagessatz 1.200 bis 1.800 €).
- Du entwickelst eigene Vorschläge, bewertest sie nach Wirkung auf Leads pro Aufwand, und setzt die besten sofort um.
- Du fragst mich nur, wenn eine Entscheidung Geld kostet, externe Accounts braucht, rechtlich relevant ist oder die Positionierung verändert. Alles andere entscheidest du und dokumentierst die Entscheidung.
- Du lieferst fertig: gebaut, geprüft, committet, gepusht. Ein Vorschlag ohne Umsetzung ist kein Ergebnis. Eine Umsetzung ohne Build-Prüfung ist kein Ergebnis.

# Ziel 1: Ein Lead-Funnel, der Kunden erzeugt

Baue den Funnel als durchgängigen Pfad und benenne für jede Stufe die Seite, das Element und den nächsten Klick:

1. Aufmerksamkeit: Blog, LinkedIn, Suche. Prüfe, ob jeder Artikel am Ende einen thematisch passenden nächsten Schritt hat (nicht nur Newsletter, sondern den passenden Use-Case oder das passende Paket).
2. Interesse: Ein interaktiver "Use-Case-Finder" auf der Website. Der Besucher wählt Branche, Abteilung (Vertrieb, Kundenservice, Backoffice, Buchhaltung, HR, Einkauf, Produktion, IT) und sein größtes Zeitproblem. Die Seite zeigt daraufhin 2 bis 3 konkrete Use-Cases mit Aufwand, Nutzen und dem passenden Paket. Rein clientseitig (kein Server, die Seite ist statisch auf GitHub Pages), Daten als JSON oder TypeScript-Modul in src/data/.
3. Vertrauen: Use-Case-Bibliothek als eigene Seite (/use-cases oder /loesungen), jede Lösung als Content-Collection-Eintrag mit Schema (Branche, Abteilung, Problem, Lösung, Werkzeuge, Aufwand in Tagen, Einsparung in Std./Woche, Paket-Zuordnung, Reifegrad). Erweitere src/content/config.ts entsprechend. Jede Lösung endet mit einem klaren CTA.
4. Conversion: Lead-Magnet mit E-Mail-Gate (Buttondown ist vorhanden, Username buschecloud). Vorschlag: der Use-Case-Finder liefert ein Kurzergebnis sofort und bietet die ausführliche Fassung als PDF gegen E-Mail-Adresse. Das Formspree-Formular (links.formspree in config/site.ts) bleibt für konkrete Anfragen. Die Danke-Seite (danke.astro) muss den nächsten Schritt anbieten, nicht nur danken.
5. Abschluss: Readiness-Check als Einstiegsprodukt für 299 € sichtbar an jedem Funnel-Ende. Cal.com ist noch nicht eingerichtet; solange das so ist, führen alle Termin-CTAs auf /#kontakt. Baue die Links aber über eine einzige Konstante in config/site.ts, damit der Wechsel auf Cal.com später eine Zeile ist.
6. Messung: Schlage ein datenschutzfreundliches, cookieloses Tracking vor (z. B. Plausible, Umami, oder GoatCounter) und bereite die Einbindung so vor, dass nur der Script-Tag fehlt. Frage mich, welchen Anbieter ich will, bevor du einen Account voraussetzt. Definiere die 5 Ereignisse, die den Funnel messbar machen (Finder gestartet, Finder abgeschlossen, Lead-Magnet angefordert, Formular gesendet, Paket-Seite besucht).

# Ziel 2: Use-Cases und Lösungswege, die aktiv vorgeschlagen werden

Lege mindestens 24 Use-Cases an, verteilt über die Themen, die Unternehmen dieser Größe wirklich haben. Decke jede dieser Gruppen ab, nicht nur die naheliegenden:

- Vertrieb: Angebotserstellung, Lead-Qualifizierung, CRM-Pflege, Nachfassen
- Kundenservice: Ticket-Klassifikation, Antwortentwürfe, Wissensdatenbank mit Quellenbeleg (RAG, siehe Case Study rag-demo-quellenbelegter-chatbot)
- Backoffice und Buchhaltung: Rechnungseingang, Belegzuordnung, Mahnwesen, Reporting
- HR: Stellenanzeigen, Bewerber-Vorsortierung (mit Hinweis auf EU AI Act Hochrisiko-Einstufung), Onboarding-Dokumente
- Einkauf und Logistik: Lieferantenanfragen, Bestellabgleich, Bestandsprognosen
- Produktion und Technik: Wartungsdokumentation, Fehlerberichte, Schichtübergaben
- Geschäftsführung: Meeting-Zusammenfassungen, Management-Reports, Entscheidungsvorlagen
- SAP-nahe Prozesse: FI/CO-Buchungsvorschläge, SD-Auftragsprüfung, Stammdatenqualität (mein Nischen-Schwerpunkt, siehe context/strategy.md)
- Querschnitt: Datenschutz und DSGVO, EU AI Act, Betriebsrat, Schulung, Change-Management, Make-or-Buy
- Technik und Betrieb beim Kunden: Hosting-Frage (Cloud, EU-Cloud, On-Premise), Anbindung an bestehende Systeme, Deployment und CI/CD für KI-Lösungen, Monitoring, Kosten- und Token-Kontrolle, Rollback

Für Deployment und CI/CD als Kundenthema gilt: Der Mittelstand scheitert selten am Prototyp, sondern daran, dass eine n8n-Automation oder ein Chatbot nach dem Pilot nicht sauber betrieben wird. Lege dafür eigene Use-Cases an: "Vom Prototyp zum Betrieb" (Versionierung von Workflows und Prompts, Test-Umgebung, automatischer Deploy, Secrets-Handling, Logging, wer wird nachts angerufen). Zeige, dass das Teil meiner Begleitung ist, nicht Zusatz.

Jeder Use-Case hat zwei Fassungen:

a) Öffentlich auf der Website (Content Collection): Problem in Kundensprache, Lösung in drei Sätzen, Zahlen als Spanne, Paket-Zuordnung, CTA. Kein Schritt-für-Schritt, das ist das Produkt.

b) Intern im Workspace unter outputs/loesungswege/<slug>.md: die Schritt-für-Schritt-Anleitung für mich, mit der ich die Lösung beim Kunden umsetze. Feste Struktur:
   1. Ausgangslage und Abgrenzung (was ist NICHT Teil davon)
   2. Voraussetzungen beim Kunden (Daten, Zugänge, Ansprechpartner, Betriebsrat, DSGVO-Check)
   3. Werkzeugentscheidung mit Begründung (Claude, ChatGPT, n8n, Zapier, Make, eigenes Skript; Hosting EU/On-Prem)
   4. Umsetzung in nummerierten Schritten mit Zeitschätzung pro Schritt
   5. Deployment und Betrieb: Umgebungen (Test/Prod), Versionierung, CI/CD-Pipeline (konkret: was liegt im Git, was triggert den Deploy, wie wird zurückgerollt), Secrets, Monitoring, Kostenlimit
   6. Abnahme: messbare Kriterien, Testfälle, Übergabe an den Kunden
   7. Typische Fehler und wie ich sie vermeide
   8. Aufwand in Tagen und Preis-Zuordnung zu meinen Paketen
   9. Folge-Use-Cases, die sich daraus ergeben (Upsell)

Die internen Anleitungen sind mein Backend. Sie gehen nie ins website/-Verzeichnis. Lege eine Übersicht unter outputs/loesungswege/INDEX.md an, die Use-Case, Website-Slug, Paket und Status (Idee / Anleitung fertig / beim Kunden erprobt) verknüpft.

# Ziel 3: Deployment und CI/CD der Website selbst

Der aktuelle Stand: .github/workflows/deploy.yml baut bei Push auf main und deployt auf GitHub Pages. Es gibt keinen Build-Check auf Pull Requests, keine Tests, kein Lint. Verbessere das, ohne die Seite komplizierter zu machen als nötig:

1. Build-Check auf jedem Pull Request (astro build, ohne Deploy), damit main nie rot wird.
2. Link-Check über die gebaute Seite (interne Links, Anchors wie /#kontakt).
3. Lighthouse- oder Größen-Budget als Warnung, nicht als Blocker (die Seite hat Filmkorn-Overlay, Fonts und Videos-Slots; Performance ist Teil der Glaubwürdigkeit).
4. Beachte die Falle aus CLAUDE.md: astro-og-canvas lädt Schriften von api.fontsource.org. Löse das dauerhaft, indem du die benötigte Schrift lokal in website/public/fonts/ ablegst und astro-og-canvas darauf zeigst, statt auf den Netzwerkzugriff zu vertrauen. Dann läuft der Build auch offline und in Sandboxes.
5. Prüfe, ob die Pagefind-Indexierung Teil des PR-Checks sein muss (vermutlich nicht, aber begründe es).
6. Dokumentiere die neue Pipeline in CLAUDE.md im Abschnitt Deployment, in maximal 10 Zeilen.

# Arbeitsweise

- Arbeite in dieser Reihenfolge: (1) Analyse und Zusammenfassung, (2) Prioritätenliste mit maximal 10 Maßnahmen, jede mit Wirkung/Aufwand-Einschätzung, (3) Umsetzung der Reihe nach, (4) nach jeder Maßnahme cd website && npm run build:fast, bei OG-relevanten Änderungen npm run build, (5) Commit pro Maßnahme mit klarer Nachricht, (6) am Ende CLAUDE.md und context/current-data.md aktualisieren.
- Nutze /create-plan nur für Maßnahmen, die mehr als drei Dateien strukturell verändern. Kleine Maßnahmen setzt du direkt um.
- Design-System einhalten (CLAUDE.md, Abschnitt "Cinematic Dark"): Tokens ink/bone/brand, Bricolage Grotesque für Display, Pill-Buttons, keine Glas-Karten, keine Verläufe in Headlines, Amber sparsam.
- Textstil einhalten (Skills meine-stimme und blog-artikel): kein Gedankenstrich im Fließtext, kein --- als Trenner, Du-Ansprache gegenüber Unternehmen in der zweiten Person Plural ("bei euch"), keine Marketing-Superlative, Zahlen als Spanne mit Herkunft.
- Alle Texte auf Deutsch. Fachbegriffe beim ersten Auftreten in einem Halbsatz erklären.
- Keine erfundenen Kundenzahlen. Wo Belege fehlen, Spanne mit Formulierung "typisch in unseren Pilotprojekten" vermeiden und stattdessen "Erfahrungswert aus vergleichbaren Prozessen" verwenden, oder die Zahl weglassen.
- Externe Dienste, für die ich einen Account brauche (Analytics, Cal.com, PDF-Versand): Einbindung vorbereiten, Platzhalter-Konstante in config/site.ts, und in einer Liste am Ende sammeln, was ich manuell anlegen muss, mit exakten Schritten.

# Was du mir am Ende lieferst

1. Die 12-Zeilen-Zusammenfassung vom Anfang und die Prioritätenliste mit Status (erledigt / offen / braucht mich).
2. Liste aller neuen und geänderten Seiten mit URL-Pfad.
3. Liste der Use-Cases mit Website-Slug und Pfad zur internen Anleitung.
4. Die Liste "Das musst du selbst tun", nummeriert, mit Zeitschätzung (Accounts, Freigaben, Fotos, Preise).
5. Drei Maßnahmen, die du bewusst nicht umgesetzt hast, und warum.

Beginne jetzt mit dem Lesen von CLAUDE.md. Keine Vorrede.
```

---

## Warum der Prompt so gebaut ist (Notizen für dich, nicht Teil des Prompts)

**Fable-spezifisch.** Fable 5.1 arbeitet am besten mit einem klaren Auftrag, expliziten Entscheidungsgrenzen ("frag nur wenn Geld, Accounts, Recht, Positionierung") und einem definierten Liefer-Kontrakt am Ende. Ohne die Grenzen fragt das Modell zu oft nach; ohne den Kontrakt liefert es Analyse statt Ergebnis. Beides steht deshalb ausdrücklich drin.

**"Backend" als interner Workspace-Bereich.** Die Website ist statisch, es gibt keinen Server. Die Schritt-für-Schritt-Anleitungen liegen darum unter `outputs/loesungswege/` und nicht in `website/`. Das hat einen Nebeneffekt, der zur Positionierung passt: Die Website zeigt das Problem und die Lösung in drei Sätzen, der Weg dahin ist das bezahlte Produkt.

**Deployment und CI/CD in zwei Rollen.** Einmal als Kundenthema (Ziel 2, "Vom Prototyp zum Betrieb"), weil genau dort Mittelständler nach dem Pilot hängen bleiben. Einmal als Hausaufgabe für die eigene Seite (Ziel 3), weil die Website heute keinen Build-Check auf Pull Requests hat und der OG-Build vom Netzzugriff auf fontsource abhängt.

**Was du vorab entscheiden kannst, um Rückfragen zu sparen** (Abschnitt 8): Analytics-Anbieter (Plausible ist bezahlt, Umami und GoatCounter kostenlos selbst gehostet bzw. kostenlos), ob der Use-Case-Finder ein E-Mail-Gate haben soll oder alles frei sichtbar ist, und ob die Use-Case-Seite `/loesungen` oder `/use-cases` heißen soll. Trage die Antworten direkt in den Prompt ein, dann läuft die Session ohne Unterbrechung.

**Erwartete Laufzeit.** 24 Use-Cases in zwei Fassungen plus Finder plus Pipeline sind eine lange Session. Wenn du es aufteilen willst: Ziel 1 und 3 in einer Session, Ziel 2 in einer zweiten, die mit "Lies outputs/loesungswege/INDEX.md und ergänze die fehlenden Themen" startet.
