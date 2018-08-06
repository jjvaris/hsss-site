import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Instagram, Github, Facebook, Linkedin } from './socials'

class Nav extends Component {
  state = {
    active: false,
  }

  handleNavClick = () => {
    console.log('close')
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
          <div className="logo">
            <h1>HSSS</h1>
            <div>Helsinki surf skate society</div>
          </div>
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
        <div className={`hide-menu ${active}`} onClick={this.handleNavClick} />
      </div>
    )
  }
}

export default Nav
