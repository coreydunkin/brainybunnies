import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-ber1-1.cdninstagram.com"
      },
      {
        protocol: "https",
        hostname: "scontent-fra3-1.cdninstagram.com"
      }
    ],
  },
};

export default nextConfig;
