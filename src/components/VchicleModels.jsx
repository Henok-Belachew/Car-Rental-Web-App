import React, { useState } from 'react'
import audi from '../assets/VTImages/audi.png'
import bmw from '../assets/VTImages/bmw.png'
import golf from '../assets/VTImages/golf.png'
import Mercedes from '../assets/VTImages/mercedes.png'
import Toyota from '../assets/VTImages/toyota.png'
import vw from '../assets/VTImages/vw.png'
import VehicleDetail from './VehicleDetail'

const VehiclesData = [

    {
      id:1,
      TabImage:audi,
      TabPrice:'$65',
      Model:'Audi',
      Mark:'A1',
      Year:'2013',
      Doors:'4/5',
      AC:'Yes',
      Transmission:'Manual',
      Fuel:'Gasoline',


    },

    {
      id:2,
      TabImage:bmw,
      TabPrice:'$65',
      Model:'320  ',
      Mark:'BMW',
      Year:'2012',
      Doors:'4/5',
      AC:'Yes',
      Transmission:'Manual',
      Fuel:'Diesel',


    },


    {
      id:3,
      TabImage:vw,
      TabPrice:'$42',
      Model:'Passat CC',
      Mark:'VW',
      Year:'2008',
      Doors:'4/5',
      AC:'Yes',
      Transmission:'Manual',
      Fuel:'Gasoline',


    },

    {
      id:4,
      TabImage:golf,
      TabPrice:'$25',
      Model:'Golf 6',
      Mark:'VW',
      Year:'2008',
      Doors:'4/5',
      AC:'Yes',
      Transmission:'Manual',
      Fuel:'Diesel',


    },

    {
      id:5,
      TabImage:Mercedes,
      TabPrice:'$70',
      Model:'Benz GLK',
      Mark:'Mercedes',
      Year:'2006',
      Doors:'4/5',
      AC:'Yes',
      Transmission:'Manual',
      Fuel:'Diesel',


    },

    {
      id:6,
      TabImage:Toyota,
      TabPrice:'$20',
      Model:'Camry',
      Mark:'Toyota',
      Year:'2006',
      Doors:'4/5',
      AC:'Yes',
      Transmission:'Automatic',
      Fuel:'Hybrid',


    },

  ];

    

function VchicleModels() {
    const [tab, setTab] = useState(1)

    const  tab_btns = [
        {
          id:1,
          ClassName:tab === 1? 'bg-accent text-white':'bg-inactiveBtn text-black',
          OnClick:() => setTab(1),
          BtnText:'BMW 5 Series',
        },
  
        {
          id:2,
          ClassName:tab === 2? 'bg-accent text-white':'bg-inactiveBtn text-black',
          OnClick:() => setTab(2),
          BtnText:'Mercedes-Benz CLA',
        },
  
        {
          id:3,
          ClassName:tab === 3? 'bg-accent text-white':'bg-inactiveBtn text-black',
          OnClick:() => setTab(3),
          BtnText:'VW Passat CC',
        },
        {
          id:4,
          ClassName:tab === 4? 'bg-accent text-white':'bg-inactiveBtn text-black',
          OnClick:() => setTab(4),
          BtnText:'VW Golf 6',
        },
        {
          id:5,
          ClassName:tab === 5? 'bg-accent text-white':'bg-inactiveBtn text-black',
          OnClick:() => setTab(5),
          BtnText:'Mercedes-Benz GLK',
        },
        {
          id:6,
          ClassName:tab === 6? 'bg-accent text-white':'bg-inactiveBtn text-black',
          OnClick:() => setTab(6),
          BtnText:'Toyota Camry',
        },
      ];
  return (
    <div className='px-[67px] max-sm:px-[30px] py-16'>
        <div className='w-[40%] max-lg:w-[80%] mx-auto flex flex-col gap-5 text-center'>
            <h1 className='font-[500] text-[22px]'>Vehicle Models</h1>
            <h1 className='font-[700] text-[48px] max-sm:text-[40px] leading-[45px]'>Our rental fleet</h1>
            <p className='font-[400] text-[18px] text-darkish'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
        </div>


        <div className='flex max-lg:flex-col gap-6 mt-8 justify-stretch items-stretch w-full'>
            <div className='flex flex-col max-lg:mx-auto gap-2 w-[255px]'>
                {tab_btns.map((tab)=>{
                    return(
                        <buttons onClick={tab.OnClick} className={`p-5 cursor-pointer font-[500] text-[19px] ${tab.ClassName}`}>
                            {tab.BtnText}
                        </buttons>
                    )
                })}

            </div>

            {/* Selected Car Detials */}
            <VehicleDetail vehicle={VehiclesData.find((vehicle) => vehicle.id === tab)} tab={tab}/>
 
        </div>
      
    </div>
  )
}

export default VchicleModels
