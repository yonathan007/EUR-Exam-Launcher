Exam Launcher v0.2.9 — reparatie leeg startscherm (verwijderd ongeldige vertaalreferentie tijdens initialisatie).

# EUR Exam Launcher v0.2.7 — functionaliteitsuitbreiding op basis van v0.2.4

## Testen
Pak de ZIP volledig uit en open `index.html` in Chrome/Edge. Voor ChromeOS kiosk blijft een HTTPS-host zoals GitHub Pages nodig bij deze webvariant.

## Configuratie
Pas uitsluitend `config.js` aan:
- `settings.inactivitySeconds`: seconden zonder activiteit waarna de launcher naar pagina 1 terugkeert. Zet op `0` om uit te schakelen.
- `settings.warningSeconds`: aantal seconden vooraf voor de waarschuwing.
- `settings.confirmBeforeExam`: bevestiging voordat een examen-URL wordt geopend.
- `institutions`: instellingsnamen, logo's, examenregels en examenlinks.
- Een examen met een lege of ongeldige URL wordt uitgeschakeld.

## Sessiegedrag en beperkingen
De knop **Examen openen** navigeert in hetzelfde venster naar de externe examenomgeving. De launcher heeft vanaf dat moment **geen controle** meer over de pagina: hij kan geen actief examen beëindigen, geen timeout afdwingen en niet gegarandeerd automatisch terugkeren. De surveillant moet de examenomgeving afsluiten of de kiosk opnieuw starten volgens het ChromeOS-beleid. Terug via browsergeschiedenis werkt alleen als de externe site en het kioskbeleid dit toelaten. De inactiviteitsteller werkt **uitsluitend zolang de launcher zichtbaar is**.

De knop Startscherm en de knop Regels werken op de launcherpagina's. Er is een bevestigingsvenster voor de externe navigatie. NOA gebruikt nog HTTP en toont daarom een extra waarschuwing. Exam server is ingeschakeld met de aangeleverde Azure Virtual Desktop URL. Controleer op de Chromebook of authenticatie, sessiestart en navigatie in kioskmodus werken.

## Veiligheid
De regels en bevestiging zijn gebruikersinterface, geen examenbeveiliging. Beperk navigatie, sneltoetsen en sessiegedrag via ChromeOS-beleid en de examenomgeving. GitHub Pages publiceert alle statische bestanden; geen geheimen opnemen. Test eerst in een aparte test-OU.


## v0.2.8 — Nederlands / English
- Klik rechtsboven op 🇳🇱 NL of 🇬🇧 EN om direct te wisselen, zonder herladen.
- De keuze geldt gedurende de huidige launchersessie en wordt niet opgeslagen op de Chromebook.
- De standaardtaal is `settings.defaultLanguage` in `config.js` (`nl` of `en`).
- Examenregels zijn per instelling configureerbaar via `rules.nl` en `rules.en`.
- Knoppen, waarschuwingen, dialogen en kloktaal zijn vertaald.
- Namen van examenomgevingen en URL's blijven gelijk in beide talen.
- Externe websites (ANS, TestVision, AVD) worden niet door de launcher vertaald.
- Bestaande beperkingen van kioskmodus en externe navigatie blijven gelden.

## v0.2.10
De Startscherm/Home-knop in de kopbalk is verborgen bij stap 2 (examenregels). De knop Terug blijft beschikbaar. Bij stap 3 blijft Startscherm beschikbaar.

## v0.2.11
- De Home/Startscherm-knop rechtsboven is verwijderd, ook op stap 3.
- De Home/Startscherm-knop onderaan stap 3 blijft beschikbaar.

## v0.2.12
- Bevestigingsvenster: titel gewijzigd in 'Examenomgeving starten?' (EN: 'Launch exam environment?').
- Informatietekst onder het bevestigingsbericht verwijderd in beide talen.
