import React from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaXmark} from 'react-icons/fa6'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <nav className='h-[100px] font-rubik w-max-full justify-between gap-4 relative z-10 pt-[13px] px-[67px] flex items-center' >
        <img src={logo} className='h-[51px] max-lg:h-[40px]' alt="" />
        
        {/* md:flex md:items-center md:pb-0 pb-12 absolute md:static md:justify-between bg-white md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9  ${open ? 'top-[100px] ':'top-[-500px]'}` */}
        <div className={`max-lg:flex-col max-lg:top-[100px] max-lg:pl-9 ${open ? 'max-lg:left-[0px]' : 'max-lg:left-[-100vw]'} max-lg:pb-7 max-lg:absolute max-lg:z-[-1] transition-left duration-[700ms] ease-in flex w-full`}>
            <ul className='flex font-[500] max-lg:text-center w-7/12 justify-between mx-auto max-lg:mx-auto max-lg:flex-col max-lg:w-11/12' >
            <li className='cursor-pointer hover:text-accent py-5'>Home</li>
            <li className='cursor-pointer hover:text-accent py-5'>About</li>
            <li className='cursor-pointer hover:text-accent py-5'>Models</li>
            <li className='cursor-pointer hover:text-accent py-5'>Testimonials</li>
            <li className='cursor-pointer hover:text-accent py-5'>Our Team</li>
            <li className='cursor-pointer hover:text-accent py-5'>Contact</li>
            </ul>

            <div className='flex max-lg:flex-col max-lg:w-11/12 max-lg:mx-auto max-lg:gap-0 gap-10 items-center'>
            <a href="" className='hover:text-accent max-lg:py-5 max-lg:w-full max-lg:text-center'>Sign In</a>
            <button className='bg-accent text-white max-lg:w-full px-[32px] py-[13px] rounded-md max-lg:py-5'>Register</button>
            </div>
        
        </div>

        {open ?  <FaXmark onClick={()=> {
          setOpen(!open)
        }} className='lg:hidden cursor-pointer text-[27px]'/> : <FaBars onClick={()=> {
          setOpen(!open)
        }} className='lg:hidden cursor-pointer text-[27px]'/> }
        
    </nav>
  )
}

export default Header
