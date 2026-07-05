/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "woodtrack-preprod.sos-it.fr",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
