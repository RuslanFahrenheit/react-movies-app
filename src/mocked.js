const addMovieForm = [
  {
    id: 'title-1',
    label: 'title',
    placeholder: 'Select title',
    type: 'text',
  },
  {
    id: 'release-2',
    label: 'release date',
    placeholder: 'Select date',
    type: 'text',
  },
  {
    id: 'url-3',
    label: 'movie url',
    placeholder: 'Movie URL here',
    type: 'text',
  },
  {
    id: 'genre-4',
    label: 'genre',
    placeholder: 'Select Genre',
    type: 'select',
    options: [
      {
        value: 'genre1',
        text: 'genre',
        id: 'genre4-genre1',
      },
    ],
  },
  {
    id: 'overview-5',
    label: 'overview',
    placeholder: 'Overview here',
    type: 'text',
  },
  {
    id: 'runtime-6',
    label: 'runtime',
    placeholder: 'Runtime here',
    type: 'text',
  },
];
const editMovieForm = [
  {
    id: 'title-1',
    label: 'title',
    placeholder: 'Select title',
    type: 'text',
  },
  {
    id: 'release-2',
    label: 'release date',
    placeholder: 'Select date',
    type: 'text',
  },
  {
    id: 'url-3',
    label: 'movie url',
    placeholder: 'Movie URL here',
    type: 'text',
  },
  {
    id: 'genre-4',
    label: 'genre',
    placeholder: 'Select Genre',
    type: 'select',
    options: [
      {
        value: 'genre1',
        text: 'genre',
        id: 'genre4-genre1',
      },
    ],
  },
  {
    id: 'overview-5',
    label: 'overview',
    placeholder: 'Overview here',
    type: 'text',
  },
  {
    id: 'runtime-6',
    label: 'runtime',
    placeholder: 'Runtime here',
    type: 'text',
  },
];

const moviesList = [
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'First description',
    title: 'First title',
    year: '2005',
    genre: 'drama',
    id: '1',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Second title',
    year: '2002',
    genre: 'drama',
    id: '2',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Comedy title',
    year: '2009',
    genre: 'comedy',
    id: '3',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Second title',
    year: '2009',
    genre: 'drama',
    id: '4',
  },
];
const genres = [
  {
    type: 'Drama',
    id: 'Drama1',
  },
  {
    type: 'Comedy',
    id: 'Comedy1',
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
  addMovieForm,
  editMovieForm,
  moviesList,
  genres,
  sortingOptions,
};
