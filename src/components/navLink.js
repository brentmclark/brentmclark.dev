import React from "react"
import Link from "./Link"

const NavLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

export default NavLink
