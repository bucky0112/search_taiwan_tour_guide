module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF7144',
      secondary: '#FFB865',
      primaryText: '#4F4F4F',
      secondaryBG: '#F2F2F2'
    },
    extend: {}
  },
  plugins: []
}
