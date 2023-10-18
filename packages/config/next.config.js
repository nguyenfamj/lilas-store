/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'config'],
  i18n: {
    locales: ['vi-VN', 'en-US'],
    defaultLocale: 'vi-VN',
    localeDetection: false,
  },
};

module.exports = nextConfig;
