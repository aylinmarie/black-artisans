import React from 'react'

import * as stylesheet from './footer.module.css'

const Footer = () => (
  <footer className={stylesheet.root}>
          <div className={stylesheet.wrapper}>
            <div>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
                Gatsby
              </a>{' '}
              by{' '}
              <a href="https://www.aylinmarie.co" target="_blank" rel="noreferrer">
                Aylin Marie
              </a>
            </div>
            {/* <Button type="tertiary" onClick={()=>setDarkMode(!isDarkMode)}>{isDarkMode ? 'Light' : 'Dark'} Mode</Button> */}
            <nav className={stylesheet.nav}>
              {/* <a href="/privacy">Privacy Policy</a>
              <a href="/accessibility">Accessibility</a> */}
            </nav>
          </div>
        </footer>
)

export default Footer
