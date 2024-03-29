/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
