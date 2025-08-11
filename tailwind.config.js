const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
    darkMode: "class", // ✅ MUST be 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [aspectRatio],
};
