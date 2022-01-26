import React from 'react';

import Seo from './seo';
import Footer from './footer';
import Header from './header';

class Template extends React.Component {
  render() {
    // Refactor styling
    const { children, ...rest } = this.props;

    return (
      <>
        <Seo />
        <Header />
        <main {...rest}>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Template;
