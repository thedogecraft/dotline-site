import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/dotline",
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/thedogecraft/dotline/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "store-images.s-microsoft.com",
        search: "",
      },
    ],
  },
};

export default nextConfig;
