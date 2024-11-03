import React from 'react'
import TiltCard from './TiltCard'
const About = () => {
  return (
    <section className={`relative w-full mx-auto p-10 `}style={{background : '#120712'}}> 

<h1 className="absolute top-48 right-2 text-[10rem] font-bold text-gray-700 opacity-15 z-0">
        About Me
      </h1>
   <div className='gap-3 flex'>
   <h2 className="clash-grotesk font-extrabold text-4xl text-neutral-100">About</h2>
   <h2 className="clash-grotesk font-extrabold text-4xl text-customText">Me</h2>
   </div>
   <div className='font-semibold text-2xl text-left  text-neutral-100 mt-8'>
   <p>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
   </div>
   <div className='flex flex-col gap-12 mt-9 items-center'>  
   <TiltCard text={'UI/UX Developer'}/>
   <TiltCard text={'Frontend Developer'}/>
   <TiltCard text={'Backend Developer'}/>
   <TiltCard text={'web Developer'}/>
   </div>
</section>
  )
}

export default About