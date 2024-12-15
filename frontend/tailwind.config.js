/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003f",
          "secondary": "#00cbff",
          "accent": "#84c600",
          "neutral": "#242439",
          "base-100": "#232824",
          "info": "#00b1ff",
          "success": "#1fd444",
          "warning": "#8a6300",
          "error": "#ff79a0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
