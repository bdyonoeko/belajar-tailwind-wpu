module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {

      animation: {
        wiggle: 'wiggle-keyframe 1s ease-in-out infinite',
      },

      keyframes: {
        'wiggle-keyframe': {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        }
      },

      fontFamily: {
        grape : ['Grape Nuts'],
        inter : ['Inter']
      },

    }
  },
  plugins: [],
}
