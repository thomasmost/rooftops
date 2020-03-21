import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DownloadPage = () => (
  <Layout>
    <SEO title="DownloadPage" />
    <h1>Download</h1>
    <article>
      <p>
        The current Quickplay Guide is on <strong>version 3</strong>.
        It includes an abridged summary of the <strong>rules</strong>,
        an out of the box <strong>adventure</strong> that you can play with zero prep time,
        and 4 archetypes and 4 powersets for your players to choose from.
      </p>
      <p>
        <a href="https://my.pcloud.com/publink/show?code=XZdb5nkZHiTfHrgdQwuG4NFnNagsNyDR4SAX">
          Download it now
        </a>
        <span> and begin your adventure...</span>
      </p>
      <p>
         <strong>Note that some of the sheets in this quickplay have been altered to get people up and running fast. </strong>
         If you have any questions, email us at <a href="mailto:hello@rooftops.city">hello@rooftops.city</a>.
      </p>
    </article>
  </Layout>
);

export default DownloadPage;
