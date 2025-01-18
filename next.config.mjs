/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'], // Add your allowed domains here
    },
};

export default nextConfig;
