import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data: post }) => (
  <Layout>
    <h3>{post.markdownRemark.frontmatter.title}</h3>
    <h4>
      {post.markdownRemark.timeToRead}{" "}
      {post.markdownRemark.timeToRead > 1 ? "minutes" : "minute"}
    </h4>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
