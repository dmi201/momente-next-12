/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unoptimized: true,
};

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
