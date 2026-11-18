# EUR Exam Launcher v0.2.6 — functionaliteitsuitbreiding op basis van v0.2.4

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

De knop Startscherm en de knop Regels werken op de launcherpagina's. Er is een bevestigingsvenster voor de externe navigatie. NOA gebruikt nog HTTP en toont daarom een extra waarschuwing. Exam server blijft uitgeschakeld zolang de volledige URL ontbreekt.

## Veiligheid
De regels en bevestiging zijn gebruikersinterface, geen examenbeveiliging. Beperk navigatie, sneltoetsen en sessiegedrag via ChromeOS-beleid en de examenomgeving. GitHub Pages publiceert alle statische bestanden; geen geheimen opnemen. Test eerst in een aparte test-OU.
