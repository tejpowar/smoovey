/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Helmet from 'react-helmet';

import Navbar from "./navigation";


const Layout = ({ children }) => {
  return (
    <>
       <Helmet>
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet"
                 integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF"
                 crossOrigin="anonymous" />
           <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
           <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap" rel="stylesheet" />
           <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&display=swap" rel="stylesheet" />
           <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
       </Helmet>
      <Navbar />
      <div className="container-fluid"
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
