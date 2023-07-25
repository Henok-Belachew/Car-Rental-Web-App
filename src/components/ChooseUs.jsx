import React from 'react'
import img1 from '../assets/ChooseUs/ccd.png'
import img2 from '../assets/ChooseUs/aip.png'
import img3 from '../assets/ChooseUs/nhc.png'
import drift from '../assets/ChooseUs/wcubg.png'
import cars from '../assets/ChooseUs/lg.png'

const Features = [
    {
        img: img1,
        title: "Cross Country Drive",
        dis: "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
    },
    {
        img: img2,
        title: "All Inclusive Pricing",
        dis: "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
    },
    {
        img: img3,
        title: "No Hidden Charges",
        dis: "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
    },
]


function Feature({img, title, dis}) {
    return (
        <div className='flex gap-7 max-sm:text-center md-lg:text-left max-sm:flex-col max-sm:mt-5'>
            <img src={img} className='self-start max-sm:mx-auto' alt="" />

            <div>
                <h1 className='font-[700] text-[22px]'>{title}</h1>
                <p className='font-[400] text-[16px] text-darkish mt-3'>{dis}</p>
            </div>
        </div>
    )
}

function ChooseUs() {
  return (
    <div className='px-[67px] max-sm:px-[30px] pb-12 relative'>
      <img src={cars} alt="" className='relative my-3 z-[2]  mx-auto' />


      <div className='flex max-lg:flex-col  justify-between relative z-[2]'>

                <div className='flex flex-col gap-4 w-[40%] max-lg:w-full max-lg:text-center'>
                    <h1 className='font-[600] text-[22px]' >Why Schoose Us</h1>
                    <h1 className='font-[700] text-[38px] w-[85%] max-lg:mx-auto max-sm:leading-[46px] leading-[58px]' >Best Valued deals you will ever find</h1>

                    <p className='font-[400] text-[16px] mt-5 text-darkish ' >
                    Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                    </p>

                    <button className='font-[700] max-lg:mx-auto rounded-sm text-[18px] self-start shadow-lg shadow-accent bg-accent px-[32px] py-[13px] text-white mt-6' >Find Details</button>


                    
                </div>

                <div className='flex flex-col gap-7 w-[45%] max-lg:w-full max-lg:mt-16'>
                        {Features.map((item) => {
                            return(
                                <Feature img={item.img} title={item.title} dis={item.dis} />
                            )
                        })}
                </div>

      </div>

      <img src={drift} className='absolute min-h-full min-w-full z-0 top-0 left-0' alt="" />
    </div>
  )
}

export default ChooseUs
