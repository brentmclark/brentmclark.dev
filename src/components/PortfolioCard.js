import React from "react"

const ProjectLink = ({ children, link }) => {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="nofollow noreferrer"
        className="button button--primary w-full md:w-auto block text-center rounded py-3 px-6 text-base font-semibold mt-4 md:my-2 md:mr-2"
      >
        {children}
      </a>
    </li>
  )
}

const PortfolioCard = ({ image, title, description, links }) => {
  const { app_store, google_play, source, web } = links[0]
  return (
    <div className="md:flex md:items-center md:justify-between last:border-b-0 border-gray-600 border-solid border-b-2 py-8">
      <Img sizes={image} alt="" className={`flex-grow`} />
      <div className={`mt-6 md:mt-0 md:w-1/2 lg:w-3/5 md:px-4`}>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <MDXRenderer className="my-4 text-gray-800 opacity-75 leading-relaxed">
          {description}
        </MDXRenderer>
        <ul className="md:flex md:flex-wrap">
          {app_store && <ProjectLink link={app_store}>App Store</ProjectLink>}
          {google_play && (
            <ProjectLink link={google_play}>Google Play</ProjectLink>
          )}
          {web && <ProjectLink link={web}>Web</ProjectLink>}
          {source && <ProjectLink link={source}>Source</ProjectLink>}
        </ul>
      </div>
    </div>
  )
}

export default PortfolioCard
