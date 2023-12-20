/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            'aboutus': "url('./src/assets/aboutUs.jpg')",
            'whyUs': "url('./src/assets/whyus.avif')",
            'servisesDiscriptins': "url('./src/assets/servisesDiscriptions.jpg')",
            'whyChouseUs': "url('./src/assets/whyChooseUs.avif')"
          }
      },
      fontFamily: {
         'cursive': ['Kanit', "sans-serif"]
       }
   },
   plugins: [require("daisyui")],
};