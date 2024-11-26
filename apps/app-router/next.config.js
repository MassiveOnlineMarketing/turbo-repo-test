module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'styles'],
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/docs/:path*'      }
    ]
  }
}
