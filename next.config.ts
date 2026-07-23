import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/dotline",
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "store-images.s-microsoft.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

export default nextConfig;
