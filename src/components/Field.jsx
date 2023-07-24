import React from 'react'
import {FaCar, FaSearchLocation} from 'react-icons/fa'

import Select from 'react-select'

function Field({option, label, id, defaultValue}) {

  return (
    <div>
        <span className='flex gap-3 mb-2 items-center font-[500]'> 
        
        {id === 1 ? <FaCar className='text-[20px] text-accent'/> : <FaSearchLocation className='text-[20px] text-accent'/>}
        
        
        {label} </span>
        <Select options={option} defaultValue={defaultValue}
        styles={{
            control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isSelected ? '#FF4D30' : 'grey',
            
        }),
  }} />
      
    </div>
  )
}

export default Field
