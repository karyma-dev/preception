import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/process">4 Step Process</Link>
      <Link to="/guide">How It Works</Link>
      <Link to="/data">Data</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
