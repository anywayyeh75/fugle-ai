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
        fugle: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#F5A623', // 主品牌色
          600: '#E09000',
          700: '#B87300',
          800: '#8F5900',
          900: '#664000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
