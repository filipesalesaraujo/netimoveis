import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		maxWidth: {
			'grid': '1248px',
		},
		colors: {
			'orange': '#ED672B',
			'blue': '#063D7E',
			'dark-blue': '#1C2A39',
			'gray': '#555555',
			'light-gray': '#D0D5D8',
		  },
		  backgroundImage: theme => ({
			'gradiente-be-part-of': 'linear-gradient(to bottom, rgba(250, 249, 247, 0), rgba(250, 249, 247, 1))',
		  })
    },
  },
  plugins: [],
};
export default config;
