import React from 'react'
import { useEffect, useState } from 'react'

function VehicleDetail(vehicle) {

    function Row({title, data}) {
        return(
            <tr className='flex border-x-2 border-b-2 border-black py-4 justify-between text-center'>

            <span className='w-1/2 border-black border-r-2'>{title}</span>
            <span className='w-1/2'>{`${data}`}</span>
            
        </tr>
        )
    }

    // const [TAB, setTAB] = useState(tab)

    const [targetVehicle, setTargetVehicle] = useState({})
    // console.log(JSON.stringify(vehicle))
    console.log(targetVehicle)
    useEffect(()=>{
        setTargetVehicle(vehicle["vehicle"])
    }, [vehicle])
    
  return (
    <div className='flex max-md:flex-col justify-between items-center gap-6 flex-grow'>
      
      <img className='w-[60%] max-md:w-[80%] mx-auto' src={targetVehicle.TabImage} alt="" />

      <div className='w-[30%] max-md:w-[80%] max-sm:w-full'>
        <th className='bg-accent w-full block border-2 border-black py-4'>
            <span className='font-[600] w-full text-[18px] text-white'>{`${targetVehicle.TabPrice}`} <span className='font-[400] text-[18px] text-white'>/ rent per day</span></span>
        </th>
        <Row title="Model" data={targetVehicle.Model}/>
        <Row title="Mark" data={targetVehicle.Mark}/>
        <Row title="Year" data={targetVehicle.Year}/>
        <Row title="Doors" data={targetVehicle.Doors}/>
        <Row title="AC" data={targetVehicle.AC}/>
        <Row title="Transmission" data={targetVehicle.Transmission}/>
        <Row title="Fuel" data={targetVehicle.Fuel}/>
        
        
      </div>
    </div>
  )
}

export default VehicleDetail
