/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
    // React configuration
    reactStrictMode: true,

    // Performance optimizations (swcMinify is enabled by default in Next.js 13+)

    // Image optimization for Vercel deployment
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "opengraph.githubassets.com",
            },
        ],
        formats: ["image/webp", "image/avif"],
    },

    // Compiler optimizations
    compiler: {
        removeConsole: isProd
            ? {
                  exclude: ["error"],
              }
            : false,
    },

    // Production optimizations
    ...(isProd && {
        // Disable source maps in production for security
        productionBrowserSourceMaps: false,

        // Package optimization is handled automatically in Next.js 15+
    }),

    // Security headers are handled by Vercel configuration for static export
}

module.exports = nextConfig
