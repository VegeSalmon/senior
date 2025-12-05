import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/senior",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
