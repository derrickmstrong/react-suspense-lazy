import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <div>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/about' className='nav-link'>
          About
        </Link>
      </div>
    );
}

export default Nav
