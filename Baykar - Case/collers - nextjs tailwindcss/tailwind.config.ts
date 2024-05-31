import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0rem',
        screens: {
          xl: '1280px',
        },
      },
      colors: {
        'custom-yellow': '#FEF3C7',
        'custom-light-yellow': '#fffcef',
      },
      clipPath: {
        'custom': 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
      },
      boxShadow: {
        'white-lg': '4px 4px 15px rgba(255, 255, 255, 0.3)',
        'white-xl': '0 0 20px rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        '400px': '400px',
      },
    },
  },
  plugins: [    require('tailwind-clip-path')
],
};
export default config;
