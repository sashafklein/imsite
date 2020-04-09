import React from "react"

import LinkFooter from "@components/link-footer"

const AboutUs = () => (
  <div className="page about-us">
    <div className="container">
      <div className="row">
        <h1>About Us</h1>
      </div>
    </div>
    <LinkFooter to="/contact-us" text="Contact us" />
  </div>
)

export default AboutUs
