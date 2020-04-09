import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "./carousel.scss"

const NewCarousel = ({ children, className }) => (
  <Carousel
    className={className}
    showArrows={false}
    showStatus={false}
    // showIndicators={false}
    showThumbs={false}
  >
    {children}
  </Carousel>
)

export default NewCarousel
