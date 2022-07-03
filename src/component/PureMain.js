import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const PureMain = () => {
    const [defaultMovies,setDefaultMovies] = useState([])
    const apiKey = '5d98a7a1405b8032e28c31e19e4d10a9'

    const defaultMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

    const getdefaultsMovies = async ()=>{
        try{
            const res = await axios.get(defaultMoviesUrl)
            setDefaultMovies(res.data.results)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getdefaultsMovies()
        // eslint-disable-next-line
    },[])
    
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='card-redius text-p-overview-h bg-dark mt-3 text-info'>Movies Now Playing</h1>
        <div className='row'>
          {defaultMovies.map((defaultMovie) => {
            return (

              <div key={defaultMovie.id} className="card bg-colore-card m-4 col-4 col-md-3 col-sm-4  w-25 "
              style={{
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                height:'500px',
                backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${defaultMovie?.backdrop_path})`,
                 }}
               >
                <div className="card-body d-flex justify-content-end align-items-end">
                </div>
                  <h5 className="card-title text-light text-p-overview-h">{defaultMovie.title}</h5>
                  <strong className="card-text text-light">{defaultMovie.release_date}</strong>
                <Link to={`/defaultMovieMovieDetails?id=${defaultMovie.id}`}>
                  <button className='btn btn-outline-info m-4'>Chack Details</button>
                </Link>
              </div>

            )
          })
          }
        </div>
      </div>
    </>
  )
}
