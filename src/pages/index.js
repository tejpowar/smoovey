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
                    <p className="desktop-p">Manage your property certificates in one place and get notified when it’s time to renew. It’s easy, secure, and completely free.</p>
                    <button type="button" className="buttonSmall">Get Started <span className="arrow"></span> </button>
                </div>

            </div>
            <div className="mt-5 col-12 col-md-6">
                <div className="houseColumn">
                    <StaticImage src="../images/illustrations/Illustration 1.svg" alt="House image" />
                </div>
            </div>
            <div className="waveShape col-12">
                <svg width="1440" height="533" viewBox="0 0 1440 533">
                    <defs>
                        <clipPath id="clip-path">
                            <path id="Path_29552" data-name="Path 29552" d="M0,250.945,1440,136.279V479.424H0Z" transform="translate(11.133 -136.279)" fill="none"/>
                        </clipPath>
                    </defs>
                    <g id="Group_4390" data-name="Group 4390" transform="translate(0 -502)">
                        <rect id="Rectangle_67" data-name="Rectangle 67" width="1440" height="316" transform="translate(0 719)" fill="#060f3a"/>
                        <g id="Group_1157" data-name="Group 1157" transform="translate(-11.133 365.721)">
                            <g id="Mask_Group_5" data-name="Mask Group 5" transform="translate(0 136.279)" clip-path="url(#clip-path)">
                                <path id="Path_29480" data-name="Path 29480" d="M.5,248.661s247.733,67.273,563.56,67.276c420.84,0,526.542-165.821,898.877-157.4V479.174H.5Z" transform="translate(-0.119 -136.404)" fill="#060f3a"/>
                            </g>
                        </g>
                    </g>
                    <text x="250" y="400" fill="white">
                        <tspan className="customerComment">Using Smoovey has made life so much easier. </tspan>
                        <tspan y="450" x="300" className="customerComment">I can focus on X instead of Y, it's amazing."</tspan>
                        <tspan y={500} x={650} className="customerName">Joe Bloggs</tspan>
                    </text>
                </svg>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
                <h3 className="desktop-h5 ps-4">
                    Entirely online & always up to date.
                </h3>
                <p className="desktop-p mt-5 ps-4">
                    There are multiple benefits to using Smoovey.
                </p>
            </div>
            <div className="col-12 col-md-4 mt-5">
                <div className="mt-5 ms-4">
                    <StaticImage src="../images/Icons/Online Pink.svg" alt="Online icon" />
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    Compliance without the chaos
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Upload, share, and access from anywhere – your documents are stored securely online.
                </p>
                <div className="mt-5 ms-4">
                    <StaticImage src="../images/Icons/Calendar Pink.svg" alt="Calendar pink" />
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    More money in your pocket
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Avoid costly management fees or worse – fines. Smoovey is and will always be free.
                </p>
            </div>
            <div className="col-12 col-md-4 mt-5">
                <div className="mt-5 ms-4">
                    <StaticImage src="../images/Icons/Piggy Bank Pink.svg" alt="Face pink icon" />
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    Ditch the spreadsheets
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Get automatic reminders so you never have to worry about missing a date again.
                </p>
                <div className="mt-5 ms-4">
                    <StaticImage src="../images/Icons/Face Pink.svg" alt="Face pink icon" />
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    So simple. So smoove.
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Easy to sign-up, nothing to download – Smoovey is built for ordinary people, not techies.
                </p>
            </div>
            <div className="col 12">
                <hr className="hr" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
                    <StaticImage src="../images/illustrations/Illustration 2.svg" alt="House image" />
            </div>
            <div className="col-12 col-md-8">
                <h3 className="desktop-h5 ps-4">
                    While there’s lots to love about managing property, managing compliance isn’t always easy. Most landlords have two main challenges:
                </h3>
                <div className="row mt-5 ps-4">
                        <div className="col-sm-5">
                            <StaticImage src="../images/Icons/1.svg" alt="Online icon" />
                            <p className="desktop-p mt-4">
                                Juggling multiple certificates, renewal dates, tests, and inspections.
                            </p>
                        </div>
                        <div className="col-sm-5 ps-5">
                            <StaticImage src="../images/Icons/2.svg" alt="Online icon" />
                            <p className="desktop-p mt-4">
                                Staying on top of changing regulations.
                            </p>
                        </div>
                </div>
                <p className="desktop-p mt-3 ps-4">
                    That’s why we built Smoovey – to make life easier for people like you. We’ve already started helping landlords save money and stay compliant. I’d love for you to give it a try
                </p>
                <h5 className="desktop-heading mt-3 ps-4">
                    Tej Powar CEO & founder of Smoovey
                </h5>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <svg width="100%" height="248px">
                        <rect width="100%" height="100%" fill="#060F3A" />
                        <text x="140" y="100" fill="white">
                            <tspan dy="1.2em" x="50" className="sellingPoint">Join landlords, letting agents, and commercial property</tspan>
                            <tspan dy="1.2em" x="50" className="sellingPoint">owners across the UK who use Smoovey to stay compliant.</tspan>
                        </text>
                        <foreignObject x="850" y="110" width="253px" height="160">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <button type="button" className="buttonLong">Try Smoovey in 2 minutes<span className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13.646" viewBox="0 0 14 13.646">
                                      <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M5.952,3.561l.694-.694a.747.747,0,0,1,1.059,0L13.78,8.939a.747.747,0,0,1,0,1.059L7.705,16.072a.747.747,0,0,1-1.059,0l-.694-.694a.751.751,0,0,1,.012-1.072L9.73,10.72H.75A.748.748,0,0,1,0,9.97v-1a.748.748,0,0,1,.75-.75H9.73L5.965,4.633A.745.745,0,0,1,5.952,3.561Z" transform="translate(0 -2.647)" fill="#060f3a"/>
                                    </svg></span>
                                </button>
                            </div>
                        </foreignObject>
                    </svg>

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
