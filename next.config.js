const ddragon = [
	'/cdn/**/img/spell/**.png', //Champion spell icon
	'/cdn/**/img/passive/**.png', //Champion passive icon
	'/cdn/**/img/champion/**.png', //Champion square icon
	'/cdn/img/champion/splash/**.jpg', //Champion splash image
	'/cdn/img/champion/loading/**.jpg', //Champion loading image
];


/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: ddragon.map( (pathname) => ({
			protocol: 'https',
			hostname: 'ddragon.leagueoflegends.com',
			port: '',
			pathname,
		}) ),
	},
};

module.exports = nextConfig
