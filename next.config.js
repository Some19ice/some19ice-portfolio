/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const nextConfig = {
    reactStrictMode: true,
    // Enable static export for GitHub Pages
    output: "export",
    // Base path and asset prefix for GitHub Pages (only in production)
    basePath: isProd ? "/some19ice-portfolio" : "",
    assetPrefix: isProd ? "/some19ice-portfolio/" : undefined,
    images: {
        domains: ["localhost", "some19ice.github.io", "opengraph.githubassets.com"],
        // Use unoptimized images for static export
        unoptimized: true,
        formats: ["image/webp", "image/avif"],
    },
}

module.exports = nextConfig
