import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export const SKILLS = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  { name: "Python", icon: FaPython, color: "text-blue-600" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/iram021",
  linkedin: "https://www.linkedin.com/in/iram-bano-844a6b2a0",
  email: "iramb766@gmail.com"
};

export const PROJECTS = [
  { 
    title: "Task 1: Professional Portfolio", 
    desc: "A dashboard-style personal portfolio featuring dark/light mode, sticky sidebar, and responsive design to showcase internship tasks.", 
    link: "https://future-fs-01-iram.vercel.app", 
    image: "/portfolio.png",
    tech: "React, Tailwind"
  },
  { 
    title: "Task 2: E-Commerce Platform", 
    desc: "A fully functional online store with dynamic product catalog and cart system, developed as the second task for Future Intern.", 
    link: "https://future-fs-02-e0uomy8xu-iram-banos-projects.vercel.app", 
    image: "/ecommerce.png",
    tech: "React, Vite"
  },
  { 
    title: "BMI Calculator", 
    desc: "A real-time health-tech tool built with JavaScript to calculate Body Mass Index and provide instant health feedback.", 
    link: "https://bmi-calculator-7ntmvv66l-iram-banos-projects.vercel.app", 
    image: "/bmi.png",
    tech: "JS, CSS, HTML"
  },
  { 
    title: "Nike AI Rebrand", 
    desc: "A premium UI/UX rebranding concept for Nike, focusing on AI-driven aesthetics and modern web animations.", 
    link: "https://nike-ai-rebrand-internship-ewvskrqch-iram-banos-projects.vercel.app", 
    image: "/nike.png",
    tech: "React, Tailwind"
  }
];