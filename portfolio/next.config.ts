import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimisation of local public images
    remotePatterns: [],
  },
  // Strict mode for better dev experience
  reactStrictMode: true,
};

export default nextConfig;
