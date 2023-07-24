import React, { useState } from 'react'
import carBg from '../assets/FaqImages/sideBg.png'
import {FaAngleDown} from 'react-icons/fa6'

function Que({QueId, id, setId, Que, Answer}) {
    
    return(
        <div className='w-[55%] max-lg:w-[80%] mx-auto relative z-[5]'>
            <div

            onClick={()=>{
                if (id == QueId) {
                    setId(0)
                    
                }
                else {
                    setId(QueId)
                    
                }
                
                
            }}
            className={` flex shadow-md duration-[400ms] cursor-pointer ${QueId === id ? "bg-accent" : "bg-white"} ${QueId === id ? "text-white" : "text-black"} flex justify-between py-7 px-5`}>
                <h1 className='font-[400] text-[21px] md-lg max-sm:text-[18px]'>{Que}</h1>
                <FaAngleDown className='font-extrabold' />
            </div>

            {/* ANSWER */}
            <p className={`duration-[7000ms] ease-in p-8 text-justify bg-white text-[16px] text-darkish leading-[24px] font-[400] ${id === QueId ? "h-fit" : "h-0"} ${id === QueId ? "block": "hidden"}`}>
                {Answer}

            </p>
        </div>
    )
}

function FAQ() {
    const [id, setId] = useState(0)
  return (
    
        
        <div className='relative'>

          <div className='w-[60%] mx-auto text-center flex flex-col gap-3 relative z-[2]'>
              <h1 className='font-[600] text-[22px]'>FAQ</h1>
              <h1 className='font-[700] text-[48px] max-lg:text-[36px] max-sm:leading-[46px]'>Frequently Asked Questions</h1>
              <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
          </div>


          <div className='mt-10 relative z-[2] py-10'>
              <Que
              
              Que="1. What is special about rental car deals?"
              Answer="
                    Comparing rental car deals is important as it helps find the best deal that
                    fits your budget and requirements, ensuring you get the most value for your money. 
                    By comparing various options, you can find deals that offer lower prices, additional services,
                    or better car models. You can find car rental deals by researching online and 
                    prices from different rental companies
              "
              setId={setId} QueId={1} id={id} />
              <Que Que="2. How do I find the car rental deals?"
               Answer="
                    You can find car rental deals by researching online and comparing prices from 
                    different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you
                    to compare prices and view available rental options. It is also recommended
                    to sign up for email newsletters and follow rental car companies on social media to be
                    informed of any special deals or promotions.
                "
              setId={setId} QueId={2} id={id} />
              <Que Que= "3. How do I find such low rental car prices?" 
              Answer="
                    Book in advance: Booking your rental car ahead of time can often result in lower prices.
                    Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity
                    to compare prices from multiple rental car companies. Look for discount codes and coupons:
                    Search for discount codes and coupons that you can use to lower the rental price. 
                    Renting from an off-airport location can sometimes result in lower prices.
              " setId={setId} QueId={3} id={id} />


              <img className='absolute top-[50%] transform -translate-y-1/2 left-0 z-[0] w-[350px] max-lg:w-[50%]' src={carBg} alt="" />

          </div>

      </div>
      
      
  )
}

export default FAQ
