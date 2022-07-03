import React, { useState } from 'react'
import { MainBar } from './MainBar'
import './myStyle.css'

export const SideBar = ({ movie }) => {
    const [movieDAta, setSearch] = useState('')


    const MovieDetails = (movData) => {
        return setSearch(movData)

    }

    return (
        <>
            <div className="d-flex" id="wrapper">
                <div className="border-end  scrolling-page " id="sidebar-wrapper">
                    <div className="list-group list-group-flush">
                        <div className='scroll' data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
                            {
                                movie ? movie.map(movie =>
                                    <div key={movie.id} className="scrolling  list-group-item list-group-item-action
                         list-group-item-light p-3 client-h"
                                        onClick={() => MovieDetails(movie)}
                                    >
                                        <div className='card bg-colore-card'>
                                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="card-img" />
                                            <div className='card-body'>
                                                <div className='text-light'>{movie.title}({movie.release_date ? movie.release_date.slice(0, 4) : ''})</div>
                                                <div className='text-light'><strong>language:</strong>{movie.original_language}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    : ''
                            }
                        </div>
                    </div>
                </div>
                <MainBar movData={movieDAta} />
            </div>
        </>
    )
}
