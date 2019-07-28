import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>

      <nav>
        <Link to="/" activeClassName="selected">
          Home
        </Link>
        <Link to="/about/" activeClassName="selected">
          About
        </Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
