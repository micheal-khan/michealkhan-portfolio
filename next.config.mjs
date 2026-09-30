/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Tree-shake icon/animation libraries so only what's used is shipped.
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Inline the (small) Tailwind CSS into the HTML so it doesn't block first paint.
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|pdf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
