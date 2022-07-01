import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Protected = ({ children }) => {
    const navigate = useNavigate();
    const { user } = UserAuth()

    if (!user) navigate('/')

    return children
}

export default Protected;