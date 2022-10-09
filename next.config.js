/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    outputStandalone: true,
  },
  env: {
    NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL:
      process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
}

module.exports = nextConfig
