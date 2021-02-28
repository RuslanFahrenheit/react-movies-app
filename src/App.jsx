import React from 'react';
import { Billboard } from './components/billboard';
import { Main } from './components/main';
import { MoviesList } from './containers/moviesList';

const App = () => (
  <>
    <Billboard />
    <Main>
      <MoviesList />
    </Main>
  </>
);

export { App };
