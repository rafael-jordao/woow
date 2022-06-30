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
  }

  React.useEffect(() => {
    if(user) navigate('/account')
  }, [user])

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default Login