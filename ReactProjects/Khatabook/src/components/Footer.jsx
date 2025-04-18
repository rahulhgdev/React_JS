import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center text-[18px] text-white py-4'>
        Made by <Link className='underline' to="https://github.com/rahulhgdev" target='_blank'>rahulhgdev</Link> with love &#10084; Copyright &copy; 2025
    </footer>
  )
}

export default Footer