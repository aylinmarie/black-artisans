import React from 'react';
import { Link } from 'gatsby';

import { ExternalLink } from '@components';

import * as stylesheet from './footer.module.css';

const Footer = () => {
  return (
    <footer className={stylesheet.root}>
      <div className={stylesheet.wrapper}>
        <div>
          © {new Date().getFullYear()}, Built by{' '}
          <ExternalLink href="https://www.aylinmarie.co">
            Aylin Marie
          </ExternalLink>
        </div>
        <nav aria-label="Footer">
          <Link to="/accessibility">Accessibility Statement</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
