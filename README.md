# EUR Exam Launcher

**Versie:** 0.2.13  
**Onderdeel:** Chromebook Exam Launcher (webvariant)  
**Footer:** MDT-DWO · Yonathan Gelaw

Een eenvoudige, tweetalige launcher waarmee studenten op een Chromebook de juiste examenomgeving kunnen kiezen. De launcher bevat geen examenvragen of antwoorden en is **geen vervanging voor ChromeOS-examenbeveiliging**.

## 1. Werking

De launcher bestaat uit drie stappen:

1. **Onderwijsinstelling kiezen:** Erasmus Universiteit Rotterdam (EUR) of Erasmus MC.
2. **Examenregels lezen:** de regels van de gekozen instelling worden getoond. De student moet deze accepteren om verder te gaan.
3. **Examenomgeving kiezen:** de beschikbare omgevingen verschijnen als tegels. Voor het openen volgt een bevestigingsvenster met de titel **Examenomgeving starten?** (Engels: **Launch exam environment?**).

De taalkeuze **NL / EN** staat rechtsboven. De knop **Startscherm** staat bij stap 3 onderaan; er is geen Startscherm-knop in de kopbalk. De footer toont **MDT-DWO · Yonathan Gelaw**.

## 2. Beschikbare examenomgevingen

| Instelling | Omgeving | URL |
| --- | --- | --- |
| EUR | ANS Student | https://ans.app |
| EUR | Exam server (Azure Virtual Desktop, proof of concept) | Zie `config.js` voor de volledige URL |
| Erasmus MC | TestVision | https://erasmusmc.testvision.nl/online/kandidaten/ |
| Erasmus MC | TestVision iVTG | https://ivtg.testvision.nl/online/kandidaten/ |
| Erasmus MC | NOA – VU .NET | http://noa-online.net/eurgk |

**Let op:** de NOA-link gebruikt HTTP in plaats van HTTPS. De launcher toont hiervoor een aanvullende waarschuwing. Controleer de URLs en de bereikbaarheid van alle omgevingen vóór gebruik.

## 3. Bestandsstructuur

```text
Exam-Launcher-v0.2.14/
├── index.html             # Paginastructuur en bevestigingsvenster
├── style.css              # Vormgeving
├── app.js                 # Navigatie, taal, timer en openen van examens
├── config.js              # Instellingen, instellingen/regels en examenlinks
├── assets/
│   ├── eur-logo.png
│   └── erasmus-mc-logo.png
└── README.md              # Deze documentatie
```

De **EUR Exam Companion-extensie** is een apart project en maakt geen deel uit van deze launcher.

## 4. Lokaal testen

1. Pak het ZIP-bestand volledig uit.
2. Open `index.html` in Chrome of Edge.
3. Doorloop beide instellingen, controleer de examenregels en test de NL/EN-knoppen.
4. Controleer de bevestiging vóór het openen van een examenomgeving.

Een geslaagde lokale test betekent **niet** dat externe examenomgevingen ook binnen ChromeOS-kioskmodus werken.

## 5. Publiceren via GitHub Pages

1. Plaats de inhoud van de projectmap in de repository, zodat `index.html`, `app.js`, `config.js`, `style.css` en `assets/` op hetzelfde niveau staan.
2. Configureer GitHub Pages voor de juiste branch en map (meestal `main` / `/ (root)`).
3. Open de gepubliceerde HTTPS-URL en test opnieuw.
4. Als het startscherm leeg is: controleer in de browserontwikkelaarstools onder **Console** en **Network** of `config.js` en `app.js` zonder fouten worden geladen. Test eventueel met uitgeschakelde browsercache.

Voor deze webvariant kan bijvoorbeeld de bestaande GitHub Pages-locatie worden gebruikt: https://yonathan007.github.io/EUR-Exam-Launcher/

## 6. Configuratie aanpassen

Pas normale instellingen en examenlinks aan in **`config.js`**.

