/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Helmet from 'react-helmet';
import { Script } from "gatsby"
import "../styles/styles.css"

import Navbar from "./navigation";


const Layout = ({ children }) => {
  return (
    <>
      <Helmet />
      <Navbar />
      <div className="container-fluid">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
