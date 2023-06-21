/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
	important: true,
	darkMode: 'class',
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	corePlugins: {
		preflight: false
	},

	plugins: [require('@tailwindcss/line-clamp')]
};
