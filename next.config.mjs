/** @type {import('next').NextConfig} */
// Deployed to a GitHub *project* page at https://sumitbalmiki90.github.io/sumit-portfolio/
// so routes and asset URLs must be prefixed with /sumit-portfolio. basePath handles both.
// (Local dev/preview therefore serves at http://localhost:3000/sumit-portfolio too.)
const nextConfig = {
    output: 'export',
    basePath: '/sumit-portfolio',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
