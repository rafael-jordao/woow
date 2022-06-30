import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <header>
      <h2>WooW</h2>
      {user ? <Link onClick={handleSignOut} to="/">Logout</Link> : <Link to="/login">Sigin</Link>}
    </header>
  )
}

export default NavBar