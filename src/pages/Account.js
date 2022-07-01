import { UserAuth } from '../context/AuthContext'
import React from 'react'

const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'

const Account = () => {
    const { user } = UserAuth()
    const [data, setData] = React.useState([]);

    const handleWowClick = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json)
        console.log(json)
    }

    return (
        <div className='middle'>
            <h1>Está pronto para muitos WooWs, {user.displayName}?</h1>
            <p>Clique no botão abaixo</p>
            {data.map((movie) => {
                return (
                    <div key={movie.movie}>
                        <h2>{movie.movie}</h2>
                        <video controls width="800" src={movie.video['1080p']} />
                    </div>
                )
            })}
            <button onClick={handleWowClick}>Get a new WooW</button>
        </div>
    )
}

export default Account