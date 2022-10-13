/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.wine.com.br', 'www.img.wine.com.br']
  }
}

module.exports = nextConfig
