'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { hobbiesData } from '@/lib/data'; 
import SectionHeading from './section-heading';

function Hobbies() {
  return (
    <section className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <div className="container mx-auto">
        <div className="text-center">
        <SectionHeading>Hobbies</SectionHeading>
          <p className="mb-12 text-lg text-gray-600">Here's a glimpse of what I do in my spare time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbiesData.map((hobby) => (
            <motion.div
              key={hobby.id}
              className="overflow-hidden rounded-lg shadow-lg bg-white p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <hobby.icon className={`text-5xl ${iconColors[hobby.id as keyof IconColorType ]}`} />
                <h3 className="text-2xl font-semibold mt-2 mb-4">{hobby.title}</h3>
                <p className="text-gray-700">{hobby.description}</p>
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



import React from 'react';
import { motion } from 'framer-motion';
import { hobbiesData } from './data';

function Hobbies() {
  return (
    <section className="bg-gray-100 p-8 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Hobbies</h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">Boş zamanlarımda neler yaptığıma dair bir kesit.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbiesData.map((hobby) => (
            <motion.div
              key={hobby.id}
              className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-700 p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                {React.createElement(hobby.icon, { className: `text-5xl mb-4 ${iconColors[hobby.id]}` })}
                <h3 className="text-2xl font-semibold mt-2 mb-4 text-gray-900 dark:text-white">{hobby.title}</h3>
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

const iconColors = {
  photography: "text-blue-500",
  music: "text-green-500",
  coding: "text-red-500",
  hiking: "text-yellow-500",
  reading: "text-indigo-500",
  astronomy: "text-purple-500"
};

export default Hobbies;
