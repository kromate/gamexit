/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
    extend: {
			colors: {
				primary: 'var(--primary)',
        dark: 'var(--dark)',
        blue: 'var(--blue)'
      },
      boxShadow: {
				block: '0 20px rgba(0,0,0,0.8)'
			}
		}
  },
  plugins: []
}
