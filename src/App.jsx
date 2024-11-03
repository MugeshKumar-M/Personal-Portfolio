import React ,{ useEffect } from 'react'
import Header from './components/Header'
import Hero from  './components/Hero'
import About from  './components/About'
import Projects from './components/Projects'
import Experts from './components/Experts'
import Works from './components/Works'
import Contact from './components/Contact'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
const COLORS_TOP = ["#b300b3", "#b300b3"];

const App = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  

  const backgroundImage = 'radial-gradient(125% 125% at 180% 0%, #ff4dff 5%, #120712)';

  return (

    <section className='relative top-0 z-0 h-screen w-full text-neutral-300 overflow-x-hidden' style={{background : backgroundImage}}>

    <Header/> 
 {/* Add Stars in the background  */}
 <div className="absolute inset-0 z-[-1] pointer-events-none">
    <Canvas>
      <Stars radius={50} count={2500} factor={4} fade speed={2} />  
    </Canvas>
  </div>
     <Hero/>

     <About/>
     <Projects/>
              <Experts/>
              <Works/>
              <Contact/>

    </section>
    
  )
}

export default App;



{/* <div className='relative top-0 z-0 h-full w-full text-neutral-300'>
    
       
<motion.section
style={{
  backgroundImage,
}}
className="relative grid min-h-screen w-screen h-screen px-4 text-gray-200 overflow-x-hidden"
>
  <Header/> 
<div className="absolute inset-0 z-0">
  <Canvas>
    <Stars radius={50} count={2500} factor={4} fade speed={2} />
   
   
  </Canvas>
 
 
</div>

<div className='container mx-auto px-8 py-24 z-0 relative'>
   <Hero/>
  </div>
 
</motion.section>
<div className='containe bg-herobgbottom mx-auto px-8 z-20 relative'>
  about
  </div>
  
</div> */}