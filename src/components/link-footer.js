import React from "react"

import RightArrow from "@images/icons/right-arrow.svg"

import Button from "./button"

const LinkFooter = ({ to, text }) => (
  <div className="bg--royal-blue">
    <div className="container--large h125 h100--resp flex flex-jc--fe flex-jc--c--resp flex-ai--c">
      <Button type="transparent,icon" to={to} className="color--white">
        <h2 className="hidden-sm">{text}</h2>
        <h3 className="hidden-lg">{text}</h3>
        <RightArrow className="--white" />
      </Button>
    </div>
  </div>
)

export default LinkFooter
