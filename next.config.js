// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔥 This enables static export with real HTML files
  trailingSlash: true, // optional: ensures `/page/` paths instead of `/page`
};

module.exports = nextConfig;
