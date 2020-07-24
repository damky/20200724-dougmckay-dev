import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      borderBottom: `solid 2px #000000`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexFlow: `row wrap`,
      }}
    >
      <Link
        to="/"
        style={{
          flex: `0 0 100px`,
        }}
      >
        <Image />
      </Link>
      <h1
        style={{
          margin: `0`,
          flex: `0 0 calc(100% - 120px)`,
          paddingLeft: `20px`,
          fontFamily: `Avenir Next, helvetica`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#606060`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <br />
        <small
          style={{
            fontSize: `.4em`,
            fontWeight: `normal`,
          }}
        >
          <span>(208) 419-6001 | </span>
          <span>dougmckay.dev | </span>
          <Link to="info@dougmckay.dev">info@dougmckay.dev</Link>
          <span> | </span>
          <span>17230 SW Whitley Way, Beaverton OR 97006</span>
        </small>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
