module.exports = {
  theme: {
    screens: {
      mobile: { max: "599px" },
      tablet: { min: "600px", max: "899px" },
      "gt-tablet": { min: "600px" },
      "lt-small-desktop": { max: "899px" },
      "small-desktop": { min: "900px", max: "1199px" },
      "gt-small-desktop": { min: "900px" },
      "lt-medium-desktop": { max: "1199px" },
      "medium-desktop": { min: "1200px", max: "1799px" },
      "gt-medium-desktop": { min: "1200px" },
      "lt-large-desktop": { max: "1799px" },
      "large-desktop": { min: "1800px" },
    },
    fontFamily: { brand: ["plantin-mt-pro", "fakt-tt", "sans-serif"] },
    colors: {
      brown: {
        DEFAULT: "#7F594C",
        "light-brown": "#BCDOE7",
      },
      blue: {
        DEFAULT: "#669AC5",
        "dc-navy": "#3A547C",
        "bg-light": "#D8E5F4",
      },
      grey: {
        dark: "50545D",
        DEFAULT: "#9AA4AF",
        light: "#C2C6C9",
        "dc-taupe": "#B7BOAF",
      },

      orange: { DEFAULT: "#B76646", "light-orange": "#E2C2B5" },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/forms"),
    ],
  },
};