| Instelling | Standaard | Betekenis |
| --- | --- | --- |
| `settings.defaultLanguage` | `nl` | Starttaal: `nl` of `en` |
| `settings.inactivitySeconds` | `180` | Na zoveel seconden zonder activiteit terug naar stap 1; `0` schakelt dit uit |
| `settings.warningSeconds` | `30` | Waarschuwing vóór automatische terugkeer |
| `settings.confirmBeforeExam` | `true` | Bevestiging vóór openen van de examenomgeving |
| `settings.showSessionReturnHint` | `true` | Informatietekst op stap 3 over terugkeer na het openen |

Onder `institutions` staan per instelling het logo, de Nederlandse en Engelse regels (`rules.nl`, `rules.en`) en de examenomgevingen (`exams`). Een examen met een ongeldige of ontbrekende HTTP(S)-URL wordt uitgeschakeld.

**Opmerking:** `showSessionReturnHint` gaat over de tekst op **stap 3**, niet over het bevestigingsvenster. De eerder verwijderde aanvullende informatietekst in het bevestigingsvenster is niet opnieuw toegevoegd.

## 7. Gedrag en beperkingen

- De launcher opent een examenomgeving **in hetzelfde browservenster** via navigatie naar de ingestelde URL.
- Zodra de externe website geopend is, kan de launcher die examenomgeving niet beheren of beëindigen.
- De inactiviteitsteller werkt alleen zolang de launcherpagina actief is.
- De taalwisselaar vertaalt de launcher, **niet** de externe examenwebsites.
- De gekozen taal wordt niet blijvend op het apparaat opgeslagen.
- Of externe links, authenticatie en terugnavigatie werken, hangt af van de examenomgeving en het ingestelde ChromeOS-kioskbeleid. Dit moet op de beheerde Acer Chromebooks worden getest.

## 8. Veiligheid en beheer

- Gebruik een **test-OU** voordat je de launcher op examenapparaten inzet.
- Beperk ongewenste navigatie en systeemfuncties met ChromeOS-beleid en de beveiligingsinstellingen van de examenplatformen.
- Zet **geen wachtwoorden, API-sleutels of tokens** in `config.js` of andere statische bestanden: GitHub Pages publiceert die bestanden openbaar.
- Test na elke wijziging beide talen, beide instellingen en de relevante examenlinks.

## 9. Versieoverzicht

| Versie | Belangrijkste wijziging |
| --- | --- |
| 0.2.7 | AVD Exam server-link en uitbreiding van sessiefunctionaliteit |
| 0.2.8 | Nederlandse en Engelse interface |
| 0.2.9 | Reparatie van leeg startscherm door JavaScript-fout |
| 0.2.10 | Startscherm-knop bovenaan verborgen bij stap 2 |
| 0.2.11 | Startscherm-knop bovenaan ook verwijderd bij stap 3 |
| 0.2.12 | Titel bevestiging gewijzigd naar *Examenomgeving starten?*; aanvullende informatietekst verwijderd |
| **0.2.13** | Footer gewijzigd naar **MDT-DWO · Yonathan Gelaw** |

---

**Documentatie bijgewerkt voor v0.2.14.** Deze herziening wijzigt uitsluitend `README.md`; de launcherbestanden blijven ongewijzigd.


## Wijziging v0.2.14

De vijf EUR-tentamenregels in stap 2 zijn bijgewerkt (Nederlands en Engels), gebaseerd op *Tentamenregels EUR 2026–2027*, artikelen 1.13, 1.14, 2.10, 2.12, 2.19 en 2.22. De regels van Erasmus MC zijn niet gewijzigd.


## Wijziging v0.2.16
- Versienummer `v0.2.16` rechts onderin de footer toegevoegd, naast de klok.
- Gebaseerd op v0.2.14; geen wijzigingen uit de eerdere alternatieve v0.2.16-layout overgenomen.

## Wijziging v0.2.17
- Erasmus MC toont nu dezelfde vier examenregels als Erasmus Universiteit Rotterdam, in het Nederlands en Engels.
- Examenlinks en overige functionaliteit zijn ongewijzigd.
