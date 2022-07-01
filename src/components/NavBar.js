import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import styles from '../components/NavBar.module.css'

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
    <header className={styles.header}>
      <h2>WooW</h2>
      {user ? <Link onClick={handleSignOut} to="/">Logout</Link> : <Link to="/login">Sign in</Link>}
    </header>
  )
}

export default NavBar