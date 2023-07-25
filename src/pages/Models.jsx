import React, { useEffect, useState } from 'react'
import HeroCar from '../assets/HeroImages/HeroTopImg.png'
import WhatsApp from '../components/WhatsApp'
import {AiFillStar} from 'react-icons/ai'
import {FaCarSide} from 'react-icons/fa'
import model1 from '../assets/ModelsIMages/1.png'
import model2 from '../assets/ModelsIMages/2.png'
import model3 from '../assets/ModelsIMages/3.png'
import model4 from '../assets/ModelsIMages/4.png'
import model5 from '../assets/ModelsIMages/5.png'
import model6 from '../assets/ModelsIMages/6.png'
// import ModelsCards from '../components/Models'
const carModels = [
  {
      "id":1,
      modelImg:model1,
      modelName:'Audi A1',
      modelComp:'Audi',
      modelTrans:'Manual',
      modelP:'$42',
      modelD:'per day',
      modelDoor:'4/5',
      modelFuel:'Diesel',
      num: 2


  },
  {
      "id":2,
      modelImg:model2,
      modelName:'Golf 6',
      modelComp:'  VW',
      modelTrans:'Manual',
      modelP:'$39',
      modelD:'per day',
      modelDoor:'4/5',
      modelFuel:'Diesel',
      num: 3


  },

  {
      "id":3,
      modelImg:model3,
      modelName:'Toyota',
      modelComp:'Camry',
      modelTrans:'Manual',
      modelP:'$50',
      modelD:'per day',
      modelDoor:'4/5',
      modelFuel:'Diesel',
      num: 5


  },
  {
      "id":4,
      modelImg:model4,
      modelName:'BMW 320',
      modelComp:'ModernLine',
      modelTrans:'Manual',
      modelP:'$43',
      modelD:'per day',
      modelDoor:'4/5',
      modelFuel:'Diesel',
      num: 5


  },
  {
      "id":5,
      modelImg:model5,
      modelName:'Mercedes',
      modelComp:'Benz GLK',
      modelTrans:'Manual',
      modelP:'$62',
      modelD:'per day',
      modelDoor:'4/5',
      modelFuel:'Diesel',
      num: 3


  },
  {
      "id":6,
      modelImg:model6,
      modelName:'VW Passat',
      modelComp:'CC',
      modelTrans:'Manual',
      modelP:'$23',
      modelD:'per day',
      modelDoor:'4/5',
      modelFuel:'Diesel',
      num: 4


  },
]

function ModelCard({modelImg, modelName, modelComp, modelTrans, modelP, modelDoor, modelFuel, num}) {
  
  const [stars, setStars] = useState([])

  function GenStar(num) {
      const stars = []
      for (let i = 0; i < num; i++){

        stars.push(<AiFillStar/>)
          
      }

      setStars([...stars])
  }

  useEffect(()=>{
    GenStar(num)
  }, [])

  return(
      <div className='bg-white w-[100%] mx-auto rounded-xl shadow-md'>
          <img src={modelImg} className='object-cover h-[250px] rounded-t-xl w-full' alt="" />


          <div className='p-5 px-6 flex flex-col gap-3'>
              <span className='flex justify-between items-center'>
                  <h1 className='font-[700] text-[22px]'>{modelName}</h1>
                  <span className='font-[700] text-[16px]'> {modelP} <span className='font-[400] text-[16px]'>/day</span> </span>
              </span>

              <span className='flex justify-between'>Rating <span className='flex gap-1 text-accent'> {stars.map((star) => {
                return (star)
              } )} </span> </span>

              <span className='flex justify-between text-[18px] '>
                  <span  className='font-[500] text-darkish flex gap-3 items-center'><FaCarSide className='text-black'/> {modelComp} </span>
                  <span className='flex gap-3 items-center text-darkish'>{modelDoor} <FaCarSide className='text-black'/> </span>
              </span>

              <span className='flex justify-between text-[18px] '>
                  <span  className='font-[500] text-darkish  flex gap-3 items-center'><FaCarSide className='text-black'/> {modelTrans} </span>
                  <span className=' flex gap-3 items-center text-darkish'>{modelFuel} <FaCarSide className='text-black'/> </span>
              </span>

              <hr className='opacity-50 my-2 bg-darkish border-darkish border-[1.5px]' />
              <button className='py-4 font-[600] hover:bg-accent text-[20px] text-white rounded-md bg-[#fc6e58]'>Book Ride</button>
          </div>
      </div>
  )
}

function Models() {
  return (
    <div className='relative z-[4]' >
      <div className='relative top-[-100px] z-[4] h-[410px] w-[100vw]'>
      <img src={HeroCar} className='h-full object-cover w-full relative z-[2]' alt="" />
      <h1 className='absolute z-[5] top-0 flex flex-col max-lg:text-center justify-center px-[67px] text-black font-[700] text-[38px]  h-full w-full'>
        
        Models
        <span className='font-[400] text-[16px]'>Home/Models</span>
      
      </h1>
      <h1 className='absolute z-[3] top-0 bg-white opacity-[90%] text-black font-[700] text-[48px] text-center h-full w-full'></h1>
    
    </div>

    <div className='w-[80%] max-md:w-[70%] pb-20 mx-auto grid grid-cols-3 md-lg:grid-cols-2 max-md:grid-cols-1 gap-12'>
      {carModels.map((model) =>{
        return(<ModelCard
         num={model.num}
          modelImg={model.modelImg}
          modelName={model.modelName}
          modelComp={model.modelComp}
          modelTrans={model.modelTrans}
          modelP={model.modelP}
          modelD={model.modelD}
          modelDoor={model.modelDoor}
          modelFuel={model.modelFuel}
        />)
      })}
    


    </div>

    
    <WhatsApp/>
    </div>
  )
}

export default Models
