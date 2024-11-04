import React from 'react';
// import Image from 'next/image'; // Assuming you're using Next.js
// import Link from 'next/link';
import MotionUp from './MotionUp'; // Ensure the correct path for MotionUp component
// import Heading from './Heading'; // Ensure the correct path for Heading component
import Marquee from 'react-fast-marquee'; // Import if using 'react-fast-marquee'
import MagicCard from './MagicCard'; // Ensure the correct path for MagicCard component
import HTML from '../assets/logo/html.png'
import CSS from '../assets/logo/css-alt.png'
import REACT from '../assets/logo/reactimg.png'
import JAVASCRIPT from '../assets/logo/javascript.png'
import TYPESCRIPT from '../assets/logo/typescript.png'
import TAILWINDCSS from '../assets/logo/tailwind-css.png'
import JAVA from '../assets/logo/java.png'
import GO from '../assets/logo/go.png'
import MYSQL from '../assets/logo/mysql.png'

// Sample skills array if not already defined in your project
const skills = [
  { name: 'HTML', image: HTML, url: 'https://reactjs.org' },
  { name: 'CSS', image: CSS, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', image: REACT, url: 'https://reactjs.org' },
  { name: 'JavaScript', image: JAVASCRIPT, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', image: TYPESCRIPT, url: 'https://reactjs.org' },
  { name: 'Tailwind CSS', image: TAILWINDCSS, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  // { name: 'Material UI', image: '/images/react-logo.png', url: 'https://reactjs.org' },
  { name: 'Java', image: JAVA, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  // { name: 'Spring Boot', image: '/images/react-logo.png', url: 'https://reactjs.org' },
  { name: 'Go', image: GO, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'MySql', image: MYSQL, url: 'https://reactjs.org' },
  // Add more skills as needed
];

const Experts = () => {
  return (
    <section
      className="relative w-full mx-auto p-10 overflow-y-hidden -bottom-2"
      style={{ background: '#120712' }}
    >
      <h1 className="absolute top-40 right-14 text-[15rem] font-bold text-gray-700 opacity-15 z-0 rotate-90">
       Skills
      </h1>

<h2 className="font-semibold text-xl  text-customText sm:text-4xl">My Skill</h2>
<div className='gap-3 font-extrabold text-4xl text-neutral-100 sm:text-7xl'>
   <h2>Growing Over</h2>
   <h2 >&nbsp;Times</h2>
   </div>
   <div className='font-semibold text-2xl text-left text-neutral-100 mt-8 sm:w-3/4'>
   <p>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
   </div>
      <MotionUp className="mt-5 p-0  rounded-lg" delay={0.1}>

        <Marquee speed={90} pauseOnHover className="mt-5 overflow-hidden py-5">
          {skills.map((skill, index) => (
            <MagicCard
              className="hover:scale-105 transition-all duration-500 w-40 h-40 ms-10 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
              gradientColor="#b300b3"
              key={index}
            >
              <div className="flex flex-col items-center w-full gap-2">
                <img
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full object-cover border border-transparent bg-white"
                />
                <h6 className="text-start text-lg font-bold text-blue-100">
                  {skill.url ? (
                    <a target="_blank" href={skill.url} className="">
                      {skill.name}
                    </a>
                  ) : (
                    skill.name
                  )}
                </h6>
              </div>
            </MagicCard>
          ))}
        </Marquee>
      </MotionUp>
    </section>
  );
};

export default Experts;
