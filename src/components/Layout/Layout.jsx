import React, { useState, useEffect } from "react"
import { Navbar, Sidebar, Footer } from "../"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme.styles"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0]
    if (isOpen) {
      disableBodyScroll(body)
    } else {
      enableBodyScroll(body)
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
