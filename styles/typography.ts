import capsize from "capsize"
import { CSSObject } from "styled-components"

interface CssTheme {
  [key: string]: CSSObject
}

// For specific font - Noto Sans JP
const fontMetrics = {
  capHeight: 733,
  ascent: 1160,
  descent: -320,
  lineGap: 0,
  unitsPerEm: 1000,
}

const fontSize = {
  body0: 16,
  body1: 18,
}

const fontWeight = {
  regular: 500,
  bold: 700,
}

export const typography: CssTheme = {
  body0: {
    ...capsize({
      fontSize: fontSize.body0,
      leading: fontSize.body0 * 1.2,
      fontMetrics: fontMetrics,
    }),
    fontWeight: fontWeight.regular,
  },
  body0bold: {
    ...capsize({
      fontSize: fontSize.body0,
      leading: fontSize.body0 * 1.2,
      fontMetrics: fontMetrics,
    }),
    fontWeight: fontWeight.bold,
  },
  body1: {
    ...capsize({
      fontSize: fontSize.body1,
      leading: fontSize.body1 * 1.44,
      fontMetrics: fontMetrics,
    }),
    fontWeight: fontWeight.regular,
  },
  body1bold: {
    ...capsize({
      fontSize: fontSize.body1,
      leading: fontSize.body1 * 1.44,
      fontMetrics: fontMetrics,
    }),
    fontWeight: fontWeight.bold,
  },
}
