/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
          "75%": { transform: "translateX(-2px)" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
      },
      perspective: {
        1000: "1000px", // Add perspective extension
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)", // Add rotation extension
      },
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"], // Extend transform for group-hover variants
    },
  },
  plugins: [],
};
