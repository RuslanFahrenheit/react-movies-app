import React from 'react';
import logo from '../../images/logo.svg';
import { AddMovieButton } from '../buttons';
import './header.scss';

const Header = () => (
  <header className="header">
    <img
      src={logo}
      width="100"
      height="100"
      alt="logo"
    />
    <AddMovieButton />
  </header>
);

export { Header };
