import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div className="post">
      <Img
        style={{ marginBottom: "60px" }}
        fluid={data.aboutImg.childImageSharp.fluid}
      />
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    aboutImg: file(relativePath: { eq: "pages/uploads/about.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
