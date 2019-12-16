import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./navigation-bar.module.scss"

const NavigationBar = ({ siteTitle = '' }) => (
  <nav className={style.navigation}>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <Link to="/intro/">Intro</Link>
      <Link to="/gameplay/">Gameplay</Link>
      <Link to="/download/">Download</Link>
    </div>
  </nav>
);

export default NavigationBar;
