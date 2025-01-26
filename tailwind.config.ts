import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInPage: {
          '0%': { opacity: '0', backgroundColor: "#171717" },
          '100%': { opacity: '1', backgroundColor: "transparent" },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
      },
      animation: {
        fadeInPage: 'fadeInPage .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out forwards'
      },
    },
  },
  plugins: [],
} satisfies Config;
