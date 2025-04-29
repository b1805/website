import relumeTailwind from "@relume_io/relume-tailwind";
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
      "index.html",
    ],
    presets: [relumeTailwind],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  