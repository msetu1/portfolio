import { NextConfig } from "next";

const nextConfig:NextConfig = {
  images: {
    remotePatterns: [
     {
      protocol:"https",
      hostname:"**"
     }
    ],
  },
};

module.exports = nextConfig;
