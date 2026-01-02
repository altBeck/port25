import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // Define your custom container breakpoints here
      containers: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
      },
    },
  },
  plugins: [
    containerQueries,
  ],
};