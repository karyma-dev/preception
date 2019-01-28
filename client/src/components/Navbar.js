import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo/white.png'
import menu from '../images/nav/menu.svg'

export default function Navbar() {
  return (
    <Fragment>
      <div className='navbar'>
        <div className='navbar-toggler'>
          <img src={menu} alt='hamburger menu' />
        </div>

        <div className='navbar-flex-container'>
          <Link to='/'>
            <img className='navbar-logo' src={logo} alt='navbar logo' />
          </Link>

          <ul className='navbar-links'>
            <li className='navbar-links-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/process'>4 Step Process</Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/pod'>How It Works</Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/data'>Data</Link>
            </li>
            <li className='navbar-links-item'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}
