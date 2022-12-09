/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'profileImg': "url('/src/assets/pattern-circle.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      
    },
  },
  plugins: [],
};
