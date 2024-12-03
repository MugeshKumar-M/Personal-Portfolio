import project1 from "../assets/projects/E-Commerce1.jpg";
import project2 from "../assets/projects/E-Commerce2.jpg";
import project3 from "../assets/projects/Portfolio1.jpg";
import project4 from "../assets/projects/Portfolio2.jpg";
import project5 from "../assets/projects/LMS1.png";
import project6 from "../assets/projects/LMS2.png";
import icon1 from "../assets/logo/target.png"
import icon2 from "../assets/logo/setting.png"
import icon3 from "../assets/logo/innovation.png"
import icon4 from "../assets/logo/team.png"
import react from '../assets/logo/reactimg.png'
import javascript from '../assets/logo/javascript.png'
import typescript from '../assets/logo/typescript.png'
import tailwindcss from '../assets/logo/tailwind-css.png'
import materialui from '../assets/logo/materialui.png'
import java from '../assets/logo/java.png'
import go from '../assets/logo/go.png'
import springboot from '../assets/logo/springboot.png'
import mysql from '../assets/logo/mysql.png'
import redis from '../assets/logo/redis.png'
import resume from'../assets/resume/Mugesh_Kumar_Resume.pdf'
export const HERO = {
  title:["Software Engineer","Full Stack Developer","UI/UX Designer"],
  resume:resume

};

export const ABOUT = {
  about:`I’m a software developer passionate about crafting efficient, scalable, and user-friendly applications. Proficient in Java, Golang, and modern frameworks like React.js, Node.js, TypeScript, and Spring Boot, I bring a detail-oriented and innovative approach to every project. Let’s collaborate to bring your ideas to life!`,
  titlecard:["Dedication","Smart Work","Innovation","Collaboration"],
  cardicons:[icon1,icon2,icon3,icon4]
};

export const SKILL = {
  skill:`I am committed to continuous learning and staying ahead of industry trends. By regularly exploring new technologies, taking online courses, and experimenting with cutting-edge tools, I actively upskill myself to deliver innovative solutions and remain passionate about evolving in the tech world.`,
  titlecard:[
    { "name": "React", "image": react, "url": "https://reactjs.org" },
    { "name": "JavaScript", "image": javascript, "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { "name": "TypeScript", "image": typescript, "url": "https://www.typescriptlang.org/" },
    { "name": "Tailwind CSS", "image": tailwindcss, "url": "https://tailwindcss.com/" },
    { "name": "Material UI", "image": materialui, "url": "https://mui.com/material-ui/" },
    { "name": "Java", "image": java, "url": "https://www.java.com/en/" },
    { "name": "Go Lang", "image": go, "url": "https://go.dev/" },
    { "name": "Spring Boot", "image": springboot, "url": "https://spring.io/projects/spring-boot" },
    { "name": "MySql", "image": mysql, "url": "https://www.mysql.com/" },
    { "name": "Redis", "image": redis, "url": "https://redis.io/" }
  ]
};

export const PROJECTS = [
  {
    title: "HustleClub: Modern Clothing E-Commerce Site",
    image: [project1,project2],
    description:
      "A fully functional e-commerce website designed for users to easily browse, select, and purchase dresses online. It features a modern, user-friendly interface for customers and a comprehensive admin panel for managing products. Built using the latest web technologies, this platform ensures seamless functionality for both shopping and administration.",
    techStack: ["HTML5", "CSS3", "React", "Node.js", "MySQL"],
    giturl:"https://github.com/MugeshKumar-M/Personal-Portfolio"
  },
  {
    title: "Personal Portfolio",
    image: [project3,project4],
    description:
      "A personal portfolio website is a showcase of my skills, experience, and the projects I've created. With a clean and modern design, it reflects my passion for web development and provides an insight into my technical expertise. The site highlights the tools and technologies I use to build seamless, dynamic web experiences, and serves as a platform to explore my work, learn about my journey, and connect with me professionally.",
    techStack: ["React", "TailwindCSS", "Javascript"],
    giturl:"https://github.com/MugeshKumar-M/Personal-Portfolio/"
  },
  {
    title: "Library Management System",
    image: [project5,project6],
    description:
      "Designed and developed a comprehensive Library Management System to facilitate efficient library operations, including book search, availability checks, and integration with external distributors. The system provides robust APIs for internal use and third-party integration, ensuring a seamless experience for library administrators and users.",
    techStack: ["React", "TailwindCSS","Node.js","Java","Spring Boot","MySQL"],
    giturl:"https://github.com/MugeshKumar-M/Library-Management-System/"
  },
];

export const CONTACT = {
  location: "Tamil Nadu, India",
  phoneno: "+91 7708528373 ",
  email: "mugeshkumarm356@gmail.com",
  linkedin:"https://www.linkedin.com/in/mugesh-kumar-m/",
  github:"https://github.com/MugeshKumar-M/",
  instagram:"https://www.instagram.com/"
};
