import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/inframax',
  assetPrefix: '/inframax',
};

export default nextConfig;
