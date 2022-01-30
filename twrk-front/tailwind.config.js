module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lillac: '#EDD2F3',
        cream: '#FFFCDC',
        primary: '#84DFFF',
        light: '#84DFFF'
        },
        animation: {
          "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
        },
        keyframes: {
            "scale-up-center": {
                "0%": {
                    transform: "scale(.5)"
                },
                to: {
                    transform: "scale(1)"
                }
            }
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}