import React from 'react'
import './myStyle.css'
// import demoimg from '../staticImg/demoimg.jpg'
// import { SideBar } from './SideBar'

export const MainBar = ({movData}) => {
    
  return (
    <>
    {
    movData ?
    <div className='img-back' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w220_and_h330_face${movData.backdrop_path})`}}>
        <div className='d-flex justify-content-center align-item-center flex-wrap'>
            <div className='p-4'>
                <img className="card-img-top movie-img-wh " src={`https://image.tmdb.org/t/p/w220_and_h330_face${movData.poster_path}`}   alt="DATAIMAGE NOT FOUND"/>
            </div>
            <div className='p-4 ml-4 mt-4 shadow p-3 mb-5 bg-white rounded bg-white w-75'>
                <div className='text-left'>
                    <strong className='text-dark'>Movie Name: </strong>
                    <h1 className='text-danger font-weight-bold'>{movData.original_title}({movData.release_date ? movData.release_date.slice(0,4):''})</h1>
                    <p className='font-weight-bold'>Language:<span className='m-2'>({movData.original_language})</span></p>
                    <strong className='text-dark'>Release Date: <span>{movData.release_date}</span></strong>
                    <h4 className='text-dark font-weight-bold'>Overview:</h4>
                    <p className=''>{movData.overview}</p>
                    <strong className='text-dark'>popularity:<span className='m-2'>{movData.popularity}</span></strong>
                    <br/>
                    <strong className='text-dark'>Vote Average:<span className='m-2'>{movData.vote_average}</span></strong>
                    <br/>
                    <strong className='text-dark'>Vote count:<span className='m-2'>{movData.vote_count}</span></strong>
                </div>
            </div>
        </div>
    </div>
    : 
   ''
    }
    </>
  )
}
