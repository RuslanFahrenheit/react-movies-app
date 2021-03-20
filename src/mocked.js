const moviesList = [
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'First description',
    title: 'First title',
    year: '2005',
    genre: 'drama',
    id: '1',
    url: 'https://someurl.com',
    overview: 'overview text',
    runtime: 'runtime text',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Second title',
    year: '2002',
    genre: 'drama',
    id: '2',
    url: 'https://someurl.com',
    overview: 'overview text',
    runtime: 'runtime text',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Comedy title',
    year: '2009',
    genre: 'comedy',
    id: '3',
    url: 'https://someurl.com',
    overview: 'overview text',
    runtime: 'runtime text',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Second title',
    year: '2009',
    genre: 'drama',
    id: '4',
    url: 'https://someurl.com',
    overview: 'overview text',
    runtime: 'runtime text',
  },
];
const genres = [
  {
    id: 'drama_id',
    text: 'Drama',
    value: 'drama',
  },
  {
    id: 'comedy_id',
    text: 'Comedy',
    value: 'comedy',
  },
];
const sortingOptions = [
  {
    value: 'year',
    text: 'release date',
    id: 'release1',
  },
  {
    value: 'genre',
    text: 'genre',
    id: 'genre2',
  },
];

export {
  moviesList,
  genres,
  sortingOptions,
};
