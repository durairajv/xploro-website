import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/686d086599ee65617e088c6d/**",
      },
    ],
  },
};

export default nextConfig;
