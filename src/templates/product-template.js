import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => {
  //   console.log(contentfulProduct, location.pathname)
  return (
    <Layout>
      <div style={{ marginLeft: "0 auto", width: "100%", textAlign: "center" }}>
        <h2>
          {contentfulProduct.name}{" "}
          <span style={{ color: "#ccc" }}>
            Added on {contentfulProduct.createdAt}
          </span>
        </h2>
        <h4>{contentfulProduct.price}</h4>
        <p>{contentfulProduct.description}</p>
        <button
          style={{
            background: "darkorange",
            color: "white",
            padding: "0,3em",
            borderRadius: "5px",
          }}
          className="snipcart-add-item"
          data-item-id={contentfulProduct.slug}
          data-item-price={contentfulProduct.price}
          data-item-image={contentfulProduct.image.file.url}
          data-item-name={contentfulProduct.name}
          data-item-url={location.pathname}
        >
          Add to card
        </button>
        <Img
          style={{ margin: "0 auto", maxWidth: "400px" }}
          fluid={contentfulProduct.image.fluid}
        />
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      slug
      name
      price
      description
      createdAt(formatString: "MMMM Do, YYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`
export default ProductTemplate
