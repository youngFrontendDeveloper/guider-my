/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [
      320, 350, 640, 700, 828, 1080, 1200, 1440, 1920, 2048, 3840 ],
    imageSizes: [ 16, 32, 48, 64, 96, 128, 256, 388, 640, 700, 828, 1080, 1440 ],
  },
};

module.exports = nextConfig;
