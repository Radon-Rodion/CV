import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  basePath: "/CV",
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/ru',
  //       permanent: true,
  //     },
  //   ]
  // },
  images: { unoptimized: true },
  output: "export"
};

export default nextConfig;