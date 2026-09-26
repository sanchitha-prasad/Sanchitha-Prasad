import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "";
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(repo ? { basePath: `/${repo}` } : {}),
  reactStrictMode: true,
};

export default nextConfig;
