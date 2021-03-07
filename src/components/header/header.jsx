import React from 'react';
import logo from '../../images/logo.svg';
import { Button } from '../button';
import './header.scss';

const Header = () => (
  <header className="header">
    <img
      src={logo}
      width="100"
      height="100"
      alt="logo"
    />
    <Button
      variant="action"
    >
      + Add movie
    </Button>
  </header>
);

export { Header };
