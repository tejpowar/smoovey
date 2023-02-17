import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/styles.css';


const IndexPage = () => (
  <Layout>
    <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="messageArea">
                    <h3 className="messageBoldHeading">Landlords</h3>
                    <h3 className="messageLightHeading">Stay <span className="messageBoldHeading">Compliant,</span> </h3>
                    <h3 className="messageLightHeading">for good </h3>
                    <p className="content">Manage your property certificates in one place and get notified when it’s time to renew. It’s easy, secure, and completely free.</p>
                </div>

            </div>
            <div className="col-8">
                2 of 3 (wider)
            </div>
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
