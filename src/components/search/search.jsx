import React from 'react';
import { Heading } from '../heading';
import { Input } from '../input';
import { PrimaryButton } from '../buttons';
import './search.scss';

const Search = () => (
  <div className="search-wr">
    <Heading level="h2" title="Find your movie" />
    <div className="search">
      <Input placeholder="What do you want to watch?" />
      <PrimaryButton>Search</PrimaryButton>
    </div>
  </div>
);

export { Search };
