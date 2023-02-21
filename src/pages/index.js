import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/styles.css';


const IndexPage = () => (
  <Layout>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="messageArea">
                    <h1 className="messageBoldHeading">Landlords</h1>
                    <h1 className="messageLightHeading">Stay <span className="messageBoldHeading">Compliant,</span> </h1>
                    <h1 className="messageLightHeading">for good </h1>
                    <p className="contentBody">Manage your property certificates in one place and get notified when it’s time to renew. It’s easy, secure, and completely free.</p>
                    <button type="button" className="buttonLong">Get Started <span className="arrow"></span> </button>
                </div>

            </div>
            <div className="mt-5 col-12 col-md-6">
                <div className="messageArea">
                    <h1 className="messageBoldHeading">Landlords</h1>
                    <h1 className="messageLightHeading">Stay <span className="messageBoldHeading">Compliant,</span> </h1>
                    <h1 className="messageLightHeading">for good </h1>
                    <p className="contentBody">Manage your property certificates in one place and get notified when it’s time to renew. It’s easy, secure, and completely free.</p>
                    <button type="button" className="buttonLong">Get Started <span className="arrow"></span> </button>
                </div>
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
