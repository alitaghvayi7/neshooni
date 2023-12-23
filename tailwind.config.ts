import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Peyda: ["Peyda"],
        peydaBold: ["Peyda_bold"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          "08": "#0138B6",
          "07": "#01226D",
          "06": "#D7E3FF",
          "05": "#C3D5FF",
          "04": "#9CBAFE",
          "03": "#749EFE",
          "02": "#6090FE",
          main: "#4C82FE",
        },
        yellow: {
          "06": "#FFF9EB",
          "05": "#FFEDC3",
          "04": "#FEE09C",
          "03": "#FED474",
          "02": "#FECE60",
          main: "#FEC84C",
        },
        write: {
          "06": "#B27C00",
          "05": "#805900",
          "04": "#4D3500",
          "03": "#291C00",
          "02": "#1F1500",
          main: "#140E00",
        },
        gray: {
          "02": "#F2F2F2",
          "01": "#DDDDDD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
