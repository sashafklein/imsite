import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../header"
import "./layout.scss"

const menuItems = [
  { to: "/", text: "Home" },
  { to: "/solution", text: "Our Solution" },
  { to: "/mission", text: "Our Mission" },

  { to: "/about-us", text: "About Us" },
  { to: "/contact-us", text: "Contact Us" },
]

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={menuOpen ? "nav--open" : ""}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
      <div>
        <main>{children}</main>
      </div>
      <div className={`nav ${menuOpen ? "delayed" : ""}`}>
        <div className="container--large">
          {menuItems.map((item, ind) => (
            <h2 className="color--white mt30" key={ind}>
              <Link to={item.to} onClick={() => setMenuOpen(false)}>
                {item.text}
              </Link>
            </h2>
          ))}
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
