/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['picsum.photos'],
    deviceSizes: [640, 1080, 1920, 3840],
  }
}

module.exports = nextConfig
