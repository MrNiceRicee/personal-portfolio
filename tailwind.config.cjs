const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      shadow: {
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("data-state-checked", '&[data-state="checked"]');
    }),
    plugin(({ addVariant }) => {
      addVariant("data-state-unchecked", '&[data-state="unchecked"]');
    }),
  ],
  darkMode: 'class',
};
