import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./production-history.module.scss"
import AOSImage from "../components/aos-image";
import BirthdayPartyImage from "../components/birthday-party-image";

const ProductionHistoryPage = () => (
  <Layout>
    <SEO title="Production History" />
    <h1>Production History</h1>
    <p><em>"Well, you know what they say... 'all roads lead to...'"</em></p>
    <p><em>"...what? All roads lead to what?"</em></p>
    <h3>December 14th, 2018 - Immersive Reading at Arts on Site</h3>
    <p>
       In 2018, <a href="https://www.facebook.com/experiencerebis/">Rebis Immersive</a> produced a script-in-hand, one-night-only performance of
       <em> Rooftops</em> at Arts on Site. The production was directed by <a href="http://asiagagnon.virb.com/">Asia Gagnon</a> and set at a children's birthday party.
    </p>
    <BirthdayPartyImage />
    <ul className={style.castList}>
       <li>
         Romulus - <a href="https://www.imdb.com/name/nm6928501/">Brian Morabito</a>
       </li>
       <li>
         Remus - <a href="https://twitter.com/thomascmost">Thomas Constantine Moore</a>
       </li>
       <li>
         Hersilia - <a href="https://www.alexisgfloyd.com/">Alexis Floyd</a>
       </li>
    </ul>
    <hr/>
    <h3>November 18th, 2018 - Excerpt performed at Arts on Site Performance Party</h3>
    <p>
       <a href="http://asiagagnon.virb.com/">Asia Gagnon</a> directed a brief excerpt of Act 1 in November, 2018.
    </p>
    <AOSImage />
    <ul className={style.castList}>
       <li>
         Romulus - <a href="https://www.imdb.com/name/nm6928501/">Brian Morabito</a>
       </li>
       <li>
         Remus - <a href="https://www.imdb.com/name/nm3596600/">Brian Muller</a>
       </li>
    </ul>
    <hr/>
  </Layout>
)

export default ProductionHistoryPage
