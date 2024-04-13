'use '

import React from 'react';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaMusic, FaCode, FaWalking, FaBookOpen, FaStar } from 'react-icons/fa';

const hobbies = [
  {
    id: 'photography',
    icon: <FaCameraRetro className="text-5xl text-blue-500" />,
    title: 'Fotoğrafçılık',
    description: 'Doğa manzaraları çekmeyi ve anı ölümsüzleştirmeyi seviyorum.'
  },
  {
    id: 'music',
    icon: <FaMusic className="text-5xl text-green-500" />,
    title: 'Müzik',
    description: 'Gitar çalmak ve yeni melodiler yaratmak benim için bir tutku.'
  },
  {
    id: 'coding',
    icon: <FaCode className="text-5xl text-red-500" />,
    title: 'Kodlama',
    description: 'Yeni teknolojiler öğrenmek ve projeler geliştirmekten keyif alıyorum.'
  },
  {
    id: 'hiking',
    icon: <FaWalking className="text-5xl text-yellow-500" />,
    title: 'Yürüyüş',
    description: 'Doğada yürüyüş yapmak, bana huzur ve ilham veriyor.'
  },
  {
    id: 'reading',
    icon: <FaBookOpen className="text-5xl text-indigo-500" />,
    title: 'Kitap Okuma',
    description: 'Farklı dünyalara dalıp yeni fikirler keşfetmek için kitap okumayı seviyorum.'
  },
  {
    id: 'astronomy',
    icon: <FaStar className="text-5xl text-purple-500" />,
    title: 'Astronomi',
    description: 'Yıldızları ve uzayı incelemek, evrenin büyüklüğü hakkında düşündürüyor.'
  }
];

function Hobbies() {
  return (
    <section className="bg-gray-100 p-8">
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
