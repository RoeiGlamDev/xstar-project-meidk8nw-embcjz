import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your actual image domains
    formats: ['image/avif', 'image/webp']
},
  optimization: {
    images: {
      layoutRaw: true,
      quality: 75
}
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|obj|mtl|fbx|stl)$/,
      use: 'file-loader'
});
    return config;
  },
  env: {
    BRAND_NAME: "GlamCS",
    PRIMARY_COLOR: "#FFA500", // Orange
    SECONDARY_COLOR: "#FFFFFF", // White
    DESCRIPTION: "Discover the elegance of GlamCS, your ultimate destination for luxurious cosmetics that enhance your natural beauty."
}
};

export default nextConfig;