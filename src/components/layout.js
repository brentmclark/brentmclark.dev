import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import SideNav from "./sideNav"
import FeatherIcons from "feather-icons-react"

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

  const initStyle = {
    left: '0px'
  }

  const [sidebarIsOpen, setSideBarIsOpen] = useState(false)
  const [style, setStyle] = useState(initStyle)

  const _get = (id) => document.getElementById(id)



  const handleMenuClick = () => {
    setSideBarIsOpen(!sidebarIsOpen);

    const main = _get('main')
    const sideBar = _get('side_nav')
    const sideBarWidth = sideBar.offsetWidth
    console.log(sideBarWidth, main)

    sideBar.classList.toggle('left-auto')
    sideBar.classList.toggle('translate-x-full')
    sideBar.style.transform = sidebarIsOpen === false ? `translateX(-${sideBarWidth}px)` : 'translateX(0)'


    // let newStyle = {left: ``}

    // main.style.left = sidebarIsOpen === false ? `-${sideBarWidth}px` : '0'
    main.style.transform = sidebarIsOpen === false ? `translateX(-${sideBarWidth}px)` : 'translateX(0)'

  }


  return (
    <div className="overflow-hidden">
      <Helmet>
        <script src="https://kit.fontawesome.com/e72acf541f.js" crossOrigin="anonymous"></script>
      </Helmet>
      <main id={`main`} className="w-screen w-1/4 relative xl:w-3/4 h-auto bg-green-100 transition-all duration-1000 ease-in" >
        {/*header*/}
        <div className="fixed w-full h-auto flex py-0 px-0 bg-gray-900 justify-between items-center xl:hidden">
          <p className="ml-3 text-white text-bold text-sm font-extrabold tracking-wide">Brent Clark</p>

          {/*toggle button*/}
          <div onClick={handleMenuClick} className="bg-blue-600 flex items-center justify-center h-10 w-12 p-auto cursor-pointer">
            <FeatherIcons icon={`menu`} color={`white`}/>
          </div>
        </div>


        <h2>Main</h2>

        {/*footer*/}
        <section className="mt-64 w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
        <section className="mt-64 w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
        <section className="mt-64 w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
        <section className="mt-64 w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
        <section className="mt-64 w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
        <section className="mt-64 w-full bg-gray-900 py-10 px-4">
          <p className="m-0 ml-24 text-gray-200 tracking-wider text-sm opacity-30">Brent Clark</p>
        </section>
      </main>
      <section id={`side_nav`} className={`top-0 right-0 left-full translate-x-full xl:left-auto fixed h-screen w-64 md:w-2/5 lg:w-1/3 xl:w-1/4 bg-blue-600  transition-all duration-1000 ease-in`}>
        <SideNav/>
      </section>
    </div>
  )
}

export default Layout
