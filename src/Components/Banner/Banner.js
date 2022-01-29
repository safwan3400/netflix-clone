import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import './Banner.css'
function Banner() {
    const [trending, setTrending] = useState();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            const randomIndex = Math.round(Math.random() * 20)
            console.log(randomIndex);
            setTrending(response.data.results[randomIndex])
        })
    }, [])
    return (
        <div
            className='banner' style={{ backgroundImage: `url(${trending ? imageUrl + trending.backdrop_path : ''})` }}>
            <div className='content' >
                <h1 className='title'>{trending ? trending.title : ""}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{trending ? trending.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
