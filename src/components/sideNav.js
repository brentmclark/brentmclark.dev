import React from "react"
import NavLink from "./navLink"
import Link from "./link"

const SideNav = () => {
  return (
    <div
      className={`flex w-full h-full pt-6 pb-12 md:pb-6 flex-col items-center justify-between text-center`}
    >
      <div className={`w-full`}>
        <header>
          <img
            src="/profile-photo.jpg"
            alt="profile photo of Brent Clark"
            className={`border-gray-200 border-solid border-2 h-32 w-32 rounded-full mx-auto`}
          />
          <Link
            to={"/"}
            className="nav-link nav-link--menu tracking-wide text-2xl lg:text-3xl font-semibold no-underline"
          >
            Brent Clark
          </Link>
          <p className={`text-sm lg:text-base italic font-thin mt-2`}>
            Software Engineer
          </p>
        </header>

        <nav className={`w-full mt-4`}>
          <ul className="first:border-t-0 w-full">
            <li
              className={`w-full border-white text-gray-300 border-solid border-b m-0 py-4`}
            >
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li
              className={`w-full border-white text-gray-300 border-solid border-b m-0 py-4`}
            >
              <NavLink to={`/portfolio`}>Portfolio</NavLink>
            </li>
            <li
              className={`w-full border-white text-gray-300 border-solid border-b m-0 py-4`}
            >
              <NavLink to={`/blog`}>Blog</NavLink>
            </li>
            <li className={`w-full m-0 py-4 text-gray-300`}>
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <footer className="flex justify-center items-center w-full">
        <a
          href="https://github.com/brentmclark"
          className={`mx-2`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <i className="fab fa-github opacity-50 hover:opacity-100 text-gray-100 text-lg md:text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/brentclarkit/"
          className={`mx-2`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <i className="fab fa-linkedin-in opacity-50 hover:opacity-100 text-gray-100 text-lg md:text-xl"></i>
        </a>
        <a
          href="https://twitter.com/brent_m_clark"
          className={`mx-2`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <i className="fab fa-twitter opacity-50 hover:opacity-100 text-gray-100 text-lg md:text-xl"></i>
        </a>
      </footer>
    </div>
  )
}

export default SideNav
