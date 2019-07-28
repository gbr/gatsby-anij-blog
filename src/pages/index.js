import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.site.siteMetadata.title}</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # allMarkdownRemark {
    #   totalCount
    #   edges {
    #     node {
    #       id
    #       frontmatter {
    #         title
    #         date(formatString: "DD MMMM, YYYY")
    #       }
    #       excerpt
    #     }
    #   }
    # }
  }
`
