import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/.",
  assetPrefix: "/.",

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
