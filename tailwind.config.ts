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
			'gray': '#555555',
		  }
    },
  },
  plugins: [],
};
export default config;
