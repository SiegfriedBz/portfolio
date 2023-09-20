/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#020617', // slate-950
        light: '#f5f5f5', // neutral-100
        primary: '#B63E96',
        primaryDark: '#58E6D9', // 80,230,217
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(#020617 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark:
          'repeating-radial-gradient(#f5f5f5 2px, #020617 5px, #020617 100px);',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
}
export const plugins = []
