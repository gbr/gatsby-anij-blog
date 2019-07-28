import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.site.siteMetadata.title}</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div className="blog-posts" key={node.id}>
        <h3>{node.frontmatter.title} </h3>
        <p>{node.frontmatter.excerpt}</p>
       <Link
              to={node.fields.slug}>
                <p className="read-more">Read more ></p>
              </Link>
      </div>
    ))}
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
           allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             totalCount
             edges {
               node {
                 id
                 frontmatter {
                   title
                   date(formatString: "DD MMMM, YYYY")
                   excerpt
                 }
                 fields {
                   slug
                 }
               }
             }
           }
         }
       `
