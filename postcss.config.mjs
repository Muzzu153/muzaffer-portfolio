export default {
  plugins: {

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
