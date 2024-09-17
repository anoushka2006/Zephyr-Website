// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#0A0A0A',
//         secondary: '#531DFF',
//         tertiary: '#ABABAB',
//         gray: '#1A1A1A',
//         gray2: '#262626',
//         gradientTop: '#3C11C3',
//         gradientBottom: '#7000FF',
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#788e7a',         // Green from the provided palette  -2d440f - 8fa484
        secondary: '#02440b',      // Dark green
        tertiary: '#231f20',       // Dark gray
        gray: '#3e4d40',           // Dark greenish gray
        gray2: '#4d7235',          // Olive green
        gradientTop: '#5a6057',    // Grayish green
        gradientBottom: '#5e7f68', // Light green
      },
    },
  },
  plugins: [],
};
