import React from 'react'
import TiltCard from './TiltCard'
import MotionUp from './MotionUp'; // Ensure the correct path for MotionUp component

const About = () => {
  return (
    <section className={`relative w-full mx-auto p-10 -bottom-4 `}style={{background : '#120712'}}> 

<h1 className="absolute top-48 right-2 text-[10rem] font-bold text-gray-700 opacity-15 z-0">
        About Me
      </h1>
   <div className='gap-3 flex text-4xl font-extrabold sm:text-7xl'>
   <h2 className=" text-neutral-100">About</h2>
   <h2 className=" text-customText">Me</h2>
   </div>
   <div className='font-semibold text-2xl text-left  text-neutral-100 mt-8 sm:w-3/4'>
   <p>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
   </div>
   <MotionUp delay={0.1}>
   <div className='flex flex-col gap-12 mt-9 items-center sm:flex-row'>  
   <TiltCard text={'UI/UX Developer'}/>
   <TiltCard text={'Frontend Developer'}/>
   <TiltCard text={'Backend Developer'}/>
   <TiltCard text={'web Developer'}/>
   </div>
   </MotionUp>
</section>
  )
}

export default About