import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // サーバーコンポーネント最適化
  serverExternalPackages: ['@prisma/client'],
  // 画像最適化
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // 圧縮設定
  compress: true,
  // 環境変数
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // ヘッダー設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
