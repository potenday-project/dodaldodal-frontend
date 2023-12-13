import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('/images/login_background.png')",
        'home-background': "url('/images/home_background.png')",
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
