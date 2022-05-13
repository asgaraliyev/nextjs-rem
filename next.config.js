module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home.html',
        permanent: true,
      },
    ];
  },
};
