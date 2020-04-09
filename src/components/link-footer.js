import React from "react"

import RightArrow from "@images/icons/right-arrow.svg"

import Button from "./button"

const LinkFooter = ({ to, text }) => (
  <div className="bg--royal-blue">
    <div className="container--large h250 h150--resp flex flex-jc--fe flex-jc--c--resp flex-ai--c">
      <Button type="transparent-white,icon,h2" to={to} className="color--white">
        <h2>{text}</h2>
        <RightArrow className="--white" />
      </Button>
    </div>
  </div>
)

export default LinkFooter
