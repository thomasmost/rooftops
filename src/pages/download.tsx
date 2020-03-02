import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DownloadPage = () => (
  <Layout>
    <SEO title="DownloadPage" />
    <h1>Download</h1>
    <article>
      <p>
        The current Quickplay Guide is on <strong>version 2</strong>.
      </p>
      <p>
        <a href="https://my.pcloud.com/publink/show?code=XZd3C1kZxa2GazJw3KH1C8W8qnk9ypL2A2aX">
          Download it now
        </a>
        <span> and begin your adventure...</span>
      </p>
      <p>
         <strong>Note that some of the sheets in this quickplay have been altered to get people up and running fast.</strong>
         If you have any questions, contact us through our <a href="https://www.kickstarter.com/projects/1303651095/rooftops-the-world-is-watching-a-superhero-rpg">Kickstarter campaign!</a>
      </p>
    </article>
  </Layout>
);

export default DownloadPage;
