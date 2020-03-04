import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

const Link = ({ to, children }) => {
  return <GatsbyLink className={`text-blue-600 underline hover:no-underline`} to={to}>{children}</GatsbyLink>
}

export default Link