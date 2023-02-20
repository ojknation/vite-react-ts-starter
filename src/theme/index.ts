import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Button"
import { colors } from "./colors"
import { textStyles } from "./textStyles"

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
}

const components = {
  Button,
}

export const theme = extendTheme({
  colors,
  textStyles,
  components,
  breakpoints,
})
