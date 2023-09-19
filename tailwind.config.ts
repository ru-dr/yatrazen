import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'space': ['Space Mono', 'sans-serif']
      },
    },
    screens: {
      'xxs': '280px',
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl' : '1280px',
      'xxl': '1440px',
      '2xl': '1536px',
      '2xxl': '1680px',
      '3xl': '1920px',
    }
  },
  plugins: [],
}
export default config
