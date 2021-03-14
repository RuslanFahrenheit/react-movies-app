import React from 'react';
import { Heading } from '../heading';
import { Input } from '../input';
import { Button } from '../button';
import './search.scss';

const Search = () => (
  <div className="search-wr">
    <Heading level="h2" title="Find your movie" />
    <div className="search">
      <Input
        placeholder="What do you want to watch?"
      />
      <Button
        variant="primary"
      >
        Search
      </Button>
    </div>
  </div>
);

export { Search };
