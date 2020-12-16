import React from "react"
import NextLink from "next/link"

const Link = ({ to, children, className }) => {
  return (
    <NextLink href={to}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link
