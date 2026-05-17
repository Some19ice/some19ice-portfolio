const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
    // React configuration
    reactStrictMode: true,

    // Silence Turbopack warning (use Turbopack by default in Next 16)
    turbopack: {},

    // Performance optimizations
    experimental: {
        // Optimize package imports for better tree-shaking
        optimizePackageImports: ["@react-three/fiber", "@react-three/drei", "three"],
    },

    // Image optimization
    images: {
        unoptimized: true,
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

    // Static export configuration for GitHub Pages (disabled on Vercel to allow API routes)
    output: process.env.VERCEL ? undefined : "export",

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
    }),

    // Performance improvements
    poweredByHeader: false,
    compress: true,
}

module.exports = nextConfig
