import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const AddMovieButton = ({
  onClick,
}) => (
  <button
    className="button button--add"
    type="button"
    onClick={onClick}
  >
    + Add movie
  </button>
);

AddMovieButton.propTypes = {
  onClick: PropTypes.func,
};

const PrimaryButton = ({
  onClick,
  children,
}) => (
  <button
    className="button button--primary"
    type="button"
    onClick={onClick}
  >
    { children }
  </button>
);

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const SecondaryButton = ({
  onClick,
}) => (
  <button
    className="button button--secondary"
    type="button"
    onClick={onClick}
  >
    + Add movie
  </button>
);

SecondaryButton.propTypes = {
  onClick: PropTypes.func,
};

export {
  AddMovieButton,
  PrimaryButton,
  SecondaryButton,
};
