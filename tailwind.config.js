/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      cursor: {
        pointer: 'pointer', // veya istediğiniz başka bir imleç türü
      },
      fontFamily: {
        inter: ['"Inter"', '"sans-serif"'],
      }
    },
    plugins: [],
  }
}
