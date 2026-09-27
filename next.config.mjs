/** @type {import('next').NextConfig} */
const repo = "wonders-of-spiritual-crafts";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  trailingSlash: true,
};
export default nextConfig;
