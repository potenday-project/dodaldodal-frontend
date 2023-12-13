import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/images/home_bg.png')",
      },
      backgroundColor: {
        'dodal-main': '#140A29',
        'dodal-kakao': '#FEE500',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
