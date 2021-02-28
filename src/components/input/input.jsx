import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  type = 'text',
  placeholder,
}) => (
  <input
    className={`input input--${type}`}
    type={type}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export { Input };
