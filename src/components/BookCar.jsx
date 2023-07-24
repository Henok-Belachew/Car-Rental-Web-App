import React from 'react'
import Bg from '../assets/Book-images/book-bg.png'
import Field from './Field'

const carType = [
    {value: 'Audi Q8 e-tron', label: 'Audi Q8 e-tron'},
    {value: 'BMW 5 Series', label: 'BMW 5 Series'},
    {value: 'Mercedes-Benz CLA', label: 'Mercedes-Benz CLA'},
    {value: 'Toyota GR Supra', label: 'Toyota GR Supra'},
    {value: 'Ford Mustang', label: 'Ford Mustang'},
    {value: 'Lexus 2018', label: 'Lexus 2018'}
  ]

const location = [
    {value: 'Addis Ababa', label: 'Addis Ababa'},
    {value: 'Hawassa', label: 'Hawassa'},
    {value: 'Dilla', label: 'Dilla'},
    {value: 'Adama', label: 'Adama'},
    {value: 'Bishofetu', label: 'Bishofetu'}
]

function BookCar() {

  return (
    <div className='mx-[67px] p-12 bg-white z-[5] mt-[150px] relative flex flex-col gap-4'>
      <h1 className=' relative z-[4] font-[700] text-[22px]'>Book a car</h1>
      <div className='grid grid-cols-3 gap-x-6 gap-y-8 relative z-[4]'>
            <Field defaultValue={{'label': "Car", value: "custom"}}  id={1} label="Select Your Car Type" option={carType}/>
            <Field defaultValue={{'label': "Select Pick-up location", value: "custom"}} id={2} label="Pick-up" option={location}/>
            <Field defaultValue={{'label': "Select Drop-off location", value: "custom"}}  id={3} label="Drop-off" option={location}/>
            <input className='border-solid border-[1px] px-3' type="date" />
            <input className='border-solid border-[1px] px-3' type="date" />
            <button className='bg-accent py-[13px] font-[500] text-[18px] text-white'>Search</button>

      </div>
      <img className='absolute z-[3] top-0' src={Bg} alt="" />
    </div>
  )
}

export default BookCar
