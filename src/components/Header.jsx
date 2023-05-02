import React from 'react'
import logo from '../assets/logo.webp'

const Header = ({ setChangeBackground }) => {
  return (
    <nav className='flex justify-center w-full '>
      <img
        src={logo}
        alt=''
        className='h-20 cursor-pointer'
        onMouseEnter={() => setChangeBackground(true)}
        onMouseLeave={() => setChangeBackground(false)}
      />
    </nav>
  )
}

export default Header
