import React from 'react';
import PropTypes from 'prop-types';
import CaribeLogo from './assets/caribe-logo.png'

import './header.css';

export const Header = ({ Tittle, Name }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>{Tittle}</h1>
      </div>
      <div>
        <b>{Name}</b>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  Tittle: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
};

Header.defaultProps = {
  user: null,
};
