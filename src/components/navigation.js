import * as React from "react"
import PropTypes from "prop-types"
const Navbar = () => {
    return (
        <div className="container-fluid header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex flex-grow-1">
                    <button className="navbar-toggler toggle" data-bs-toggle="collapse" data-bs-target="#smoovey-navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="smoovey-logo mt-2" href="/">
                        <img className="smoovey-image" src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/Assets/Logos/Logo+1.svg" alt="smoovey logo"/>
                    </a>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="smoovey-navbar">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                        <li className="nav-item">
                            <a href="#at_a_glance_hyperlink" className="nav-link m-2 menu-item nav-active navBarHeading">At a glance</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faqs_hyperlink" className="nav-link m-2 menu-item navBarHeading">FAQ's</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://app.smoovey.com/Login" className="nav-link m-2 menu-item navButtonFilled navBarHeading">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://app.smoovey.com/signup" className="nav-link m-2 menu-item navButtonClear navBarHeading">Signup</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}

export default Navbar
