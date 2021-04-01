import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <section id="header">
    <label id="mobile-nav">
      <input type="checkbox" />
      <span className="menu">
        <span className="hamburger"></span>
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2/">About</Link>
        </li>
        <li>
          <Link to="/using-typescript/">Contact</Link>
        </li>
      </ul>
    </label>
    <ul id="main-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page-2/">About</Link>
      </li>
      <li>
        <Link to="/using-typescript/">Contact</Link>
      </li>
    </ul>
  </section>
)

export default Header
