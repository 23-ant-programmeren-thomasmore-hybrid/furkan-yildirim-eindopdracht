import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Footer Props Tip Tanımı
interface FooterProps {
  companyName: string;
  description: string;
  socialLinks: { name: string; url: string; icon: JSX.Element }[];
}

// Footer Bileşeni
const Footer: React.FC<FooterProps> = ({ companyName, description, socialLinks }) => {
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
};

// Sosyal Medya Linkleri ve İkonları
const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com', icon: <FontAwesomeIcon icon={faTwitter} /> },
  { name: 'Facebook', url: 'https://facebook.com', icon: <FontAwesomeIcon icon={faFacebookF} /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <FontAwesomeIcon icon={faInstagram} /> },
];

// Footer bileşenini dışa aktarma
export default Footer;
