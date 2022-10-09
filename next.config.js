// import rehypePrism from '@mapbox/rehype-prism'
// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    outputStandalone: true,
  },
  env: {
    API_DOMAIN: process.env.API_DOMAIN,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
}

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

module.exports = nextConfig
