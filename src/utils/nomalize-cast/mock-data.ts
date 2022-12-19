export const mockData = [
  {
    person: {
      id: 84926,
      url: 'https://www.tvmaze.com/people/84926/charlie-stayt',
      name: 'Charlie Stayt',
      country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' },
      birthday: '1962-06-19',
      deathday: null,
      gender: 'Male',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/18/45448.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/18/45448.jpg',
      },
      updated: 1663533217,
      _links: { self: { href: 'https://api.tvmaze.com/people/84926' } },
    },
    character: {
      id: 800692,
      url: 'https://www.tvmaze.com/characters/800692/breakfast-presenter',
      name: 'Presenter',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/297/743405.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/297/743405.jpg',
      },
      _links: { self: { href: 'https://api.tvmaze.com/characters/800692' } },
    },
    self: true,
    voice: false,
  },
];

export const mockDataWithNull = [
  {
    person: {
      id: 84926,
      url: 'https://www.tvmaze.com/people/84926/charlie-stayt',
      name: 'Charlie Stayt',
      country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' },
      birthday: '1962-06-19',
      deathday: null,
      gender: 'Male',
      image: {
        medium: null,
        original: null,
      },
      updated: 1663533217,
      _links: { self: { href: 'https://api.tvmaze.com/people/84926' } },
    },
    character: null,
    self: true,
    voice: false,
  },
];
