import { Link } from "gatsby"
import React from "react"

import Logo from "@images/logo-white.svg"
import Button from "./button"

const Header = ({ siteTitle }) => (
  <header className="site-header bg--royal-blue h100 flex flex-al--c">
    <div className="container--large flex flex-ai--c flex-jc--sb color--off-white">
      <div className="flex flex-jc--fs flex-ai--c">
        <Logo />
        <h4 className="ml15">
          <Link to="/">{siteTitle}</Link>
        </h4>
      </div>
      <div className="flex flex-jc--fe flex-ai--c">
        <h6>
          <Link to="/">Home</Link>
        </h6>
        <h6 className="ml40">
          <Link to="/solution">Our Solution</Link>
        </h6>
        <h6 className="ml40">
          <Link to="/mission">Our Mission</Link>
        </h6>
        <h6 className="ml40">
          <Link to="/about-us">About Us</Link>
        </h6>
        <h6 className="ml40">
          <Button type="off-white" to="/contact-us">
            Contact Us
          </Button>
        </h6>
      </div>
    </div>
  </header>
)

export default Header
