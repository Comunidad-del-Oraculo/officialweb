import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    turbo: {
      root: '.',
    },
  },
};

export default nextConfig;
