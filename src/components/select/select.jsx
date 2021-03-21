import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  options = [],
  selected,
  id,
  label,
  onChange,
  onBlur,
}) => (
  <>
    {label && (
      <label htmlFor={id}>{label}</label>
    )}
    <select
      className="select"
      id={id}
      defaultValue={selected}
      onChange={onChange}
      onBlur={onBlur}
    >
      {options.map(({ value, text }) => (
        <option
          key={`${id}_${value}`}
          className="select__option"
          value={value}
        >
          {text}
        </option>
      ))}
    </select>
  </>
);

const {
  string,
  instanceOf,
  func,
} = PropTypes;

Select.propTypes = {
  options: instanceOf(Array).isRequired,
  selected: string,
  id: string,
  label: string,
  onChange: func,
  onBlur: func,
};

export { Select };
