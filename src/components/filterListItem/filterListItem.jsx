import React from 'react';
import PropTypes from 'prop-types';

const FilterListItem = ({
  title,
}) => (
  <button
    type="button"
  >
    {title}
  </button>
);

FilterListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export { FilterListItem };
