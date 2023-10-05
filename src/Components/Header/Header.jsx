import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Header