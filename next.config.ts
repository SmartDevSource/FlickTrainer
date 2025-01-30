import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me'],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
