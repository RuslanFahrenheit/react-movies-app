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
  handleFiltering,
  handleResetFilter,
}) => {
  const handleChange = (e) => {
    handleSorting(e.target.value);
  };

  const handleClickListItem = (item) => {
    handleFiltering(item);
  };

  const handleReset = () => {
    handleResetFilter();
  };

  return (
    <div className="filter">
      {
        genres.map(({ text, id, value }) => (
          <FilterListItem
            key={id}
            title={text}
            value={value}
            handleClick={handleClickListItem}
          />
        ))
      }
      <button
        type="button"
        onClick={handleReset}
      >
        Reset filter
      </button>
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
  handleFiltering: func,
  handleResetFilter: func,
};

export { Filter };
