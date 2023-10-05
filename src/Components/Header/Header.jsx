import React, { useContext } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  let { user } = useContext(AuthContext)
  console.log(user)
  return (
    <div className='header'>
      <NavLink to='/'>Home</NavLink>
      {
        user ?
          <div className='user-information'>
            <p>{user.email}</p>
            <button>Sign Out</button>
          </div>
          :
          <div className='header'>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </div>
      }
    </div>
  )
}

export default Header