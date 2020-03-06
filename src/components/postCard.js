import React from 'react'
import Link from './Link'

const PostCard = ({title, to, date, description, readingTime}) => {
  return (
    <div className={`last:border-b-0 border-gray-600 border-solid border-b-2 m-0 py-4`}>
      <Link to={to} className={`block text-2xl font-bold tracking-normal md:text-3xl leading-relaxed`}>{title}</Link>
      <small className={`font-bold opacity-75 text-gray-700 my-2 block md:text-lg`}>{date}</small>
      <small className={`font-bold opacity-75 text-gray-700 my-2 block text-sm`}>{readingTime}</small>
      <p
        className={`opacity-75 leading-relaxed text-gray-700 md:text-xl`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

export default PostCard