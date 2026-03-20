import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mian-black':   '#0F0F0F',
        'mian-white':   '#FFFFFF',
        'mian-grey-1':  '#F4F4F2',
        'mian-grey-2':  '#E8E8E4',
        'mian-grey-3':  '#9A9A96',
        'mian-grey-4':  '#5A5A56',
        'mian-accent':  '#4A6FA5',
      },
      fontFamily: {
        'display':  ['Barlow Condensed', 'sans-serif'],
        'mono':     ['IBM Plex Mono', 'monospace'],
        'body':     ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
