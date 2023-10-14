import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00FFDD',
      },
      fontFamily: {
        goldman: ['var(--font-goldman)'],
        meslo: ['var(--font-meslo)'],
      },
    },
  },
  plugins: [],
}
export default config
