import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/login_background.png')",
        'home-background': "url('https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/home_background.png')",
        'challenge-background': "url('https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/challenge_background.png')",
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
