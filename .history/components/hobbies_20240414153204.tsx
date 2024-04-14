'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { hobbiesData } from '@/lib/data'; 
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

function Hobbies() {
  const { ref } = useSectionInView("About");


  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', 
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section 
    ref={ref}
    className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28 ">
      <div className="container mx-auto ">
        <div className="text-center">
        <SectionHeading>Hobbies</SectionHeading>
          <p className="mb-12 text-lg text-gray-600">Here's a glimpse of what I do in my spare time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {hobbiesData.map((hobby) => (
            <motion.div
              key={hobby.id}
              className="overflow-hidden  shadow-lgp-6 
              bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
              <div className="text-center ">
                <hobby.icon className={`text-5xl ${iconColors[hobby.id as keyof IconColorType ]}`} />
                <h3 className="text-2xl font-semibold mt-2 mb-4">{hobby.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



  type IconColorType = {
    photography: string;
    music: string;
    coding: string;
    hiking: string;
    reading: string;
    astronomy: string;
  };
  
  const iconColors: IconColorType = {
    photography: "text-blue-500",
    music: "text-green-500",
    coding: "text-red-500",
    hiking: "text-yellow-500",
    reading: "text-indigo-500",
    astronomy: "text-purple-500"
  };
  

export default Hobbies;



