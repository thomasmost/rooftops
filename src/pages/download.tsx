import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import style from "./production-history.module.scss"
// import AOSImage from "../components/aos-image";

const DownloadPage = () => (
  <Layout>
    <SEO title="DownloadPage" />
    <h1>Download</h1>
    <article>
      <p>
        The current Quickplay Guide is on <strong>version 1</strong>.
      </p>
      <p>
        <a href="https://my.pcloud.com/publink/show?code=XZkuQDkZBILaaorFEu02JFp5rF5vvzwPljuy">
          Download it now
        </a>
        <span> and begin your adventure...</span>
      </p>
    </article>
  </Layout>
);

export default DownloadPage;
