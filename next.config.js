/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
    // React configuration
    reactStrictMode: true,

    // Enable static export for GitHub Pages
    output: "export",

    // Base path for GitHub Pages (only in production)
    basePath: isProd ? "/some19ice-portfolio" : "",

    // Add trailing slash to fix routing issues
    trailingSlash: true,

    // Performance optimizations (swcMinify is enabled by default in Next.js 13+)

    // Image optimization for static export
    images: {
        domains: ["localhost", "some19ice.github.io", "opengraph.githubassets.com"],
        unoptimized: true, // Required for static export
        formats: ['image/webp', 'image/avif'],
    },

    // Compiler optimizations
    compiler: {
        removeConsole: isProd ? {
            exclude: ['error']
        } : false,
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
