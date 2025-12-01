import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  experimental: {
    useCache: true, // Добавляем эту опцию
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.tablecrm.com",
        port: "",
        pathname: "/photos/**",
        search: "",
      },
    ],
  },
};
export default nextConfig;
