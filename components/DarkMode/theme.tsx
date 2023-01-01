import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      black: "#121212",
      midnight: "#000024",
      white: "#FFFFFF",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      darkGray: "#273444",
      darkBlue: "#050726",
      gray: "#8492a6",
      lightGray: "#f2f2f2",
    }
   },
})

export default theme