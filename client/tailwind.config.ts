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
        'regal-blue': '#243c5a',
      },
      backgroundImage: {
        'blur': "url('../public/background.jpg')",
        'waves': "url('../public/waves.jpg')",
      },
    }

  },
  plugins: [],
}
export default config
