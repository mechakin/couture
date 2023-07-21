/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default config;
