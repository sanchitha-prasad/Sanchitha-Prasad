import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "";
}

const basePath = repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
};

export default nextConfig;
