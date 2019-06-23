import React from "react"

import Layout from "../components/layout"
import FeaturedImage from "../components/featured-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <FeaturedImage />
    </div>
    {/* <h1>Romans</h1> */}
    <p>
      <em>
         "Are you a citizen or a senator?
         They will tell you that you can be both. They are lying."
      </em>
    </p>
    <p>
      <em>Romans </em> is a three-actor immersive cage match on the nature of citizenship and our relationship to the state.
       Set simultaneously in 753 BC and a desolate wasteland following the collapse of modern civilization,
       Rome's founders are thrown into conflict over their past and future legacy.
       The legendary twins use the audience as supporters, props,
       and counterpoints in their battle for control over a nation that does not yet exist and the wife of their most ferocious general,
       whose self-sovereign agenda ultimately throws all their best laid plans into chaos.
    </p>
    <p>
      <em>Romans </em> is written by <a href="https://www.twitter.com/thomascmost">Thomas Constantine Moore</a>.
    </p>
  </Layout>
)

export default IndexPage
