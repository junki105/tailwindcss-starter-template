module.exports = {
  // mode: 'jit',
  //  purge: [
  //   './*.html'
  // ],

	darkMode: false, //you can set it to media(uses prefers-color-scheme) or class(better for toggling modes via a button)

  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1169px'},
      // => @media (max-width: 1169px) { ... }
  
      'lg': {'max': '1049px'},
      // => @media (max-width: 1049px) { ... }
  
      'md': {'max': '899px'},
      // => @media (max-width: 899px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    // extend: {
    //   fontFamily: {
    //     'shingo-debold': ['shingo-debold'],
    //   },
    //   textColor: {
    //     'green': '#3d8900',
    //   },
    // },
  },
	variants: {
  },
	plugins: [],
  // corePlugins: {
  //   container: false,
  // }
}