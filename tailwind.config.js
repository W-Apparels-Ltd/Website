/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],
daisyui: {
  base:false,
  themes: [
    {
      mytheme: {
      
  primary: "rgba(1,1,1,0.7)",
  
  'primary-content': '#ffffff',
      
  secondary: "#19D3AE",
      
  accent: "#3A4256",
      
  neutral: "#291334",
      
  "base-100": "#ffffff",
      
      },
    },
  ],
},
  theme: {
    extend: {},
  },
  plugins: [require("daisyui",'tailwindcss-animated')],
  
});

