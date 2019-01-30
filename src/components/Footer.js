import React from 'react'
import logo from '../images/logo/white.png'

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="footer logo" />
      <div className="footer-copyright">Preception &copy; 2018</div>
    </div>
  )
}
