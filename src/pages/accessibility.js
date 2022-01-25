import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AccessibilityPage = () => {
  return (
    <Layout>
      <Seo title="Accessibility" />
      <section>
        <p>Last updated: August 2, 2020</p>
        <h2>Accessibility Statement</h2>
        <p>
          This project is committed to providing a website that is accessible to
          the widest possible audience, regardless of technology or ability. I
          am actively working to increase the accessibility and usability of
          this website and in doing so adhere to{' '}
          <a
            href="https://www.w3.org/TR/WCAG21/"
            target="_blank"
            rel="noreferrer"
          >
            Level AA WCAG 2.1
          </a>{' '}
          standards. These guidelines explain how to make web content more
          accessible for people with disabilities. Conformance with these
          guidelines will help make the web more user friendly for all people.
        </p>
        <p>
          While Black Artisans strive to adhere to the accepted guidelines and
          standards for accessibility and usability, it is not always possible
          to do so in all areas of the website.
        </p>
        <p>
          If you experience any issues with accessibility,{' '}
          <a href="mailto:hello@aylinmarie.co" target="_blank" rel="noreferrer">
            please contact me
          </a>
          .
        </p>
      </section>
    </Layout>
  );
};

export default AccessibilityPage;
