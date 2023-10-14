/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Smoovey landlord`,
    description: `Helping you stay compliant on your rental properties. Let us do the hard work for you`,
    author: `Smoovey`,
    siteUrl: `https://www.smoovey.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dongle`,
          `Poppins`

          // `source dongle\:300,400,400i,700`,
          // `source Poppins\:300,400,400i,700`,
        ],
        display: 'block'
      }
//https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=block
      // https://fonts.googleapis.com/css?family=Source+dongle:300,400,400i,700|Source+Poppins:300,400,400i,700&display=block

    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Smoovey`,
        short_name: `Smoovey`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logos/Logo-3.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
