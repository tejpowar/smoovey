import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <div className="container-fluid">
              <Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                      aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="main-navbar">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                      <li className="nav-item">
                          <ExactNavLink
                              to="/"
                          >
                              Home
                          </ExactNavLink>
                      </li>
                      <li className="nav-item">
                          <ExactNavLink
                              to="/about"
                          >
                              About
                          </ExactNavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
)

export default Header
