import { graphql } from "gatsby"
import React from "react"

export default ({ data }) => {
  console.log(data)
  return <div>Hello world!</div>
}

export const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            works {
              image
              imageSharp {
                childImageSharp {
                  fluid(srcSetBreakpoints: [640, 1024, 1440, 1820]) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              name
            }
          }
        }
      }
    }
  }
`
