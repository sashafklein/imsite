import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getAssets } from "@utils/getAssets"
import LinkFooter from "@components/link-footer"
import SEO from "@components/seo"

const ContactUs = () => {
  const { allFile } = useStaticQuery(graphql`
    query ContactQuery {
      allFile(filter: { relativeDirectory: { eq: "home" } }) {
        nodes {
          publicURL
          relativeDirectory
          name
        }
      }
    }
  `)

  const assets = getAssets(allFile)
  return (
    <div className="page contact-us">
      <SEO title="Contact Us" />
      <div className="bg--off-white">
        <div className="container pb100">
          <div className="row flex-ai--fs flex-col--resp">
            <div className="flex flex-col flex-ai--fs color--black col-6 flex-jc--fs mb50">
              <h1 className="mt0 color--dark-purple">Leave us a note</h1>
              <p>
                We're committed to building a tool that helps our world recover
                from this crisis while respecting our privacy and fundamental
                rights. As we scale up as quickly as possible, we're forming a
                team of engineers, designers, medical professors, and
                contrarians, and we'd love to hear from you!
              </p>
              <p>Have questions or concerns? Want to help? Let us know!</p>
            </div>
            <div className="col-1"></div>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="flex flex-col col-5 w100p--resp"
            >
              <input type="hidden" name="bot-field" />
              <label className="flex flex-col mv10">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w500 full-width--resp"
                />
              </label>
              <label className="flex flex-col mv10">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w500 full-width--resp"
                />
              </label>
              <label className="flex flex-col mv10">
                Subject
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w500 full-width--resp"
                />
              </label>
              <label className="flex flex-col mv10">
                Message
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="w500 full-width--resp"
                />
              </label>
              <div className="row mt20">
                <button
                  className="btn btn--royal-blue w150 w100p--resp mr20 mr0--resp mb20--resp"
                  type="submit"
                >
                  Send
                </button>
                <input
                  className="btn btn--dark-purple w150 w100p--resp"
                  type="reset"
                  value="Clear"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <LinkFooter to="/" text="Home" />
    </div>
  )
}

export default ContactUs
