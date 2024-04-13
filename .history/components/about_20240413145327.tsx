"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p
        className="mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        After completing my degree in <span className="font-medium">Business</span> two years ago, I decided to follow my passion for technology and delve into the world of programming. I joined a coding bootcamp where I embraced the challenge of <span className="font-medium">full-stack web development</span>. <span className="italic">My favorite part of programming</span> is the design process—solving complex problems and seeing my solutions come to life. I've honed my skills in <span className="font-medium">React, Next.js, Java, Node.js, and MongoDB</span>, with a growing proficiency in TypeScript and Prisma. I am keen on continuous learning and am always on the lookout for new technologies to explore.
      </motion.p>

      <motion.p
        className="mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Originally from Turkey, I now reside in Belgium, where I'm not only pursuing a <span className="font-medium">full-time position</span> as a software developer but also immersing myself in the local culture and community. <span className="italic">When I'm away from my computer</span>, I enjoy engaging in sports like football and basketball, which are popular here. My leisure time is filled with playing video games, watching movies, and frequenting the cinema. On the educational front, I'm expanding my knowledge by learning about <span className="font-medium">history</span> and picking up new skills, such as playing the trumpet.
      </motion.p>
    </motion.section>
  );
}
