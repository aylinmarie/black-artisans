import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <footer className="footer">
          <div className="footerWrapper">
            <div>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org" target="_blank">
                Gatsby
              </a>{' '}
              by{' '}
              <a href="https://www.aylinmarie.co" target="_blank">
                Aylin Marie
              </a>
            </div>
            {/* <Button type="tertiary" onClick={()=>setDarkMode(!isDarkMode)}>{isDarkMode ? 'Light' : 'Dark'} Mode</Button> */}
            <nav className="footerNav">
              {/* <a href="/privacy">Privacy Policy</a>
              <a href="/accessibility">Accessibility</a> */}
            </nav>
          </div>
        </footer>
)

export default Footer
