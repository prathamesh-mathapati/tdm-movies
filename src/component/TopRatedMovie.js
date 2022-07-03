import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBarTwo } from './NavBarTwo'
import { Link } from 'react-router-dom'

export const TopRatedMovie = () => {

  const [TopReteds, setTopRated] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1`)
      .then(res => {
        setTopRated(res.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <NavBarTwo />
      <div className='container mx-auto'>
      <h1 className='bg-dark mt-3 card-redius text-p-overview-h text-info'>Top Rated Movies</h1>
        <div className='row'>
          {TopReteds.map((TopRated) => {
            return (

              <div key={TopRated.id} className=" card-redius card bg-colore-card m-4 col-4 col-md-3 col-sm-4  w-25 "
              style={{
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                height:'500px',
                backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${TopRated?.backdrop_path})`,
                 }}
               >
                <div className="card-body d-flex justify-content-end align-items-end">
                </div>
                  <h5 className="card-title text-light text-p-overview-h">{TopRated.title}</h5>
                  <strong className="card-text text-light">{TopRated.release_date}</strong>
                <Link to={`/TopRatedMovieDetails?id=${TopRated.id}`}>
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
