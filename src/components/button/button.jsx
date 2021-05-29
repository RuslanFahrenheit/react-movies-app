import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  children,
  component: ButtonComponent = 'button',
  onClick,
  type = 'button',
  variant = '',
  expanded = false,
  additionalClass = '',
  ...rest
}) => (
  <ButtonComponent
    className={
      classNames('button', {
        [`button--${variant}`]: variant,
        'button--expanded': expanded,
        [additionalClass]: additionalClass,
      })
    }
    type={type}
    onClick={onClick}
    {...rest}
  >
    {children}
  </ButtonComponent>
);

const {
  bool,
  string,
  element,
  node,
  func,
  oneOf,
  oneOfType,
} = PropTypes;

Button.propTypes = {
  children: oneOfType([string, element, node]).isRequired,
  component: oneOfType([string, func]),
  onClick: func,
  type: string,
  variant: oneOf(['primary', 'secondary']),
  expanded: bool,
  additionalClass: string,
};

export { Button };
