import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif !important;
    margin: 0;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`

export default GlobalStyles
