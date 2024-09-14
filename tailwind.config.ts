import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontWeight: {
        bold: "800",
        normal: "500",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "14.06px" }],
        sm: ["14px", { lineHeight: "16.01px" }],
        base: ["16px", { lineHeight: "16px" }],
        lg: ["18px", { lineHeight: "18px" }],
        xl: ["24px", { lineHeight: "24px" }],
        "2xl": ["30px", { lineHeight: "30px" }],
      },
      colors: {
        background: "hsla(var(--content-base))",
        primary: "hsla(var(--text-primary))",
        secondary: "hsla(var(--text-secondary))",
        "purple-primary": "hsla(var(--purple))",
        "light-purple": "hsla(var(--light-purple))",
        "blue-primary": "hsla(var(--blue-primary))",
        "light-blue": "hsla(var(--light-blue))",
        mandarin: "hsla(var(--mandarin))",
        "light-mandarin": "hsla(var(--light-mandarin))",
        turquoise: "hsla(var(--turquoise))",
        "light-turquoise": "hsla(var(--light-turquoise))",
        crayola: "hsla(var(--crayola))",
        "light-crayola": "hsla(var(--light-crayola))",
      },
      backgroundImage: {
        "button-gradient": "var(--button-gradient)",
        "button-hover-gradient": "var(--button-hover-gradient)",
        "skeleton-gradient": "var(--skeleton-gradient)",
        "profile-card-gradient": "var(--profile-card-gradient)",
        "light-profile-card-gradient": "var(--light-profile-card-gradient)",
      },
      shadow: {
        light: "1px 0px 3px 0px (var(--shadow-light))",
      },
      borderWidth: {
        thin: "1px",
      },
      borderColor: {
        nav: "hsla(var(--nav-border))",
        light: "hsla(var(--card-light))",
      },
      keyframes: {
        shine: {
          to: { BackgroundPositionX: "0" },
        },
      },
      animation: {
        shine: "shine 1.3s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
