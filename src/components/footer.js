import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { ExternalLink } from '@components';

import * as stylesheet from './footer.module.css';

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allContentfulPage {
            nodes {
              slug
              title
            }
          }
        }
      `}
      render={(data) => {
        const _DATA = data.allContentfulPage.nodes;
        return (
          <footer className={stylesheet.root}>
            <div className={stylesheet.wrapper}>
              <div>
                © {new Date().getFullYear()}, Built by{' '}
                <ExternalLink href="https://www.aylinmarie.co">
                  Aylin Marie
                </ExternalLink>
              </div>
              <nav aria-label="Footer" className={stylesheet.nav}>
                {_DATA.map((page) => (
                  <Link key={page.title} to={`/${page.slug}`}>
                    {page.title}
                  </Link>
                ))}
              </nav>
            </div>
          </footer>
        );
      }}
    />
  );
};

export default Footer;
