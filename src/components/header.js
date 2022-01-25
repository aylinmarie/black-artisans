import PropTypes from 'prop-types';
import React from 'react';
import Navigation from './navigation';

import * as stylesheet from './header.module.css';

const Header = ({ siteTitle }) => {
  return (
    <header className={stylesheet.root}>
      <Navigation />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
