import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'3xl': '2560px',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6B1423',

					secondary: '#FAD27D',

					accent: '#1fb2a6',

					neutral: '#f3f4f6',

					'base-100': '#111827',

					info: '#3abff8',

					success: '#36d399',

					warning: '#fbbd23',

					error: '#f87272',
				},
			},
		],
	},
};
export default config;
