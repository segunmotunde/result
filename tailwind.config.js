/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightRed: "hsl(var(--lightRed)/ 0.2)",
          orangeyYellow: "hsl(var(--orangeyYellow)/ 0.2)",
          greenTeal: "hsl(var(--greenTeal)/ 0.2)",
          cobaltBlue: "hsl(var(--cobaltBlue)/ 0.2)",
        },
        gradient: {
          lightSlateBlue: "hsl(var(--lightSlateBlue))",
          lightRoyalBlue: "hsl(var(--lightRoyalBlue))",
          violetBlue: "hsl(var(--violetBlue)/ 0)",
          persianBlue: "hsl(var(--persianBlue))",
        },
        neutral: {
          White: "hsl(var(--White))",
          paleBlue: "hsl(var(--paleBlue))",
          lightLavender: "hsl(var(--lightLavender))",
          darkGrayBlue: "hsl(var(--darkGrayBlue))",
        },
      },
      fontFamily: {
        primaryFont: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
