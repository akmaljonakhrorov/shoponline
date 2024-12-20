/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // React uchun
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // DaisyUI qo'shildi
  daisyui: {
    themes: ["light"], // Faqat "light" temani yoqing
  },
};
