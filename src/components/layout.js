import React from "react"
import Head from "next/head"
import SideNav from "./sideNav"
import FeatherIcon from "feather-icons-react"

const Layout = ({ children, ...rest }) => {
  const handleMenuClick = (e) => {
    document.getElementById('main').classList.toggle('sidenav--isopen')
  }

  return (
    <div className="layout" {...rest}>
      <Head>
        <script
          src="https://kit.fontawesome.com/e72acf541f.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <main id="main">
        <div id="focus">
          <header id="header">
            <img src="/profile-photo.jpg" alt="profile photo of Brent M. Clark" />
            <h4 id="header-text">Brent M. Clark</h4>
            <div id="socials">
              <a
                href="https://github.com/brentmclark"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <FeatherIcon icon="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/brentclarkit/"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <FeatherIcon icon="linkedin" />
              </a>
              <a
                href="https://twitter.com/brent_m_clark"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <FeatherIcon icon="twitter" />
              </a>
            </div>
            {/* <div id="nav-toggle" onClick={handleMenuClick}>
              <FeatherIcon icon={`menu`} color={`white`} />
            </div> */}
          </header>
          <section id="content">{children}</section>
        </div>
        {/* <section id="side_nav">
          <SideNav />
        </section> */}
      </main>
      <footer id="footer">
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
      
    </div>
  )
}

export default Layout
