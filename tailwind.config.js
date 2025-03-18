const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sfProLight: ['SF Pro Light', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        sfProRegular: ['SF Pro Regular', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        acornRegular: ['Acorn Regular', 'serif'],
        acornBold: ['Acorn Bold', 'serif'],
        acornSemiBold: ['Acorn SemiBold', 'serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
