import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import SideNav from "./sideNav"
import FeatherIcons from "feather-icons-react"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {


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
      <main id={`main`} className="min-h-screen w-screen w-1/4  xl:w-3/4 h-auto transition-transform duration-500 ease-in" >
        {/*header*/}
        <div className="sticky z-50 w-full h-auto flex py-0 px-0 bg-gray-900 justify-between items-center xl:hidden">
          <p className="ml-3 text-white text-bold text-sm font-bold tracking-wide">Brent Clark</p>

          {/*toggle button*/}
          <div onClick={handleMenuClick} className="bg-blue-600 flex items-center justify-center h-10 w-12 p-auto cursor-pointer">
            <FeatherIcons icon={`menu`} color={`white`}/>
          </div>
        </div>


        <section className="bg-gray-300">{children}</section>

        {/*footer*/}
        <section className="text-gray-200 w-full bg-gray-900 py-10 px-4 md:px-12 lg:px-16 xl:px-24 text-center md:text-left md:flex items-center">
          <p className="m-0 tracking-wider text-xs opacity-30 mb-4 md:mb-0">&copy; Brent Clark 2019</p>
          <p className="hidden md:block md:mx-4">|</p>
          <p className="m-0 tracking-wider text-xs opacity-30">Developed by <a style={{color: '#00baba'}} href="https://coleruche.com">Emeruche Cole</a></p>
        </section>
      </main>


      <section id={`side_nav`} className={`min-w- top-0 right-0 left-full translate-x-full xl:left-auto fixed h-screen w-4/5 md:w-2/5 lg:w-1/3 xl:w-1/4 bg-blue-600 transition-transform duration-500 ease-in`}>
        <SideNav/>
      </section>
    </div>
  )
}

export default Layout
