/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors:{
        primary:'#444CF7',
        dark:'#0f172a'
      }
    },
  },
  plugins: [
        require('preline/plugin'),
  ],
}

