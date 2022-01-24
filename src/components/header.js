import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import * as stylesheet from './header.module.css';

const Header = ({ siteTitle }) => {
  return (
    <header className={stylesheet.root}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
