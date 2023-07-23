import React from 'react'
import Hero from '../components/Hero'
import Bg from '../assets/HeroImages/bg.png'

function Home() {
  return (
    <div className='mt-[45px] px-[67px] '>
        <Hero/>
        <img className='absolute right-0 top-0 z-[2] max-lg:hidden' src={Bg} alt="" />
      
    </div>
  )
}

export default Home
