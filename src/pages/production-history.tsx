import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductionHistoryPage = () => (
  <Layout>
    <SEO title="Production History" />
    <h1>Production History</h1>
    <p><em>"It’s just not very exciting, is it? Concrete?"</em></p>
    <p><em>"But wait’ll you see what we can make out of it!"</em></p>
    <h3>December 14th, 2018 - Immersive Reading at Arts on Site</h3>
    <p>
       In 2018, Rebis Immersive produced a script-in-hand, one-night-only performance of
       <em> Romans</em> at Arts on Site. The production was directed by Asia Gagnon and set at a children's birthday party.
    </p>
    <ul>
       <li>
         Romulus - Brian Morabito
       </li>
       <li>
         Remus - Thomas Moore
       </li>
       <li>
         Hersilia - Alexis Floyd
       </li>
    </ul>
  </Layout>
)

export default ProductionHistoryPage
