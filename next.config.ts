import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactRoot: true,
    appDir: true,
  },
};

module.exports = nextConfig;