import React, { useState, useEffect } from "react";
import { Reveal, Fade } from "react-awesome-reveal";
import heroImage from "../assets/lottie/hero-lottie.json";
import scrollImage from "../assets/lottie/scroll-img.json";
import Lottie from "lottie-react";
import MotionUp from './MotionUp'; // Ensure the correct path for MotionUp component

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "An experienced full-stack website developer with a passion for crafting unique digital experiences.";
  const [index, setIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // Typing speed (100ms per character)
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div>
    <div className={" p-10 mt-10 sm:p-4 sm:mt-16 sm:flex"}>
      <MotionUp className="mt-5 p-0  rounded-lg" delay={0}>
      <div className="w-full text-center sm:text-left sm:p-8 sm:w-[650px]">
            <h2 className="font-semibold text-2xl  text-neutral-100 sm:text-4xl">
              HELLO I'M
            </h2>
            <h2 className="font-bold text-[50px]  text-customText mb-4 sm:text-8xl">Mugesh &nbsp;Kumar</h2>
            <MotionUp className="mt-5 p-0  rounded-lg" delay={0.3}>
            <h2 className="font-semibold text-3xl 2xl:text-8xl text-neutral-100 sm:text-4xl">
              a Full Stack Developer&nbsp;
            </h2>
            </MotionUp>
            <MotionUp className="mt-5 p-0  rounded-lg" delay={0.6}>
        <div className="flex justify-evenly mt-8 sm:justify-start sm:gap-10">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-customTextbt3 via-customTextbt2 to-customTextbt1 hover:bg-gradient-to-br  shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-lg p-4 text-center me-2 mb-2 sm:pr-10 sm:pl-10 "
          >
            Download CV
          </button>

          <button
            type="button"
            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-500 font-semibold rounded-lg text-lg px-8 py-3 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-customTextbt2 dark:focus:ring-purple-900 sm:pr-10 sm:pl-10"
          >
            Let's Talk
          </button>
        </div>
         </MotionUp>
      </div>
    </MotionUp>
    <MotionUp className="mt-5 p-0  rounded-lg" delay={0.9}>   
    <div className=" relative w-[350px] h-[380px] top-4 sm:w-[560px] sm:h-[440px] sm:left-11 sm:top-0">
        <Lottie loop={true} animationData={heroImage}/>   
    </div>
    
    </MotionUp>
    
  </div>
  <div className="flex justify-center items-center sm:items-center">
      <a href="#about">
        <Lottie loop={true} animationData={scrollImage} />
      </a>
    </div>
  </div>
  );
};

export default Hero;
