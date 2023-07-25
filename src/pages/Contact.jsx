import React from 'react'
import HeroCar from '../assets/HeroImages/HeroTopImg.png'
import WhatsApp from '../components/WhatsApp'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImMail3} from 'react-icons/im'
import {BiSolidMapAlt} from 'react-icons/bi'
import {GrSend} from 'react-icons/gr'
import bg from '../assets/ContactImages/bgcontact.png'

function Contact() {
  return (
    <div className='relative z-[4]' >
      <div className='relative top-[-100px] z-[4] h-[410px] w-[100vw]'>
      <img src={HeroCar} className='h-full object-cover w-full relative z-[2]' alt="" />
      <h1 className='absolute z-[5] top-0 flex flex-col max-lg:text-center justify-center px-[67px] text-black font-[700] text-[38px]  h-full w-full'>
        
        Contact
        <span className='font-[400] text-[16px]'>Home/Contact</span>
      
      </h1>
      <h1 className='absolute z-[3] top-0 bg-white opacity-[90%] text-black font-[700] text-[48px] text-center h-full w-full'></h1>
    
    </div>


    <div className='flex justify-between gap-5 mx-auto w-[75%] max-lg:flex-col mb-24 relative'>

      {/* Info Section */}
      <div className='w-[40%] max-lg:w-full flex flex-col gap-9 relative z-[4]'>
        <h1 className='font-[700] text-[38px] max-lg:text-center'>Need additional information?</h1>
        <p className='font-[400] text-darkish max-lg:text-center'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>

        <div className='flex flex-col gap-3 relative z-[2]'>
          <span className='flex items-center'> <BsFillTelephoneFill className='mr-2'/> 234 9131 710 995 </span>
          <span className='flex items-center'> <ImMail3 className='mr-2'/> samuelojeyinka@gmail.com </span>
          <span className='flex items-center'> <BiSolidMapAlt className='mr-2'/> Nigeria,Osun </span>
        </div>

        
      </div>


      {/* Form section */}
      <div className='relative w-[45%] max-lg:w-full z-[2]'>

            <div >
              <h1 className='font-[600] mb-[26px] text-[18px]'>Full Name</h1>
              <input className='p-[13px] py-[15px] w-full focus:outline-none bg-[#E9E9E9]' type="text" placeholder='EG: "Henok Belachew"' />
            </div>

            <div>
              <h1 className='font-[600] py-5 text-[18px]'>Email</h1>
              <input className='p-[13px] py-[15px] w-full focus:outline-none bg-[#E9E9E9]' type="text" placeholder='EG: "henokbelachestu@gmail.com"' />
            </div>
            <div>
            <h1 className='font-[600] py-5 text-[18px]'>Compose text</h1>
              <textarea placeholder='Write here ...' className='p-[13px] py-[15px] w-full focus:outline-none bg-[#E9E9E9]' name="" id="" cols="30" rows="6"></textarea>
              
              
            </div>

            <button className='bg-accent py-3 w-full font-[700] text-[18px] flex items-center justify-center text-white'> <GrSend className="mr-4 text-white" /> Send Message</button>
      

      </div>
            
      <img src={bg} className='absolute  w-full opacity-20 h-full top-0 z-[1]' alt="" />
    </div>

    <WhatsApp/>
    </div>
  )
}

export default Contact
