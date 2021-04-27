import { typography } from "styles/typography"

const theme = {
  colors: {
    green: "#2BBAA5",
    black: "#0D1215",
    white: "#FFF",
    red: "#FE5A6A",
    grey: "#1C2B30",
    lightGrey: "#98A6AF",
  },
  boxShadow: {
    boxShadow1: "2px 2px 10px rgba(0, 0, 0, 0.5)",
    boxShadow2: "4px 4px 20px rgba(0, 0, 0, 0.5)",
  },
  borderRadius: {
    small: "3px",
    medium: "20px",
    big: "30px",
  },
  typography,
  spacing: Array.from(Array(50).keys()).reduce(
    (accumulator, currentValue) => ({ ...accumulator, [currentValue]: currentValue * 8 }),
    {},
  ),
}

export type ThemeType = typeof theme & { spacing: { [key: string]: number } }
export default theme
