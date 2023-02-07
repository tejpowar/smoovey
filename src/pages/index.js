import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/styles.css';


const IndexPage = () => (
  <Layout>
    <div className="container">
        <div className="messageArea">
            <h1>Landlords</h1>
        </div>

    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
