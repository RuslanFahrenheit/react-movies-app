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
}) => (
  <div className="filter">
    {
      genres.map(({ type, id }) => (
        <FilterListItem key={id} title={type} />
      ))
    }
    <p>Sort By</p>
    <Select options={sortingOptions} />
    <ResultsCount count={resultsCount} />
  </div>
);

Filter.propTypes = {
  genres: PropTypes.instanceOf(Array),
  resultsCount: PropTypes.number.isRequired,
  sortingOptions: PropTypes.instanceOf(Array),
};

export { Filter };
