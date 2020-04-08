import { Link } from "gatsby"
import React from "react"

import Logo from "@images/logo-white.svg"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="row row--wide">
      <div className="site-header__left">
        <Logo />
        <h4>
          <Link to="/">{siteTitle}</Link>
        </h4>
      </div>
      <div className="site-header__right">
        <h6>
          <Link to="/">Home</Link>
        </h6>
        <h6>
          <Link to="/solution">Our Solution</Link>
        </h6>
        <h6>
          <Link to="/mission">Our Mission</Link>
        </h6>
        <h6>
          <Link to="/about-us">About Us</Link>
        </h6>
        <h6>
          <Link className="btn btn--off-white" to="/contact-us">
            Contact Us
          </Link>
        </h6>
      </div>
    </div>
  </header>
)

export default Header
