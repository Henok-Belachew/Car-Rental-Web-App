import React from 'react'
import img1 from '../assets/CompIntroImages/co.png'
import img2 from '../assets/CompIntroImages/ld.png'
import img3 from '../assets/CompIntroImages/sc.png'


const Card = ({disctription, title, img}) => {
    return (
        <div  className='text-center flex flex-col gap-4 max-lg:w-[60%] max-lg:mx-auto'>
            <img className='mx-auto h-[140px]' src={img} alt="" />
            <h1  className='font-[700] text-[22px]'>{title}</h1>
            <p className='font-[400] text-[16px]'>{disctription}</p>
        </div>
    )
}

function PlanTrip() {
    const dis1 = "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs."
    const dis2 = "Our knowledgeable and friendly operators are always ready to help with any questions or concerns."
    const dis3 = "Whether you're hitting the open road, we've got you covered with our wide range of cars. No time!"
  return (
    <div className='px-[67px] flex flex-col gap-[70px] py-[120px]'>
            <div className='text-center'>
                <h1 className='font-[600] text-[22px]'>Plan your trip now</h1>
                <h1 className='font-[700] text-[48px]'>Quick & easy car rental</h1>
            </div>

            <div className='flex gap-8 max-lg:flex-col text-center'>
                <Card title="Select Car" disctription={dis1} img={img1}/>
                <Card title="Customer Service" disctription={dis2} img={img2}/>
                <Card title="We Move" disctription={dis3} img={img3}/>
            </div>

    </div>
  )
}

export default PlanTrip
