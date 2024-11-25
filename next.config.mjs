/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:category",
        destination: "/category?category=:category",
      },
      {
        source: "/:category/:id",
        destination: "/category/item?category=:category&id=:id",
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "cms.yvonneschmedemann.com",
      },
    ],
  },
};

export default nextConfig;
