import React from 'react';
import { Billboard } from './components/billboard';
import { Main } from './components/main';
import { MoviesList } from './containers/moviesList';
import { ErrorBoundary } from './containers/errorBoundary';

const App = () => (
  <>
    <Billboard />
    <Main>
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
    </Main>
  </>
);

export { App };
