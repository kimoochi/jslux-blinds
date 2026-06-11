import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Uncomment below for full static export (Netlify / GitHub Pages)
  // output: "export",
  // trailingSlash: true,
};

export default nextConfig;
