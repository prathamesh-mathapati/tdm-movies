import React from 'react'
import footerimg from '../staticImg/Footerimg.svg'

export const Footer = () => {
  return (
    <>
    <div className='row p-2 bg-dark footer-wh'>
        <div className='m-5'>
            <img className='w-25 ' src={footerimg} alt="" />
            <p className='bg-white ml-4 mt-4 w-50 text-primary h5'>Hi AKSHAY</p>
        </div>
        <div className='m-4'>
                <h3 className='text text-white'>THE BASICS</h3>
                <ul className='text-white list-group'>
                    <li className='nav nav-item'>About TMDB</li>
                    <li className='nav nav-item'>Contect us</li>
                    <li className='nav nav-item'>support Forums</li>
                    <li className='nav nav-item'>API</li>
                    <li className='nav nav-item'>System Status</li>
                </ul>
        </div>
        <div className='m-4'>
            <h3 className='text text-white'>THE BASICS</h3>
                <ul className='text-white list-group'>
                    <li className='nav nav-item'>Contribution Bible</li>
                    <li className='nav nav-item'>Add New Movie</li>
                    <li className='nav nav-item'>Add New TV Show</li>
                </ul>
        </div>
        <div className='m-4'>
            <h3 className='text text-white'>THE BASICS</h3>
                <ul className='text-white list-group'>
                    <li className='nav nav-item'>Guidelines</li>
                    <li className='nav nav-item'>Discussions</li>
                    <li className='nav nav-item'>Leadbords</li>
                    <li className='nav nav-item'>Twitter</li>
                </ul>
        </div>
        <div className='m-4'>
            <h3 className='text text-white'>LEGAL</h3>
                <ul className='text-white list-group'>
                    <li className='nav nav-item'>Terms of use</li>
                    <li className='nav nav-item'>API Terms of Use</li>
                    <li className='nav nav-item'>Privacy Policy</li>
                </ul>
        </div>
    </div>
    </>
  )
}
