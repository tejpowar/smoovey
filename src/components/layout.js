/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet';

import Navbar from "./navigation";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"
                   integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ"
                   crossOrigin="anonymous" />
       </Helmet>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '1440px',
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        {/*<footer*/}
        {/*  style={{*/}
        {/*    marginTop: `var(--space-5)`,*/}
        {/*    fontSize: `var(--font-sm)`,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  © {new Date().getFullYear()} &middot; Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.com">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  )
}

export default Layout
