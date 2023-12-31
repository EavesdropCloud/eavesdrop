import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
     extend: {
      //  backgroundImage: {
      //    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //    'gradient-conic':
      //      'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      //  },
      colors: {
        'raisin': {
          50: '#1E1E1F',
          100: '#28282A',
          200: '#323234',
          300: '#3C3C3E',
          800: '#A1A1A5',
          900: '#CBCBCD',
          950: '#E0E0E1',
        },
        'midnight': {
          50: '#0D050F',
          100: '#170a1c',
          150: '#220F29',
          200: '#25102D',
          300: '#31153C',
        },
        'darkpurple': '#391833',
        'lilac': '#D0C4DF',
        'lightpink': '#DCABDF',
        'wisteria': {
          300: '#C792DF',
          500: '#9337BE',
        },
        'powder': '#F5F0F1',
        'pinkman': '#A601BF',
        'poison': '#9102BF',
        'gblue': '#40c9ff',
        'gpurple': '#e81cff',
      },
     },
   },
  plugins: [],
}
export default config
