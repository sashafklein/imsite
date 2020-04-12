import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page bg--royal-blue">
      <h1>Not Found</h1>
      <p>
        You just hit a route that doesn't exist.
        <Link to="/"> Return home.</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
