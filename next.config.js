/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ Crucial for next export
  },
};

module.exports = nextConfig;
