import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  type = 'text',
  placeholder,
  label,
  value,
  name,
  onChange,
}) => (
  <label className="label">
    {label}
    <input
      className={`input input--${type}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </label>
);

const {
  string,
  func,
} = PropTypes;

Input.propTypes = {
  type: string,
  placeholder: string,
  label: string,
  value: string,
  name: string,
  onChange: func,
};

export { Input };
