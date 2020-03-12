import React from "react"
import Img from "gatsby-image"


const ProjectLink = ({children, link}) => {
  return (
    <a href={link} className="w-full md:w-auto block text-center text-white hover:text-white rounded p-4 text-sm font-semibold bg-blue-600 hover:bg-blue-700 mt-4 md:my-2 md:mr-2">{children}</a>
  )
}

const PortfolioCard = ({ image, title, description, links }) => {

  console.log(links)
  const { app_store, google_play, source, web } = links[0]
  console.log(app_store)
  return (
    <div
      className="md:flex md:items-center md:justify-between last:border-b-0 border-gray-600 border-solid border-b-2 py-8">
      <Img sizes={image} alt="" className={`flex-grow`}/>
      <div className={`mt-6 md:mt-0 md:w-1/2 md:px-4`}>
        <h3 className="text-blue-600 font-semibold text-2xl">{title}</h3>
        <p className="my-4 text-gray-800 opacity-75 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}/>
        <div className="md:flex md:flex-wrap">
          {app_store && <ProjectLink link={app_store}>App Store</ProjectLink>}
          {google_play && <ProjectLink link={google_play}>Google Play</ProjectLink>}
          {web && <ProjectLink link={web}>Web</ProjectLink>}
          {source && <ProjectLink link={source}>Source</ProjectLink>}
          </div>
      </div>
    </div>
  )
}



export default PortfolioCard
