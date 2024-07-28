/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        landingfont:"#024059",
        logo:"#024059",
        signup:"#F26A23",
        primary:"#0B2C2F33",
        primary1:"#336667",
        secondary:"#3B848B",
        pr:"#3B848B",
        sr:"#317378",
        tr:"#296569",
        grey: "#D9D9D9",
        error: "#F25050",
        ternary: "#DB6A93",
        sidebar_font:"#A7AEBF",
        toggle_off:"#F5F5F5",
        toggle_on:"#F2981B4D",
        navy_blue:"#064065",
        buttons:"#296569",
        "light-grey": "#E3E0EB",
        "ternary-light": "#F7CFDB",
        "orange-600": "#FBE2BD",
        "orange-700": "#FFE2B6",
        "orange-500": "#FEE6C3",
        "orange-300": "#FFEED4",
        "on-ternary-light": "#FFEEF3",
        "on-ternary-dark": "#F9BCCE",
        "dark-grey": "#554B6A",
        green1: "#C8F5E6",
        "primary-red": "#E36492",
        cyan1: "#30828D",
        backcyan:"#30ADDB4D"
      },
      keyframes: {
        "drop-in": {
          "0%": { transform: "translateY(-25px)", opacity: 0.2 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },"reducetime": {
          "0%": { width: "0" },
          "100%": { width: "100%",display : "block" },
        }

      },
      safeList: ["animate-[ease-in-out]"],
      animation: {
        blink: "pusle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        widthi: "widthin 1s forwards",
        widtho: "widthout 1s backwards",
        "drop-in": "drop-in 0.5s cubic-bezier(0.21, 1.02, 0.85, 0.96)",
        "fade-in": "fade-in 1s ease-in-out",
        'reducetime': 'reducetime 0.5s ease-out', 
        width: "width 1s forwards",
        
      },
    },
  },
  plugins: [],
}