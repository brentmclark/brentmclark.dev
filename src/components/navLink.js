import React from "react"
import Link from "./link"

const NavLink = ({ to, children }) => {
  return (
    <Link
      className={`nav-link nav-link--menu w-full block m-0 text-sm md:text-base lg:text-md tracking-wider`}
      to={to}
    >
      {children}
    </Link>
  )
}

export default NavLink
