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
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      {/* Url meta */}
      <meta property="og:url" content={siteUrl} />
      {/* Type meta */}
      <meta property="og:type" content="article" />
      {/* Title meta */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      {/* Description meta */}
      <meta property="og:description" content={description || siteDesc} />
      {/* Image meta */}
      <meta property="og:image" content={`${siteUrl}${image}`} />
      {/* Facebook meta */}
      <meta property="fb:app_id" content="1542065056004604" />
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
