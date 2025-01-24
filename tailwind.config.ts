import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: "var(--black)",
        color_black: {
          "900_3d": "var(--color_black_900_3d)",
          "900_3f": "var(--color_black_900_3f)",
          "900_59": "var(--color_black_900_59)",
        },
        blue: { 900: "var(--blue_900)", "900_28": "var(--blue_900_28)" },
        blue_gray: { 800: "var(--blue_gray_800)", 900: "var(--blue_gray_900)" },
        cyan: {
          400: "var(--cyan_400)",
          a200: "var(--cyan_a200)",
          a200_33: "var(--cyan_a200_33)",
        },
        dark_gray: "var(--dark_gray)",
        deep_purple: {
          300: "var(--deep_purple_300)",
          "300_33": "var(--deep_purple_300_33)",
        },
        gradient_combination: "var(--gradient_combination)",
        gray: {
          900: "var(--gray_900)",
          "100_14": "var(--gray_100_14)",
          "900_01": "var(--gray_900_01)",
          "900_4c": "var(--gray_900_4c)",
          "900_99": "var(--gray_900_99)",
        },
        green: { "500_33": "var(--green_500_33)" },
        grey_1: "var(--grey_1)",
        midnight_black: "var(--midnight_black)",
        orange: { "100_21": "var(--orange_100_21)" },
        tech_silver: { 0: "var(--tech_silver_0)", 1: "var(--tech_silver_1)" },
        white: "var(--white)",
        yellow: { 900: "var(--yellow_900)" },
      },
      boxShadow: {
        xs: "4px 0 4px 0 #0000003f",
        sm: "0 8px 16px 0 #0000003d",
        md: "0 4px 4px 0 #0000003f",
        lg: "0 21px 14px 0 #00000059",
      },
      fontFamily: {
        dmsans: "DM Sans",
        montserrat: "Montserrat",
        satisfy: "Satisfy",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #32cd32,#00ffff)",
        gradient1: "linear-gradient(180deg, #32cd3233,#00ffff33)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
