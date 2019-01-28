import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo/white.png'
import menu from '../images/nav/menu.svg'

export default class Navbar extends Component {
  state = {
    hidden: true
  }

  onClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  onNavigate = () => {
    this.setState({
      hidden: true
    })
  }

  render() {
    let hiddenToggler = this.state.hidden ? 'navbar-links hidden' : 'navbar-links'

    return (
      <div className='navbar'>
        <div className='navbar-toggler'>
          <img src={menu} alt='hamburger menu' onClick={this.onClick} />
        </div>

        <div className='navbar-flex-container'>
          <Link to='/'>
            <img className='navbar-logo' src={logo} alt='navbar logo' onClick={this.onNavigate} />
          </Link>

          <ul className={hiddenToggler}>
            <li className='navbar-links-item'>
              <Link to='/' onClick={this.onNavigate}>
                Home
              </Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/process' onClick={this.onNavigate}>
                4 Step Process
              </Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/pod' onClick={this.onNavigate}>
                How It Works
              </Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/data' onClick={this.onNavigate}>
                Data
              </Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/contact' onClick={this.onNavigate}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
