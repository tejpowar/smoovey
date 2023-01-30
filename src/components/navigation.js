import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
    <Link getProps={isActive} {...props} />
)

const Navbar = () => {
    return (
        <div className="container header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex flex-grow-1">
                    <span className="w-100 d-lg-none d-block">
                    </span>
                    <a className="smoovey-logo" href="/">
                        <img src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/Assets/Logos/Logo+1.svg" />
                    </a>
                    <div className="w-100 text-right">
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#smoovey-navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="smoovey-navbar">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                        <li className="nav-item">
                            <a href="#" className="nav-link m-2 menu-item nav-active navBarHeading">At a glance</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link m-2 menu-item navBarHeading">FAQ's</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link m-2 menu-item navButtonFilled navBarHeading">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link m-2 menu-item navButtonClear navBarHeading">Signup</a>
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
