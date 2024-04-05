import React from "react"
import Link from "./Link"

const PostCard = ({ title, to, date, description, readingTime }) => {
  const formattedDateString = new Date(date).toLocaleString([], {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
  const dateParts = formattedDateString.split(', ')
  console.log(dateParts)
  return (
    <div className="postcard">
      <div className="date" title={date}>
        <div className="day-month">
          <date>{dateParts[0]}</date>
        </div>
        <div className="year">
          <date>{dateParts[1]}</date>
        </div>
      </div>
      <div className="details">
        <Link to={to}>{title}</Link>
        <small>{readingTime}</small>
        <p dangerouslySetInnerHTML={{
          __html: description,
        }}
        />
      </div>
    </div>
  )
}

export default PostCard
