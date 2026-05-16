const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
    // React configuration
    reactStrictMode: true,

    // Disable Turbopack (WASM fallback doesn't support it)
    // turbopack: {},

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

    // Static export configuration for GitHub Pages (disabled on Vercel and in dev to allow API routes)
    output: process.env.VERCEL || !isProd ? undefined : "export",

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
