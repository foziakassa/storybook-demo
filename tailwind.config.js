/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./src/stories/**/*.{js,jsx,ts,tsx}", // Include Storybook files
    // Include Storybook files
  ],
  theme: {
    extend: {
      colors: {
        // Dynamic colors from props
        green: "250 157 38", // hsl(82, 73%, 45%) for #3e9d26
        "green-hover": "200 126 30", // 80% opacity equivalent
        orange: "255 107 53", // #ff6b35
        "orange-hover": "204 85 42",
        // Add more as needed
      },
    },
  },
  plugins: [],
};
