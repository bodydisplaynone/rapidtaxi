/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#2D3E6B',
          yellow: '#F5B800',
          light:  '#F8F8F6',
        },
      },
      fontFamily: {
        heading: ['Exo 2', 'ui-sans-serif', 'system-ui'],
        body:    ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
