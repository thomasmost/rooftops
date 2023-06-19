import { Link } from "gatsby"
import React from "react"
import "./navigation-bar.module.scss"

const NavigationBar = ({ siteTitle = '' }) => (
  <nav className={"navigation"}>
    <div>
      <h1>
        <Link className="first-letter" to="/">
          R
        </Link>
        <Link className="full-title" to="/">
          {siteTitle}
        </Link>
      </h1>
      <Link to="/intro/">
        <span className="material-icons">info</span>
        <span className="link-text">Intro</span>
      </Link>
      <Link to="/gameplay/">
        <span className="material-icons">videogame_asset</span>
        <span className="link-text">Gameplay</span>
      </Link>
      <Link to="/download/">
        <span className="material-icons">cloud_download</span>
        <span className="link-text">Download</span>
      </Link>
    </div>
  </nav>
);

export default NavigationBar;
