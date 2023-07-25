import React from 'react'
import car from '../assets/AboutCompImages/car.png'
import outlet from '../assets/AboutCompImages/carout.png'
import shop from '../assets/AboutCompImages/carshop.png'
import worker from '../assets/AboutCompImages/worker.jpg'

function AboutCompany() {
  return (
    <div className='relative top-[-100px] flex justify-center gap-10 px-[67px] max-sm:px-[30px] py-[64px] max-lg:flex-col '>
      <img  className='w-[432px] max-lg:mx-auto rounded-md self-start object-cover '  src={worker} alt="" />


      <div className='w-[40%] flex flex-col gap-6 max-lg:w-[70%] max-lg:text-center max-lg:mx-auto' >
        <h1 className='font-[500] text-[22px]'>About Company</h1>
        <h1 className='font-[700] text-[38px] leading-[48px] max-sm:leading-[46px]'>You start the engine and your adventure begins</h1>
        <p className='font-[400] text-[16px] text-darkish'>
            Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
        </p>

        <div className='flex justify-between max-sm:flex-col mt-4 gap-5'>
            <div className='flex max-sm:justify-between flex-col max-sm:flex-row max-sm:items-center gap-5'>
                <img className='w-[64px] md-lg:mx-auto' src={car} alt="" />
                <span className='font-[600] text-[32px] max-sm:text-[23px]'>85 <span className='font-[400] text-[16px]' >Car Types</span> </span>
            </div>
            <div className='flex flex-col gap-5 max-sm:justify-center max-sm:flex-row max-sm:items-center'>
                <img className='w-[64px] md-lg:mx-auto' src={outlet} alt="" />
                <span className='font-[600] text-[32px] max-sm:text-[22px]'>65 <span className='font-[400] max-sm-[15px] text-[16px]' >Rental Outlet</span> </span>
            </div>
            <div className='flex flex-col gap-5 max-sm:flex-row max-sm:justify-center max-sm:items-center'>
                <img className='w-[64px] md-lg:mx-auto' src={shop} alt="" />
                <span className='font-[600] text-[32px] max-sm:text-[23px]'>85 <span className='font-[400] text-[16px]' >Repair Shop</span> </span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AboutCompany
