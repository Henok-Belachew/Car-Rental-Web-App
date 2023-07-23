import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImMail3} from 'react-icons/im'

function Footer() {
    const devLinks = [
        {
            web: "LinkedIn",
            link: "https://www.linkedin.com/in/henok-belachew"
        },
        {
            web: "GitHub",
            link: "https://github.com/Henok-Belachew"
        },
        {
            web: "Twitter",
            link: "https://twitter.com/Welde_Tsadik"
        },
        {
            web: "YouTube",
            link: "https://www.youtube.com/@HenokTutorials"
        },
        {
            web: "Telegram",
            link: "https://www.linkedin.com/in/henok-belachew"
        },
    ]
  return (
    <div className='bg-white flex gap-5 max-lg:grid max-md:block px-[67px]  md-lg:grid-cols-2 mt-10 py-10 relative z-[5]'>
      <div className='w-3/12 max-lg:w-full max-lg:text-center flex gap-3 flex-col justify-between'>
        <h1 className='text-xl'> <span className='font-[600]'>CAR</span> Rental</h1>
        <p className='text-[#706f7b] font-[400]'> We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <span className='flex gap-4 items-center font-[500] mt-4 max-lg:mx-auto'><BsFillTelephoneFill/> <span className='font-[500]'>+011552342</span> </span>         
        <span className='flex gap-4 items-center font-[500] max-lg:mx-auto'><ImMail3/> <span className='font-5600]'>Carrental@gmail.com</span> </span>
        <span className='mt-3'>Developed by Henok Belachew</span>
      </div>
      <div className='w-3/12 max-lg:w-full max-lg:text-center flex flex-col gap-5 justify-between pl-[2%]'>
      <h1 className='text-xl font-[600]'> DEVELOPER </h1>
        {
            devLinks.map((link)=>{
                return(
                    <a className='hover:font-[500]' href={link.link}>{link.web}</a>
                )
            })
        }
      </div>

      <div className='w-3/12 max-lg:w-full flex flex-col gap-5 max-lg:text-center'>
            <h1 className='text-xl font-[600]'> WORKING HOURS </h1>
            <span>Mon - Fri: 9:00AM - 9:00PM</span>
            <span>Sat: 9:00AM - 19:00PM</span>
            <span>Sun: Still working</span>
      </div>
      <div className='w-3/12 max-lg:w-full flex flex-col gap-5 max-lg:text-center'>
            <h1 className='text-xl font-[600]'> SUBSCRIPTION </h1>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input className='p-[13px] focus:outline-none bg-[#E9E9E9]' type="text" placeholder='Enter Email Address' />
            <button className='bg-accent font-[500] text-[22px] text-white py-[13px]'>Submit</button>
      </div>
    </div>
  )
}

export default Footer
