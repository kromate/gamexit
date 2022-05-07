module.exports = {
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
	},
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'./blocks/**/*.{vue,js,ts,jsx,tsx}',
	],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#8C72FF',
				dark: '#15083E',
				blue: '#6CD3FF',
			},
			boxShadow: {
				block: '0 20px rgba(0,0,0,0.8)',
			},
		},
	},
	plugins: [],
}
