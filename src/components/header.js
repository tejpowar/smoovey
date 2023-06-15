import * as React from "react"
import {Link} from "gatsby"

const Header = () => (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className="container-fluid">
                <span className="w-100 d-lg-none d-block">
                </span>
                <a className="logo" href="/">
                    <img className="smoovey-logo" alt="smoovey logo"
                         src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/Assets/Logos/Logo+1.svg" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main-navbar"
                        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto flex-nowrap">
                    <li className="nav-item">
                        <a href="#" className="nav-link m-2 menu-item nav-active navBarHeading">At a glance</a>
                    </li>
                    <li className="nav-item">
                        <a href="#faqs_hyperlink" className="nav-link m-2 menu-item navBarHeading">FAQ's</a>
                    </li>
                    <li className="nav-item">
                        <Link href="https://app.smoovey.com/Login" className="nav-link m-2 menu-item navButtonFilled navBarHeading">Login</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/signUp" className="nav-link m-2 menu-item navButtonClear navBarHeading">Signup</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header
