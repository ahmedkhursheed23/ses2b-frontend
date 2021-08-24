module.exports = {
  reactStrictMode: false,
  // fix for 'fs' warning
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}
