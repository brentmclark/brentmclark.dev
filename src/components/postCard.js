import React from 'react'
import Link from './Link'

const PostCard = ({title, to, date, description}) => {
  return (
    <div className={`border-gray-200 border-solid border-b m-0 py-4`}>
      <Link to={to} className={`block text-xl font-bold tracking-wide leading-relaxed`}>{title}</Link>
      <small className={`my-2 block`}>{date}</small>
      <p
        className={`opacity-75 leading-relaxed`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

export default PostCard