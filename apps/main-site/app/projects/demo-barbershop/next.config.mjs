/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@masnry/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
