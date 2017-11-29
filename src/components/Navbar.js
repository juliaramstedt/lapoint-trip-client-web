import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { logout } from '../helpers/auth'

const Navbar = (props) => {
  return (
    <nav className='Navbar'>
      <div className='Navbar__link'>
        <Link to='/'>Home</Link>
      </div>
      <div className='Navbar__link'>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <div className='Navbar__link'>
        <Link to='/feed'>Feed</Link>
      </div>
      <div className='Navbar__link'>
        <Link to='/question'>Questions</Link>
      </div>
      <div className='Navbar__link Navbar__link--username'>
        {props.authed
          ? <span>
              {props.user.displayName}
              <button
                onClick={() => { logout() }}
                >Logout</button>
            </span>
          : <span>
              <Link to='/login'>Login</Link>
            </span>}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  authed: PropTypes.bool,
  user: PropTypes.object
}

export default Navbar
