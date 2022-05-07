module.exports = {
	content: [
		'./index.html',
		'./src/**/**/*.{vue,js,ts}',
	],
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
