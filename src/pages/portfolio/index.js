import { getAllPages } from "../../../lib/portfolio"

import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import PageWrapper from "components/PageWrapper"
// import PortfolioCard from "components/PortfolioCard"
import PostCard from "components/postCard"
import Link from 'components/Link'

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

const Portfolio = ({ allPages }) => {
  return (
    <Layout>
      <SEO title="All Portfolio Pages" />
      <PageWrapper>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">
          Portfolio
        </h1>
        {allPages.map(page => {
          console.log({page})
          const title = page.title || page.slug
          let url = `/portfolio/${page.slug}`
          const { links, image, description } = page

          const { source, web } = links[0]
          return (
            <div className="md:flex md:items-center md:justify-between last:border-b-0 border-gray-600 border-solid border-b-2 py-8">
              <img src={`/images/${image}`} alt="" className={`flex-grow`} width="400" />
              <div className={`mt-6 md:mt-0 md:w-1/2 lg:w-3/5 md:px-4`}>
                <h3 className="font-semibold text-2xl"><Link to={url}>{title}</Link></h3>
                {description}
                <ul className="md:flex md:flex-wrap">
                  {web && <ProjectLink link={web}>Web</ProjectLink>}
                  {source && <ProjectLink link={source}>Source</ProjectLink>}
                </ul>
              </div>
            </div>
          )
        })}
      </PageWrapper>
    </Layout>
  )
}

async function getStaticProps() {
  const allPages = getAllPages(['slug', 'title', 'date', 'description', 'links', 'image'])
  return {
    props: { allPages },
  }
}

export { Portfolio as default, getStaticProps }
