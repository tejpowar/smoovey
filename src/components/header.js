import * as React from "react"
import {Link} from "gatsby"

const Header = () => (
    <header className="header">
        <nav class="navbar navbar-expand-lg navbar-light header">
            <div class="container-fluid">
                <span class="w-100 d-lg-none d-block">
                </span>
                <a class="logo" href="/">
                    <img class="smoovey-logo"
                         src="https://smoovey-assets.s3.eu-west-1.amazonaws.com/Assets/Logos/Logo+1.svg" />
                </a>
                <div class="w-100">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main-navbar"
                            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto flex-nowrap">
                    <li class="nav-item">
                        <a href="#" class="nav-link m-2 menu-item nav-active navBarHeading">At a glance</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-2 menu-item navBarHeading">FAQ's</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-2 menu-item navButtonFilled navBarHeading">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link m-2 menu-item navButtonClear navBarHeading">Signup</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header
