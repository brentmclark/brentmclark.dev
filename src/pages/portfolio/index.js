import { getAllPages } from "../../../lib/portfolio"

import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import PageWrapper from "components/PageWrapper"
// import PortfolioCard from "components/PortfolioCard"
import PostCard from "components/postCard"

const Portfolio = ({ allPages }) => {
  return (
    <Layout>
      <SEO title="All Portfolio Pages" />
      <PageWrapper>
        <h1 className="text-blue-600 text-4xl mb-6 font-semibold md:text-5xl">
          Portfolio
        </h1>
        {allPages.map(page => {
          const title = page.title || page.slug
          let url = `/portfolio/${page.slug}`

          return (
            <PostCard
              key={page.slug}
              to={url}
              title={title}
              description={page.description}
              date={page.date}
            />
          )
        })}
      </PageWrapper>
    </Layout>
  )
}

async function getStaticProps() {
  const allPages = getAllPages(["slug", "title", "date", "description"])
  return {
    props: { allPages },
  }
}

export { Portfolio as default, getStaticProps }
