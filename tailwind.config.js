/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: "#61764B",
          secondary: "#FF3D71",
          neutral: "#373A42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
