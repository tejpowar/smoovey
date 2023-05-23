import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/styles.css';
import {Image} from "react-bootstrap";


const IndexPage = () => (
  <Layout>
    <div className="container-fluid padding-right-container">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="messageArea">
                    <h1 className="messageBoldHeading">Landlords</h1>
                    <h1 className="messageLightHeading">Stay <span className="messageBoldHeading underline">Compliant,</span> </h1>
                    <h1 className="messageLightHeading">for good </h1>
                    <p className="desktop-p">Manage your property certificates in one place and get notified when it’s time to renew. It’s easy, secure, and completely free.</p>
                    <button type="button" className="buttonSmall">Get Started
                        <span className="arrow">
                             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13.646" viewBox="0 0 14 13.646">
                                <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M5.952,3.561l.694-.694a.747.747,0,0,1,1.059,0L13.78,8.939a.747.747,0,0,1,0,1.059L7.705,16.072a.747.747,0,0,1-1.059,0l-.694-.694a.751.751,0,0,1,.012-1.072L9.73,10.72H.75A.748.748,0,0,1,0,9.97v-1a.748.748,0,0,1,.75-.75H9.73L5.965,4.633A.745.745,0,0,1,5.952,3.561Z" transform="translate(0 -2.647)" fill="#060f3a"/>
                             </svg>
                        </span>
                    </button>
                </div>

            </div>
            <div className="col-12 col-md-6">
                <div className="houseColumn">
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/illustrations/Illustration1.svg" alt="House image" />
                </div>
            </div>
            <div className="waveShape col-12">
                <div className="d-md-none">
                    <svg width="450" height="183.583" viewBox="0 0 450 183.583">
                        <defs>
                            <clipPath id="clip-path">
                                <path id="Path_29552" data-name="Path 29552" d="M0,197.626l450-61.347V319.862H0Z" transform="translate(0 -136.279)" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="Group_4390" data-name="Group 4390" transform="translate(0 -136.279)">
                            <g id="Mask_Group_5" data-name="Mask Group 5" transform="translate(0 136.279)" clip-path="url(#clip-path)">
                                <path id="Path_29480" data-name="Path 29480" d="M.5,206.609S76.689,242.6,173.82,242.6c129.427,0,161.936-88.715,276.445-84.209V329.934H.5Z" transform="translate(-0.383 -146.552)" fill="#060f3a"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="d-none d-lg-block">
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
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
                <h3 className="section-heading ps-4 mt-5 pb-4">
                    Entirely online & always up to date.
                </h3>
                <p className="desktop-p mt-md-2 ps-4">
                    There are multiple benefits to using Smoovey.
                </p>
            </div>
            <div className="col-12 col-md-4">
                <div className="mt-md-5 ms-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                        <g id="Group_1240" data-name="Group 1240" transform="translate(-297 -2280)">
                            <g id="Ellipse_10" data-name="Ellipse 10" transform="translate(297 2280)" fill="#ec9bee" stroke="#060f3a" stroke-width="2">
                                <circle cx="30" cy="30" r="30" stroke="none"/>
                                <circle cx="30" cy="30" r="29" fill="none"/>
                            </g>
                            <path id="compass_calibration_FILL0_wght400_GRAD0_opsz48" d="M20.82,38a8.112,8.112,0,0,1-8.074-8.074,8.112,8.112,0,0,1,8.074-8.074,8.112,8.112,0,0,1,8.074,8.074A8.112,8.112,0,0,1,20.82,38Zm0-2.523a5.56,5.56,0,0,0,3.932-9.482,5.584,5.584,0,0,0-7.863,0,5.551,5.551,0,0,0,3.932,9.482ZM11.7,20.675,4,12.98a28.788,28.788,0,0,1,7.737-5.046,22.292,22.292,0,0,1,18.166,0A28.788,28.788,0,0,1,37.64,12.98l-7.7,7.7a15.388,15.388,0,0,0-4.184-2.733,12.6,12.6,0,0,0-9.882,0A15.388,15.388,0,0,0,11.7,20.675Zm.126-3.448a20.057,20.057,0,0,1,4.373-2.081,14.657,14.657,0,0,1,4.625-.736,16.344,16.344,0,0,1,4.668.673,14.528,14.528,0,0,1,4.331,2.145L33.9,13.148a22.883,22.883,0,0,0-6.16-3.385,19.848,19.848,0,0,0-13.813,0,23.659,23.659,0,0,0-6.181,3.385ZM20.82,14.41ZM20.82,29.926Z" transform="translate(306 2288)" fill="#060f3a"/>
                        </g>
                    </svg>
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    Compliance without the chaos
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Upload, share, and access from anywhere – your documents are stored securely online.
                </p>
                <div className="mt-5 ms-4">
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/CalendarPink.svg" alt="Calendar pink" />
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    More money in your pocket
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Avoid costly management fees or worse – fines. Smoovey is and will always be free.
                </p>
            </div>
            <div className="col-12 col-md-4">
                <div className="mt-5 ms-4">
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/PiggyBankPink.svg" alt="Face pink icon" />
                </div>
                <h5 className="desktop-heading mt-3 ms-4">
                    Ditch the spreadsheets
                </h5>
                <p className="desktop-p mt-3 ms-4">
                    Get automatic reminders so you never have to worry about missing a date again.
                </p>
                <div className="mt-5 ms-4">
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/FacePink.svg" alt="Face pink icon" />
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
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/illustrations/Illustration2.svg" alt="House image" />
            </div>
            <div className="col-12 col-md-8">
                <h3 className="desktop-h5 ps-4 mt-4">
                    While there’s lots to love about managing property, managing compliance isn’t always easy. Most landlords have two main challenges:
                </h3>
                <div className="row mt-5 ps-4">
                        <div className="col-sm-5">
                            <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/1.svg" alt="Online icon" />
                            <p className="desktop-p mt-4">
                                Juggling multiple certificates, renewal dates, tests, and inspections.
                            </p>
                        </div>
                        <div className="col-sm-5">
                            <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/2.svg" alt="Online icon" />
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
                    <div className="d-none d-lg-block">
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
                    <div className="d-md-none">
                        <svg width="100%" height="248px">
                            <rect width="100%" height="100%" fill="#060F3A" />
                            <text x="50%" y="15%" width="20%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="24px">
                                <tspan dy="1.2em" x="50%" className="sellingPoint">Join landlords, letting agents,</tspan>
                                <tspan dy="1.2em" x="50%" className="sellingPoint">and commercial property</tspan>
                                <tspan dy="1.2em" x="50%" className="sellingPoint">owners across the UK who</tspan>
                                <tspan dy="1.2em" x="50%" className="sellingPoint">use Smoovey to stay compliant.</tspan>
                            </text>
                            <foreignObject x="10%" y="65%" width="90%" height="35%">
                                <div>
                                    <button type="button" className="buttonLong">Try Smoovey in 2 minutes<span className="arrow">
                                        <svg width="14" height="13.646" viewBox="0 0 14 13.646">
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
        <div className="row mt-5">
            <div className="col-12">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button desktop-heading" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseOne">
                                What exactly does Smoovey do?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body accordion-text">
                                <p>Smoovey is the easy way for landlords to meet their legal obligations for gas, electrical safety, energy performance, and deposit protection. </p>
                                <p>Our online platform simplifies certificate management by keeping all your documents (for all your properties) in one place. </p>
                                <p>When you need to take action to stay compliant, we’ll let you know – so you can free up time, avoid fines, and manage your properties the Smoovey way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed desktop-heading" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                How does it work?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <div className="accordion-body accordion-text">
                                    <p>1. Register </p>
                                    <p>2. Add your property</p>
                                    <p>3. Upload your certificates and expiration dates </p>
                                    <p>4. Relax – we’ll remind you when inspections are due</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed desktop-heading" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                Which certificates can Smoovey help me with?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body accordion-text">
                                <ul>
                                    <li>Gas Safety</li>
                                    <li>Energy Performance Certificate (EPC)</li>
                                    <li>Electrical Safety Certificate</li>
                                    <li>Deposit Protection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed desktop-heading" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseFour">
                                Will you be adding any more features?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body accordion-text">
                                <p>100%. Certificate reminders are just the start.</p>
                                <p>Soon, Smoovey will liaise between tenants and service providers for you – no more chasing tradespeople. No more booking appointments.</p>
                                <p>That’s the entire certificate management process streamlined and smoove.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div className="row mt-5 pb-5 greyBackground">
            <div className="col-12">
                <h5 className="section-heading featureMargin mt-5">
                    More great features on the way
                </h5>
            </div>
            <div className="col-12 col-md-4 mt-md-5 featureMargin">
                <div className="mt-5">
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/HousePink.svg" alt="Online icon" />
                </div>
                <h5 className="desktop-heading underline mt-3">
                    For Landlords
                </h5>
                <p className="featureHeading mt-3">
                    Tap to renew
                </p>
                <p className="desktop-p mt-3">
                    Effortlessly book gas safety, electrical installation, and energy performance inspections.
                </p>
                <p className="featureHeading mt-4">
                    Certificates to your inbox
                </p>
                <p className="desktop-p mt-3">
                    Get certificates direct to your inbox once work is completed.
                </p>
            </div>
            <div className="col-12 col-md-4 mt-md-5 ms-md-5 featureMargin">
                <div className="mt-5">
                    <Image src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/ToolsPink.svg" alt="Face pink icon" />
                </div>
                <h5 className="desktop-heading underline mt-3">
                    For service providers
                </h5>
                <p className="featureHeading mt-3">
                    Find work
                </p>
                <p className="desktop-p mt-3">
                    Get automatic reminders so you never have to worry about missing a date again.
                </p>
                <p className="featureHeading mt-4">
                    Share certificates
                </p>
                <p className="desktop-p mt-3">
                    Upload and share certificates with a tap.
                </p>
            </div>
        </div>
        <footer className="row row-cols-5 py-5 my-5 border-top footerBackground">
            <div id="footerLogo" className=" footerLogo col-12 col-md-3 mt-4">
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <defs>
                        <clipPath id="clip-path">
                            <rect id="Rectangle_14" data-name="Rectangle 14" width="38.156" height="18.632" fill="#060f3a"/>
                        </clipPath>
                    </defs>
                    <g id="Group_1164" data-name="Group 1164" transform="translate(-175 -4408)">
                        <g id="Group_1163" data-name="Group 1163" transform="translate(175 4408)">
                            <circle id="Ellipse_8" data-name="Ellipse 8" cx="25" cy="25" r="25" fill="#f82ffd"/>
                            <g id="Group_1162" data-name="Group 1162" transform="translate(6.098 15.86)">
                                <g id="Group_6" data-name="Group 6" transform="translate(0 0)" clipPath="url(#clip-path)">
                                    <path id="Path_8" data-name="Path 8" d="M9.464,18.632A9.506,9.506,0,0,1,2.653,15.95,9.335,9.335,0,0,1,0,9.265C.007,3.822,4.885.081,9.436,0a9.357,9.357,0,0,1,5.393,1.515,1.622,1.622,0,1,1-1.785,2.709,6.144,6.144,0,0,0-3.551-.979C6.541,3.3,3.249,5.784,3.244,9.269a6.117,6.117,0,0,0,1.7,4.388,6.21,6.21,0,0,0,4.515,1.73c4.747,0,6.451-3.238,8.424-6.988C19.959,4.462,22.307,0,28.55,0h.142A9.508,9.508,0,0,1,35.5,2.681a9.338,9.338,0,0,1,2.653,6.686c-.007,5.443-4.885,9.184-9.436,9.263a9.581,9.581,0,0,1-5.074-1.314,1.622,1.622,0,1,1,1.668-2.783,6.241,6.241,0,0,0,3.349.853c2.952-.052,6.244-2.538,6.248-6.024a6.121,6.121,0,0,0-1.7-4.389,6.211,6.211,0,0,0-4.515-1.73H28.55c-4.077,0-5.617,2.533-7.791,6.666-2.045,3.886-4.59,8.722-11.3,8.722" transform="translate(0 0)" fill="#060f3a"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="col-12 col-md-1">

            </div>

            <div className="col-12 col-md-3">
                <p className="footerHeading">About</p>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">At a glance</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">More features</a></li>
                </ul>
            </div>

            <div className="col-12 col-md-3">
                <p className="footerHeading">Get started</p>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Log in</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Sign up</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Contact</a></li>
                </ul>
            </div>

            <div className="col-12 col-md-2">
                <p className="footerHeading">Follow us</p>
                <div>
                    <Image width={10.35} src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/images/Icons/FacebookPink.svg" alt="facebook icon" />
                    <Image style={{marginLeft: "20px"}} width={19.33}  src="s3://smoovey-assets/images/Icons/LinkedInPink.svg" alt="linkedin icon" />
                </div>
            </div>
        </footer>
    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Smoovey" />

export default IndexPage
