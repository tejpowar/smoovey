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
       <Helmet>
           {/*<link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=block" rel="stylesheet" />*/}
           {/*<link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&display=block" rel="stylesheet" />*/}
           {/*<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=block" rel="stylesheet" />*/}
       </Helmet>
      <Navbar />
      <div className="container-fluid">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
