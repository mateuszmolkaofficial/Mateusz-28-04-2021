import React from "react"
import { AppProps } from "next/app"
import GlobalStyles from "styles/global"
import theme from "styles/theme"
import { ThemeProvider } from "styled-components"
import Head from "next/head"

const AppWrapper = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Order book</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default AppWrapper
