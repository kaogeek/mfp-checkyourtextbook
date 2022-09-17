/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  plugins: [require('flowbite/plugin')],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        blue: {
          50: '#ffefe5',
          100: '#ffceb3',
          200: '#ffae80',
          300: '#ff8d4d',
          400: '#ff6c1a',
          500: '#FF6711',
          600: '#FF6711',
          700: '#e65300',
          800: '#b34100',
          900: '#802e00',
        },
      },
    },
  },
};
