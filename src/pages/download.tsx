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
      <p><span>Play the game by </span>
        <a href="http://filedn.com/lLL0lkOxLkGHJoHpDELDETb/Rooftops/RooftopsQuickplay_v1.pdf">
          downloading now!
        </a>
      </p>
    </article>
  </Layout>
);

export default DownloadPage;
