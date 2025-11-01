
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
        'primary-orange': '#FAC660',
        'general-body': '#202020',
        'general-separator': '#F2F2F2',
      },
      fontFamily: {
        italiana: ['var(--font-italiana)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
