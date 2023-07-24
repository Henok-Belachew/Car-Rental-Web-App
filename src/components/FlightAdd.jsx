import React from 'react'
import plane from '../assets/Advert-images/plane1.png'
import {FaXmark} from 'react-icons/fa6'

function FlightAdd({setAdd}) {
  return (
    <div className='flex relative gap-5 bg-[#2D2D2D] px-[67px] py-10 max-lg:flex-col'>
      <div className='text-white max-lg:text-center'>
        <h1 className='font-[700] text-[48px] max-lg:text-[38px]'>Save big with our affordable flight!</h1>
        <h1 className='font-[400] text-[26px]' >Tommorow brings us together. <span className='text-accent'>24/7</span> Support.</h1>
      </div>
      <img src={plane} className='w-[310px] self-center max-lg:w-[80%]' alt="" />
      <FaXmark onClick={() => {setAdd(false)}} className='absolute text-accent text-[40px] cursor-pointer top-5 right-5'/>
    </div>
  )
}

export default FlightAdd
