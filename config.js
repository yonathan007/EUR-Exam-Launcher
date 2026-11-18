window.EXAM_CONFIG = {
  institutions: [
    {
      id: 'eur', name: 'Erasmus Universiteit Rotterdam', short: 'EUR', color: '#0c8066',
      rules: [
        'Volg de instructies van de surveillant.',
        'Gebruik uitsluitend de toegestane examenomgeving.',
        'Communicatie met andere studenten is niet toegestaan.',
        'Meld technische problemen direct bij de surveillant.'
      ],
      exams: [
        { name: 'ANS Student', url: 'https://ans.app', logoText: 'ANS' },
        { name: 'Exam server', url: '', logoText: 'Excel · RStudio · SPSS', note: 'Proof of Concept — volledige AVD-link ontbreekt' }
      ]
    },
    {
      id: 'mc', name: 'Erasmus MC', short: 'Erasmus MC', color: '#005ca9',
      rules: [
        'Volg de aanwijzingen van de examinator of surveillant.',
        'Open uitsluitend de toegewezen toetsomgeving.',
        'Gebruik geen niet-toegestane hulpmiddelen.',
        'Meld storingen direct bij de verantwoordelijke medewerker.'
      ],
      exams: [
        { name: 'TestVision', url: 'https://erasmusmc.testvision.nl/online/kandidaten/', logoText: 'TestVision' },
        { name: 'TestVision iVTG', url: 'https://ivtg.testvision.nl/online/kandidaten/', logoText: 'iVTG' },
        { name: 'NOA – VU .NET', url: 'http://noa-online.net/eurgk', logoText: 'NOA', note: 'HTTP — geen versleutelde verbinding' }
      ]
    }
  ]
};
