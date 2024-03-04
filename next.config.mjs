/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'dkstatics-private.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'dkstatics-public.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'dkstatics-public-2.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'dkstatics-public-3.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'dkstatics-public-4.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'about.digikala.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
