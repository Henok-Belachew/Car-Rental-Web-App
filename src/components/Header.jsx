import React from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaXmark} from 'react-icons/fa6'
import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <nav className='h-[100px] font-rubik w-max-full justify-between gap-4 pt-[13px] px-[67px] flex items-center' >
        <img src={logo} className='h-[51px] ' alt="" />
        
        
        <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:justify-between bg-white md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            <ul className='flex font-[500] w-7/12 justify-between mx-auto max-lg:ml-[25px] max-lg:flex-col max-lg:w-11/12' >
            <li className='cursor-pointer hover:text-accent py-5'>Home</li>
            <li className='cursor-pointer hover:text-accent py-5'>About</li>
            <li className='cursor-pointer hover:text-accent py-5'>Models</li>
            <li className='cursor-pointer hover:text-accent py-5'>Testimonials</li>
            <li className='cursor-pointer hover:text-accent py-5'>Our Team</li>
            <li className='cursor-pointer hover:text-accent py-5'>Contact</li>
            </ul>

            <div className='flex  max-lg:ml-[25px] gap-10 items-center'>
            <a href="" className='hover:text-accent'>Sign In</a>
            <button className='bg-accent text-white {
                
            } px-[32px] py-[13px] rounded-md'>Register</button>
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
