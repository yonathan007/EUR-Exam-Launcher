# Exam Launcher v0.2.5 — ChromeOS kiosk pilot

Dit is een **statische web-kiosktest**, geen IWA, Chrome Extension of definitieve examenbeveiliging. De bestanden zijn afkomstig uit v0.2.4; de examenlinks, logo’s, voorbeeldregels en navigatie zijn ongewijzigd. De batterijstatus ontbreekt.

## 1. GitHub Pages publiceren

1. Maak een repository aan, bijvoorbeeld `eur-exam-launcher-pilot`. Gebruik een door EUR goedgekeurd account of organisatie. GitHub Pages op een gratis account kan een publieke repository vereisen.
2. Upload **de inhoud van deze map** naar de root van de `main`-branch (`index.html`, `app.js`, `config.js`, `style.css`, `assets/`, `.nojekyll`). Upload niet alleen het ZIP-bestand.
3. Open `Settings > Pages`, kies `Deploy from a branch`, branch `main`, folder `/(root)` en sla op.
4. Controleer de gepubliceerde URL, doorgaans `https://<account>.github.io/eur-exam-launcher-pilot/`.
5. Test die URL eerst in Chrome op een gewone computer.

GitHub Pages is publiek toegankelijk. Zet geen geheimen, tokens, examenantwoorden of persoonsgegevens in de repository. De URL is een voorbeeld; de werkelijke URL hangt af van de gekozen repository.

## 2. Google Admin Console

1. Zet één **test-Chromebook** in een aparte test-OU. Houd productie buiten scope.
2. Ga naar `Devices > Chrome > Apps & extensions > Kiosks` en selecteer de test-OU.
3. Voeg een **web-kioskapp / kiosk web app by URL** toe met de GitHub Pages-URL. De precieze benaming verschilt per Admin Console-versie.
4. Schakel **auto-launch** in voor de test-app, indien beschikbaar, en pas de vereiste apparaatinstellingen toe.
5. Herstart het Chromebook en controleer of de launcher automatisch fullscreen verschijnt zonder student-login.
6. Test ANS, TestVision en iVTG, inclusief authenticatie, redirects, terugkeer, vensters en sessie-afsluiting.
7. Beperk toegestane URL's pas na inventarisatie van alle benodigde redirects, SSO- en ondersteunende domeinen. URL-blokkering alléén is geen examenbeveiliging.

Controleer vooraf dat de ChromeOS-versie en licenties web-kioskapps ondersteunen. Een web-kioskapp kan anders omgaan met navigatie dan een gewone browser. Als de Admin Console de URL niet accepteert of externe examennavigatie niet werkt, is deze route niet geschikt zonder aanpassing.

## 3. Bekende beperkingen

- **EUR:** ANS Student → `https://ans.app`; Exam server PoC uitgeschakeld wegens onvolledige AVD-URL.
- **Erasmus MC:** TestVision → `https://erasmusmc.testvision.nl/online/kandidaten/`; iVTG → `https://ivtg.testvision.nl/online/kandidaten/`; NOA → `http://noa-online.net/eurgk`.
- De NOA-link is **HTTP** en toont een waarschuwing. Verifieer de eindbestemming en HTTPS-ondersteuning voordat je deze in een examen inzet.
- Examenregels zijn voorbeeldteksten, niet goedgekeurd beleid.
- Logo's voor EUR en Erasmus MC zijn lokaal meegeleverd; examenlogo's zijn tekstlabels.
- Bij openen van een examenomgeving navigeert de browser **weg van de launcher**. Een terugknop of automatische terugkeer is niet gegarandeerd.
- Geen beveiligde browser / lockdown; valideer toetsencombinaties, pop-ups, downloads, clipboard, SSO, nieuwe vensters, sessiegegevens en het afsluiten van de kiosksessie.
- Geen studenten of echte examens inzetten totdat functionele en beveiligingstests zijn afgerond.

## 4. Pilot-checklist

- [ ] Launcher start automatisch in kioskmodus
- [ ] EUR- en EMC-logo's en instellingskeuze werken
- [ ] Regels en bevestiging werken
- [ ] ANS werkt inclusief inloggen en examensessie
- [ ] TestVision en iVTG werken inclusief redirects
- [ ] NOA-bestemming en HTTPS beoordeeld
- [ ] Nieuwe vensters, SSO, toetsencombinaties en uitloggen getest
- [ ] Exam server pas activeren na ontvangst volledige URL
- [ ] Beveiligingsbeoordeling uitgevoerd vóór productie
