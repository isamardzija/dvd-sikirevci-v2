/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			base: ['Inter', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				cardOverlay:
					'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 48%, rgba(0, 0, 0, 0.8) 100%),'
			}
		}
	}
}
