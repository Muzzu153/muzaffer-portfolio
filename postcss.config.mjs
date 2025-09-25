export default {
  plugins: {
    "@tailwindcss/postcss": {},
    tailwindcss: {
      // This is the crucial part you need to add!
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    },
    autoprefixer: {},
  }
} 
