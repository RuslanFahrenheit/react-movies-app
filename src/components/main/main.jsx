import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

const Main = ({
  children,
}) => (
  <div className="main-wr">
    <main className="main">{children}</main>
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

export { Main };
