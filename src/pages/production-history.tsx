import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductionHistoryPage = () => (
  <Layout>
    <SEO title="Production History" />
    <h1>Production History</h1>
    <p>Where have the Romans been?</p>
    <h3>Immersive Reading at Arts on Site</h3>
    <p>
       In 2018, Rebis Immersive produced a script-in-hand, one-night-only performance of
       <em> Romans.</em>
    </p>
    <Link to="/">Return</Link>
  </Layout>
)

export default ProductionHistoryPage
