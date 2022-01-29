import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants';

import YouTube from 'react-youtube';


function RowPost({ title, isSmall, url }) {


    const [movies, setMovies] = useState([]);
    const [youtubeKey, setYoutubeKey] = useState();

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setMovies(response.data.results);
            }).catch((err) => {
                alert(err)
            })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (mid) => {
        axios.get(`/movie/${mid}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                if (response.data.results.length) {
                    setYoutubeKey(response.data.results[0].key)

                } else {
                    console.log('no vidoes found');
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    return (

        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map((movie, key) => {
                        return (

                            <img onClick={() => handleMovie(movie.id)} key={key} className={isSmall ? 'small-poster' : 'poster'} alt='poster' src={`${movie ? imageUrl + movie.backdrop_path : ''}`} />
                        )
                    })
                }

            </div>

            {
                youtubeKey && <YouTube videoId={youtubeKey} opts={opts} onReady={(event)=>console.log(event.target.playVideo())}/>
            }
        </div>



    )

}

export default RowPost
