/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  output: 'standalone',
  // 모든 리다이렉트 제거 - Vercel에서 도메인 관리
  // Vercel 최적화 설정 추가
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;