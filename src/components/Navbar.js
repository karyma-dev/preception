import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo/white.png'
import menu from '../images/nav/menu.svg'
import exit from '../images/nav/exit.svg'

export default class Navbar extends Component {
  state = {
    hidden: true
  }

  onClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  closeMenu = () => {
    this.setState({
      hidden: true
    })
  }

  render() {
    let hiddenToggler = this.state.hidden ? 'navbar-links hidden' : 'navbar-links'

    return (
      <div className="navbar">
        <div className="navbar-toggler">
          <img className="navbar-menu" src={menu} alt="hamburger menu" onClick={this.onClick} />
        </div>

        <Link to="/">
          <img className="navbar-logo" src={logo} alt="navbar logo" onClick={this.closeMenu} />
        </Link>

        <ul className={hiddenToggler}>
          <li className="navbar-links-exit">
            <img src={exit} alt="x" width="20px" onClick={this.closeMenu} />
          </li>

          <li className="navbar-links-item">
            <Link to="/" onClick={this.closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/process" onClick={this.closeMenu}>
              4 Step Process
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/pod" onClick={this.closeMenu}>
              How It Works
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/data" onClick={this.closeMenu}>
              Data
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/contact" onClick={this.closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}