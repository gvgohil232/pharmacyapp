/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/pharmacyapp',
  // output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
}

export default nextConfig
