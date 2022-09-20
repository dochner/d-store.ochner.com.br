import { Config } from 'tailwindcss';

const colorBase = {
  primary: {
    50: '#f3f9ff',
    100: "#d6ffd6",
    200: "#adffad",
    300: "#85ff85",
    400: "#5cff5c",
    500: "#33ff33",
    600: "#29cc29",
    700: "#1f991f",
    800: "#146614",
    900: "#0a330a"
  },
  secondary: {
    50: '#f3f9ff',
    100: "#ccf6ff",
    200: "#99eeff",
    300: "#66e5ff",
    400: "#33ddff",
    500: "#00d4ff",
    600: "#00aacc",
    700: "#007f99",
    800: "#005566",
    900: "#002a33"
  },
  dark: {
    50: '#f3f9ff',
    100: "#d9d9d9",
    200: "#b2b2b2",
    300: "#8c8c8c",
    400: "#656565",
    500: "#3f3f3f",
    600: "#323232",
    700: "#262626",
    800: "#191919",
    900: "#0d0d0d"
  },
}

export default {
  darkMode: 'class',
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/typography'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/forms'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/line-clamp'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('tailwind-scrollbar-hide'),
  ],
  content: [
    'components/**/*.{js,jsx,ts,tsx,vue}',
    'constants/**/*.{js,jsx,ts,tsx,vue}',
    'content/**/*.{md,yml,json,json5,csv}',
    'layouts/**/*.{js,jsx,ts,tsx,vue}',
    'pages/**/*.{js,jsx,ts,tsx,vue}',
    'plugins/**/*.{js,jsx,ts,tsx,vue}',
    'stories/**/*.{js,jsx,ts,tsx,vue}',
  ],
  safelist: [
    'whitelisted',
    {
      pattern:
        /(bg|text|border)-(primary|secondary|blue|yellow|gray|rose|white)(-([2589])0+)?/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Noto serif', 'sans-serif'],
        monospace: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['.75rem', '1rem'],
        sm: ['.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '3rem'],
        '6xl': ['3.75rem', '3.75rem'],
        '7xl': ['4.5rem', '4.5rem'],
        '8xl': ['6rem', '6rem'],
        '9xl': ['8rem', '8rem'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...colorBase,
        warning: '#ffcc00',
        danger: '#ff4300',
        info: '#3f33f3',
        success: '#00cc00',
      },
      boxShadow: {
        sm: ' 0px 0px 2px rgba(0, 0, 0, 0.2)',
        base: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.15)',
        lg: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.15)',
        xl: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.15)',
        '2xl':
          '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 24px 48px rgba(0, 0, 0, 0.15)',
      },
      container: {
        center: true,
      },
      borderRadius: {
        none: '0',
        xs: '0.125rem',
        sm: '0.188rem',
        default: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
} as Config;
