import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Peyda: ["Peyda"],
        peydaBold: ["Peyda_bold"],
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
          "04": "#9C9C9C",
          "03": "#AFAFAF",
          "02": "#F2F2F2",
          "01": "#DDDDDD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
