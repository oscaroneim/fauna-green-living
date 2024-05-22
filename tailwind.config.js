const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // backgroundImages property is used to define custom background images that can be used with utility classes.
      backgroundImage: {
        'frequently-asked-trees': "url('/trees.png')"
      },
      backgroundImage: {
        'bamboo-image': "url('/bamboo-2.jpeg')"
      },
      backgroundImage: {
        ocean: "url('/blue-ocean-2.png')"
      },
      boxShadow: {
        top: '0 -4px 10px -1px rgba(196, 212, 200, 1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      // colors are customs colors used across the website
      colors: {
        customLightGreen: '#C4D4C8',
        customGreen: '#82A38A',
        customDarkGreen: '#043028',
        customGrey: '#828282',
        customLightGrey: '#E0E0E0',
        customRed: '#DC2626'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
