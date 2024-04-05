import React from "react"
import NavLink from "./navLink"
import Link from "./Link"

const SideNav = () => {
  return (
    <div>
      <div>
        <header>
          <img src="/profile-photo.jpg" alt="profile photo of Brent M. Clark" />
          <Link to="/">Brent M. Clark</Link>
          <p>Software Engineer</p>
        </header>
        <div id="socials">
          <a
            href="https://github.com/brentmclark"
            className={`mx-2`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brentclarkit/"
            className={`mx-2`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://twitter.com/brent_m_clark"
            className={`mx-2`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            {/* <li><NavLink to="/portfolio">Portfolio</NavLink></li> */}
          </ul>
        </nav>
      </div>

      
    </div>
  )
}

export default SideNav
