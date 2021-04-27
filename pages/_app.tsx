import React from "react"
import { AppProps } from "next/app"
import GlobalStyles from "styles/global"
import theme from "styles/theme"
import { ThemeProvider } from "styled-components"

const AppWrapper = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default AppWrapper
