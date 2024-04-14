// Manifesto.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { manifestoData } from '@/lib/data';  // doğru dosya yolu olduğundan emin olun

export default function Manifesto() {
  return (
    <section className="bg-gray-100 p-8 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Manifesto</h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">Our principles of design and operation:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {manifestoData.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-700 p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                {React.createElement(item.icon, { className: "text-5xl mb-4 text-blue-500" })}
                <h3 className="text-2xl font-semibold mt-2 mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
