import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import MotionUp from './MotionUp'; // Ensure the correct path for MotionUp component

const Contact = () => {
  return (
    <section
      className="relative w-full  mx-auto p-10 overflow-hidden bg-[#120712] bottom-1"
    >
      <h1 className="absolute top-44 text-[8rem] md:text-[15rem] font-bold text-gray-700 opacity-15 z-0 rotate-90 sm:rotate-0">
        Contact Me
      </h1>
      <div className='gap-3 flex justify-center font-extrabold text-4xl sm:text-7xl'>
   <h2 className="  text-neutral-100">Let's</h2>
   <h2 className="  text-customText">Talk</h2>
   </div> 
      <div className="container flex py-16 flex-col justify-center  mx-auto max-w-7xl sm:flex-row">
        {/* Contact Info */}
        <MotionUp className=" flex flex-col gap-10 rounded-lg sm:flex-row" delay={0}>

        <div className="flex-1 bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-auto max-h-screen sm:w-1/2">
          <h2 className="text-3xl font-bold mb-4 bg-customText bg-clip-text text-transparent">
          Get In Touch
          </h2>
          <p className="text-white/80 leading-relaxed mb-5 font-semibold">
          Feel free to reach out! I'm always open to exploring new projects, fresh ideas, and opportunities to bring your vision to life.
          </p>
          <div className='space-y-1'> <div className='font-bold text-xl bg-customText bg-clip-text text-transparent'>Phone</div>
                <div className='font-semibold text-white/80'>+917708528373</div>
                 <div className='font-bold text-xl bg-customText bg-clip-text text-transparent'>Email</div>
                <div className='font-semibold text-white/80'>mugeshkumarm356@gmail.com</div>
                 <div className='font-bold text-xl bg-customText bg-clip-text text-transparent'>Location</div>
                <div className='font-semibold text-white/80'>Coimbatore/Tamil Nadu/India</div></div>
          
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 text-white/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
            <FaLinkedinIn size={30} className='hover:text-[#0077B5]'/>
            </a>
            <a href="#" className="w-10 h-10 text-white/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
            <FaGithub size={30} className='hover:text-black'/>
            </a>
            <a href="#" className="w-10 h-10 text-white/80 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
            <FaInstagram size={30} className='hover:text-red-400'/>

            </a>
          </div>
        </div>
       
        {/* Contact Form */}
       
        <div className="flex-1 bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-auto max-h-screen sm:w-1/2">
          <form id="contactForm" className="space-y-4">
            <div className='flex gap-3'>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
              />
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
              />
            </div>
            <div>
              
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="from_subject"
                placeholder="Your Subject"
                required
                className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-lg bg-transparent border border-customText/10 text-white placeholder-gray-400 focus:outline-none focus:border-customText focus:bg-customText/5 transition-colors"
              ></textarea>
            </div>
            <button
              id="sendBtn"
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-customTextbt3 to-customTextbt1 text-white font-semibold rounded-lg focus:outline-none hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <h1 className="relative z-10">SEND MESSAGE</h1>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <div
              id="loadingSpinner"
              className="spinner w-10 h-10 border-4 border-gray-200 border-t-customTextbt1 rounded-full animate-spin mx-auto mt-4"
              style={{ display: 'none' }}
            ></div>
          </form>
        </div>
        </MotionUp>
      </div>
      <div className="font-semibold text-white/80 text-center">Made with {'\u2764\uFE0F'} by Mugesh Kumar</div>

     
    </section>
  );
};

export default Contact;
