/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/kobisopenapi/:path*',
        destination: 'http://www.kobis.or.kr/kobisopenapi/:path*',
      },
    ];
  },
};

export default nextConfig;
