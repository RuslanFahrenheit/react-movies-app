import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  options = [],
  selected,
  selectId,
  label,
  onChange,
  onBlur,
}) => (
  <>
    {label && (
      <label htmlFor={selectId}>{label}</label>
    )}
    <select
      className="select"
      id={selectId}
      onChange={onChange}
      onBlur={onBlur}
    >
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
  </>
);

const {
  bool,
  string,
  instanceOf,
  func,
} = PropTypes;

Select.propTypes = {
  options: instanceOf(Array).isRequired,
  selected: bool,
  selectId: string,
  label: string,
  onChange: func,
  onBlur: func,
};

export { Select };
