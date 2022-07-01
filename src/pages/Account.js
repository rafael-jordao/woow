import { UserAuth } from '../context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'

const Account = () => {
    const { user } = UserAuth()
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()

    const handleWowClick = async () => {
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setData(json)
        setLoading(false)
        console.log(json)
    }

    React.useEffect(() => {
        if (user == null) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <div className='middle'>
            {user ? <h1>Welcome, {user.displayName}!</h1> : <h1>You should login</h1>}
            <p>Click to see what happens</p>
            {data.map((movie) => {
                return (
                    <div key={movie.movie}>
                        <h2>{movie.movie}</h2>
                        <video controls src={movie.video['1080p']} />
                    </div>
                )
            })}
            {loading ? <button disabled>Loading...</button> : <button onClick={handleWowClick}>Get a new WooW</button>}

        </div>
    )
}

export default Account