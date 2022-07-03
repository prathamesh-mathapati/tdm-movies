import React, {  useState } from 'react'
import BRAND from '../staticImg/barnd.svg'
import axios from 'axios'
import { SideBar } from './SideBar'
import { Link } from 'react-router-dom'
import { PureMain } from './PureMain'


export const Navbar = () => {
    const [data,setData] = useState('')
    

    const handleClick = (e)=>{
        e.preventDefault()
        const {value} = e.target
        if(!value)return
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=${value}&page=1&include_adult=false`)
        .then(res=>setData(res.data.results))
        .catch(err=>console.error(err))
        
    }

    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-color-nav navbar-light">
        <Link className="navbar-brand h1" to="/">
            <img src={BRAND} alt="brand" className='w-50 h-50' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="mx-2 my-auto d-inline w-50">
            <input className="form-control  mr-sm-2"
             type="search" placeholder="Search movie"
              aria-label="Search"
              name={'Search'}
              onChange={handleClick}
              />
            </form>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item  active">
                    <Link className="nav-link text-white h6 m-3 btn-outline-info" to='/PopulerSearch' >Populer show</Link>    
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white h6 m-3 btn-outline-info" to='/TopRatedMovie' >Top Rated</Link>
                </li>
            </ul>
        </div>
    </nav>
   { data.length!==0?
    <SideBar movie={data}/>:<PureMain/>}
    </>
  )
}

