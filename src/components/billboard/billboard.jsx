import React from 'react';
import PropTypes from 'prop-types';
import './billboard.scss';

const Billboard = ({ children }) => (
  <div className="billboard">
    {children}
  </div>
);

const {
  string,
  element,
  node,
  oneOfType,
} = PropTypes;

Billboard.propTypes = {
  children: oneOfType([string, element, node]),
};

export { Billboard };
