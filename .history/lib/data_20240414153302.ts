import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/firstapp.png";
import NBAapp from "@/public/nbaapp.png";
import travelImg from "@/public/style.png";
import { FaCameraRetro, FaMusic, FaCode, FaWalking, FaBookOpen, FaStar } from 'react-icons/fa';
import { FaUserGraduate, FaSearch, FaRegLightbulb, FaUsers, FaProjectDiagram } from 'react-icons/fa';




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Business",
    location: "Istanbul, Turkey",
    description:
      "I studied business administration for 1 year at Marmara University. This foundational experience gave me a strong understanding of business fundamentals, which later helped me navigate the tech industry's business aspects. It was here that I first discovered my interest in technology and innovation.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Graduated bootcamp",
    location: "LA, USA",
    description:
      "I followed a 6-month full-stack bootcamp online from the USA. This intense program was a turning point, where I acquired hands-on skills in web development, programming languages, and modern frameworks. It challenged me to solve complex problems and build real-world projects, setting a solid foundation for my programming career.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Programming Student",
    location: "Antwerp, Belgium",
    description:
      "I am studying software at Thomas More university. This program is not only about enhancing my technical skills but also about understanding the broader context of software development within society. It's here that I've learned to appreciate the importance of software in solving real-world issues, from small-scale apps to large, complex systems.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  
] as const;


export const projectsData = [
  {
    title: "Portfolio Site",
    description:
      "I worked as a full-stack developer student on this startup project 1 year ago. Users can access my information.",
    tags: ["HTML", "CSS", "JAVA"],
    imageUrl: portfolioImg,
  },
  {
    title: "NBA App",
    description:
      "I created a comprehensive NBA website containing information about the NBA. You can access the matches, teams and all players' information in the application.",
    tags: ["React", "JAVA", "CSS", "Tailwind","HTML","SQL"],
    imageUrl: NBAapp,
  },
  {
    title: "Word Analytics",
    description:
      "I made a style page about places to visit and see in Turkey. My page provides an opportunity for travel lovers to get to know Turkey better.",
    tags: ["JAVA", "CSS", "SQL", "Tailwind", "HTML"],
    imageUrl: travelImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Java",
  "Spring",
  "Linux",
  "Cypress",
  "SqlLite",
] as const;


export const hobbiesData = [
  {
    id: 'photography',
    icon: FaCameraRetro,
    title: 'Photography',
    description: 'I love shooting nature scenes and immortalizing the moment.'
  },
  {
    id: 'music',
    icon: FaMusic,
    title: 'Music',
    description: 'Playing guitar and creating new melodies is a passion for me.'
  },
  {
    id: 'coding',
    icon: FaCode,
    title: 'Coding',
    description: 'I enjoy learning new technologies and developing projects.'
  },
  {
    id: 'hiking',
    icon: FaWalking,
    title: 'Walking',
    description: 'Walking in nature gives me peace and inspiration.'
  },
  {
    id: 'reading',
    icon: FaBookOpen,
    title: 'Watching Films',
    description: 'I love watching films to dive into different worlds and discover new ideas.'
  },
  {
    id: 'football',
    icon: FaStar,
    title: 'Football',
    description: 'Playing and watching football.'
  }
] as const;


export const manifestoData = [
  {
    icon: FaUserGraduate,
    title: "Preserve the student in you",
    description: "Study visual trends and technological changes, and follow your industry leaders to keep up with new developments. Read relevant articles regularly and build yourself a pool of great inspiration."
  },
  {
    icon: FaSearch,
    title: "Do your research",
    description: "First understand your clients business model then understand its users. What are the pain points users have and how can you solve them, while pushing company’s business goals."
  },
  {
    icon: FaStar,
    title: "Learn from the best",
    description: "Benchmarking is a must for every product or project as it helps finding best practices and getting inspired. But don´t just copy your heroes. Find your own way and tell your own story!"
  },
  {
    icon: FaRegLightbulb,
    title: "Keep it simple",
    description: "Simplicity is a hard work, but it pays off. Keep it as simple and intuitive as possible and find unique, unexpected solutions for your problems. The best interface is one you don´t notice."
  },
  {
    icon: FaUsers,
    title: "Don´t trust just yourself",
    description: "Prototyping and user-testing is important to proof your designs and test them under almost real conditions. Listen to people. Don´t stick to features you like, if they don't get them."
  },
  {
    icon: FaProjectDiagram,
    title: "Think holistically",
    description: "Design sustainable and keep the brand in mind. Work with design systems, layout grids and pattern libraries to guarantee consistency and an easy design handoff to development teams."
  }
] as const;
