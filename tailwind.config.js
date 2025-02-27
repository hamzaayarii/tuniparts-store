// tailwind.config.js

module.exports = {
  content: [
    './public/**/*.html',    // Scan HTML files for Tailwind classes
    './src/**/*.{js,jsx,ts,tsx}', // Scan JS/TS files if you're using Tailwind in JS/TS code
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#CD170B',
        'secondary': '#010035',
        'background': '#D6D6D6',
        'available': '#42840F'
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        mainTitle: ["32px", { fontWeight: "bold" }],
        sectionTitle: ["24px", { fontWeight: "bold" }],
        subheading: ["20px", { fontWeight: "medium" }],
        body: ["16px", { fontWeight: "normal" }],
        small: ["14px", { fontWeight: "light" }],
      },
    },
  },
  plugins: [],
}
