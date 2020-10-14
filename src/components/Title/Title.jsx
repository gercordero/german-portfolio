import React from "react"
import "./styles/title.scss"

const Title = ({ styleClass, children }) => {
  return (
    <div className={`title ${styleClass ? styleClass : ""}`}>
      <h2>{children}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
