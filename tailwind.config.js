/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EA7F1B',
        'primary-hover': '#F1A864',
        'sub-primary': '#45280D',
        'sub-primary-hover': '#845428',
        'body-color': '#505050',
        'text-color': '#858585',
        'line-color': '#9C9C9C',
        'disabled-color': '#DFDFDF',
        'background-color': '#FFFFFF',
      },
      margin: {
        header: '63px',
      },
      fontFamily: {
        jost: ['Jost'],
      },
      boxShadow: {
        main: '0 4px 6px -15px rgba(0, 0, 0, 0.8)',
      },
      screens: {
        min: '375px',
        plus: '576px',
        mobile: '768px',
        pad: '1140px',
        mid: '1280px',
        desktop: '1420px',
        max: '1920px',
      },
      width: {
        min: '375px',
        plus: '414px',
        mobile: '768px',
        pad: '1140px',
        mid: '1280px',
        desktop: '1420px',
        max: '1920px',
      },
    },
  },
  plugins: [],
}
