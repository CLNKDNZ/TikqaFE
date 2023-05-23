/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://tikqa.herokuapp.com/tikqa/api/:path*',
            }
        ]
    }
}

module.exports = nextConfig

