/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF9933', // Saffron
				secondary: '#212121', // Dark Grey
				accent: '#F5F5F5',
			}
		},
	},
	plugins: [],
}