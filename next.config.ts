import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // The design folds API integrations into the automation service and privacy into the terms page.
      { source: "/services/api-integrations", destination: "/services/automation-ai", permanent: true },
      { source: "/privacy", destination: "/terms#privacy", permanent: true },
    ];
  },
};

export default nextConfig;
