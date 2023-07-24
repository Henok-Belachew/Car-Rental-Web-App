import React, { useState } from 'react'
import {FaAngleDown} from 'react-icons/fa6'



function DropDown({placeholder, options, optState, setOptState, othStates}) {

    const [selectedOption, setSelectedOption] = useState('')
    
  return (
    <div className='relative'>
      <h1 onClick={() => {
        setOptState(!optState)

        // Closing all other opened dropdowns options
        for (let i = 0; i < 2; i++) {
            othStates[i](false)
        }

        }} className={`flex items-center border-solid border-[1px] border-black cursor-pointer justify-between p-5 relative`}>
        {selectedOption ? selectedOption : placeholder}
        <FaAngleDown  />
      </h1>

     {/* Options */}
      <div className={`${optState ? "block" : "hidden"} absolute w-full z-[10] flex flex-col`}>
        {options.map((option) => {
            return (
                <span onClick={() => {
                        setOptState(false)
                        setSelectedOption(option)
                    } } 
                    className='p-5 w-full border-solid border-[1px] hover:bg-[#fcada1] cursor-pointer bg-white'>
                    {option}
                </span>
            )
        })}
        



      </div>
    </div>
  )
}

export default DropDown
