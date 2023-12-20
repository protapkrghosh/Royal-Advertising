/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            aboutus: "url('./src/assets/aboutUs.jpg')",
            whyUs: "url('./src/assets/whyus.jpg')",
            servicesDescriptions: "url('./src/assets/servicesDescriptions.jpg')",
            whyChouseUs: "url('./src/assets/whyChooseUs.jpg')",
         },
      },
      fontFamily: {
         cursive: ["Kanit", "sans-serif"],
      },
   },
   plugins: [require("daisyui")],
};