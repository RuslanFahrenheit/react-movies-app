import React from 'react';
import { Billboard } from '../components/billboard';
import { Header } from '../containers/header';
import { Search } from '../components/search';
import { Main } from '../components/main';
import { MoviesList } from '../containers/moviesList';
import { ErrorBoundary } from '../containers/errorBoundary';

const Home = () => (
  <>
    <Billboard>
      <Header />
      <Search />
    </Billboard>

    <Main>
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
    </Main>
  </>
);

export { Home };
