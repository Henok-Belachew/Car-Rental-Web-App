import React from 'react'
import google from '../assets/DownloadImages/google.png'
import appstore from '../assets/DownloadImages/appstore.png'
import phone from '../assets/DownloadImages/dlbg.png'

function AddSection() {
  return (
    <div className='flex justify-between bg-background  relative z-[5] px-[67px]  max-sm:px-[30px] py-12 pt-32 max-lg:flex-col max-lg:text-center'>
        <div className='w-[500px] max-lg:w-[80%] flex flex-col gap-5 max-lg:mx-auto'>
            <h1 className='font-[700] text-[48px] max-sm:text-[32px] text-center leading-[72px] max-sm:leading-[40px]'>
            Download our app to get most out of it
            </h1>
            <p className='font-[400] text-darkwhite'>
            Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
            </p>
            <div className='flex w-full justify-between max-sm:flex-col md-lg:mx-auto max-sm:gap-6 gap-10'>
                <img className='w-[224px] max-sm:mx-auto' src={google} alt="" />
                <img className='w-[224px] max-sm:mx-auto' src={appstore} alt="" />
            </div>
        </div>

        <img src={phone} className='w-1/2 absolute bottom-0 right-0 max-lg:static max-lg:w-[80%] max-sm:mt-10 max-lg:mx-auto ' alt="" />
      
    </div>
  )
}

export default AddSection
