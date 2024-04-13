'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaMusic, FaCode, FaWalking, FaBookOpen, FaStar } from 'react-icons/fa';



function Hobbies() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Hobilerim ve İlgi Alanlarım</h2>
          <p className="mb-12 text-lg text-gray-600">Boş zamanlarımda neler yaptığıma dair bir kesit.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              className="overflow-hidden rounded-lg shadow-lg bg-white p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                {hobby.icon}
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

export default Hobbies;
