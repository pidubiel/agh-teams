import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'>AGH-Teams</Link>
        <SignedInLinks />
        <SignedOutLinks />
        <ul className="right">
          <li><NavLink to='/'>Divisions</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar