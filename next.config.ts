import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});
module.exports =
  process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;