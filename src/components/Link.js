import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

const Link = ({ to, children, className }) => {
  console.log(className)
  return <GatsbyLink className={`text-blue-600 no-underline hover:underline ${className}`} to={to}>{children}</GatsbyLink>
}

export default Link