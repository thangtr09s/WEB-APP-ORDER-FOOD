/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a2931",
        text_color: "#d1d1d8",
        accent: "#f0f4fa",
        neutral: "#3abff8",
      },
      spacing: {
        260: "260px",
        80: "80px",
      },
    },
    backgroundImage: {
      backdrop_login: "url('./assets/images/backdrop_login.jpg')",
    },
  },

  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#000",
  //         secondary: "#faf7f5",
  //         accent: "#f0f4fa",
  //         neutral: "#3abff8",
  //         "base-100": "#fff",
  //         info: "#291334",
  //       },

  //       dracula: {
  //         primary: "#D1D0CF",
  //         secondary: "#272935",
  //         accent: "#2a2c38",
  //         "base-100": "#fff",
  //         neutral: "#87bff8",
  //         info: "#87bff8",
  //       },

  //       dark: {
  //         primary: "#D1D0CF",
  //         secondary: "#191919",
  //         accent: "#141414",
  //         neutral: "#e20e02",
  //         "base-100": "#fff",
  //         info: "#e20e02",
  //       },

  //       retro: {
  //         primary: "#282425",
  //         secondary: "#e4d8b4",
  //         accent: "#e4d8b4",
  //         neutral: "#2e282a",
  //         "base-100": "#fff",
  //         info: "#2e282a",
  //       },
  //     },

  //     "dracula",
  //     "dark",
  //     "retro",
  //   ],
  // },

  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
