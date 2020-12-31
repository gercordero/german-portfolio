import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteTitle: title
        twitterUsername
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    author,
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      {/* Author meta */}
      <meta name="author" content={author} />
      {/* Url meta */}
      <meta name="url" property="og:url" content={siteUrl} />
      {/* Type meta */}
      <meta name="type" property="og:type" content="article" />
      {/* Title meta */}
      <meta
        name="title"
        property="og:title"
        content={`${title} | ${siteTitle}`}
      />
      {/* Description meta */}
      <meta
        name="description"
        property="og:description"
        content={description || siteDesc}
      />
      {/* Image meta */}
      <meta name="image" property="og:image" content={`${siteUrl}${image}`} />
      {/* Facebook meta */}
      <meta name="fb:app_id" property="fb:app_id" content="1542065056004604" />
      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
