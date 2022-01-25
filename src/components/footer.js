import React from 'react';
import { ExternalLink } from '@components';

import * as stylesheet from './footer.module.css';

const Footer = () => (
  <footer className={stylesheet.root}>
    <div className={stylesheet.wrapper}>
      <div>
        © {new Date().getFullYear()}, Built by{' '}
        <ExternalLink href="https://www.aylinmarie.co">
          Aylin Marie
        </ExternalLink>
      </div>
      {/* <Button type="tertiary" onClick={()=>setDarkMode(!isDarkMode)}>{isDarkMode ? 'Light' : 'Dark'} Mode</Button> */}
      <nav className={stylesheet.nav}>
        {/* <a href="/privacy">Privacy Policy</a>
              <a href="/accessibility">Accessibility</a> */}
      </nav>
    </div>
  </footer>
);

export default Footer;
