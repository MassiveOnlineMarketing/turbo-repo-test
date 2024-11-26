module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'styles'],
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://test.massiveonlinemarketing.nl/docs/:path*'
      }
    ]
  }
}
