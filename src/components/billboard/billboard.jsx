import React from 'react';
import { Header } from '../header';
import { Search } from '../search';
import './billboard.scss';

const Billboard = () => (
  <div className="billboard">
    <Header />
    <Search />
  </div>
);

export { Billboard };
