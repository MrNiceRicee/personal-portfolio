const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      shadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
      bg: {
        'repeating-clouds': {
          backgroundImage: './endless-clouds.svg',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        grow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        grow25: {
          '0%': { transform: 'scale(0.25)' },
          '100%': { transform: 'scale(1)' },
        },
        grow50: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        grow75: {
          '0%': { transform: 'scale(0.75)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out',
      grow: 'grow 0.5s ease-in-out',
      grow25: 'grow25 0.5s ease-in-out',
      'infinite-grow': 'grow 0.5s ease-in-out infinite',
      'infinite-grow25': 'grow25 5s ease-in-out infinite alternate',
      'infinite-grow50': 'grow50 5s ease-in-out infinite alternate',
      'infinite-grow75': 'grow75 5s ease-in-out infinite alternate',
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('data-state-checked', '&[data-state="checked"]');
    }),
    plugin(({ addVariant }) => {
      addVariant('data-state-unchecked', '&[data-state="unchecked"]');
    }),
  ],
  darkMode: 'class',
};
