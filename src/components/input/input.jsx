import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  type = 'text',
  placeholder,
  label,
  value,
}) => (
  <label className="label">
    {label}
    <input
      className={`input input--${type}`}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  </label>
);

const {
  string,
} = PropTypes;

Input.propTypes = {
  type: string,
  placeholder: string,
  label: string,
  value: string,
};

export { Input };
