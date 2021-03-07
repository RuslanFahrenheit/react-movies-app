import React from 'react';
import PropTypes from 'prop-types';

const handleClick = () => {
  throw new Error('HAHAHA');
};

const FilterListItem = ({
  title,
}) => (
  <button
    type="button"
    onClick={handleClick}
  >
    {title}
  </button>
);

FilterListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export { FilterListItem };
