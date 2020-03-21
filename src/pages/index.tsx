import React from "react"

import Layout from "../components/layout"
import FeaturedImage from "../components/featured-image"
import SEO from "../components/seo"
import ZinequestImage from "../components/zinequest-image"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <FeaturedImage />
    </div>
    {/* <h1>Rooftops</h1> */}
    <p>
      <em>Rooftops </em> is a superheroic <em>Powered by the Apocalypse</em> tabletop roleplaying game where actions have consequences and ideas are more important than numbers.
    </p>
    <p>
      You are playing <em>Rooftops</em> because you want to play a hero:
      an individual who wants to make the world a better place by thwarting the efforts of those who would take advantage of good people that can’t defend themselves.
      A hero has powers or skills which allow them to do what others would consider impossible.
    </p>
    <p>
      <em>Rooftops </em> is written by Darren Caulley & Thomas Moore
    </p>
  </Layout>
)

export default IndexPage
