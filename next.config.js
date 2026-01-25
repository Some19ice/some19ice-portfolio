const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
    // React configuration
    reactStrictMode: true,

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

    // Static export configuration for GitHub Pages
    output: "export",

    // Compiler optimizations
    compiler: {
        removeConsole: isProd
            ? {
                  exclude: ["error"],
              }
            : false,
        // Enable React Compiler for automatic memoization (when available)
        ...(process.env.REACT_COMPILER && {
            reactCompiler: true,
        }),
    },

    // Production optimizations
    ...(isProd && {
        // Disable source maps in production for security
        productionBrowserSourceMaps: false,
    }),

    // Performance improvements
    poweredByHeader: false,
    compress: true,

    // Bundle optimization
    webpack: (config, { isServer }) => {
        // Optimize bundle size
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            }
        }
        return config
    },
}

module.exports = nextConfig
