import React from 'react'
import {Link} from 'gatsby'

const NavLink = ({ to, children }) => {
  return <Link className={`m-0 text-sm md:text-md tracking-wider text-white`} to={to}>{children}</Link>
}

export default NavLink