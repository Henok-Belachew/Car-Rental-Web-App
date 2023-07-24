import React, { useState } from 'react'
import Hero from '../components/Hero'
import AddSection from '../components/AddSection'
import Bg from '../assets/HeroImages/bg.png'
import BookCar from '../components/BookCar'
import PlanTrip from '../components/PlanTrip'
import FlightAdd from '../components/FlightAdd'
import Testimonials from '../components/Testimonials'
import ChooseUs from '../components/ChooseUs'

function Home() {
  const [add, setAdd] = useState(true)
  return (
    <div className='mt-[45px]  '>
        <Hero/>
        <img className='absolute right-0 top-0 z-[2] max-lg:hidden' src={Bg} alt="" />
        <BookCar/>
        <PlanTrip/>
        {add && <FlightAdd setAdd={setAdd}/>}
        <ChooseUs/>
        <Testimonials/>
        
        <AddSection/>
      
    </div>
  )
}

export default Home
