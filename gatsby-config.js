/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        omitPrismicScript: true,
        repositoryName: `issue-03152020`,
      },
    },
  ],
}
