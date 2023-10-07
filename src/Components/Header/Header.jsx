import React, { useContext } from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  let { user, signOutUser } = useContext(AuthContext);

  let signOut = () => {
    signOutUser()
    .then(result => {})
    .catch(error => console.log(error))
  }

  return (
    <div className='header'>
      <NavLink to='/'>Home</NavLink>
      {
        user ?
          <span className='user-information'>
            {user.displayName}
            <button onClick={signOut}>Sign out</button>
          </span>
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