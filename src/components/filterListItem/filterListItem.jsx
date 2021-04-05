import React from 'react';
import PropTypes from 'prop-types';

const FilterListItem = ({
  title,
  value,
  handleClick,
}) => (
  <button
    type="button"
    onClick={() => handleClick(value)}
  >
    {title}
  </button>
);

const {
  string,
  func,
} = PropTypes;

FilterListItem.propTypes = {
  title: string.isRequired,
  handleClick: func,
  value: string,
};

export { FilterListItem };
