import React from "react"
import { Navbar, Sidebar, Footer } from "../"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme.styles"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  )
}

export default Layout
