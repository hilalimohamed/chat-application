/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt']
    config.externals.push('bcrypt')
    return config
  },
  experimental: {
    serverComponentsExternalPackages: ['bcrypt'],
    serverComponents: true,
    serverActions: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint build errors
  },
}
module.exports = nextConfig
