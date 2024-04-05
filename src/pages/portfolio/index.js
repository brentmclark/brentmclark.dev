import { getAllPages } from "../../../lib/portfolio"

import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import PageWrapper from "components/PageWrapper"
import Link from "components/Link"

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
        <h1>Portfolio</h1>
        {allPages.map(page => {
          const title = page.title || page.slug
          let url = `/portfolio/${page.slug}`
          const { links, image, description } = page

          const { source, web } = links[0]
          return (
            <div>
              <img
                src={`/images/${image}`}
                alt=""
                className={`flex-grow`}
                width="400"
              />
              <div>
                <h3><Link to={url}>{title}</Link></h3>
                {description}
                <ul>
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
  const allPages = getAllPages([
    "slug",
    "title",
    "date",
    "description",
    "links",
    "image",
  ])
  return {
    props: { allPages },
  }
}

export { Portfolio as default, getStaticProps }
