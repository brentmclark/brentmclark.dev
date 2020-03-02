import React from 'react'
import FeatherIcon from "feather-icons-react"

const SocialIcon = ({src, profile}) => {
  let alt = `icon for ${profile} profile`
  return <img src={src} alt={alt} className="w-6 h-6 m-2 text-gray-100"/>
}

export default SocialIcon