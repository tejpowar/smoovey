import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

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
                <div className="houseColumn">
                    <StaticImage src="../images/Illustrations/Illustration 1.svg" alt="House image" />
                </div>
            </div>
            <div className="waveShape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#060f3a" fill-opacity="1" d="M0,96L80,133.3C160,171,320,245,480,234.7C640,224,800,128,960,85.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="blueBackground">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#060f3a" fill-opacity="1" d="M0,64L0,96L1440,96L1440,320L0,320L0,320Z"></path></svg>
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
