import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Photos are 721 px wide, so there is no point generating anything wider.
    deviceSizes: [360, 480, 640, 750],
    imageSizes: [96, 192, 384],
    qualities: [85],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
