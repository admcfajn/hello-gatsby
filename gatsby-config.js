// var proxy = require("http-proxy-middleware")

module.exports = {

  siteMetadata: {
    title: `awesome-sauce Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],

  // pathPrefix: `/blog`,
  // polyfill: false, // https://www.gatsbyjs.org/docs/browser-support/#polyfills

  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": "",
  //       },
  //     })
  //   )
  // },

  // plugins: [
  //   `gatsby-plugin-react-helmet`,
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: `docs`,
  //       path: `${__dirname}/../docs/`,
  //     },
  //   },
  // ],
  //
  // mapping: {
  //   "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  // },
  //
  // siteMetadata: {
  //   title: `Gatsby`,
  //   siteUrl: `https://www.gatsbyjs.org`,
  //   description: `Blazing fast modern site generator for React`,
  // },


}
