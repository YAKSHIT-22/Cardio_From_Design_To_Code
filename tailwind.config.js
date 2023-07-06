/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        mediumseagreen: "#25ab75",
        seagreen: "#188759",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.2)",
          "200": "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "181xl": "200px",
      },
    },
    fontSize: {
      lg: "18px",
      "41xl": "60px",
      sm: "14px",
      "31xl": "50px",
      "9xl": "28px",
      "6xl": "25px",
      xs: "12px",
      base: "16px",
      xl: "20px",
      smi: "13px",
      mini: "15px",
      "3xs": "10px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "428px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
