/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    padding: {
      'custom': '.5px'
    },
    fontFamily:{
      "sans": ['Poppins','sans-serif']
    }
  },
};
export const plugins = [];