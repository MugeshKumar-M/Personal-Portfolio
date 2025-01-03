import { useEffect, useState } from "react";
import logo from "../assets/MKlogo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons
// Uncomment these when you add the icons to your project
// import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("clicked");
    setIsOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="header">
      <nav className=" fixed top-0 left-0 z-50 w-[98.8%] flex items-center justify-between pr-4 bg-transparent bg-opacity-20 backdrop-blur-lg shadow-lg sm:pl-6 sm:pr-6 overflow-y sm:mr-auto sm:ml-auto">
        {/* Logo */}
        <div className="flex flex-shrink-0">
          <img
            className="mx-5 my-5 w-17 h-11"
            src={logo}
            alt="logo"
            onClick={() => scrollToSection("home")}
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          {!isOpen ? (
            <button onClick={toggleSidebar} className="text-2xl text-white">
              <FaBars />
            </button>
          ) : (
            <button onClick={toggleSidebar} className="text-2xl text-white">
              <FaTimes />
            </button>
          )}
        </div>

        {/* Navbar Links (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center justify-center gap-4">
          <ul className="list-none flex flex-row gap-10">
            <li className="hover:text-white text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li className="hover:text-white text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li className="hover:text-white text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li className="hover:text-white text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("contact")}>
                Contact Me
              </button>
            </li>
          </ul>
        </div>

        {/* Sidebar (Visible on Mobile when Open) */}
      </nav>
      {isOpen && (
        <div className="fixed top-0 z-50 right-0 h-full w-2/3 bg-customPurple/10 bg-opacity-50 backdrop-blur-lg p-4 text-white transition-transform duration-300 ease-in-out sm:hidden ">
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-2xl text-white">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col gap-8 mt-8 ">
            <li className="hover:text-gray-300 text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li className="hover:text-gray-300 text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li className="hover:text-gray-300 text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li className="hover:text-white text-[18px] font-bold cursor-pointer">
              <button onClick={() => scrollToSection("contact")}>
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
