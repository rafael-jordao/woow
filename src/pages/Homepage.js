import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      navigate('/account')
    }
  }, [googleSignIn, navigate])

  return (
    <div className='middle'>
      <h1>Hello to the Owen Wilson WooW!</h1>
      <p>Create your account.</p>
    </div>
  )
}

export default Homepage;