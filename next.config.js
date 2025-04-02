/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'i.ytimg.com'],
  },
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY',
  },
};

module.exports = nextConfig; 