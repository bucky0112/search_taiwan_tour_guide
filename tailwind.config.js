module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF7144',
      secondary: '#FFB865',
      grey: {
        DEFAULT: '#828282',
        dark: '#4F4F4F',
        light: '#F2F2F2'
      },
      white: '#fff'
    },
    extend: {
      backdropBlur: {
        lg: '18px'
      },
      backdropOpacity: {
        35: '.35'
      }
    }
  },
  plugins: []
}
