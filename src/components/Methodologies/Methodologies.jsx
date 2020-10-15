import React from "react"
import { Title } from "../"
import { Container, Row, Col } from "react-bootstrap"
import methodologies from "../../constants/methodologies"
import "./styles/methodologies.scss"

const Methodologies = () => {
  return (
    <section className="methodologies-section">
      <Container>
        <Title styleClass={"methodologies-title"}>Methodologies</Title>
        <Row className="methodologies">
          {methodologies.map((method, index) => {
            const { id, icon, title, text } = method
            const style = index < 3 ? "border-bottom border-right" : ""
            return (
              <Col md key={id} className={`methodologie ${style}`}>
                {icon}
                <h4>{title}</h4>
                <p>{text}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Methodologies
