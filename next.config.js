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

//   serverComponentsExternalPackages: ['bcrypt'],
// module.exports = {
//   reactStrictMode: true, // Enable React Strict Mode
//   images: {
//     // domains: ['example.com'], // Allow specific domains for images
//   },
//   // ...other configuration options
// };

// const withTM = require('next-transpile-modules')(['bcrypt'])

// module.exports = withTM({
//     webpack: (config) => {
//         // Exclude bcrypt from the bundle using webpack-node-externals
//         config.externals.push('bcrypt')
//     return config
//   },
// })
