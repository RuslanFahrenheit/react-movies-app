import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const { onError } = this.props;

    onError(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Oops, something went wrong.</h1>;
    }

    return children;
  }
}

const {
  string,
  element,
  node,
  oneOfType,
  func,
} = PropTypes;

ErrorBoundary.propTypes = {
  children: oneOfType([string, element, node]),
  onError: func,
};

export { ErrorBoundary };
