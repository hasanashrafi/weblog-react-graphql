/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "YekanBakhBold": "YekanBakh Bold",
        "YekanBakhFat": "YekanBakh Fat",
        "YekanBakhHeavy": "YekanBakh Heavy",
        "YekanBakhLight": "YekanBakh Light",
        "YekanBakhMedium": "YekanBakh Medium",
        "YekanBakhRegular": "YekanBakh Regular",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}