/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'bike-primary': "#E76F51",
        'banner-bg': "rgba(231, 111, 81, 0.10)"
      }
    }
  },
  plugins: [require("daisyui")],
}

