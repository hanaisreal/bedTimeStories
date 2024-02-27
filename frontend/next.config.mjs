/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
});

// Define your Next.js configuration here
const nextConfig = {
  // Your Next.js config options here
};

// Wrap your nextConfig with withPWA to apply the PWA configuration
export default withPWA(nextConfig);
