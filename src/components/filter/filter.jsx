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
}) => (
  <div className="filter">
    {
      genres.map(({ type, id }) => (
        <FilterListItem key={id} title={type} />
      ))
    }
    <p>Sort By</p>
    <Select
      options={sortingOptions}
      onChange={handleSorting}
    />
    <ResultsCount count={resultsCount} />
  </div>
);

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
