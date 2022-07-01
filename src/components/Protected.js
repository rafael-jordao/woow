import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Protected = ({ childre }) => {
    const navigate = useNavigate();
    const { user } = UserAuth()

    if (!user) navigate('/')

    return childre
}

export default Protected;