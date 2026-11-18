// Pas instellingen, regels en examenlinks uitsluitend hier aan.
window.EXAM_CONFIG = {
  settings: {
    inactivitySeconds: 180, // 0 = uitschakelen; alleen actief op launcherpagina's
    warningSeconds: 30,
    confirmBeforeExam: true,
    showSessionReturnHint: true
  },
  institutions: [
    {
      id: 'eur', name: 'Erasmus Universiteit Rotterdam', short: 'EUR',
      logo: 'assets/eur-logo.png', color: '#0c8066',
      rules: [
        'Volg de instructies van de surveillant.',
        'Gebruik uitsluitend de toegestane examenomgeving.',
        'Communicatie met andere studenten is niet toegestaan.',
        'Meld technische problemen direct bij de surveillant.'
      ],
      exams: [
        { id: 'ans', name: 'ANS Student', url: 'https://ans.app', logoText: 'ANS' },
        { id: 'exam-server', name: 'Exam server', url: 'https://windows.cloud.microsoft/webclient/avd/9713a36c-1a2a-4f27-b4fc-bf571f9cf4e6/a28b338b-33e3-43a2-ff88-08dec2252c9d', logoText: 'Excel · RStudio · SPSS', note: 'Proof of Concept' }
      ]
    },
    {
      id: 'mc', name: 'Erasmus MC', short: 'Erasmus MC',
      logo: 'assets/erasmus-mc-logo.png', color: '#005ca9',
      rules: [
        'Volg de aanwijzingen van de examinator of surveillant.',
        'Open uitsluitend de toegewezen toetsomgeving.',
        'Gebruik geen niet-toegestane hulpmiddelen.',
        'Meld storingen direct bij de verantwoordelijke medewerker.'
      ],
      exams: [
        { id: 'testvision', name: 'TestVision', url: 'https://erasmusmc.testvision.nl/online/kandidaten/', logoText: 'TestVision' },
        { id: 'ivtg', name: 'TestVision iVTG', url: 'https://ivtg.testvision.nl/online/kandidaten/', logoText: 'iVTG' },
        { id: 'noa', name: 'NOA – VU .NET', url: 'http://noa-online.net/eurgk', logoText: 'NOA', note: 'HTTP — geen versleutelde verbinding' }
      ]
    }
  ]
};
