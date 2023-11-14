/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'config'],
  images: { domains: ['127.0.0.1'], formats: ['image/avif', 'image/webp'] },
};

module.exports = nextConfig;
