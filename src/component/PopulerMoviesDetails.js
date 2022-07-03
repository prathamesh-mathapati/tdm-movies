import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavBarTwo } from './NavBarTwo';

export const PopulerMoviesDetails = () => {
    const urlParams = window.location.search;
    const apiKey = "5d98a7a1405b8032e28c31e19e4d10a9"

    const [popularDetails, setPopularDetails] = useState([]);


    const apiUrl = `https://api.themoviedb.org/3/movie/${urlParams.slice(4)}?api_key=${apiKey}&language=en-US`

    useEffect(() => {
        getMovieWithId();
        // eslint-disable-next-line
    }, []);

    const getMovieWithId = async () => {
        try {
            const res = await axios.get(apiUrl);
            setPopularDetails(res.data)
        } catch (err) {
            console.error("ERROR IN getMovieWithId", err);
        }
    }

    return (
        <>
            <NavBarTwo />
            <div className=' container'>
                <div className='img-back m-auto' style={{
                    backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${popularDetails?.backdrop_path})`,
                     }}>
                    <div className='d-flex justify-content-center align-item-center flex-wrap'>
                        <div className='p-4'>
                            <img className="card-img-top movie-img-wh  " src={`https://image.tmdb.org/t/p/w220_and_h330_face${popularDetails?.poster_path}`} alt="DATAIMAGE NOT FOUND" />
                        </div>
                        <div className=' m-4 shadow details-background rounded  w-75'>
                            <div className='text-left'>
                                <strong className='text-col'>Movie Name: </strong>
                                <h3 className=' text-p-overview-h font-weight-bold'>{popularDetails?.original_title}({popularDetails?.release_date ? popularDetails?.release_date.slice(0, 4) : ''})</h3>
                                <p className='font-weight-bold text-col'>Language:<span className='m-2 mb-0'>({popularDetails?.original_language})</span></p>
                                <strong className='text-col'>Release Date: </strong>
                                <span className='font-weight-bold text-col-p'>{popularDetails?.release_date}</span>
                                <br/>
                                <strong className='text-col font-weight-bold'>Overview:</strong>
                                <p className='text-dark font-weight-bold text-col-p text-p-overview'>{popularDetails?.overview}</p>
                                <strong className='text-col'>popularity:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{popularDetails?.popularity}</span>
                                <br />
                                <strong className='text-col'>Vote Average:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{popularDetails?.vote_average}</span>
                                <br />
                                <strong className='text-col'>Vote count:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{popularDetails?.vote_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

