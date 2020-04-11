import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Button from "@components/button"
import ShortArrowRight from "@images/icons/short-right-arrow.svg"

import "./carousel.scss"

const NewCarousel = ({ children, className }) => (
  <Carousel
    className={className}
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    infiniteLoop
    swipeable={false}
    renderArrowNext={(action, hasNext) => {
      return (
        <Button
          className="hidden-lg absolute"
          type="royal-blue,icon"
          onClick={action}
          style={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}
        >
          More
          <ShortArrowRight />
        </Button>
      )
    }}
  >
    {children}
  </Carousel>
)

export default NewCarousel
