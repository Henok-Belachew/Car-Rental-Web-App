import React, { useState } from 'react'
import Hero from '../components/Hero'
import AddSection from '../components/AddSection'
import Bg from '../assets/HeroImages/bg.png'
import BookCar from '../components/BookCar'
import PlanTrip from '../components/PlanTrip'
import FlightAdd from '../components/FlightAdd'
import Testimonials from '../components/Testimonials'
import ChooseUs from '../components/ChooseUs'
import FAQ from '../components/FAQ'
import VchicleModels from '../components/VchicleModels'

function Home() {
  const [add, setAdd] = useState(true)
  return (
    <div className='mt-[45px]  '>
        <Hero/>
        <img className='absolute right-0 top-0 z-[2] max-lg:hidden' src={Bg} alt="" />
        <BookCar/>
        <PlanTrip/>
        <VchicleModels/>
        {add && <FlightAdd setAdd={setAdd}/>}
        <ChooseUs/>
        <Testimonials/>
        <FAQ/>
        <AddSection/>
      
    </div>
  )
}

export default Home
