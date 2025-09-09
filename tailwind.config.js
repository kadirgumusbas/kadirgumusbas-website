/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Ana marka: modern indigo
        brand: {
          50:"#eef2ff", 100:"#e0e7ff", 200:"#c7d2fe", 300:"#a5b4fc",
          400:"#818cf8", 500:"#6366f1", 600:"#4f46e5", 700:"#4338ca",
          800:"#3730a3", 900:"#312e81"
        },
        // İkincil vurgu: cyan (buton/gradient eşlikçisi)
        accent: {
          50:"#ecfeff", 100:"#cffafe", 200:"#a5f3fc", 300:"#67e8f9",
          400:"#22d3ee", 500:"#06b6d4", 600:"#0891b2", 700:"#0e7490",
          800:"#155e75", 900:"#164e63"
        },
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
}
