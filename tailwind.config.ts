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
        primary: {
          50: '#F1F8E9',
          100: '#E8F5E9',
          300: '#5A8F6E',
          500: '#2D5A3D',
          700: '#1A4D2E',
          900: '#0D2918',
        },
        accent: {
          300: '#FBC49D',
          400: '#F4A261',
          500: '#E86A33',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F7FAFC',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3139',
          800: '#1A1D23',
          900: '#0F1115',
          950: '#0A0C0F',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '64px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h1': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      borderRadius: {
        '4xl': '32px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(45,90,61,0.3)',
        'glow-lg': '0 0 40px rgba(45,90,61,0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
