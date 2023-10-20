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
        'black': "url('../public/black.jpg')",
        'blue': "url('../public/blue.jpg')",
        'gradient': "url('../public/gradient.jpg')",
        'deep': "url('../public/deep.jpg')",
        'deepmind': "url('../public/deepmind.jpg')",
        'mountain': "url('../public/bg-mountain.jpg')",
      },
    }

  },
  plugins: [],
}
export default config
