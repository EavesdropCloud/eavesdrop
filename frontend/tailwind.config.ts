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
        'midnight': {
          50: '#0D050F',
          100: '#170a1c',
          150: '#220F29',
          200: '#25102D',
          300: '#31153C',
        },
        'darkpurple': '#391833',
        'lilac': '#BE95C4',
        'lightpink': '#E0B1CB',
        'powder': '#F5F0F1',
      },
     },
   },
  plugins: [],
}
export default config
