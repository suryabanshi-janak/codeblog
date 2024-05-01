import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#fff',
        accent: '#7B00D3',
        accentDark: '#ffdb4d',
        gray: '#747474',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)'],
      },
      screens: {
        sxl: '1180px', // @media (min-width: 1180px){...}
        xs: '480px', // @media (min-width: 480px){...}
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
export default config;
