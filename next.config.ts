import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['w7.pngwing.com', "assets-v2.lottiefiles.com","media2.dev.to" ,"cdn-icons-png.flaticon.com", "codekitapp.com","www.mwskwong.com","img.icons8.com","assets.streamlinehq.com","logo.svgcdn.com","user-images.githubusercontent.com","e7.pngegg.com","platform.theverge.com","miro.medium.com","www.shutterstock.com","www.freelogovectors.net","cdn.prod.website-files.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "grpc.io",
      },
      {
        protocol: "https",
        hostname: "dbdb.io",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.svgporn.com",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "withpersona.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;