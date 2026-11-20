// Pas instellingen, regels en examenlinks uitsluitend hier aan.
window.EXAM_CONFIG = {
  settings: {
    defaultLanguage: 'nl', // nl of en
    inactivitySeconds: 180, // 0 = uitschakelen; alleen actief op launcherpagina's
    warningSeconds: 30,
    confirmBeforeExam: true,
    showSessionReturnHint: true
  },
  institutions: [
    {
      id: 'eur', name: 'Erasmus Universiteit Rotterdam', short: 'EUR',
      logo: 'assets/eur-logo.png', color: '#0c8066',
      rules: {
        nl: ['Mobiele telefoons moeten uitgeschakeld en opgeborgen zijn. Smartwatches, draadloze oordopjes en andere niet-toegestane elektronische apparaten zijn verboden.', 'Communicatie met andere studenten is verboden. Alleen communicatie met surveillanten, medewerkers van de tentamenorganisatie en de examinator is toegestaan.', 'Volg altijd de aanwijzingen van de surveillanten.', 'Toiletbezoek is niet toegestaan tijdens het eerste uur en het laatste halfuur, behalve bij vooraf goedgekeurde bijzondere omstandigheden. Per tentamen is maximaal één toiletbezoek toegestaan.', 'Tijdens de laatste 15 minuten mag je niet opstaan of de tentamenzaal verlaten.'],
        en: ['Mobile phones must be switched off and stored away. Smartwatches, wireless earbuds and other unauthorized electronic devices are prohibited.', 'Communication with other students is prohibited. You may communicate only with invigilators, examination staff and the examiner.', 'Always follow the invigilators’ instructions.', 'Toilet visits are not permitted during the first hour or the last half-hour, except under previously approved special circumstances. A maximum of one toilet visit is permitted per examination.', 'You must not stand up or leave the examination room during the final 15 minutes.']
      },
      exams: [
        { id: 'ans', name: 'ANS Student', url: 'https://ans.app', logoText: 'ANS' },
        { id: 'exam-server', name: 'Exam server', url: 'https://windows.cloud.microsoft/webclient/avd/9713a36c-1a2a-4f27-b4fc-bf571f9cf4e6/a28b338b-33e3-43a2-ff88-08dec2252c9d', logoText: 'Excel · RStudio · SPSS', note: 'Proof of Concept — Azure Virtual Desktop' }
      ]
    },
    {
      id: 'mc', name: 'Erasmus MC', short: 'Erasmus MC',
      logo: 'assets/erasmus-mc-logo.png', color: '#005ca9',
      rules: {
        nl: ['Volg de aanwijzingen van de examinator of surveillant.', 'Open uitsluitend de toegewezen toetsomgeving.', 'Gebruik geen niet-toegestane hulpmiddelen.', 'Meld storingen direct bij de verantwoordelijke medewerker.'],
        en: ['Follow the examiner’s or invigilator’s instructions.', 'Open only the assigned examination environment.', 'Do not use unauthorized aids.', 'Report technical issues immediately to the responsible staff member.']
      },
      exams: [
        { id: 'testvision', name: 'TestVision', url: 'https://erasmusmc.testvision.nl/online/kandidaten/', logoText: 'TestVision' },
        { id: 'ivtg', name: 'TestVision iVTG', url: 'https://ivtg.testvision.nl/online/kandidaten/', logoText: 'iVTG' },
        { id: 'noa', name: 'NOA – VU .NET', url: 'http://noa-online.net/eurgk', logoText: 'NOA', note: 'HTTP — geen versleutelde verbinding' }
      ]
    }
  ]
};
