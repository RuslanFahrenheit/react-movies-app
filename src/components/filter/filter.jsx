import React from 'react';
import PropTypes from 'prop-types';
import { ResultsCount } from '../resultsCount';
import { FilterListItem } from '../filterListItem/filterListItem';
import { Select } from '../select';
import './filter.scss';

const Filter = ({
  genres,
  resultsCount,
  sortingOptions,
  handleSorting,
}) => {
  const handleChange = (e) => {
    handleSorting(e.target.value);
  };

  return (
    <div className="filter">
      {
        genres.map(({ text, id }) => (
          <FilterListItem key={id} title={text} />
        ))
      }
      <p>Sort By</p>
      <Select
        options={sortingOptions}
        onChange={handleChange}
      />
      <ResultsCount count={resultsCount} />
    </div>
  );
};

const {
  instanceOf,
  number,
  func,
} = PropTypes;

Filter.propTypes = {
  genres: instanceOf(Array),
  resultsCount: number.isRequired,
  sortingOptions: instanceOf(Array),
  handleSorting: func,
};

export { Filter };
