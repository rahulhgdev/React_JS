import React from 'react'
import logo from '../assets/notebook.svg'
const Header = () => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <img src={logo} alt="" height="40" width="40" />
      <h1 className='font-semibold text-[24px] text-center Header'>Digital Khatabook</h1>
    </div>
  )
}

export default Header