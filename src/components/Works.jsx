import React from 'react'
import MotionUp from './MotionUp'; // Ensure the correct path for MotionUp component
import { ProjectCard } from './ProjectCard';
const Works = () => {
  return (
    <section className={`relative w-full mx-auto p-10 overflow-hidden`}style={{background : '#120712'}}> 
<h1 className="absolute top-72 left-5 text-[15rem] font-bold text-gray-700 opacity-15 z-0 rotate-90">
        Works
      </h1>
      <div className='gap-3 flex justify-center font-extrabold text-4xl sm:text-7xl'>
   <h2 className="text-neutral-100">My Recent</h2>
   <h2 className="text-customText">Works</h2>
   </div>

   <MotionUp delay={0.1}>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:mt-32">
                       
                            <ProjectCard/>
                            <ProjectCard/>
                            <ProjectCard/>
                         
                    </div>
                    </MotionUp>
</section>
  )
}

export default Works


{/* <MotionUp delay={0.1}>

<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {items.map((project, index) => (
        <ProjectCard/>
      ))}  
</div>
</MotionUp> */}