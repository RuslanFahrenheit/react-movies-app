import React, { useState } from 'react';
import { Billboard } from '../components/billboard';
import { Header } from '../containers/header';
import { Search } from '../components/search';
import { Main } from '../components/main';
import { MoviesList } from '../containers/moviesList';
import { ErrorBoundary } from '../containers/errorBoundary';

const Home = () => {
  const [moviePreview, setMoviePreview] = useState(null);

  const setPreview = (movie) => {
    setMoviePreview(movie);
  };

  const resetPreview = (movie) => {
    setMoviePreview(movie);
  };

  return (
    <>
      <Billboard
        preview={moviePreview}
        resetPreview={resetPreview}
      >
        <Header />
        <Search />
      </Billboard>

      <Main>
        <ErrorBoundary>
          <MoviesList
            setPreview={setPreview}
          />
        </ErrorBoundary>
      </Main>
    </>
  );
};

export { Home };
