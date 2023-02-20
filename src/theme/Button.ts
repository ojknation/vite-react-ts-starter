import { glass } from "./customStyles"

export const Button = {
  variants: {
    "app-primary": {
      bg: "#0071bc",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    "app-secondary": {
      bg: "#f7931e",
      fontWeight: "bold",
      color: "#101017",
    },

    "app-iconButton": glass,
  },
  sizes: {
    xl: {
      h: "66px",
      fontSize: "26px",
      w: "179px",
      fontWeight: "bold",
    },
  },
}
