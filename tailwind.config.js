/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            'mobileHero': "url('@assets/WhatsApp Image 2023-12-18 at 21.14.56_6891f69b.jpg')",
            'pcHero': "url('@assets/WhatsApp Image 2023-12-18 at 21.14.32_77d66093.jpg')"
          }
      },
   },
   plugins: [require("daisyui")],
};