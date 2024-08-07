/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  async redirects() {
    return [

      {
        source: "/",
        destination: "/auth",
        permanent: true,
      },



    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // Optional: disable SVGO optimization
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;