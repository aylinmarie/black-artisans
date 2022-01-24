import React from 'react'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Header from './header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Header/>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
