import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBarTwo } from './NavBarTwo'
import { Link } from 'react-router-dom'


export const PopulerSearch = () => {

  const [populers, setPopuler] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1`)
      .then(res => {
        setPopuler(res.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  
  return (
    <>
      <NavBarTwo />
      <div className='container mx-auto'>
      <h1 className='card-redius text-p-overview-h bg-dark mt-3 text-info'>Movies Populer Search</h1>
        <div className='row'>
          {populers.map((populer) => {
            return (
              <div
                key={populer.id}
                className="card-redius card bg-colore-card text-p-overview m-4 col-4 col-md-3 col-sm-4  w-25 "
                style={{
                  backgroundRepeat:'no-repeat',
                  backgroundSize:'cover',
                  height:'500px',
                  backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${populer?.backdrop_path})`,
                   }}>
                <div className="card-body d-flex justify-content-end align-items-end">
                </div>
                  <h4 className="text-light card-title text-p-overview-h">{populer.title}</h4>
                  <strong className="card-text text-light ">{populer.release_date}</strong>
                  <Link to={`/PopulerMoviesDetails?id=${populer.id}`}>
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
