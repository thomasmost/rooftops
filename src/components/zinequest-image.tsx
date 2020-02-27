import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ZinequestImage = () => (
  <StaticQuery
    query={graphql`
      query {
        activeImage: file(relativePath: { eq: "ZineQuest_2020_Kickstarter.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        placeholderImage: file(relativePath: { eq: "ZineQuest_2020_Kickstarter_bw.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
    <a 
      className="ks"
      href="https://www.kickstarter.com/projects/1303651095/rooftops-the-world-is-watching-a-superhero-rpg?ref=rooftops.city">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <Img className='color' fluid={data.activeImage.childImageSharp.fluid} />
    </a>)
    }
  />
)
export default ZinequestImage
