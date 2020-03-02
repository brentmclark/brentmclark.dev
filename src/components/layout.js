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
    <div className="">
      <Helmet>
        <script src="https://kit.fontawesome.com/e72acf541f.js" crossOrigin="anonymous"></script>
      </Helmet>
      <main className="w-screen xl:w-3/4 h-auto bg-green-100">
        <h2>Main</h2>

        {/*footer*/}
        <section className="w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
      </main>
      <section className={`top-0 right-0 left-full xl:left-suto fixed h-screen w-1/4 bg-blue-600`}>
        <SideNav/>
      </section>
    </div>
  )
}

export default Layout
