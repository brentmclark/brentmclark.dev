import React from "react"
import NextLink from "next/link"

const Link = ({ to, children, className }) => {
  return (
    <NextLink href={to} className={className}>
      {children}
    </NextLink>
  );
}

export default Link
