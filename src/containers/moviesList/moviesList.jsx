import React from 'react';
import { MovieCard } from '../../components/movieCard';
import { Filter } from '../../components/filter';

const movies = [
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'First description',
    title: 'First title',
    year: '2009',
    genre: 'drama',
    id: '1',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Second title',
    year: '2009',
    genre: 'drama',
    id: '2',
  },
  {
    banner: 'http://placehold.jp/250x300.png',
    description: 'Second description',
    title: 'Second title',
    year: '2009',
    genre: 'drama',
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
    value: 'release',
    text: 'release date',
    id: 'release1',
  },
  {
    value: 'genre',
    text: 'genre',
    id: 'genre2',
  },
];

const MoviesList = () => (
  <>
    <Filter
      genres={genres}
      resultsCount={4}
      sortingOptions={sortingOptions}
    />

    {movies.map(({
      banner,
      description,
      genre,
      id,
      title,
      year,
    }) => (
      <MovieCard
        key={id}
        banner={banner}
        description={description}
        genre={genre}
        title={title}
        year={year}
      />
    ))}
  </>
);

export { MoviesList };
