/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'q-text': '#040316',
        'q-background': '#fbfbfe',
        'q-background-v2': '#dddbff',
        'q-primary': '#ca81be',
        'q-secondary': '#dddbff',
        'q-accent': '#443dff',
        'q-footer': '#40315C',
        'q-second': '#E85341',
      },
    },
    fontFamily: {
      'raleway': ['Raleway'],
      'raleway-bold': ['"Raleway Bold"'],
      'raleway-bold': ['"Raleway Black"'],
    }
  },
  plugins: [],
};
