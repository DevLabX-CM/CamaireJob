/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "sag6rpyeyk77dufs.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
