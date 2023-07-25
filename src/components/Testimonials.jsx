import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import customer1 from '../assets/ReviewImages/customer1.jpg'
import customer2 from '../assets/ReviewImages/customer2.jpg'



const revsDetails = [
    {
        'id':1,
        revP:"Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.",
        revImg:customer1,
        revName:'Larry Potter',
        revLoc:'Mexico',

    },

    {
        'id':2,
        revP:'"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."',
        revImg:customer2,
        revName:'Ojeyinka feoluwa',
        revLoc:'NIgeria',

    },
    {
        'id':3,
        revP:'"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"',
        revImg:customer1,
        revName:'Larry Potter',
        revLoc:'Mexico',

    },
];

function TestCard({revP, revImg, revName, revLoc}) {
    return(
        <div className='bg-white p-10 min-w-[490px] md-lg:min-w-[390px] max-sm:min-w-[350px] rounded-lg shadow-lg flex flex-col justify-between'>
            <p className='font-[400] text-[18px] max-sm:text-[16px] '>{revP}</p>

            <div className='items-center mt-6 gap-6 flex'>
                <img src={revImg} className='rounded-full w-[80px] max-lg:w-[60px] ' alt="" />
                <span>
                    <h1 className='font-[700] md-sm:text-[14px] text-[18px]'>{revName}</h1>
                    <h1 className='font-[400] md-sm:text-[14px] text-[18px]'>{revLoc}</h1>
                </span>

                <FaQuoteRight className='ml-auto text-[50px] text-accent'/>
            </div>

        </div>
    )
}

function Testimonials() {
  return (
    <div className='px-[67px] max-sm:px-[30px] pt-10 pb-[120px]'>
      <div className='text-center flex flex-col gap-5 w-[60%] max-sm:w-[90%] mx-auto'>
        <h1 className='font-[600] text-[22px]'>Reviewed by People</h1>
        <h1 className='font-[700] text-[48px] max-lg:text-[36px] max-sm:leading-[46px]'>Client's Testimonials</h1>
        <p className='font-[400] text-[18px] max-sm:text-[16px]'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      </div>

      <div className='flex gap-10 overflow-scroll mt-10  scroll-smooth cursor-hand '>
            {revsDetails.map((rev)=>{
                return(
                    <TestCard 
                    revP={rev.revP} revName={rev.revName} revLoc={rev.revLoc} revImg={rev.revImg}
                    />
                )
            })}
      </div>
    </div>
  )
}

export default Testimonials

