/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		swcPlugins: [['@swc-jotai/react-refresh', {}]],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				pathname: '/*/**',
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				pathname: '/*/**',
			},
		],
	},
};

module.exports = nextConfig;
