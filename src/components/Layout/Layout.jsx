import React from "react"
import { Navbar, Sidebar, Footer } from "../"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
