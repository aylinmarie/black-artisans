import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import * as stylesheet from './header.module.css';

const Header = () => {
  return (
    <header className={stylesheet.root}>
      <nav aria-label="Main">
        <h1>
          <Link to="/">Black Artisans</Link>
        </h1>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
