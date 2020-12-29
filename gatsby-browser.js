// Page styles
import "./src/styles/main.css"
// Fonts
import "fontsource-open-sans"
import "fontsource-roboto"
// Wrap every component inside Layout component
import CustomLayout from "./src/gatsby/browser/wrapPageElement"
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

// Apply layout to every page
export const wrapPageElement = CustomLayout

// Hide loading svg overlay when page is ready
export const onInitialClientRender = () => {
  // Block scroll until page is ready
  const body = document.getElementById("___gatsby")
  disableBodyScroll(body)

  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
    clearAllBodyScrollLocks()
  }, 500)
}
