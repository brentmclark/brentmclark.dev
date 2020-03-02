import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import SideNav from "./sideNav"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className="lg:flex">
      <Helmet>
        <script src="https://kit.fontawesome.com/e72acf541f.js" crossOrigin="anonymous"></script>
      </Helmet>
      <main className="w-3/4 h-10 bg-green-100">Main</main>
      <section className={`h-screen w-1/4 bg-blue-600`}>
        <SideNav/>
      </section>
    </div>
  )
}

export default Layout
