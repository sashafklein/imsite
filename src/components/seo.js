/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

function SEO({ description, lang, meta, title, image }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            heroDescription
            siteURL
          }
        }
        file(name: { eq: "og-image" }) {
          publicURL
        }
      }
    `
  )

  const ogLogo = file.publicURL
  const md = site.siteMetadata

  const metaDescription = description || md.heroDescription

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={`${title ? `${md.title} - ${title}` : md.title} | ${
            md.description
          }`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            {
              name: `twitter:image`,
              content: image ? `https:${image}` : `${md.siteURL}${ogLogo}`,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:url`,
              content: location.href,
            },
            {
              property: `og:image`,
              content: image || ogLogo,
            },
            {
              property: `og:image:width`,
              content: "1200",
            },
            {
              property: `og:image:height`,
              content: "630",
            },
            {
              property: `og:image:alt`,
              content: title,
            },
            {
              property: `og:image:secure_url`,
              content: (image || ogLogo).replace("http:", "https:"),
            },
          ].concat(meta)}
        />
      )}
    </Location>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
