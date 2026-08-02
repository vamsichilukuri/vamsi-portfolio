// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     reactStrictMode: true,
// };

// export default nextConfig;

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
