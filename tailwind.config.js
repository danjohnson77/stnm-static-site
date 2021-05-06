module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["ui-serif", '"Cormorant Garamond"'],
      sans: ["ui-sans-serif", "system-ui", "Arial"],
    },

    extend: {
      backgroundImage: (theme) => ({
        landingZero: "url('/landing_0.jpg')",
        landingOne: "url('/landing_1.jpg')",
        landingTwo: "url('/landing_2.jpg')",
        landingThree: "url('/landing_3.jpg')",
      }),

      transitionProperty: {
        height: "height",
      },
      colors: {
        lightBrown: {
          DEFAULT: "#D5D2CD",
        },
        medBrown: {
          DEFAULT: "#9C8B7E",
        },
        darkBrown: {
          DEFAULT: "#352D28",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
