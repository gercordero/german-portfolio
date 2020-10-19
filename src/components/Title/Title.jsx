import React from "react"
import "./styles/title.scss"

const Title = ({ titleStyle, underlineStyle, children }) => {
  return (
    <div className={`title ${titleStyle ? titleStyle : ""}`}>
      <h2>{children}</h2>
      <div
        className={`title-underline ${underlineStyle ? underlineStyle : ""}`}
      ></div>
    </div>
  )
}

export default Title
