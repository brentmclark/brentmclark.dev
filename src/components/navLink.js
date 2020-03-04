  import React from 'react'
  import {Link} from 'gatsby'

const NavLink = ({ to, children }) => {
  return <Link className={`hover:text-gray-200 w-full block m-0 text-xs md:text-sm lg:text-md tracking-wider text-white`} to={to}>{children}</Link>
}

export default NavLink