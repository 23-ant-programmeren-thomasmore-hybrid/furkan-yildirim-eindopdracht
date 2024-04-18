/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.dunya.com", 
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  