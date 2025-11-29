/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./src/stories/**/*.{js,jsx,ts,tsx}", // Include Storybook files
    // Include Storybook files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
