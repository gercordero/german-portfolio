import React from "react"
import methodologies from "../../constants/methodologies"
import { Container } from "../"
import {
  MethodologiesSection,
  StyledTitle,
  StyledMethodologies,
  Methodologie,
} from "./styles/Methodologies.styles"
import styles from "./styles/methodologies.module.css"

const Methodologies = () => {
  return (
    <MethodologiesSection>
      <Container>
        <StyledTitle>methodologies</StyledTitle>
        <StyledMethodologies>
          {methodologies.map((method, index) => {
            const { id, icon, title, text } = method
            const style =
              index < 3 ? `${styles.borderBottom} ${styles.borderRight}` : ``
            return (
              <Methodologie key={id} className={style}>
                {icon}
                <h4>{title}</h4>
                <p>{text}</p>
              </Methodologie>
            )
          })}
        </StyledMethodologies>
      </Container>
    </MethodologiesSection>
  )
}

export default Methodologies
