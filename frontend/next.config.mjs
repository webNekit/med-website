/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [`${process.env.NEXT_PUBLIC_STRAPI_URL}`]
    }
};

export default nextConfig;
