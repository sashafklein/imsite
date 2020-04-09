import React from "react"
import { Link } from "gatsby"

import "./button.scss"

const Button = ({
  to,
  type,
  children,
  className = "",
  onClick,
  style = {},
}) => {
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
