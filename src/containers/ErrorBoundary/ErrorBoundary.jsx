import React from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({
  children,
  hasError,
}) => {
  const OopsText = () => <p>Oops, something went wrong :(</p>;

  return <>{hasError ? <OopsText /> : children}</>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  hasError: PropTypes.bool,
};

export { ErrorBoundary };
