import React from "react"
import heroSvg from "../../assets/hero-svg.svg"
import { Container } from "../"

import {
  HeroFooterSection,
  HeroFooterImage,
  HeroFooterBottom,
} from "./styles/HeroFooter.styles"

const HeroFooter = () => {
  return (
    <div>
      <HeroFooterSection>
        <HeroFooterImage>
          <Container>
            <img src={heroSvg} alt="Hero img footer" />
          </Container>
        </HeroFooterImage>
        <HeroFooterBottom />
      </HeroFooterSection>
    </div>
  )
}

export default HeroFooter
