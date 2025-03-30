import React from 'react'
import NotFoundImg  from '../assets/notfound.svg';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='flex place-items-center bg-yellow-200 h-screen flex-col justify-center'>
        <img src={NotFoundImg} alt="404" height="80" width="80"/>
        <p className='text-xl md:text-3xl mt-4 text-center'>This page doesn't exist, to access<Link className='text-blue-700 text-2xl underline' to="/signup"> Digital Khatabook</Link></p>
    </div>
  )
}

export default NotFound