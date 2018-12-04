import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'>AGH Teams</Link>
        <SignedInLinks />
        <SignedOutLinks />
        <ul className="right">
          <li><NavLink to='/'>Divisions</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(Navbar)