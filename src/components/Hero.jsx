import React, { useState, useEffect } from "react";
import { Reveal, Fade } from "react-awesome-reveal";
import heroImage from "../assets/lottie/hero-lottie.json";
import scrollImage from "../assets/lottie/scroll-img.json";
import Lottie from "lottie-react";
import MotionUp from "./MotionUp"; // Ensure the correct path for MotionUp component
import { HERO } from "../constants";
const Hero = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const currentTitle = HERO.title[titleIndex];
    if (!deleting && charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setCurrentWord((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentWord((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50); // Deleting speed
      return () => clearTimeout(timeout);
    } else if (!deleting && charIndex === currentTitle.length) {
      const timeout = setTimeout(() => setDeleting(true), 1500); // Pause before deleting
      return () => clearTimeout(timeout);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % HERO.title.length); // Move to the next title
    }
  }, [HERO.title, charIndex, deleting, titleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="home">
      <div className={" p-10 w-full mt-10 sm:p-4 sm:mt-16 sm:flex"}>
        <MotionUp className="mt-5 p-0  rounded-lg" delay={0}>
          <div className="w-full text-center sm:text-left sm:p-8 sm:w-[650px]">
            <h2 className="font-semibold text-2xl  text-neutral-100 sm:text-4xl">
              HELLO I'M
            </h2>
            <h2 className="font-bold text-[50px]  text-customText mb-4 sm:text-8xl">
              Mugesh &nbsp;Kumar
            </h2>
            <MotionUp className="mt-5 p-0  rounded-lg" delay={0.3}>
              <h2 className="font-semibold text-3xl 2xl:text-8xl text-neutral-100 sm:text-4xl">
                A Passionate {currentWord}&nbsp;
              </h2>
            </MotionUp>
            <MotionUp className="mt-5 p-0  rounded-lg" delay={0.6}>
              <div className="flex justify-evenly mt-8 sm:justify-start sm:gap-10">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-customTextbt3 via-customTextbt2 to-customTextbt1 hover:bg-gradient-to-br  shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-lg p-4 text-center me-2 mb-2 sm:pr-10 sm:pl-10 "
                >
                  <a
                    href={HERO.resume} // Path to your resume file
                    download="Mugesh_Kumar_Resume.pdf" // Suggested name for the downloaded file
                    className="no-underline text-white"
                  >
                    Download CV
                  </a>{" "}
                </button>

                <button
                  type="button"
                  class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800  font-semibold rounded-lg text-lg px-8 py-3 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-customTextbt2 dark:focus:ring-purple-900 sm:pr-10 sm:pl-10"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk
                </button>
              </div>
            </MotionUp>
          </div>
        </MotionUp>
        <MotionUp className="mt-5 p-0  rounded-lg" delay={0.9}>
          <div className=" relative w-[80%] h-[50vh] top-4 sm:w-[560px] sm:h-[440px] sm:left-11 sm:top-0">
            <Lottie loop={true} animationData={heroImage} />
          </div>
        </MotionUp>
      </div>
      <div className="flex justify-center items-center sm:items-center">
        <button onClick={() => scrollToSection("about")}>
          <Lottie loop={true} animationData={scrollImage} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
