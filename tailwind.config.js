module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html", "./**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["ui-serif", '"Cormorant Garamond"'],
      sans: ["ui-sans-serif", "system-ui", "Arial"],
    },

    extend: {
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
