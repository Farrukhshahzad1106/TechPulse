/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // It is indicating that whichever folder(*) and sub-folder(**) are ther in src folder with the extension (js, jsx, ts, tsx) will be using tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// By configuring this file we are specifying in which all files and folders are we going to use tailwindcss