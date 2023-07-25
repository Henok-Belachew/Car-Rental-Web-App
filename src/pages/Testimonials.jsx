import React from 'react'
import HeroCar from '../assets/HeroImages/HeroTopImg.png'
import WhatsApp from '../components/WhatsApp'
import Testimoniales from '../components/Testimonials'

function Testimonials() {
  return (
    <div  className='relative z-[4]'>
      <div className='relative top-[-100px] z-[4] h-[410px] w-[100vw]'>
      <img src={HeroCar} className='h-full object-cover w-full relative z-[2]' alt="" />
      <h1 className='absolute z-[5] top-0 flex flex-col max-lg:text-center justify-center px-[67px] text-black font-[700] text-[38px]  h-full w-full'>
        
      Testimonials
        <span className='font-[400] text-[16px]'>Home/Testimonials</span>
      
      </h1>
      <h1 className='absolute z-[3] top-0 bg-white opacity-[90%] text-black font-[700] text-[48px] text-center h-full w-full'></h1>
    
    </div>
    <Testimoniales/>
    <WhatsApp/>
    </div>
  )
}

export default Testimonials
