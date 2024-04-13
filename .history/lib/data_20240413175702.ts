import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/firstapp.png";
import NBAapp from "@/public/nbaapp.png";
import travelImg from "@/public/style.png";
import { FaCameraRetro, FaMusic, FaCode, FaWalking, FaBookOpen, FaStar } from 'react-icons/fa';



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
    description: 'Doğa manzaraları çekmeyi ve anı ölümsüzleştirmeyi seviyorum.'
  },
  {
    id: 'music',
    icon: FaMusic,
    title: 'Müzik',
    description: 'Gitar çalmak ve yeni melodiler yaratmak benim için bir tutku.'
  },
  {
    id: 'coding',
    icon: FaCode,
    title: 'Kodlama',
    description: 'Yeni teknolojiler öğrenmek ve projeler geliştirmekten keyif alıyorum.'
  },
  {
    id: 'hiking',
    icon: FaWalking,
    title: 'Yürüyüş',
    description: 'Doğada yürüyüş yapmak, bana huzur ve ilham veriyor.'
  },
  {
    id: 'reading',
    icon: FaBookOpen,
    title: 'Kitap Okuma',
    description: 'Farklı dünyalara dalıp yeni fikirler keşfetmek için kitap okumayı seviyorum.'
  },
  {
    id: 'astronomy',
    icon: FaStar,
    title: 'Astronomi',
    description: 'Yıldızları ve uzayı incelemek, evrenin büyüklüğü hakkında düşündürüyor.'
  }
] as const;
