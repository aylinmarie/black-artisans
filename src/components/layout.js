import React from 'react'

import Seo from './seo'
import Footer from './footer'
import Header from './header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Header/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
