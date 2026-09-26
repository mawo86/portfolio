import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primärfarbe: Google-Blau (Material 3 Tonpalette). Eine Signalfarbe, sparsam.
        // Hinweis zur Skala: 50 bis 200 sind helle Tonflächen, ab 300 dunkle Text- und Buttonfarben,
        // damit alte Klassen wie text-brand-400 (Akzenttext) und bg-brand-500/10 (Tint) weiter passen.
        brand: {
          50:  '#EEF3FD',
          100: '#D3E3FD',
          200: '#A8C7FA',
          300: '#0842A0',
          400: '#0B57D0',
          500: '#0B57D0',
          600: '#0B57D0',
          700: '#0842A0',
          800: '#062E6F',
          900: '#041E49',
        },
        // Grund: Weiß und helle Grautöne (Google-Neutrals). ink-900 ist der Seitengrund,
        // ink-800 die Tonfläche für Karten und Container.
        ink: {
          950: '#F8F9FA',
          900: '#FFFFFF',
          800: '#F0F4F9',
          700: '#E8EBEF',
          600: '#DADCE0',
        },
        // Text: Anthrazit-Töne. bone-50 ist Haupttext, bone-200/400 Fließ- und Nebentext, bone-600 Hinweise.
        bone: {
          50:  '#1F1F1F',
          200: '#3C4043',
          400: '#5F6368',
          600: '#747775',
        },
        // Tailwind-Gray auf Google-Neutrals, damit bestehende gray-Klassen im hellen Design lesbar bleiben.
        // Achtung: gray-400 bis gray-600 sind absichtlich dunkel genug für Text auf Weiß.
        gray: {
          50:  '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#5F6368',
          500: '#4D5156',
          600: '#3C4043',
          700: '#303134',
          800: '#202124',
          900: '#1F1F1F',
          950: '#171717',
        },
        // Tonflächen für Karten und Chips (Material-Pastell). Text darauf: die jeweilige -900.
        tonal: {
          blue:    '#D3E3FD', 'blue-900':   '#041E49',
          green:   '#C4EED0', 'green-900':  '#072711',
          yellow:  '#FEEFC3', 'yellow-900': '#5F3E00',
          red:     '#FAD2CF', 'red-900':    '#601410',
        },
      },
      scrollMargin: {
        'header': '6rem',
      },
      fontFamily: {
        display: ['Manrope', 'Roboto', 'system-ui', 'sans-serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
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
