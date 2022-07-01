import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn()

    } catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    if (user) navigate('/account')
  }, [user, navigate])

  return (
    <div className='middle'>
      <h1>It's easy. Use your's Google Account to login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default Login