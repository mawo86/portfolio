import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Signalfarbe: warmes Amber/Kupfer. Eine Akzentfarbe, sparsam eingesetzt.
        brand: {
          50:  '#FFF6E5',
          100: '#FFE8BF',
          200: '#FFD08A',
          300: '#F7B65A',
          400: '#EE9F34',
          500: '#E08A1E',
          600: '#BF7014',
          700: '#98570F',
          800: '#6E3F0C',
          900: '#472908',
        },
        // Grund: warmes Anthrazit statt Navy
        ink: {
          950: '#0B0A09',
          900: '#121110',
          800: '#1A1816',
          700: '#242220',
          600: '#34312D',
        },
        // Textfarben: warmes Off-White
        bone: {
          50:  '#F5F1EA',
          200: '#D9D3C8',
          400: '#A39C90',
          600: '#6F6961',
        },
        // Tailwind-Gray auf warm umgestellt, damit bestehende gray-Klassen
        // (Impressum, Datenschutz, Tools) automatisch zur neuen Palette passen.
        gray: {
          50:  '#F5F1EA',
          100: '#E9E4DB',
          200: '#D9D3C8',
          300: '#C2BBAF',
          400: '#A39C90',
          500: '#857E73',
          600: '#6F6961',
          700: '#4E4943',
          800: '#34312D',
          900: '#1A1816',
          950: '#0B0A09',
        },
      },
      scrollMargin: {
        'header': '6rem',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'drift': 'drift 18s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        drift: {
          '0%': { transform: 'translate3d(-2%, -1%, 0) scale(1.04)' },
          '100%': { transform: 'translate3d(2%, 1%, 0) scale(1.08)' },
        },
      },
    },
  },
  plugins: [typography],
};
