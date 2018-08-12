import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from './header'
import { Instagram, Github, Facebook, Linkedin } from './socials'
import Logo from './logo'

class Nav extends Component {
  state = {
    active: false,
  }

  handleNavClick = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const active = this.state.active ? 'active' : ''
    return (
      <div>
        <span id="burger" onClick={this.handleNavClick}>
          <span />
          <span />
          <span />
          <span />
        </span>
        <div className={`sidenav ${active}`}>
          <Logo />
          <div className="links">
            <nav>
              <ul>
                <Link to="/" onClick={this.handleNavClick}>
                  <li>Home</li>
                </Link>
                <a href="#">
                  <li>Gallery</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ul>
            </nav>
            <div className="socials">
              <Facebook />
              <Linkedin />
              <Github />
              <Instagram />
            </div>
            <div className="credits">
              <p>hsss @ 2018. Design by Jouni.</p>
            </div>
          </div>
        </div>
        <div className={`hide-menu ${active}`} onClick={this.handleNavClick} />
      </div>
    )
  }
}

export default Nav
