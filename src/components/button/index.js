import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./button.scss"

const Button = ({
  to,
  type,
  children,
  className = "",
  onClick,
  style = {},
}) => {
  const { site, allFile } = useStaticQuery(graphql`
    query ButtonQuery {
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        nodes {
          publicURL
          relativeDirectory
          name
        }
      }
    }
  `)

  const types = type.split(",")

  const typeClasses = types.map(type => `btn--${type}`).join(" ")
  const classes = `btn ${typeClasses} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={classes} onClick={onClick || (() => {})} style={style}>
        {children}
      </button>
    )
  }
}

export default Button
