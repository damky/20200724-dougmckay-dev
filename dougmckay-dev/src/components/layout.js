/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          style={{
            fontFamily: `Avenir Next, Helvetica`,
          }}
        >
          {children}
        </main>
      </div>
      {() => {
        let prevScrollpos = window.pageYOffset
        window.onscroll = function () {
          let currentScrollPos = window.pageYOffset
          if (prevScrollpos >= currentScrollPos) {
            document.querySelector("header").classList.add("up")
            document.querySelector("header").classList.remove("down")
          } else {
            document.querySelector("header").classList.add("down")
            document.querySelector("header").classList.remove("up")
          }
        }
      }}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
