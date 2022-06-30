import { UserAuth } from '../context/AuthContext'
import React from 'react'

const Account = () => {
    const { user } = UserAuth()
    
    return (
        <div>
            <h1>Seja bem-vindo, {user.displayName}</h1>
        </div>
    )
}

export default Account