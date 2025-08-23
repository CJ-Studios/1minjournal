import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/1minjournal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/1minjournal/' : '',
  distDir: 'out',
};

export default nextConfig;
