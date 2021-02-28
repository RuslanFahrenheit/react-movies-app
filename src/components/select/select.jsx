import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  options = [],
  selected,
}) => (
  <select className="select">
    {options.map(({ value, text, id }) => (
      <option
        key={id}
        className="select__option"
        value={value}
        selected={selected}
      >
        {text}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  selected: PropTypes.bool,
};

export { Select };
