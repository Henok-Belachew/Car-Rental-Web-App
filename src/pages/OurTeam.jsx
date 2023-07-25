import React from 'react'
import HeroCar from '../assets/HeroImages/HeroTopImg.png'
import WhatsApp from '../components/WhatsApp'
import team1 from '../assets/TeamImages/1.png'
import team2 from '../assets/TeamImages/2.png'
import team3 from '../assets/TeamImages/3.png'
import team4 from '../assets/TeamImages/4.png'
import team5 from '../assets/TeamImages/5.png'
import team6 from '../assets/TeamImages/6.jpg'

const teamwrks = [
  {
      "id":1,
      'teamImg':team1,
      'teamName':'Julian Alvarez',
      'teamRole':'Business Owner',

  },

  {
      "id":2,
      'teamImg':team2,
      'teamName':'Bremo Ogbon ',
      'teamRole':'Manager',

  },

  {
      "id":3,
      'teamImg':team3,
      'teamName':'Presior scarlet',
      'teamRole':'Ass.Manager',

  },
  {
      "id":4,
      'teamImg':team4,
      'teamName':'Anabel SR.',
      'teamRole':'Customer Service',

  },
  {
      "id":5,
      'teamImg':team5,
      'teamName':'Heug yung',
      'teamRole':'Analyst',

  },

  {
      "id":6,
      'teamImg':team6,
      'teamName':'Odukoye Flixin',
      'teamRole':'Software Engineer',

  },
];

function TeamCard({teamImg,teamName,teamRole}) {
  return(
    <div className='shadow-xl'>
      <img src={teamImg} className='w-full bg-[#E9E9E9]' alt="" />

      <div className='flex flex-col text-center p-4'>
        <h1 className='font-[600] text-[22px]'>{teamName}</h1>
        <span>{teamRole}</span>
      </div>
    </div>
  )
}


function OurTeam() {
  return (
    <div  className='relative z-[4]'>
      <div className='relative top-[-100px] z-[4] h-[410px] w-[100vw]'>
      <img src={HeroCar} className='h-full object-cover w-full relative z-[2]' alt="" />
      <h1 className='absolute z-[5] top-0 flex flex-col max-lg:text-center justify-center px-[67px] text-black font-[700] text-[38px]  h-full w-full'>
        
        Our Team
        <span className='font-[400] text-[16px]'>Home/Our Team</span>
      
      </h1>
      <h1 className='absolute z-[3] top-0 bg-white opacity-[90%] text-black font-[700] text-[48px] text-center h-full w-full'></h1>
    
    </div>


    <div className='grid grid-cols-3 gap-10 w-[75%] max-md:w-[55%] mx-auto pb-24 md-lg:grid-cols-2 max-md:grid-cols-1'>
          {teamwrks.map((team) => {
            return(
              <TeamCard

                  teamImg={team.teamImg}
                  teamName={team.teamName}
                  teamRole={team.teamRole}

              
              />
            )
          })}
    </div>

    <WhatsApp/>
    </div>
  )
}

export default OurTeam
