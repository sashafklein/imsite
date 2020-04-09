import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../header"
import Footer from "../footer"
import "./layout.scss"

const menuItems = [
  { to: "/", text: "Home" },
  { to: "/solution", text: "Our Solution" },
  { to: "/mission", text: "Our Mission" },

  { to: "/about-us", text: "About Us" },
  { to: "/contact-us", text: "Contact Us" },
]

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState("closed")

  useEffect(() => {
    if (menuState === "opening") {
      setTimeout(() => setMenuState("open"), 300)
    } else if (menuState === "closing") {
      setTimeout(() => setMenuState("closed"), 300)
    }
  }, [menuState])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { title, author },
    },
  } = data

  return (
    <div className={`nav--${menuState}`}>
      <Header
        siteTitle={title}
        menuState={menuState}
        setMenuState={setMenuState}
        menuItems={menuItems}
      />
      <div>
        <main>{children}</main>
      </div>
      <div className="nav">
        <div className="container--large">
          {menuItems.map((item, ind) => (
            <h2 className="color--white mt30" key={ind}>
              <Link to={item.to} onClick={() => setMenuState("closing")}>
                {item.text}
              </Link>
            </h2>
          ))}
        </div>
      </div>
      <Footer siteTitle={title} author={author} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
