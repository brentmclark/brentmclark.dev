import fs from "fs"
import path from "path"

import React from "react"
import {serialize} from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote'
import matter from "gray-matter"

import { getAllPages } from "../../../lib/portfolio"
import Layout from "components/layout"
import PageWrapper from "components/PageWrapper"
import SEO from "components/seo"
import SyntaxHighlighter from "components/SyntaxHighlighter"

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

const components = {
  pre: props => <div {...props} />,
  code: props => <SyntaxHighlighter {...props} />,
  ul: props => <ul {...props} className="list-disc list-inside"></ul>,
  ol: props => <ol {...props} className="list-decimallist-inside"></ol>,
}

const PortfolioCard = props => {
  const { body, frontMatter } = props
  if (body == null) {
    return <div>Loading</div>
  }

  const { image, title, description, links } = frontMatter
  const { app_store, google_play, source, web } = links[0]

  const formattedArticleDate = new Date(frontMatter.date).toLocaleString([], {
    dateStyle: "long",
    timeStyle: "short",
  })

  return (
    <Layout>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description || frontMatter.excerpt}
      />
      <PageWrapper>
        {/* <div className="md:flex md:items-center md:justify-between last:border-b-0 border-gray-600 border-solid border-b-2 py-8"> */}
        <img src={`/images/${image}`} alt="" className={`flex-grow`} />
        <div className={`mt-6 md:mt-0 md:w-1/2 lg:w-3/5 md:px-4`}>
          <h3 className="font-semibold text-2xl">{title}</h3>
          <main className={`leading-relaxed mt-10`} id="blog-container">
            <MDXRemote {...body} components={components} />
          </main>
          <ul className="md:flex md:flex-wrap">
            {app_store && <ProjectLink link={app_store}>App Store</ProjectLink>}
            {google_play && (
              <ProjectLink link={google_play}>Google Play</ProjectLink>
            )}
            {web && <ProjectLink link={web}>Web</ProjectLink>}
            {source && <ProjectLink link={source}>Source</ProjectLink>}
          </ul>
        </div>
        {/* </div> */}
      </PageWrapper>
    </Layout>
  )
}

async function getStaticPaths() {
  const pages = getAllPages(["slug"])
  return {
    paths: pages.map(page => ({ params: { page: page.slug } })),
    fallback: false,
  }
}

async function getStaticProps(context) {
  const { params } = context

  const pagePath = path.join(
    process.cwd(),
    `content/portfolio/${params.page}.mdx`
  )
  const page = fs.readFileSync(pagePath)
  const { content, data } = matter(page)
  const mdxSource = await serialize(content)
  return {
    props: { body: mdxSource, frontMatter: data },
  }
}

export { PortfolioCard as default, getStaticPaths, getStaticProps }
