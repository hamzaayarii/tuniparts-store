/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#CD170B',
        'Secondary': '#010035',
        'Background': '#D6D6D6',
        'Available': '#42840F',
        'NightBlue': '#010035',
        'Prime': '#CD170B',
        'GreyProduct': '#E6E6E6',
        'GreytableProduct': '#D6D6D6',
        'LightGreytableProduct': '#ECECEC',
        'GreyRectangleProduct': '#EEEEEE',
        'HeaderColor': '#E6E6E6',
        'HeaderColor2': '#010035',
        'Available': '#42840F'
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

//hetha lezem nhouto fih ay haja tet3awed
//heberger site 3al vercel

