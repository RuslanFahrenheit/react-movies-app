import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  type = 'text',
  placeholder,
  label,
}) => (
  <label className="label">
    {label}
    <input
      className={`input input--${type}`}
      type={type}
      placeholder={placeholder}
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
};

export { Input };
