import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

const Link = ({ to, children, className }) => {
  return <GatsbyLink className={className} to={to}>{children}</GatsbyLink>
}

export default Link