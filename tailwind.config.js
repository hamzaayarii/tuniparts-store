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
        'InputBox': '#D9D9D9',
        'GreyProduct': '#E6E6E6',
        'GreytableProduct' : '#D6D6D6',
        'LightGreytableProduct': '#ECECEC',
        'GreyRectangleProduct': '#EEEEEE'
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        mainTitle: ["32px", { fontWeight: 700 }],
        footerText: ["32px", { fontWeight: 500 }],
        headerText2: ["28px", { fontWeight: 500 }],
        sectionTitle: ["24px", { fontWeight: 700 }],
        subheading: ["20px", { fontWeight: 500 }],
        profileText: ["20px", { fontWeight: 400 }],
        contactusbody: ["16px", { fontWeight: 500 }],
        body: ["16px", { fontWeight: 400 }],
        small: ["14px", { fontWeight: 300 }],
      },
    },
  },
  plugins: [],
}

//hetha lezem nhouto fih ay haja tet3awed
//heberger site 3al vercel

