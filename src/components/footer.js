import React from "react"

import TwitterIcon from "@images/icons/twitter.svg"

const Footer = ({ siteTitle, author }) => (
  <div
    className="footer bg--black pt15 flex flex--ai--fs"
    style={{ height: 60 }}
  >
    <div
      className="container flex flex-ai--c flex-jc--sb"
      style={{ height: 40 }}
    >
      <p className="color--white" style={{ margin: 0 }}>
        <strong>
          &copy; {new Date().getFullYear()} {siteTitle}
        </strong>
      </p>
      <a href={`https://twitter.com/${author.replace("@", "")}`}>
        <TwitterIcon width={20} />
      </a>
    </div>
  </div>
)

export default Footer
