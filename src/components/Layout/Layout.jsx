import React, { useState, useEffect } from "react"
import { Navbar, Sidebar, Footer } from "../"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme.styles"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import PageTransition from "../../animations/PageTransition"

const Layout = ({ children, location }) => {
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
      {isOpen && <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />}

      <PageTransition location={location}>
        <main>{children}</main>
        <Footer />
      </PageTransition>
    </ThemeProvider>
  )
}

export default Layout
