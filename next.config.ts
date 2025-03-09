import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["pdf-parse", "@google/generative-ai", "@pinecone-database/pinecone"]
};

export default nextConfig;
