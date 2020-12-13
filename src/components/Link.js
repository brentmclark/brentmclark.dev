import React from "react"
import NextLink from "next/link"

const Link = ({ to, children, className }) => {
  console.log({ to })
  return (
    <NextLink className={className} href={to}>
      {children}
    </NextLink>
  )
}

export default Link
