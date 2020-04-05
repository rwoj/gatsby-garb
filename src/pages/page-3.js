import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => {
  const imageMetadata = useStaticQuery(getImageData)

  return (
    <Layout>
      <h1> hello from page 3</h1>
      <h3>Image File Data</h3>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size of Image</th>
            <th>Extension</th>
            <th>Birth Time</th>
          </tr>
        </thead>
        <tbody>
          {imageMetadata.allFile.edges.map(({ node }, i) => (
            <tr key={i}>
              <td>{node.relativePath}</td>
              <td>{node.size}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}
