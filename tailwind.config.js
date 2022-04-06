module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "inset 0 0 5px black",
        "4xl": "0 0 10px 1000px rgba(0, 0 ,0 , 0.5)",
        "input": "0 0 10px black",
        "input-focus": "0 0 5px black",
      }
    },
  },
  plugins: [],
}
