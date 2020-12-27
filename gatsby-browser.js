import "./src/styles/main.css"
import "fontsource-open-sans"
import "fontsource-roboto"

// Apply layout to every page
import CustomLayout from "./src/gatsby/browser/wrapPageElement"
export const wrapPageElement = CustomLayout
