module.exports = {
  siteMetadata: {
    title: `Doug McKay`,
    description: `Seeking opportunities to build high quality interactive websites showcasing UI/UX. Continue my growth as a software developer, utilizing my skill for troubleshooting to solve complex problems.  Help others achieve their potential and accomplish goals. Work with open, hopeful, optimistic teams. Manage teams and projects that are challenging, exciting, and fulfilling.`,
    author: `@_damky_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `doug-mckay-resume`,
        short_name: `dougmckay`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/damky-monogram.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
