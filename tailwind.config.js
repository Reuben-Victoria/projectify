/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brands: {
          primary: "#1461F5",
          secondary: "#F4F7FE",
          headerColor: "#0C0C0C",
          footerHeader: "#041331",
          footerText: "#9C9C9C",
          iconBg: "#D0DFFD",
          footerBg: "#F4F7FE",
          logoBg: "#ffb733",
          borderColor: "#D8D8D8",
          navTextsColor: "#0A317B",
        },
        light: {
          text: "#F1F1F1",
          dark: "#11142D",
          normal: "#92929D",
          other: "#F1F1F6"
        },
      },
      fontFamily: {
        'sans': ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [],
};
