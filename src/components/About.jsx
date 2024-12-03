import React from 'react'
import TiltCard from './TiltCard'
import MotionUp from './MotionUp'; // Ensure the correct path for MotionUp component
import { ABOUT } from '../constants';

const About = () => {
  return (
    <section id="about" className={`relative w-full mx-auto p-10 -bottom-4 `}style={{background : '#120712'}}> 

<h1 className="absolute top-48 right-2 text-[10rem] font-bold text-gray-700 opacity-15 z-0">
        About Me
      </h1>
   <div className='gap-3 flex text-4xl font-extrabold sm:text-7xl'>
   <h2 className=" text-neutral-100">About</h2>
   <h2 className=" text-customText">Me</h2>
   </div>
   <div className='font-semibold text-2xl text-left  text-neutral-100 mt-8 sm:w-3/4'>
   <p>{ABOUT.about}</p>
   </div>
   <MotionUp delay={0.1}>
   <div className='flex flex-col gap-12 mt-9 items-center sm:flex-row'>  
   {ABOUT.titlecard.map((text, index) => (
            <TiltCard key={index} text={text} icon={ABOUT.cardicons[index]} />
          ))}
   </div>
   </MotionUp>
</section>
  )
}

export default About