require('dotenv').config()
const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `Rodrigo Adão`,
    position: 'Desenvolvedor Web',
    description: `A blog about frontend development and other cool stuff`,
    author: `@RodrigoAdao`,
    siteUrl: `https://rodrigoadao.netlify.app/`
    //siteUrl: `https://rodrigoadao.com.br`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, `gatsby-transformer-sharp`,`gatsby-plugin-sharp`,
     `gatsby-plugin-styled-components`,`gatsby-plugin-transition-link`,
     // Needs to be the first to work with gatsby-remark-images
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
      path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunckSize: 10000,
        settings: {

        },
        enablePartialUpdates: true,
        matchFields: ['slug', 'modified']
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rodrigo Adão`,
        short_name: `Rodrigo Adão`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
