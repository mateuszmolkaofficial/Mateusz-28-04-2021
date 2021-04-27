import React, { ReactElement } from "react"
import { mount, MountRendererProps } from "enzyme"
import { ThemeProvider } from "styled-components"
import theme from "styles/theme"

export function mountWithTheme(children: ReactElement, options: MountRendererProps = {}) {
  return mount(children, {
    ...options,
    wrappingComponent: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  })
}
