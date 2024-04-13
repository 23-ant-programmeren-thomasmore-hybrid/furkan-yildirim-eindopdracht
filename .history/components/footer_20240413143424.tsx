import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

// Footer bileşenini fonksiyon olarak tanımlama
export default function Footer() {
  // Şirket bilgileri ve sosyal medya linkleri
  const companyName = "Şirket Adı";
  const description = "Şirketinizin kısa açıklaması buraya gelebilir.";
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter size={24} /> },
    { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebookF size={24} /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram size={24} /> },
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-4"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-xl font-bold">{companyName}</h1>
        <p className="text-sm my-2">{description}</p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} className="hover:text-gray-300 transition-colors duration-300">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
