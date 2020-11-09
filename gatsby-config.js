require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "German Cordero Portfolio",
    description:
      "A web portfolio for showing German Cordero's project and experience",
    author: "@ger.cordero",
    twitterUsername: "@gercorderok",
    image: "/twitter-image.png",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
      },
    },
  ],
}
