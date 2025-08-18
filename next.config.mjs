/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  output: 'standalone',
  // trailingSlash: true,  // Vercel에서는 제거
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.networkkings.website' }],
        destination: 'https://networkkings.website/:path*',
        permanent: true,
      },
      // pdfers.com 도메인 리다이렉트 추가
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.pdfers.com' }],
        destination: 'https://pdfers.com/:path*',
        permanent: true,
      },
    ]
  },
  // Vercel 최적화 설정 추가
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;