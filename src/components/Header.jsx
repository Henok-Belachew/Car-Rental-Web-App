import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className='h-[100px] font-rubik w-max-full justify-between gap-4 pt-[13px] px-[67px] flex items-center' >
        <img src={logo} className='h-[51px] ' alt="" />
        <ul className='flex font-[500] w-6/12 justify-between sm:hidden md:hidden lg:flex' >
            <li className='cursor-pointer hover:text-accent'>Home</li>
            <li className='cursor-pointer hover:text-accent'>About</li>
            <li className='cursor-pointer hover:text-accent'>Models</li>
            <li className='cursor-pointer hover:text-accent'>Testimonials</li>
            <li className='cursor-pointer hover:text-accent'>Our Team</li>
            <li className='cursor-pointer hover:text-accent'>Contact</li>
            
        </ul>

        <div className='flex gap-10 items-center'>
            <a href="" className='hover:text-accent'>Sign In</a>
            <button className='bg-accent text-white {
                
            } px-[32px] py-[13px] rounded-md'>Register</button>
        </div>
        
    </nav>
  )
}

export default Header
