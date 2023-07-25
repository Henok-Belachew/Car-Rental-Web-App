import React from 'react'
import BgCar from '../assets/Advert-images/adimg2.png'
import {BsWhatsapp} from 'react-icons/bs'

function WhatsApp() {
  return (
    <div className='relative h-[178px] max-sm:text-center'>
      
        <div className='h-full drop-shadow-md w-full relative z-[3] items-center justify-center flex px-[67px] max-lg:flex-col max-lg:gap-5  gap-10'>
            <span className='font-[700] text-[32px] max-lg:text-[30px] w-fit block text-white'>Get in touch on whatsapp</span>
            <span className='text-accent font-[700] max-sm:text-[20px] max-sm:gap-3 md-lg:text-[26px] w-fit text-[32px] flex gap-6 items-center'> <BsWhatsapp/> (234)           812-262-4063  
            </span>
        </div>
        <div className='bg-black h-full w-full absolute opacity-10 top-0 z-[2]'></div>
        <img src={BgCar} className='absolute object-cover z-[-1] h-[178px] w-full top-0 ' alt="" />

    </div>
  )
}

export default WhatsApp
