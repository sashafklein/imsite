import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Button from "../button"
import ShortRightArrow from "@images/icons/short-right-arrow.svg"

import "./carousel.scss"

const NewCarousel = ({ children }) => (
  <Carousel
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    centerMode
    centerSlidePercentage={45}
    renderArrowNext={handler => (
      <Button
        style={{ position: "absolute", bottom: 80, right: 140 }}
        type="royal-blue,icon"
        onClick={handler}
      >
        More
        <ShortRightArrow />
      </Button>
    )}
  >
    {children}
  </Carousel>
)

export default NewCarousel
