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
    experimental: {
      serverActions: true,
    }
  };
  
  export default nextConfig;
  