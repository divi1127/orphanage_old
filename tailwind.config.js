/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#174C3C',
          dark: '#0F3328',
          light: '#1E5F4B',
        },
        sage: {
          DEFAULT: '#8EAE9B',
          light: '#C4D6C9',
        },
        cream: {
          DEFAULT: '#FAF7F0',
          alt: '#F1EDE3',
        },
        terracotta: {
          DEFAULT: '#D9775B',
          dark: '#C4614A',
        },
        golden: {
          DEFAULT: '#D8B36A',
          light: '#EBD9B0',
        },
        charcoal: {
          DEFAULT: '#202522',
          soft: '#3F4A44',
          muted: '#6B766F',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(23, 76, 60, 0.08)',
        card: '0 8px 40px rgba(23, 76, 60, 0.10)',
        lift: '0 20px 50px rgba(23, 76, 60, 0.18)',
      },
      maxWidth: {
        content: '1400px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'in-out-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};